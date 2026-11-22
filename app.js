/* USSESS \u2014 logica condivisa: catalogo, carrello persistente, PayPal. */

/* ====== DA COMPILARE ====== */
// Client ID "Live" dell'app REST PayPal (developer.paypal.com > Apps & Credentials). \u00C8 pubblico: si pu\u00F2 mettere qui.
// NON inserire mai il "Secret".
var PAYPAL = { clientId: "Ae2LPyAlxgUn3PJZfyAwYVsBwMZPGYbpwoxs5gL36o4RRGqJjtVcZihbSmNdMq2zvoap8NKodMxvpkzI", currency: "EUR" };

// Catalogo. price = prezzo attuale in euro; was = prezzo d'origine (barrato), facoltativo.
// colors = colorazioni: c = nome colore (in inglese), img = foto, stock = pezzi disponibili, sw = [colore montatura, colore lente] per il pallino.
// Quando un pezzo viene venduto: abbassa lo stock di quella colorazione (0 = esaurito).
// fit = foto indossata (facoltativa). Per sospendere un modello spostalo tra i SOSPESI.
var PRODUCTS = [
  { id: "alien-berlin",   name: "Alien Berlin",   price: 39.90, colors: [{ c: null, img: "p/alien-berlin.jpg", stock: 1 }] },
  { id: "bones-2",        name: "Bones 2",        price: 33.90, colors: [{ c: null, img: "p/bones-2.jpg", stock: 1 }] },
  { id: "bruxelles-base", name: "Bruxelles Base", price: 22.90, was: 29.90, colors: [{ c: null, img: "p/bruxelles-base.jpg", stock: 1 }] },
  { id: "virginia",       name: "Virginia",       price: 33.90, fit: "p/virginia-fit.jpg", colors: [
      { c: "Gold / Brown",    img: "p/virginia-gold.jpg",     stock: 1, sw: ["#c8a96b", "#7a4f2a"] },
      { c: "Black / Green",   img: "p/virginia-black.jpg",    stock: 1, sw: ["#1a1a1a", "#3f5a45"] },
      { c: "Gunmetal / Grey", img: "p/virginia-gunmetal.jpg", stock: 1, sw: ["#5d5f63", "#2e2f32"] } ] },
  { id: "square-rider",   name: "Square Rider",   price: 33.90, colors: [
      { c: "Black",   img: "p/square-rider-black.jpg",   stock: 1, sw: ["#121212", "#3a3a3a"] },
      { c: "Caramel", img: "p/square-rider-caramel.jpg", stock: 1, sw: ["#8b4a24", "#4a5a48"] } ] },
  { id: "main-milan",     name: "Main Milan",     price: 33.90, colors: [
      { c: "Red",        img: "p/main-milan-red.jpg",  stock: 1, sw: ["#b3121c", "#2f2f2f"] },
      { c: "Grey",       img: "p/main-milan-grey.jpg", stock: 1, sw: ["#9b989a", "#d9d9d9"] },
      { c: "Aquamarine", img: "p/main-milan-aqua.jpg", stock: 1, sw: ["#b9d1c6", "#c9a79a"] } ] },
  { id: "berlin-base",    name: "Berlin Base",    price: 19.90, was: 24.90, colors: [{ c: null, img: "p/berlin-base.jpg", stock: 1 }] },
  { id: "tron",           name: "Tron",           price: 33.90, colors: [{ c: null, img: "p/cycle.jpg", stock: 1 }] },
  { id: "disco-cycle",    name: "Disco Cycle",    price: 19.90, was: 24.90, colors: [{ c: null, img: "p/disco-cycle.jpg", stock: 1 }] },
  { id: "london-rider",   name: "London Rider",   price: 29.90, colors: [{ c: null, img: "p/enzo-line.jpg", stock: 1 }] }
];
// SOSPESI: { id: "bones", name: "Bones", price: null, colors: [{ c: null, img: "p/bones.jpg", stock: 0 }] }
var VISIBLE = 3; // quanti modelli a vista prima del "+"

// Spedizione: gratis in Italia; in Europa gratis da europeFreeFrom in su, altrimenti costa "europe" (euro). null = non ancora definito.
var SHIPPING = { italy: 0, europe: null, europeFreeFrom: 59.99 };

// true = negozio aperto (carrello e PayPal). false = solo vetrina: prodotti e prezzi, niente acquisto.
var SHOP_OPEN = true;

// Statistiche visite: token di Cloudflare Web Analytics (gratuito, senza cookie). Vuoto = disattivato.
var ANALYTICS = { cloudflareToken: "" };

// Effetto 3D dei prodotti (oscillazione lenta). false = foto ferme.
var SWING = false;
/* ========================== */

var KEY = "ussess_cart_v2";
var memCart = [];
function readCart(){ try { var v = JSON.parse(localStorage.getItem(KEY) || "[]"); return Array.isArray(v) ? v : []; } catch(e){ return memCart; } }
function writeCart(c){ memCart = c; try { localStorage.setItem(KEY, JSON.stringify(c)); } catch(e){} updateBadge(); }
function product(id){ for (var i=0;i<PRODUCTS.length;i++) if (PRODUCTS[i].id===id) return PRODUCTS[i]; return null; }
function color(p, ci){ return p.colors[ci] || null; }
function eur(n){ return n==null ? "\u2014" : "\u20AC " + (Math.round(n*100)/100).toFixed(2).replace(".", ","); }
function count(){ return readCart().reduce(function(s,i){ return s+i.qty; }, 0); }
function inCart(id, ci){ var q = 0; readCart().forEach(function(i){ if (i.id===id && i.ci===ci) q += i.qty; }); return q; }
function left(p, ci){ var v = color(p, ci); return v ? Math.max(0, v.stock - inCart(p.id, ci)) : 0; }
function soldOut(p){ return p.colors.every(function(v){ return v.stock <= 0; }); }
function itemName(p, ci){ var v = color(p, ci); return p.name + (v && v.c ? " \u2014 " + v.c : ""); }

function addToCart(id, ci){
  var p = product(id); if (!p || left(p, ci) <= 0) return false;
  var c = readCart(), f = null;
  c.forEach(function(i){ if (i.id===id && i.ci===ci) f=i; });
  if (f) f.qty++; else c.push({ id:id, ci:ci, qty:1 });
  writeCart(c); return true;
}
function updateBadge(){
  var b = document.getElementById("badge"); if (!b) return;
  var n = count(); b.textContent = n; b.hidden = n===0;
}

/* menu */
function openMenu(){ document.getElementById("drawer").classList.add("open"); document.getElementById("overlay").classList.add("show"); }
function closeMenu(){ document.getElementById("drawer").classList.remove("open"); document.getElementById("overlay").classList.remove("show"); }

/* ---------- CATALOGO (home) ---------- */
function firstAvail(p){ for (var k=0;k<p.colors.length;k++) if (p.colors[k].stock > 0) return k; return 0; }
function cardHTML(p){
  var ci = firstAvail(p), v = p.colors[ci], h = "";
  h += '<div class="thumb"><img src="'+v.img+'" alt="'+itemName(p, ci)+'" loading="lazy">' +
       (p.fit ? '<button type="button" class="fitbtn" aria-label="Foto indossata">Fit</button>' : '') + '</div>';
  if (p.colors.length > 1) {
    h += '<div class="swatches">';
    p.colors.forEach(function(x, k){
      h += '<button type="button" class="sw'+(k===ci?' on':'')+(x.stock<=0?' out':'')+'" data-ci="'+k+'" aria-label="'+x.c+'" title="'+x.c+'" style="--f:'+x.sw[0]+';--l:'+x.sw[1]+'"></button>';
    });
    h += '</div>';
  }
  h += '<div class="meta"><span class="name">'+p.name+'</span>' +
       (p.colors.length > 1 ? '<span class="cname">'+v.c+'</span>' : '') +
       '<span class="price">'+(p.was ? '<s>'+eur(p.was)+'</s> ' : '')+'<b>'+eur(p.price)+'</b></span></div>';
  if (SHOP_OPEN) h += '<button class="add" type="button" data-id="'+p.id+'">Aggiungi<span class="long"> al carrello</span></button>';
  else if (soldOut(p)) h += '<span class="soldout">Esaurito</span>';
  return h;
}
function setColor(card, p, ci){
  var v = p.colors[ci]; card.setAttribute("data-ci", ci); card.classList.remove("fit-on");
  var img = card.querySelector(".thumb img"); img.src = v.img; img.alt = itemName(p, ci);
  card.querySelectorAll(".sw").forEach(function(s){ s.classList.toggle("on", +s.getAttribute("data-ci")===ci); });
  var cn = card.querySelector(".cname"); if (cn) cn.textContent = v.c;
  var fb = card.querySelector(".fitbtn"); if (fb) fb.classList.remove("on");
  refreshAdd(card, p);
}
function refreshAdd(card, p){
  var b = card.querySelector(".add"); if (!b) return;
  var ci = +card.getAttribute("data-ci"), ok = left(p, ci) > 0;
  b.disabled = !ok;
  b.innerHTML = ok ? 'Aggiungi<span class="long"> al carrello</span>' : (color(p, ci).stock <= 0 ? "Esaurito" : "Nel carrello");
}
function renderCatalog(){
  var grid = document.getElementById("grid"); if (!grid) return;
  if (SWING) document.documentElement.classList.add("swing");
  var more = document.createElement("div"); more.id = "more"; more.hidden = true; more.style.display = "contents";
  PRODUCTS.forEach(function(p, i){
    var a = document.createElement("article"); a.className = "card"; a.setAttribute("data-id", p.id); a.setAttribute("data-ci", firstAvail(p));
    a.style.setProperty("--d", (-(i * 1.3) % 7) + "s");
    a.innerHTML = cardHTML(p);
    (i < VISIBLE ? grid : more).appendChild(a);
    refreshAdd(a, p);
  });
  grid.appendChild(more);
  var all = grid.querySelectorAll(".card"), last = all[all.length-1], n = all.length;
  if (n > VISIBLE && n % 3 === 1) last.classList.add("solo");
  document.getElementById("count").textContent = PRODUCTS.length + " modelli";
  grid.addEventListener("click", function(e){
    var card = e.target.closest(".card"); if (!card) return;
    var p = product(card.getAttribute("data-id"));
    var sw = e.target.closest(".sw"); if (sw) { setColor(card, p, +sw.getAttribute("data-ci")); return; }
    var fb = e.target.closest(".fitbtn");
    if (fb) { var on = !card.classList.contains("fit-on"); card.classList.toggle("fit-on", on); fb.classList.toggle("on", on);
      var img = card.querySelector(".thumb img"), ci = +card.getAttribute("data-ci");
      img.src = on ? p.fit : p.colors[ci].img; return; }
    var b = e.target.closest(".add"); if (!b || b.disabled) return;
    if (addToCart(p.id, +card.getAttribute("data-ci"))) {
      b.classList.add("done"); b.textContent = "Aggiunto \u2713";
      setTimeout(function(){ b.classList.remove("done"); refreshAdd(card, p); }, 1400);
    }
  });
  if (!SHOP_OPEN) { var w = document.querySelector(".more-wrap");
    if (w) w.insertAdjacentHTML("afterend", '<p class="vetrina-note">Shop online in arrivo. Per ordinare scrivici: <a href="contatti.html">Contatti</a></p>'); }
  var btn = document.getElementById("moreBtn"), lbl = document.getElementById("moreLabel");
  if (PRODUCTS.length <= VISIBLE && btn) { btn.parentNode.hidden = true; }
  if (btn) btn.addEventListener("click", function(){
    var open = more.hidden; more.hidden = !open; grid.classList.toggle("collapsed", !open);
    btn.textContent = open ? "\u2212" : "+"; lbl.textContent = open ? "Mostra meno" : "Mostra tutto";
  });
}

/* banda loghi in movimento */
function ticker(){
  var t = document.getElementById("ticker"); if (!t) return;
  var u = "", k; for (k = 0; k < 7; k++) u += '<img src="u-black.png" alt="" class="' + (k === 0 || k === 6 ? "" : "mid") + '" style="transform:translateZ(' + ((k - 3) * 0.6) + 'px)">';
  var one = "", i; for (i = 0; i < 10; i++) one += '<img class="lg" src="logo-black.png" alt=""><span class="u3d-wrap"><span class="u3d">' + u + '</span></span>';
  t.innerHTML = '<div class="ticker-set">' + one + '</div><div class="ticker-set">' + one + '</div>';
}

/* logo in alto: render 3D che gira */
function logo3d(){
  var img = document.querySelector(".logo-link .logo-img"); if (!img) return;
  var w = document.createElement("span"); w.className = "logo3d-wrap";
  var h = '<span class="logo3d">', k;
  for (k = 0; k < 7; k++) h += '<img src="logo.png" alt="' + (k === 0 ? "USSESS" : "") + '" class="' + (k === 0 || k === 6 ? "" : "mid") + '" style="transform:translateZ(' + ((k - 3) * 0.55) + 'px)">';
  w.innerHTML = h + "</span>";
  img.parentNode.replaceChild(w, img);
}

/* statistiche visite (Cloudflare Web Analytics, senza cookie) */
function analytics(){
  if (!ANALYTICS.cloudflareToken || location.protocol === "file:") return;
  var s = document.createElement("script"); s.defer = true;
  s.src = "https://static.cloudflareinsights.com/beacon.min.js";
  s.setAttribute("data-cf-beacon", JSON.stringify({ token: ANALYTICS.cloudflareToken }));
  document.head.appendChild(s);
}

/* video hero: rispetta chi ha ridotto le animazioni */
function heroVideo(){
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  ["heroVideo","bwVideo"].forEach(function(id){
    var v = document.getElementById(id); if (!v) return;
    /* se il video AI non c'è ancora, ripiega sul video b/n */
    if (id === "heroVideo") {
      var fallback = function(){ if (v.getAttribute("src") !== "hero.mp4") { v.setAttribute("poster","hero-poster.jpg"); v.src = "hero.mp4"; if (!reduce) v.play().catch(function(){}); } };
      v.addEventListener("error", fallback, true);
      if (v.error) fallback();
    }
    if (reduce) { v.removeAttribute("autoplay"); v.pause(); return; }
    var p = v.play(); if (p && p.catch) p.catch(function(){});
  });
}

/* ---------- CARRELLO ---------- */
function renderCart(){
  var box = document.getElementById("items"); if (!box) return;
  var c = readCart().filter(function(i){ var p = product(i.id); return p && color(p, i.ci); });
  // non superare lo stock disponibile
  c.forEach(function(i){ var v = color(product(i.id), i.ci); i.qty = Math.min(i.qty, Math.max(0, v.stock)); });
  c = c.filter(function(i){ return i.qty > 0; });
  box.innerHTML = "";
  var total = 0, missing = false, n = 0;
  c.forEach(function(i){
    var p = product(i.id), v = color(p, i.ci); n += i.qty;
    if (p.price == null) missing = true; else total += p.price * i.qty;
    var full = i.qty >= v.stock;
    var row = document.createElement("div"); row.className = "item";
    row.innerHTML = '<div class="thumb"><img src="'+v.img+'" alt="'+itemName(p, i.ci)+'"></div>' +
      '<div class="info"><div class="nm">'+p.name+'</div><div class="vr">'+(v.c || "Occhiali da sole")+'</div>' +
      '<div class="qty"><button type="button" data-a="dec" data-id="'+p.id+'" data-ci="'+i.ci+'" aria-label="Diminuisci">&minus;</button><span>'+i.qty+'</span>' +
      '<button type="button" data-a="inc" data-id="'+p.id+'" data-ci="'+i.ci+'" aria-label="Aumenta"'+(full?' disabled':'')+'>+</button></div>' +
      (full ? '<div class="last">Ultimo pezzo</div>' : '') + '</div>' +
      '<div class="right"><div class="pr">'+(p.price==null ? "\u2014" : eur(p.price*i.qty))+'</div>' +
      '<button class="rm" type="button" data-a="rm" data-id="'+p.id+'" data-ci="'+i.ci+'">Rimuovi</button></div>';
    box.appendChild(row);
  });
  var empty = c.length === 0;
  document.getElementById("empty").hidden = !empty;
  document.getElementById("summary").hidden = empty;
  document.getElementById("pay").hidden = empty;
  document.getElementById("sub").textContent = n + (n===1 ? " articolo" : " articoli");
  var dest = readDest(), sel = document.getElementById("dest"); if (sel) sel.value = dest;
  var ship = null;
  if (!missing) ship = dest === "it" ? SHIPPING.italy : (total >= SHIPPING.europeFreeFrom ? 0 : SHIPPING.europe);
  var shipMissing = !missing && ship == null;
  document.getElementById("ship").textContent = missing ? "\u2014" : (ship == null ? "da definire" : (ship === 0 ? "Gratuita" : eur(ship)));
  document.getElementById("subtotal").textContent = missing ? "\u2014" : eur(total);
  document.getElementById("total").textContent = (missing || shipMissing) ? "\u2014" : eur(total + ship);
  setupPay(empty ? null : { total: total, ship: ship || 0, missing: missing || shipMissing, items: c });
}
var DKEY = "ussess_dest_v1", memDest = "it";
function readDest(){ try { return localStorage.getItem(DKEY) || "it"; } catch(e){ return memDest; } }
function cartClicks(){
  var box = document.getElementById("items"); if (!box) return;
  var sel = document.getElementById("dest");
  if (sel) sel.addEventListener("change", function(){ memDest = sel.value; try { localStorage.setItem(DKEY, sel.value); } catch(e){} renderCart(); });
  box.addEventListener("click", function(e){
    var b = e.target.closest("button[data-a]"); if (!b) return;
    var id = b.getAttribute("data-id"), ci = +b.getAttribute("data-ci"), a = b.getAttribute("data-a"), c = readCart();
    c = c.map(function(i){ if (i.id===id && i.ci===ci){ var v = color(product(id), ci);
           if (a==="inc") i.qty = Math.min(v.stock, i.qty+1); if (a==="dec") i.qty = Math.max(1, i.qty-1); } return i; })
         .filter(function(i){ return !(a==="rm" && i.id===id && i.ci===ci); });
    writeCart(c); renderCart();
  });
}

/* ---------- PAYPAL ---------- */
var sdkState = "idle", lastOrder = null;
function payNote(t){ var n = document.getElementById("payNote"); if (n) n.textContent = t; }
function setupPay(order){
  var slot = document.getElementById("paypal-buttons"); if (!slot) return;
  lastOrder = order;
  slot.innerHTML = "";
  if (!order) return;
  if (order.missing){ payNote("Il pagamento si attiva quando prezzi e spedizione sono definiti."); return; }
  if (!PAYPAL.clientId){ payNote("Pagamento con PayPal in attivazione."); return; }
  payNote("Pagamento sicuro con PayPal o carta.");
  loadSdk(function(){ renderButtons(order); });
}
function loadSdk(cb){
  if (window.paypal) return cb();
  if (sdkState === "loading") return;
  sdkState = "loading";
  var s = document.createElement("script");
  s.src = "https://www.paypal.com/sdk/js?client-id=" + encodeURIComponent(PAYPAL.clientId) + "&currency=" + PAYPAL.currency + "&intent=capture";
  s.onload = function(){ sdkState = "ready"; if (lastOrder && !lastOrder.missing) renderButtons(lastOrder); };
  s.onerror = function(){ sdkState = "error"; payNote("PayPal non si carica in questa anteprima: funziona sul sito online (ussess.com)."); };
  document.head.appendChild(s);
}
function renderButtons(order){
  if (!window.paypal) return;
  var items = order.items.map(function(i){ var p = product(i.id);
    return { name: itemName(p, i.ci), quantity: String(i.qty), unit_amount: { currency_code: PAYPAL.currency, value: p.price.toFixed(2) } }; });
  var sub = order.total.toFixed(2), shp = order.ship.toFixed(2), tot = (order.total + order.ship).toFixed(2);
  window.paypal.Buttons({
    style: { layout: "vertical", color: "white", shape: "rect", label: "paypal" },
    createOrder: function(d, actions){
      return actions.order.create({ purchase_units: [{ description: "USSESS Eyewear", items: items,
        amount: { currency_code: PAYPAL.currency, value: tot, breakdown: { item_total: { currency_code: PAYPAL.currency, value: sub }, shipping: { currency_code: PAYPAL.currency, value: shp } } } }] });
    },
    onApprove: function(d, actions){
      return actions.order.capture().then(function(det){
        writeCart([]);
        document.querySelector(".page").innerHTML = '<h1>Grazie.</h1><p class="sub">Ordine ricevuto. Riceverai la conferma via email da PayPal.</p>' +
          '<p>Codice ordine: <strong>' + (det && det.id ? det.id : "") + '</strong></p><p><a class="btn" href="index.html">Torna al catalogo</a></p>';
      });
    },
    onError: function(){ payNote("Qualcosa non \u00E8 andato a buon fine con il pagamento. Riprova o scrivici dalla pagina Contatti."); }
  }).render("#paypal-buttons");
}

function copyText(id, btn){
  var t = document.getElementById(id).textContent.trim();
  function ok(){ btn.textContent = "Copiato"; setTimeout(function(){ btn.textContent = "Copia"; }, 1400); }
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(ok, function(){ sel(id); });
  else sel(id);
}
function sel(id){ var r = document.createRange(); r.selectNodeContents(document.getElementById(id)); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); }

document.addEventListener("DOMContentLoaded", function(){
  updateBadge(); logo3d(); ticker(); renderCatalog(); heroVideo(); renderCart(); cartClicks(); analytics();
  var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
});
