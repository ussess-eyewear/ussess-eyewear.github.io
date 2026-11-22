/* USSESS — logica condivisa: catalogo, carrello persistente, PayPal. */

/* ====== DA COMPILARE ====== */
// Client ID "Live" dell'app REST PayPal (developer.paypal.com > Apps & Credentials). È pubblico: si può mettere qui.
// NON inserire mai il "Secret".
var PAYPAL = { clientId: "", currency: "EUR" };

// Catalogo. price in euro (es. 120). null = prezzo non ancora definito.
var PRODUCTS = [
  { id: "alien-berlin",   name: "Alien Berlin",   img: "p/alien-berlin.jpg",   price: null },
  { id: "bones",          name: "Bones",          img: "p/bones.jpg",          price: null },
  { id: "berlin-base",    name: "Berlin Base",    img: "p/berlin-base.jpg",    price: null },
  { id: "bruxelles-base", name: "Bruxelles Base", img: "p/bruxelles-base.jpg", price: null },
  { id: "bones-2",        name: "Bones 2",        img: "p/bones-2.jpg",        price: null },
  { id: "cycle",          name: "Cycle",          img: "p/cycle.jpg",          price: null },
  { id: "disco-cycle",    name: "Disco Cycle",    img: "p/disco-cycle.jpg",    price: null },
  { id: "enzo-line",      name: "Enzo Line",      img: "p/enzo-line.jpg",      price: null }
];
var VISIBLE = 3; // quanti modelli a vista prima del "+"
/* ========================== */

var KEY = "ussess_cart_v1";
var memCart = [];
function readCart(){ try { var v = JSON.parse(localStorage.getItem(KEY) || "[]"); return Array.isArray(v) ? v : []; } catch(e){ return memCart; } }
function writeCart(c){ memCart = c; try { localStorage.setItem(KEY, JSON.stringify(c)); } catch(e){} updateBadge(); }
function product(id){ for (var i=0;i<PRODUCTS.length;i++) if (PRODUCTS[i].id===id) return PRODUCTS[i]; return null; }
function eur(n){ return n==null ? "—" : "€ " + (Math.round(n*100)/100).toFixed(2).replace(".", ","); }
function count(){ return readCart().reduce(function(s,i){ return s+i.qty; }, 0); }

function addToCart(id){
  var c = readCart(), f = null;
  c.forEach(function(i){ if (i.id===id) f=i; });
  if (f) f.qty++; else c.push({ id:id, qty:1 });
  writeCart(c);
}
function updateBadge(){
  var b = document.getElementById("badge"); if (!b) return;
  var n = count(); b.textContent = n; b.hidden = n===0;
}

/* menu */
function openMenu(){ document.getElementById("drawer").classList.add("open"); document.getElementById("overlay").classList.add("show"); }
function closeMenu(){ document.getElementById("drawer").classList.remove("open"); document.getElementById("overlay").classList.remove("show"); }

/* ---------- CATALOGO (home) ---------- */
function renderCatalog(){
  var grid = document.getElementById("grid"); if (!grid) return;
  var more = document.createElement("div"); more.id = "more"; more.hidden = true; more.style.display = "contents";
  PRODUCTS.forEach(function(p, i){
    var a = document.createElement("article"); a.className = "card";
    a.innerHTML = '<div class="thumb"><img src="'+p.img+'" alt="'+p.name+'" loading="lazy"></div>' +
      '<div class="meta"><span class="name">'+p.name+'</span><span class="price">'+eur(p.price)+'</span></div>' +
      '<button class="add" type="button" data-id="'+p.id+'">Aggiungi al carrello</button>';
    (i < VISIBLE ? grid : more).appendChild(a);
  });
  grid.appendChild(more);
  document.getElementById("count").textContent = PRODUCTS.length + " modelli";
  grid.addEventListener("click", function(e){
    var b = e.target.closest(".add"); if (!b) return;
    addToCart(b.getAttribute("data-id"));
    b.classList.add("done"); b.textContent = "Aggiunto ✓";
    setTimeout(function(){ b.classList.remove("done"); b.textContent = "Aggiungi al carrello"; }, 1400);
  });
  var btn = document.getElementById("moreBtn"), lbl = document.getElementById("moreLabel");
  if (PRODUCTS.length <= VISIBLE && btn) { btn.parentNode.hidden = true; }
  if (btn) btn.addEventListener("click", function(){
    var open = more.hidden; more.hidden = !open; grid.classList.toggle("collapsed", !open);
    btn.textContent = open ? "−" : "+"; lbl.textContent = open ? "Mostra meno" : "Mostra tutto";
  });
}

/* video hero: rispetta chi ha ridotto le animazioni */
function heroVideo(){
  var v = document.getElementById("heroVideo"); if (!v) return;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) { v.removeAttribute("autoplay"); v.pause(); return; }
  var p = v.play(); if (p && p.catch) p.catch(function(){});
}

/* ---------- CARRELLO ---------- */
function renderCart(){
  var box = document.getElementById("items"); if (!box) return;
  var c = readCart().filter(function(i){ return product(i.id); });
  box.innerHTML = "";
  var total = 0, missing = false, n = 0;
  c.forEach(function(i){
    var p = product(i.id); n += i.qty;
    if (p.price == null) missing = true; else total += p.price * i.qty;
    var row = document.createElement("div"); row.className = "item";
    row.innerHTML = '<div class="thumb"><img src="'+p.img+'" alt="'+p.name+'"></div>' +
      '<div class="info"><div class="nm">'+p.name+'</div><div class="vr">Occhiali da sole</div>' +
      '<div class="qty"><button type="button" data-a="dec" data-id="'+p.id+'" aria-label="Diminuisci">&minus;</button><span>'+i.qty+'</span>' +
      '<button type="button" data-a="inc" data-id="'+p.id+'" aria-label="Aumenta">+</button></div></div>' +
      '<div class="right"><div class="pr">'+(p.price==null ? "—" : eur(p.price*i.qty))+'</div>' +
      '<button class="rm" type="button" data-a="rm" data-id="'+p.id+'">Rimuovi</button></div>';
    box.appendChild(row);
  });
  var empty = c.length === 0;
  document.getElementById("empty").hidden = !empty;
  document.getElementById("summary").hidden = empty;
  document.getElementById("pay").hidden = empty;
  document.getElementById("sub").textContent = n + (n===1 ? " articolo" : " articoli");
  document.getElementById("subtotal").textContent = missing ? "—" : eur(total);
  document.getElementById("total").textContent = missing ? "—" : eur(total);
  setupPay(empty ? null : { total: total, missing: missing, items: c });
}
function cartClicks(){
  var box = document.getElementById("items"); if (!box) return;
  box.addEventListener("click", function(e){
    var b = e.target.closest("button[data-a]"); if (!b) return;
    var id = b.getAttribute("data-id"), a = b.getAttribute("data-a"), c = readCart();
    c = c.map(function(i){ if (i.id===id){ if (a==="inc") i.qty++; if (a==="dec") i.qty = Math.max(1, i.qty-1); } return i; })
         .filter(function(i){ return !(a==="rm" && i.id===id); });
    writeCart(c); renderCart();
  });
}

/* ---------- PAYPAL ---------- */
var sdkState = "idle";
function payNote(t){ var n = document.getElementById("payNote"); if (n) n.textContent = t; }
function setupPay(order){
  var slot = document.getElementById("paypal-buttons"); if (!slot) return;
  slot.innerHTML = "";
  if (!order) return;
  if (order.missing){ payNote("Il pagamento si attiva quando tutti i prezzi sono definiti."); return; }
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
  s.onload = function(){ sdkState = "ready"; cb(); };
  s.onerror = function(){ sdkState = "error"; payNote("PayPal non si carica in questa anteprima: funziona sul sito online (ussess.com)."); };
  document.head.appendChild(s);
}
function renderButtons(order){
  if (!window.paypal) return;
  var items = order.items.map(function(i){ var p = product(i.id);
    return { name: p.name, quantity: String(i.qty), unit_amount: { currency_code: PAYPAL.currency, value: p.price.toFixed(2) } }; });
  var tot = order.total.toFixed(2);
  window.paypal.Buttons({
    style: { layout: "vertical", color: "white", shape: "rect", label: "paypal" },
    createOrder: function(d, actions){
      return actions.order.create({ purchase_units: [{ description: "USSESS Eyewear", items: items,
        amount: { currency_code: PAYPAL.currency, value: tot, breakdown: { item_total: { currency_code: PAYPAL.currency, value: tot } } } }] });
    },
    onApprove: function(d, actions){
      return actions.order.capture().then(function(det){
        writeCart([]);
        document.querySelector(".page").innerHTML = '<h1>Grazie.</h1><p class="sub">Ordine ricevuto. Riceverai la conferma via email da PayPal.</p>' +
          '<p>Codice ordine: <strong>' + (det && det.id ? det.id : "") + '</strong></p><p><a class="btn" href="index.html">Torna al catalogo</a></p>';
      });
    },
    onError: function(){ payNote("Qualcosa non è andato a buon fine con il pagamento. Riprova o scrivici dalla pagina Contatti."); }
  }).render("#paypal-buttons");
}

/* ---------- RECESSO (due passaggi) ---------- */
function setupWithdraw(){
  var f = document.getElementById("wForm"); if (!f) return;
  f.addEventListener("submit", function(e){
    e.preventDefault();
    var d = new FormData(f);
    document.getElementById("wSummary").textContent =
      "Io sottoscritto/a " + d.get("nome") + " (" + d.get("email") + ") comunico il recesso dal contratto di vendita relativo all'ordine " +
      d.get("ordine") + " del " + d.get("data") + (d.get("note") ? ". Note: " + d.get("note") : "") + ".";
    document.getElementById("step1").hidden = true; document.getElementById("step2").hidden = false;
  });
  document.getElementById("wBack").addEventListener("click", function(){ document.getElementById("step2").hidden = true; document.getElementById("step1").hidden = false; });
  document.getElementById("wConfirm").addEventListener("click", function(){
    var to = document.getElementById("shopEmail").textContent.trim();
    var body = document.getElementById("wSummary").textContent;
    window.location.href = "mailto:" + to + "?subject=" + encodeURIComponent("Recesso dal contratto") + "&body=" + encodeURIComponent(body);
    document.getElementById("step2").hidden = true; document.getElementById("step3").hidden = false;
  });
}

function copyText(id, btn){
  var t = document.getElementById(id).textContent.trim();
  function ok(){ btn.textContent = "Copiato"; setTimeout(function(){ btn.textContent = "Copia"; }, 1400); }
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(ok, function(){ sel(id); });
  else sel(id);
}
function sel(id){ var r = document.createRange(); r.selectNodeContents(document.getElementById(id)); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); }

document.addEventListener("DOMContentLoaded", function(){
  updateBadge(); renderCatalog(); heroVideo(); renderCart(); cartClicks(); setupWithdraw();
  var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
});
