/* USSESS \u2014 logica condivisa (testi tradotti in i18n.js, funzione T): catalogo, carrello persistente, PayPal. */

/* ====== DA COMPILARE ====== */
// Client ID "Live" dell'app REST PayPal (developer.paypal.com > Apps & Credentials). \u00C8 pubblico: si pu\u00F2 mettere qui.
// NON inserire mai il "Secret".
var PAYPAL = { clientId: "BAAiBf5ThQSY0YJyS9Ze5pBfLH4M0Hcji7vmgEZtK2K6RVQ5OZHQsBo20iqkDR_EgowwY2JgwWs9LBAtvw", currency: "EUR" };

// Catalogo. price = prezzo attuale in euro; was = prezzo d'origine (barrato), facoltativo.
// colors = colorazioni: c = nome colore (in inglese), img = foto, stock = pezzi disponibili, sw = [colore montatura, colore lente] per il pallino.
// Quando un pezzo viene venduto: abbassa lo stock di quella colorazione (0 = esaurito).
// gallery = più foto della stessa colorazione, a scorrimento (facoltativa). fit = foto indossata (facoltativa). Per sospendere un modello spostalo tra i SOSPESI.
var PRODUCTS = [
  { id: "tron-26", name: "Tron 26", price: 33.90, preview: true, colors: [
      { c: "Black / Smoke", img: "p/tron-26-black.jpg", gallery: ["p/tron-26-black.jpg", "p/tron-26-black-45.jpg"], stock: 2, sw: ["#121212", "#3a3a3a"] },
      { c: "Brown / Smoke", img: "p/tron-26-brown.jpg", gallery: ["p/tron-26-brown.jpg", "p/tron-26-brown-45.jpg"], stock: 2, sw: ["#4a3226", "#3a3a3a"] },
      { c: "Orange / Smoke", img: "p/tron-26-orange.jpg", gallery: ["p/tron-26-orange.jpg", "p/tron-26-orange-45.jpg"], stock: 2, sw: ["#e0401e", "#3a3a3a"] },
      { c: "Transparent / Smoke", img: "p/tron-26-clear.jpg", gallery: ["p/tron-26-clear.jpg", "p/tron-26-clear-45.jpg"], stock: 2, sw: ["#e6eaee", "#3a3a3a"] } ] },
  { id: "goth-berlin", name: "Goth Berlin", price: 33.90, preview: true, colors: [
      { c: "Black / Smoke", img: "p/goth-berlin-black.jpg", gallery: ["p/goth-berlin-black.jpg", "p/goth-berlin-black-45.jpg"], stock: 2, sw: ["#121212", "#3a3a3a"] },
      { c: "Silver / Silver Mirror", img: "p/goth-berlin-silver.jpg", gallery: ["p/goth-berlin-silver.jpg", "p/goth-berlin-silver-45.jpg"], stock: 2, sw: ["#c9cbce", "#a9adb1"] },
      { c: "Orange / Gold Mirror", img: "p/goth-berlin-orange.jpg", gallery: ["p/goth-berlin-orange.jpg", "p/goth-berlin-orange-45.jpg"], stock: 2, sw: ["#e0601e", "#d6c21e"] },
      { c: "Red / Smoke", img: "p/goth-berlin-red.jpg", gallery: ["p/goth-berlin-red.jpg", "p/goth-berlin-red-45.jpg"], stock: 1, sw: ["#b3121c", "#3a3a3a"] } ] },
  { id: "tokyo-x", name: "Tokyo X", price: 39.90, colors: [
      { c: "Silver / Ice Blue Mirror", img: "p/tokyo-x-blue.jpg", gallery: ["p/tokyo-x-blue.jpg", "p/tokyo-x-blue-45.jpg"], stock: 1, sw: ["#b9b6ae", "#5cc8f0"] },
      { c: "Gunmetal / Orange Mirror", img: "p/tokyo-x-orange.jpg", gallery: ["p/tokyo-x-orange.jpg", "p/tokyo-x-orange-45.jpg"], stock: 2, sw: ["#5d5f63", "#f0541e"] },
      { c: "Black / Smoke", img: "p/tokyo-x-black.jpg", gallery: ["p/tokyo-x-black.jpg", "p/tokyo-x-black-45.jpg"], stock: 0, sw: ["#121212", "#3a3a3a"] },
      { c: "Silver / Pink Mirror", img: "p/tokyo-x-pink.jpg", gallery: ["p/tokyo-x-pink.jpg", "p/tokyo-x-pink-45.jpg"], stock: 0, sw: ["#b9b6ae", "#f08ad6"] } ] },
  { id: "nose-26", name: "Nose 26", price: 33.90, colors: [
      { c: "Black / Smoke", img: "p/nose-26-black.jpg", gallery: ["p/nose-26-black.jpg", "p/nose-26-black-45.jpg"], stock: 2, sw: ["#141414", "#4a4f56"] },
      { c: "Brown", img: "p/nose-26-brown.jpg", gallery: ["p/nose-26-brown.jpg", "p/nose-26-brown-45.jpg"], stock: 2, sw: ["#6b3f1f", "#8a5a2b"] } ] },
  { id: "racing-foam", name: "Racing Foam", price: 34.90, colors: [
      { c: "Black / Smoke", img: "p/racing-foam-black.jpg", gallery: ["p/racing-foam-black.jpg", "p/racing-foam-black-45.jpg"], stock: 0, sw: ["#141414", "#3a3a3a"] },
      { c: "Black / Yellow", img: "p/racing-foam-light-45.jpg", stock: 2, sw: ["#141414", "#e0c060"] },
      { c: "Black / Rainbow Mirror", img: "p/racing-foam-rainbow-45.jpg", stock: 1, sw: ["#141414", "#f07a5a"] },
      { c: "Lime / Rainbow Mirror", img: "p/racing-foam-lime-45.jpg", stock: 2, sw: ["#b5e61e", "#2aa0a0"] } ] },
  { id: "virginia-square", name: "Virginia Square", price: 45.90, preview: true, colors: [
      { c: "Black / Smoke", img: "p/virginia-square-black.jpg", gallery: ["p/virginia-square-black.jpg", "p/virginia-square-black-45.jpg"], stock: 2, sw: ["#141414", "#3a3a3a"] },
      { c: "Silver / Clear", img: "p/virginia-square-silver.jpg", gallery: ["p/virginia-square-silver.jpg", "p/virginia-square-silver-45.jpg"], stock: 2, sw: ["#c9cbce", "#e6ebd6"] },
      { c: "Black / Amber", img: "p/virginia-square-amber-45.jpg", stock: 2, sw: ["#141414", "#b07a2a"] } ] },
  { id: "round-berlin",   name: "Round Berlin",   price: 39.90, colors: [
      { c: "Silver / Silver Mirror", img: "p/round-berlin-silver.jpg",       gallery: ["p/round-berlin-silver.jpg", "p/round-berlin-silver-45.jpg"],             stock: 1, sw: ["#c9cbcd", "#a9adb1"] },
      { c: "Red / Brown",            img: "p/round-berlin-red.jpg",          gallery: ["p/round-berlin-red.jpg", "p/round-berlin-red-45.jpg"],                   stock: 1, sw: ["#8e1c1c", "#d9a88e"] },
      { c: "Black / Silver Mirror",  img: "p/round-berlin-black-mirror.jpg", gallery: ["p/round-berlin-black-mirror.jpg", "p/round-berlin-black-mirror-45.jpg"], stock: 1, sw: ["#111111", "#bfc2c5"] },
      { c: "Black / Smoke",          img: "p/round-berlin-black.jpg",        gallery: ["p/round-berlin-black.jpg", "p/round-berlin-black-45.jpg"],               stock: 1, sw: ["#111111", "#3a3a3a"] } ] },
  { id: "oregon-mountains", name: "Oregon Mountains", price: 33.90, colors: [
      { c: "Black / Ice Blue Mirror", img: "p/oregon-black-icemirror.jpg", gallery: ["p/oregon-black-icemirror.jpg", "p/oregon-black-icemirror-45.jpg"], stock: 1, sw: ["#141414", "#5cc8f0"] },
      { c: "Black / Orange",          img: "p/oregon-black-orange.jpg",    gallery: ["p/oregon-black-orange.jpg", "p/oregon-black-orange-45.jpg"],       stock: 3, sw: ["#141414", "#f0603a"] },
      { c: "Black / Smoke",           img: "p/oregon-black-smoke.jpg",     gallery: ["p/oregon-black-smoke.jpg", "p/oregon-black-smoke-45.jpg"],         stock: 1, sw: ["#141414", "#3a3a3a"] },
      { c: "Black / Blue",            img: "p/oregon-black-blue-45.jpg",   stock: 0, sw: ["#141414", "#1f5fd6"] } ] },
  { id: "oregon-wood",    name: "Oregon Mountains – Wood Grains", price: 33.90, colors: [
      { c: "Camo / Orange", img: "p/oregon-wood-orange.jpg", gallery: ["p/oregon-wood-orange.jpg", "p/oregon-wood-orange-45.jpg"], stock: 2, sw: ["#8a7a62", "#f0541e"] },
      { c: "Camo / Blue",   img: "p/oregon-wood-blue.jpg", gallery: ["p/oregon-wood-blue.jpg", "p/oregon-wood-blue-45.jpg"],   stock: 1, sw: ["#8a7a62", "#1f6fd6"] },
      { c: "Camo / Yellow", img: "p/oregon-wood-yellow.jpg", gallery: ["p/oregon-wood-yellow.jpg", "p/oregon-wood-yellow-45.jpg"], stock: 3, sw: ["#8a7a62", "#d6d21e"] },
      { c: "Camo / Smoke",  img: "p/oregon-wood-smoke.jpg", gallery: ["p/oregon-wood-smoke.jpg", "p/oregon-wood-smoke-45.jpg"],  stock: 1, sw: ["#8a7a62", "#3a3a3a"] } ] },
  { id: "milan-xl",       name: "Milan XL",       price: 27.90, was: 33.90, colors: [
      { c: null, img: "p/milan-xl-front.jpg", gallery: ["p/milan-xl-front.jpg", "p/milan-xl-45.jpg", "p/milan-xl-back.jpg"], stock: 3 } ] },
  { id: "berlin-mask",    name: "Berlin Mask",    price: 25.90, was: 33.90, colors: [
      { c: "Black",  img: "p/berlin-mask-black.jpg",  stock: 1, sw: ["#141414", "#2b2b2b"] },
      { c: "Silver", img: "p/berlin-mask-silver.jpg", gallery: ["p/berlin-mask-silver.jpg", "p/berlin-mask-silver-45.jpg"], stock: 1, sw: ["#d8dadc", "#a9adb1"] },
      { c: "Brown",  img: "p/berlin-mask-brown.jpg", gallery: ["p/berlin-mask-brown.jpg", "p/berlin-mask-brown-45.jpg"],  stock: 0, sw: ["#7a4a24", "#8a5a2b"] } ] },
  { id: "square-milan",   name: "Square Milan",   price: 33.90, colors: [
      { c: "Black",    img: "p/square-milan-black.jpg", gallery: ["p/square-milan-black.jpg", "p/square-milan-black-45.jpg"],    stock: 1, sw: ["#111111", "#3a3a3a"] },
      { c: "Tortoise", img: "p/square-milan-tortoise.jpg", gallery: ["p/square-milan-tortoise.jpg", "p/square-milan-tortoise-45.jpg"], stock: 0, sw: ["#5a2a12", "#7a4a2a"] },
      { c: "Brown",    img: "p/square-milan-brown.jpg?v=2", gallery: ["p/square-milan-brown.jpg?v=2", "p/square-milan-brown-45.jpg?v=2"],    stock: 0, sw: ["#8e3a18", "#3a3a3a"] } ] },
  { id: "jewi-square",    name: "Jewi Square",    price: 33.90, colors: [
      { c: "Black",             img: "p/jewi-square-black.jpg", gallery: ["p/jewi-square-black.jpg", "p/jewi-square-black-45.jpg", "p/jewi-square-black-back.jpg"],    stock: 1, sw: ["#121212", "#3a3a3a"] },
      { c: "Tortoise",          img: "p/jewi-square-tortoise.jpg", stock: 0, sw: ["#5a2a12", "#8a5a2b"] },
      { c: "Transparent Blue",  img: "p/jewi-square-blue.jpg", gallery: ["p/jewi-square-blue.jpg", "p/jewi-square-blue-45.jpg", "p/jewi-square-blue-back.jpg"],     stock: 1, sw: ["#7fa8d6", "#3d4540"] },
      { c: "Transparent Pink",  img: "p/jewi-square-pink.jpg", gallery: ["p/jewi-square-pink.jpg", "p/jewi-square-pink-45.jpg"],     stock: 1, sw: ["#f2b8c6", "#f3a3b8"] } ] },
  { id: "zurich",         name: "Zurich",         price: 29.90, colors: [
      { c: "Black",             img: "p/zurich-black.jpg",        gallery: ["p/zurich-black.jpg", "p/zurich-black-45.jpg", "p/zurich-black-back.jpg"], stock: 1, sw: ["#141414", "#3a3a3a"] },
      { c: "Black / Clear",     img: "p/zurich-black-clear.jpg",  gallery: ["p/zurich-black-clear.jpg", "p/zurich-black-clear-45.jpg"], stock: 1, sw: ["#141414", "#e6e0d6"] },
      { c: "Olive",             img: "p/zurich-green.jpg",        gallery: ["p/zurich-green.jpg", "p/zurich-green-45.jpg"], stock: 1, sw: ["#5f5a3a", "#3a3a3a"] },
      { c: "Silver / Clear",    img: "p/zurich-silver-clear.jpg", gallery: ["p/zurich-silver-clear.jpg", "p/zurich-silver-clear-45.jpg"], stock: 1, sw: ["#d4d6d8", "#e6e0d6"] } ] },
  { id: "spidey",         name: "Spidey",         price: 29.90, colors: [
      { c: "Black",        img: "p/spidey-black.jpg", gallery: ["p/spidey-black.jpg", "p/spidey-black-45.jpg", "p/spidey-black-side.jpg"], stock: 1, sw: ["#111111", "#3a3a3a"] },
      { c: "Sand",         img: "p/spidey-sand.jpg",  gallery: ["p/spidey-sand.jpg", "p/spidey-sand-45.jpg"],  stock: 1, sw: ["#cfccc3", "#e4e1da"] },
      { c: "Petrol Green", img: "p/spidey-green.jpg", gallery: ["p/spidey-green.jpg", "p/spidey-green-45.jpg"], stock: 1, sw: ["#5a7a2e", "#3a3a3a"] },
      { c: "Cream",        img: "p/spidey-cream.jpg", gallery: ["p/spidey-cream.jpg", "p/spidey-cream-45.jpg"], stock: 1, sw: ["#efe6cf", "#d9a99a"] } ] },
  { id: "undulance",      name: "Undulance",      price: 29.90, colors: [
      { c: "Black",         img: "p/undulance-black.jpg",       gallery: ["p/undulance-black.jpg", "p/undulance-black-45.jpg"],       stock: 1, sw: ["#111111", "#3a3a3a"] },
      { c: "Black / Brown", img: "p/undulance-black-brown.jpg", gallery: ["p/undulance-black-brown.jpg", "p/undulance-black-brown-45.jpg"], stock: 1, sw: ["#111111", "#7a4a24"] },
      { c: "Orange",        img: "p/undulance-orange.jpg",      gallery: ["p/undulance-orange.jpg", "p/undulance-orange-45.jpg"],      stock: 1, sw: ["#c2521c", "#3f5a45"] } ] },
  { id: "square-miami",    name: "Square Miami",    price: 33.90, colors: [
      { c: "Black",  img: "p/squaremiami-black.jpg", gallery: ["p/squaremiami-black.jpg", "p/squaremiami-black-45.jpg"], stock: 1, sw: ["#141414", "#3a3a3a"] },
      { c: "Blue",   img: "p/squaremiami-blue.jpg",  gallery: ["p/squaremiami-blue.jpg", "p/squaremiami-blue-45.jpg"],  stock: 1, sw: ["#1f8fe0", "#3d5ea8"] },
      { c: "Silver", img: "p/squaremiami-silver-mirror.jpg", gallery: ["p/squaremiami-silver-mirror.jpg", "p/squaremiami-silver-mirror-45.jpg", "p/squaremiami-silver-mirror-back.jpg"], stock: 1, sw: ["#d4d6d8", "#b9bcc0"] } ] },
  { id: "round-miami",    name: "Round Miami",    price: 33.90, colors: [
      { c: "Black",  img: "p/roundmiami-black.jpg", gallery: ["p/roundmiami-black.jpg", "p/roundmiami-black-45.jpg", "p/roundmiami-black-back.jpg"], stock: 1, sw: ["#141414", "#3a3a3a"] },
      { c: "Blue",   img: "p/roundmiami-blue.jpg",  gallery: ["p/roundmiami-blue.jpg", "p/roundmiami-blue-45.jpg"],  stock: 1, sw: ["#1f8fe0", "#3d5ea8"] },
      { c: "Silver", img: "p/roundmiami-silver-mirror.jpg", gallery: ["p/roundmiami-silver-mirror.jpg", "p/roundmiami-silver-mirror-45.jpg"], stock: 1, sw: ["#d4d6d8", "#b9bcc0"] } ] },
  { id: "tokyo-wide",     name: "Tokyo Wide",     price: 39.90, colors: [
      { c: "Black / Grey",  img: "p/tokyowide-black.jpg", gallery: ["p/tokyowide-black.jpg", "p/tokyowide-black-45.jpg"], stock: 1, sw: ["#141414", "#3a3a3a"] },
      { c: "Black / Brown", img: "p/tokyowide-brown.jpg", gallery: ["p/tokyowide-brown.jpg", "p/tokyowide-brown-45.jpg"], stock: 1, sw: ["#141414", "#9a5a2a"] } ] },
  { id: "brixton-main",   name: "Brixton Main",   price: 29.90, colors: [
      { c: "Black", img: "p/brixtonmain-black.jpg", gallery: ["p/brixtonmain-black.jpg", "p/brixtonmain-black-45.jpg"], stock: 1, sw: ["#111111", "#3a3a3a"] },
      { c: "Brown", img: "p/brixtonmain-brown.jpg", gallery: ["p/brixtonmain-brown.jpg", "p/brixtonmain-brown-45.jpg"], stock: 1, sw: ["#5e5250", "#a0703e"] } ] },
  { id: "venice-x",       name: "Venice X",       price: 29.90, colors: [
      { c: "Black / Yellow Lens", img: "p/venicex-yellow.jpg",       stock: 3, sw: ["#111111", "#f2b53a"] },
      { c: "Red",                 img: "p/venicex-red.jpg",          stock: 3, sw: ["#e8321e", "#ff4a2a"] },
      { c: "Black / Brown Lens",  img: "p/venicex-brown.jpg",        stock: 2, sw: ["#111111", "#7a4214"] },
      { c: "Black / Light Lens",  img: "p/venicex-light.jpg",        stock: 2, sw: ["#111111", "#c08c62"] },
      { c: "Maculate",            img: "p/venicex-maculate.jpg",     stock: 1, sw: ["#6b3a14", "#c46a22"] },
      { c: "Dark Maculate",       img: "p/venicex-darkmaculate.jpg", stock: 3, sw: ["#2a1608", "#7a4214"] } ] },
  { id: "wien",           name: "Wien",           price: 29.90, colors: [
      { c: "Black",         img: "p/wien-black.jpg",  gallery: ["p/wien-black.jpg", "p/wien-black-45.jpg"],   stock: 1, sw: ["#141414", "#3a3d44"] },
      { c: "Purple / Pink", img: "p/wien-purple.jpg", gallery: ["p/wien-purple.jpg", "p/wien-purple-45.jpg"], stock: 1, sw: ["#b49ae6", "#f4a6d0"] },
      { c: "Grey / Clear",  img: "p/wien-clear.jpg",  gallery: ["p/wien-clear.jpg", "p/wien-clear-45.jpg"],   stock: 1, sw: ["#6b6d70", "#e8e8e4"] } ] },
  { id: "virginia-x",     name: "Virginia X",     price: 33.90, colors: [
      { c: "Silver / Clear", img: "p/virginiax-clear.jpg", stock: 1, sw: ["#c9c9c6", "#eef0f0"] },
      { c: "Silver / Pink",  img: "p/virginiax-pink.jpg",  stock: 0, sw: ["#c9c9c6", "#f2b8c6"] } ] },
  { id: "alien-berlin", name: "Alien Berlin", price: 39.90, colors: [
      { c: "Black / Smoke", img: "p/alien-berlin-black.jpg", gallery: ["p/alien-berlin-black.jpg", "p/alien-berlin-black-45.jpg"], stock: 0, sw: ["#141414", "#3a3a3a"] },
      { c: "Black / Yellow", img: "p/alien-berlin-yellow.jpg", gallery: ["p/alien-berlin-yellow.jpg", "p/alien-berlin-yellow-45.jpg"], stock: 1, sw: ["#141414", "#c9a24a"] },
      { c: "Mirror Grey", img: "p/alien-berlin-mirror-45.jpg", stock: 3, sw: ["#c9cbce", "#b9bcc0"] },
      { c: "Maculate", img: "p/alien-berlin-maculate-45.jpg", stock: 3, sw: ["#8a7564", "#4fc0a0"] },
      { c: "White", img: "p/alien-berlin-white-45.jpg", stock: 2, sw: ["#f2f2f2", "#3a3a3a"] },
      { c: "Black / Brown", img: "p/alien-berlin-brown-45.jpg", stock: 0, sw: ["#141414", "#7a4a24"] } ] },
  { id: "bones-2",        name: "Bones 2",        price: 33.90, colors: [{ c: null, img: "p/bones-2.jpg", stock: 1 }] },
  { id: "bruxelles-base", name: "Bruxelles Base", price: 29.90, colors: [{ c: null, img: "p/bruxelles-base.jpg", stock: 1 }] },
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
  { id: "tron",           name: "Tron",           price: 33.90, colors: [{ c: null, img: "p/cycle.jpg", stock: 1 }] },
  { id: "disco-cycle",    name: "Disco Cycle",    price: 19.90, was: 24.90, colors: [{ c: null, img: "p/disco-cycle.jpg", stock: 1 }] },
  { id: "london-rider",   name: "London Rider",   price: 29.90, colors: [{ c: null, img: "p/enzo-line.jpg", stock: 1 }] }
];
// ANTEPRIMA: i modelli con preview: true (e le liveColors) si vedono solo aprendo il sito con ?preview=1 (resta attiva nella sessione; ?preview=0 la spegne).
var PREVIEW = (function(){ try { var q = location.search;
  if (/[?&]preview=1/.test(q)) sessionStorage.setItem("ussess_preview", "1");
  if (/[?&]preview=0/.test(q)) sessionStorage.removeItem("ussess_preview");
  return sessionStorage.getItem("ussess_preview") === "1"; } catch(e){ return /[?&]preview=1/.test(location.search); } })();
PRODUCTS = PRODUCTS.filter(function(p){ return PREVIEW || !p.preview; });
PRODUCTS.forEach(function(p){ if (!PREVIEW && p.liveColors) p.colors = p.liveColors; });
if (PREVIEW) document.addEventListener("DOMContentLoaded", function(){ var b = document.createElement("a"); b.href = "?preview=0"; b.className = "preview-badge"; b.textContent = "ANTEPRIMA \u00b7 esci"; document.body.appendChild(b); });
// FOTO FIT — galleria "Made for all of USS" in home. id = modello indossato (vuoto = non ancora assegnato).
// Il primo fit di ogni modello diventa anche il bottone "Fit" sulla sua scheda nel catalogo.
var FITS = [
  { img: "c/fit/fit-01.jpg", id: "alien-berlin" },
  { img: "c/fit/fit-02.jpg", id: "virginia" },
  { img: "c/fit/fit-03.jpg", id: "square-miami", name: "Square Miami" },
  { img: "c/fit/fit-04.jpg?v=2", id: "round-berlin", name: "Round Berlin" },
  { img: "c/fit/fit-05.jpg", id: "undulance" },
  { img: "c/fit/fit-06.jpg", id: "", name: "Nose XS" },
  { img: "c/fit/fit-07.jpg", id: "", name: "Nose XS" },
  { img: "c/fit/fit-08.jpg", id: "square-rider", name: "Venice Rider" },
  { img: "c/fit/fit-09.jpg", id: "", name: "Over Ale" },
  { img: "c/fit/fit-10.jpg", id: "square-rider", name: "Venice Rider" }
];
FITS.forEach(function(f){ var p = f.id && product(f.id); if (p && !p.fit) p.fit = f.img; });
// SOSPESI: { id: "berlin-base", name: "Berlin Base", price: 19.90, was: 24.90, colors: [{ c: null, img: "p/berlin-base.jpg", stock: 1 }] }  (tolto il 27/11/2026)
// SOSPESI: { id: "bones", name: "Bones", price: null, colors: [{ c: null, img: "p/bones.jpg", stock: 0 }] }
var COLS = (window.matchMedia && matchMedia("(max-width:719px)").matches) ? 2 : 3; // 2 colonne su telefono
var VISIBLE = COLS === 2 ? 6 : 3; // quanti modelli a vista prima del "+"

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
function product(id){ if (id==="ow-square-miami") id="square-miami"; for (var i=0;i<PRODUCTS.length;i++) if (PRODUCTS[i].id===id) return PRODUCTS[i]; return null; }
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
// Colore mostrato sulla scheda del catalogo: il primo (in ordine, il nero davanti) che ha la foto frontale, anche se esaurito.
function hasFront(v){ return !/-45\.jpg/.test(v.img); }
function cardColor(p){ for (var k=0;k<p.colors.length;k++) if (hasFront(p.colors[k])) return k; return firstAvail(p); }
function thumbHTML(p, ci){
  var v = p.colors[ci], h = "";
  var fitb = p.fit ? '<button type="button" class="fitbtn" aria-label="'+T("fit.aria")+'">Fit</button>' : '';
  if (v.gallery && v.gallery.length > 1) {
    h += '<div class="thumb gal"><div class="gal-track">';
    v.gallery.forEach(function(src, k){ h += '<img src="'+src+'" alt="'+itemName(p, ci)+' '+(k+1)+'/'+v.gallery.length+'" loading="lazy" draggable="false">'; });
    h += '</div><div class="gal-dots">';
    v.gallery.forEach(function(src, k){ h += '<button type="button" class="'+(k===0?'on':'')+'" data-k="'+k+'" aria-label="'+(k+1)+'/'+v.gallery.length+'"></button>'; });
    return h + '</div>' + fitb + '</div>';
  }
  return '<div class="thumb"><img src="'+v.img+'" alt="'+itemName(p, ci)+'" loading="lazy">' + fitb + '</div>';
}
function cardHTML(p){
  var ci = cardColor(p), v = p.colors[ci], h = "";
  h += thumbHTML(p, ci);
  h += '<div class="swatches">';
  if (p.colors.length > 1) {
    p.colors.forEach(function(x, k){
      h += '<button type="button" class="sw'+(k===ci?' on':'')+(x.stock<=0?' out':'')+'" data-ci="'+k+'" aria-label="'+x.c+'" title="'+x.c+'" style="--f:'+x.sw[0]+';--l:'+x.sw[1]+'"></button>';
    });
  }
  h += '</div>';
  h += '<div class="meta"><span class="name">'+p.name+'</span>' +
       '<span class="cname">'+(p.colors.length > 1 ? v.c : '&nbsp;')+'</span>' +
       '<span class="price">'+(p.was ? '<s>'+eur(p.was)+'</s> ' : '')+'<b>'+eur(p.price)+'</b></span></div>';
  if (SHOP_OPEN) h += '<button class="add" type="button" data-id="'+p.id+'">'+T("add.short")+'<span class="long">'+T("add.long")+'</span></button>';
  else if (soldOut(p)) h += '<span class="soldout">'+T("soldout")+'</span>';
  return h;
}
function setColor(card, p, ci){
  var v = p.colors[ci]; card.setAttribute("data-ci", ci); card.classList.remove("fit-on");
  var th = card.querySelector(".thumb"); th.insertAdjacentHTML("afterend", thumbHTML(p, ci)); th.parentNode.removeChild(th);
  card.querySelectorAll(".sw").forEach(function(s){ s.classList.toggle("on", +s.getAttribute("data-ci")===ci); });
  var cn = card.querySelector(".cname"); if (cn) cn.textContent = v.c;
  var fb = card.querySelector(".fitbtn"); if (fb) fb.classList.remove("on");
  refreshAdd(card, p);
}
function refreshAdd(card, p){
  var b = card.querySelector(".add"); if (!b) return;
  var ci = +card.getAttribute("data-ci"), ok = left(p, ci) > 0;
  b.disabled = !ok;
  b.innerHTML = ok ? T("add.short")+'<span class="long">'+T("add.long")+'</span>' : (color(p, ci).stock <= 0 ? T("soldout") : T("incart"));
}
function renderCatalog(){
  var grid = document.getElementById("grid"); if (!grid) return;
  if (SWING) document.documentElement.classList.add("swing");
  var more = document.createElement("div"); more.id = "more"; more.hidden = true; more.style.display = "contents";
  PRODUCTS.forEach(function(p, i){
    var a = document.createElement("article"); a.className = "card"; a.setAttribute("data-id", p.id); a.setAttribute("data-ci", cardColor(p));
    a.style.setProperty("--d", (-(i * 1.3) % 7) + "s");
    a.innerHTML = cardHTML(p);
    (i < VISIBLE ? grid : more).appendChild(a);
    refreshAdd(a, p);
  });
  grid.appendChild(more);
  var all = grid.querySelectorAll(".card"), last = all[all.length-1], n = all.length;
  if (n > VISIBLE && n % COLS === 1) last.classList.add("solo");
  grid.addEventListener("scroll", function(e){
    var tr = e.target; if (!tr.classList || !tr.classList.contains("gal-track")) return;
    var k = Math.round(tr.scrollLeft / tr.clientWidth);
    tr.parentNode.querySelectorAll(".gal-dots button").forEach(function(d, i){ d.classList.toggle("on", i === k); });
  }, true);
  grid.addEventListener("click", function(e){
    var card = e.target.closest(".card"); if (!card) return;
    var p = product(card.getAttribute("data-id"));
    var sw = e.target.closest(".sw"); if (sw) { setColor(card, p, +sw.getAttribute("data-ci")); return; }
    var tr = card.querySelector(".gal-track");
    var dot = e.target.closest(".gal-dots button");
    if (tr && dot) { tr.scrollTo({ left: tr.clientWidth * +dot.getAttribute("data-k"), behavior: "smooth" }); return; }
    var fb = e.target.closest(".fitbtn");
    if (fb) { var on = !card.classList.contains("fit-on"); card.classList.toggle("fit-on", on); fb.classList.toggle("on", on);
      var img = card.querySelector(".thumb img"), ci = +card.getAttribute("data-ci");
      img.src = on ? p.fit : p.colors[ci].img; return; }
    /* foto o nome del modello: apre la pagina prodotto sul colore scelto */
    if (!fb && (e.target.closest(".thumb") || e.target.closest(".name"))) { location.href = pdURL(p.id, +card.getAttribute("data-ci") || 0); return; }
    var b = e.target.closest(".add"); if (!b || b.disabled) return;
    if (addToCart(p.id, +card.getAttribute("data-ci"))) {
      b.classList.add("done"); b.textContent = T("add.done");
      setTimeout(function(){ b.classList.remove("done"); refreshAdd(card, p); }, 1400);
    }
  });
  if (!SHOP_OPEN) { var w = document.querySelector(".more-wrap");
    if (w) w.insertAdjacentHTML("afterend", '<p class="vetrina-note">'+T("shop.soon")+' <a href="contatti.html">'+T("nav.contact")+'</a></p>'); }
  var btn = document.getElementById("moreBtn"), lbl = document.getElementById("moreLabel");
  if (PRODUCTS.length <= VISIBLE && btn) { btn.parentNode.hidden = true; }
  if (btn) btn.addEventListener("click", function(){
    var open = more.hidden; more.hidden = !open; grid.classList.toggle("collapsed", !open);
    btn.textContent = open ? "\u2212" : "+"; lbl.textContent = open ? T("home.showLess") : T("home.showAll");
  });
  initFilters(grid, more);
}

/* ---------- FIT: Made for all of USS ---------- */
function renderFits(){
  var st = document.getElementById("fitStrip"); if (!st) return;
  var n = FITS.length, cur = 0, timer = null, visible = false, paused = false;
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  st.className = "fit-sel"; st.removeAttribute("tabindex");
  st.innerHTML = '<div class="fs-stage">' + FITS.map(function(f, i){
    var p = f.id ? product(f.id) : null;
    var cap = p ? '<a class="fit-tag" href="product.html?id='+p.id+'"><i></i>'+(f.name || p.name)+'</a>' : (f.name ? '<span class="fit-tag"><i></i>'+f.name+'</span>' : '');
    return '<figure data-i="'+i+'"><img src="'+f.img+'" width="1400" height="1007" loading="'+(i<3||i===n-1?'eager':'lazy')+'" decoding="async" alt="USSESS fit '+(i+1)+(f.name?' — '+f.name:(p?' — '+p.name:''))+'">'+cap+'</figure>';
  }).join("") + '</div>' +
  '<button type="button" class="fs-arr fs-prev" aria-label="'+T("camp.prev")+'"><svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg></button>' +
  '<button type="button" class="fs-arr fs-next" aria-label="'+T("camp.next")+'"><svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg></button>';
  var figs = [].slice.call(st.querySelectorAll("figure"));
  function draw(){
    figs.forEach(function(f, i){
      var o = ((i - cur) % n + n) % n; if (o > n/2) o -= n;   // giro circolare: -1 sinistra, 0 centro, +1 destra
      f.style.setProperty("--o", o); f.className = o === 0 ? "on" : (Math.abs(o) === 1 ? "side" : "off");
      f.setAttribute("aria-hidden", o === 0 ? "false" : "true");
    });
  }
  function go(d){ cur = ((cur + d) % n + n) % n; draw(); }
  // swipe automatico ogni 3 secondi: si ferma mentre la persona tocca o passa sopra, e quando la sezione non è sullo schermo
  function tick(){ clearTimeout(timer); if (reduce || paused || !visible) return; timer = setTimeout(function(){ go(1); tick(); }, 3000); }
  function user(d){ go(d); tick(); }
  st.querySelector(".fs-prev").addEventListener("click", function(){ user(-1); });
  st.querySelector(".fs-next").addEventListener("click", function(){ user(1); });
  st.addEventListener("click", function(e){ var f = e.target.closest("figure.side"); if (!f) return; e.preventDefault(); user(+f.style.getPropertyValue("--o")); });
  st.addEventListener("keydown", function(e){ if (e.key === "ArrowLeft") user(-1); if (e.key === "ArrowRight") user(1); });
  st.addEventListener("mouseenter", function(){ paused = true; tick(); });
  st.addEventListener("mouseleave", function(){ paused = false; tick(); });
  var x0 = null;
  st.addEventListener("touchstart", function(e){ x0 = e.touches[0].clientX; paused = true; tick(); }, { passive: true });
  st.addEventListener("touchend", function(e){ paused = false; if (x0 === null) { tick(); return; } var dx = e.changedTouches[0].clientX - x0; x0 = null; if (Math.abs(dx) > 40) user(dx < 0 ? 1 : -1); else tick(); });
  if ("IntersectionObserver" in window) new IntersectionObserver(function(es){ visible = es[0].isIntersecting; tick(); }, { threshold: .4 }).observe(st);
  else { visible = true; }
  draw(); tick();
  // effetto glitch sul titolo
  var m = document.getElementById("fitsTitle"); if (m) m.setAttribute("data-text", m.textContent);
}

/* ---------- FILTRI CATALOGO ---------- */
// Famiglia colore dei modelli con un solo colore (c: null). Per i modelli con più colori si ricava dal nome del colore.
var TONE = { "milan-xl": "brown", "alien-berlin": "black", "bones-2": "silver", "bruxelles-base": "black",
             "berlin-base": "black", "tron": "silver", "disco-cycle": "black", "london-rider": "black" };
var FAMS = [["black","#141414"],["silver","#c9cbce"],["brown","#6b3f1f"],["blue","#1f6fd0"],["green","#4f6b3a"],
            ["gold","#c8a96b"],["red","#b3121c"],["orange","#c2521c"],["pink","#f2b8c6"],["cream","#efe6cf"]];
function famOf(p, v){
  if (!v.c) return TONE[p.id] || null;
  var n = v.c.split("/")[0].toLowerCase();
  if (/black/.test(n)) return "black"; if (/silver|grey|gray|gunmetal/.test(n)) return "silver";
  if (/brown|tortoise|caramel|coffee|maculate/.test(n)) return "brown"; if (/blue/.test(n)) return "blue";
  if (/green|olive|aqua/.test(n)) return "green"; if (/gold/.test(n)) return "gold"; if (/red/.test(n)) return "red";
  if (/orange/.test(n)) return "orange"; if (/pink|purple|lilac/.test(n)) return "pink"; if (/cream|sand|white|beige/.test(n)) return "cream";
  return null;
}
function bucketOf(x){ return x < 25 ? "p1" : (x <= 30 ? "p2" : "p3"); }
var FILT = { sort: "", fam: {}, price: {} };
function nActive(){ return (FILT.sort ? 1 : 0) + Object.keys(FILT.fam).length + Object.keys(FILT.price).length; }
function initFilters(grid, more){
  var fbtn = document.getElementById("fbtn"), panel = document.getElementById("fpanel"); if (!fbtn || !panel) return;
  var cards = [].slice.call(grid.querySelectorAll(".card")), wrap = document.querySelector(".more-wrap");
  var fams = {}, bks = {};
  PRODUCTS.forEach(function(p){ bks[bucketOf(p.price)] = 1; p.colors.forEach(function(v){ var f = famOf(p, v); if (f) fams[f] = 1; }); });
  function chip(group, val, label, dot){ return '<button type="button" class="chip" data-g="'+group+'" data-v="'+val+'">' +
    (dot ? '<i style="background:'+dot+'"></i>' : '') + label + '</button>'; }
  var h = '<div class="fgroup"><span class="flabel">'+T("f.sort")+'</span><div class="chips">' +
    chip("sort", "", T("f.featured")) + chip("sort", "asc", T("f.priceAsc")) + chip("sort", "desc", T("f.priceDesc")) + '</div></div>';
  h += '<div class="fgroup"><span class="flabel">'+T("f.color")+'</span><div class="chips">';
  FAMS.forEach(function(f){ if (fams[f[0]]) h += chip("fam", f[0], T("c."+f[0]), f[1]); });
  h += '</div></div><div class="fgroup"><span class="flabel">'+T("f.price")+'</span><div class="chips">';
  ["p1","p2","p3"].forEach(function(b){ if (bks[b]) h += chip("price", b, T("f."+b)); });
  h += '</div></div><div class="ffoot"><span id="fres"></span><button type="button" class="freset" id="freset">'+T("f.reset")+'</button></div>';
  panel.innerHTML = h;
  var empty = document.createElement("p"); empty.className = "fempty"; empty.hidden = true; empty.textContent = T("f.none");
  grid.parentNode.insertBefore(empty, grid.nextSibling);

  function open(on){ panel.hidden = !on; fbtn.setAttribute("aria-expanded", on ? "true" : "false"); fbtn.classList.toggle("open", on); }
  fbtn.addEventListener("click", function(){ open(panel.hidden); });
  document.addEventListener("keydown", function(e){ if (e.key === "Escape" && !panel.hidden) open(false); });
  panel.addEventListener("click", function(e){
    if (e.target.closest("#freset")) { FILT = { sort: "", fam: {}, price: {} }; apply(); return; }
    var c = e.target.closest(".chip"); if (!c) return;
    var g = c.getAttribute("data-g"), v = c.getAttribute("data-v");
    if (g === "sort") FILT.sort = v;
    else { if (FILT[g][v]) delete FILT[g][v]; else FILT[g][v] = 1; }
    apply();
  });

  function setSolo(list){
    cards.forEach(function(c){ c.classList.remove("solo"); });
    var n = list.length; if (n > 1 && n % COLS === 1) list[n-1].classList.add("solo");
  }
  function apply(){
    panel.querySelectorAll(".chip").forEach(function(c){
      var g = c.getAttribute("data-g"), v = c.getAttribute("data-v");
      c.classList.toggle("on", g === "sort" ? FILT.sort === v : !!FILT[g][v]);
    });
    var famOn = Object.keys(FILT.fam).length, priceOn = Object.keys(FILT.price).length, n = nActive();
    var fc = document.getElementById("fcount"); fc.hidden = !n; fc.textContent = n;
    if (!n) {   // nessun filtro: catalogo come all'inizio (3 modelli + "Mostra tutto")
      cards.forEach(function(c, i){ c.hidden = false; (i < VISIBLE ? grid : more).appendChild(c); });
      grid.appendChild(more); grid.classList.toggle("collapsed", more.hidden);
      if (wrap) wrap.hidden = PRODUCTS.length <= VISIBLE; empty.hidden = true;
      setSolo(cards);
      document.getElementById("fres").textContent = T("home.models", { n: PRODUCTS.length });
      return;
    }
    var list = cards.filter(function(c){
      var p = product(c.getAttribute("data-id"));
      if (priceOn && !FILT.price[bucketOf(p.price)]) return false;
      if (famOn && !p.colors.some(function(v){ return FILT.fam[famOf(p, v)]; })) return false;
      return true;
    });
    if (FILT.sort) list.sort(function(a, b){ var d = product(a.getAttribute("data-id")).price - product(b.getAttribute("data-id")).price;
      return FILT.sort === "asc" ? d : -d; });
    cards.forEach(function(c){ c.hidden = list.indexOf(c) < 0; grid.insertBefore(c, more); });
    list.forEach(function(c){ grid.insertBefore(c, more); });
    grid.classList.remove("collapsed"); if (wrap) wrap.hidden = true;
    if (famOn) list.forEach(function(c){   // mostra il colore filtrato (meglio se disponibile)
      var p = product(c.getAttribute("data-id")), cur = +c.getAttribute("data-ci"), best = -1;
      p.colors.forEach(function(v, k){ if (FILT.fam[famOf(p, v)] && (best < 0 || (p.colors[best].stock <= 0 && v.stock > 0))) best = k; });
      if (best >= 0 && best !== cur && !(FILT.fam[famOf(p, p.colors[cur])] && p.colors[cur].stock > 0)) setColor(c, p, best);
    });
    setSolo(list); empty.hidden = list.length > 0;
    document.getElementById("fres").textContent = T("home.models", { n: list.length });
  }
  apply();
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
      '<div class="info"><div class="nm">'+p.name+'</div><div class="vr">'+(v.c || T("cart.sunglasses"))+'</div>' +
      '<div class="qty"><button type="button" data-a="dec" data-id="'+p.id+'" data-ci="'+i.ci+'" aria-label="'+T("cart.dec")+'">&minus;</button><span>'+i.qty+'</span>' +
      '<button type="button" data-a="inc" data-id="'+p.id+'" data-ci="'+i.ci+'" aria-label="'+T("cart.inc")+'"'+(full?' disabled':'')+'>+</button></div>' +
      (full ? '<div class="last">'+T("cart.last")+'</div>' : '') + '</div>' +
      '<div class="right"><div class="pr">'+(p.price==null ? "\u2014" : eur(p.price*i.qty))+'</div>' +
      '<button class="rm" type="button" data-a="rm" data-id="'+p.id+'" data-ci="'+i.ci+'">'+T("cart.remove")+'</button></div>';
    box.appendChild(row);
  });
  var empty = c.length === 0;
  document.getElementById("empty").hidden = !empty;
  document.getElementById("summary").hidden = empty;
  document.getElementById("pay").hidden = empty;
  document.getElementById("sub").textContent = n + " " + (n===1 ? T("cart.item") : T("cart.items"));
  var dest = readDest(), sel = document.getElementById("dest"); if (sel) sel.value = dest;
  var ship = null;
  if (!missing) ship = dest === "it" ? SHIPPING.italy : (total >= SHIPPING.europeFreeFrom ? 0 : SHIPPING.europe);
  var shipMissing = !missing && ship == null;
  document.getElementById("ship").textContent = missing ? "\u2014" : (ship == null ? T("cart.tbd") : (ship === 0 ? T("cart.free") : eur(ship)));
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
  if (order.missing){ payNote(T("pay.missing")); return; }
  if (!PAYPAL.clientId){ payNote(T("pay.soon")); return; }
  payNote(T("pay.secure"));
  loadSdk(function(){ renderButtons(order); });
}
function loadSdk(cb){
  if (window.paypal) return cb();
  if (sdkState === "loading") return;
  sdkState = "loading";
  var s = document.createElement("script");
  s.src = "https://www.paypal.com/sdk/js?client-id=" + encodeURIComponent(PAYPAL.clientId) + "&currency=" + PAYPAL.currency + "&intent=capture&locale=" + ({ it: "it_IT", en: "en_GB", nl: "nl_NL", fr: "fr_FR" }[LANG] || "it_IT");
  s.onload = function(){ sdkState = "ready"; if (lastOrder && !lastOrder.missing) renderButtons(lastOrder); };
  s.onerror = function(){ sdkState = "error"; payNote(T("pay.preview")); };
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
        document.querySelector(".page").innerHTML = '<h1>'+T("thanks.title")+'</h1><p class="sub">'+T("thanks.sub")+'</p>' +
          '<p>'+T("thanks.code")+': <strong>' + (det && det.id ? det.id : "") + '</strong></p><p><a class="btn" href="index.html">'+T("cart.back")+'</a></p>';
      });
    },
    onError: function(){ payNote(T("pay.error")); }
  }).render("#paypal-buttons");
}

function copyText(id, btn){
  var t = document.getElementById(id).textContent.trim();
  function ok(){ btn.textContent = T("contact.copied"); setTimeout(function(){ btn.textContent = T("contact.copy"); }, 1400); }
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(ok, function(){ sel(id); });
  else sel(id);
}
function sel(id){ var r = document.createRange(); r.selectNodeContents(document.getElementById(id)); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); }

document.addEventListener("DOMContentLoaded", function(){
  updateBadge(); logo3d(); ticker(); renderCatalog(); renderFits(); heroVideo(); renderCart(); cartClicks(); analytics();
  var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
});

/* Campaign strip */
(function(){
  var s = document.getElementById("campStrip"); if (!s) return;
  var prev = document.getElementById("campPrev"), next = document.getElementById("campNext"),
      prog = document.getElementById("campProg"), cnt = document.getElementById("campCount"), figs = s.querySelectorAll("figure");
  function pad(n){ return (n < 10 ? "0" : "") + n; }
  function upd(){
    var max = s.scrollWidth - s.clientWidth, x = s.scrollLeft;
    prog.style.width = (max > 0 ? Math.max(8, x / max * 100) : 100) + "%";
    var idx = 0; for (var i = 0; i < figs.length; i++){ if (figs[i].offsetLeft - s.offsetLeft <= x + 40) idx = i; }
    if (x >= max - 4) idx = figs.length - 1;
    cnt.textContent = pad(idx + 1) + " / " + pad(figs.length);
    prev.disabled = x <= 4; next.disabled = x >= max - 4;
  }
  function go(d){ s.scrollBy({ left: d * s.clientWidth * 0.8, behavior: "smooth" }); }
  prev.addEventListener("click", function(){ go(-1); }); next.addEventListener("click", function(){ go(1); });
  s.addEventListener("keydown", function(e){ if (e.key === "ArrowRight"){ go(1); e.preventDefault(); } if (e.key === "ArrowLeft"){ go(-1); e.preventDefault(); } });
  s.addEventListener("scroll", upd, { passive: true }); window.addEventListener("resize", upd);
  s.querySelectorAll("img").forEach(function(im){ im.addEventListener("load", upd); });
  upd();
  document.querySelectorAll("[data-goto]").forEach(function(a){
    a.addEventListener("click", function(e){
      var card = document.querySelector('.card[data-id="' + a.getAttribute("data-goto") + '"]'); if (!card) return;
      e.preventDefault();
      var mb = document.getElementById("moreBtn");
      if (card.offsetParent === null && mb && mb.offsetParent !== null) mb.click();
      setTimeout(function(){ card.scrollIntoView({ behavior: "smooth", block: "center" }); card.classList.remove("flash"); void card.offsetWidth; card.classList.add("flash"); }, 60);
    });
  });
})();

/* ---------- PIT STOP: tag "lens references" sulle foto ---------- */
// Foto della campagna -> occhiale indossato. x/y = posizione del tag in % (lontano dal soggetto). ci = colore.
var TAGS = {
  "01": [{ id: "brixton-main", ci: 1, x: 80, y: 70 }],
  "02": [{ id: "brixton-main", ci: 1, x: 16, y: 80 }],
  "03": [{ id: "brixton-main", ci: 0, x: 16, y: 74 }],
  "04": [{ id: "square-milan", ci: 2, x: 20, y: 46 }],
  "05": [{ id: "square-milan", ci: 2, x: 78, y: 80 }],
  "06": [{ id: "square-milan", ci: 2, x: 70, y: 24 }],
  "07": [{ id: "virginia-x",   ci: 0, x: 24, y: 84 }],
  "08": [{ id: "square-milan", ci: 2, x: 78, y: 22 }],
  "09": [{ id: "square-milan", ci: 2, x: 72, y: 88 }],
  "10": [{ id: "virginia-x",   ci: 0, x: 82, y: 86 }],
  "12": [{ id: "wien",         ci: 2, x: 22, y: 90 }, { id: "virginia-x", ci: 0, x: 80, y: 92 }],
  "13": [{ id: "venice-x",     ci: 0, x: 74, y: 88 }],
  "14": [{ id: "venice-x",     ci: 1, x: 72, y: 90 }],
  "15": [{ id: "venice-x",     ci: 0, x: 86, y: 86 }],
  "16": [{ id: "venice-x",     ci: 0, x: 76, y: 90 }],
  "17": [{ id: "virginia-x",   ci: 0, x: 82, y: 82 }]
};
var LB_IDS = ["brixton-main", "square-milan", "venice-x", "wien", "virginia-x"];
function pdURL(id, ci){ return "product.html?id=" + encodeURIComponent(id) + (ci ? "&c=" + ci : ""); }
var ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3l14 7.5-6.2 1.6L10 19z"/></svg>';
function tagFigures(root){
  (root || document).querySelectorAll("img[src*='pitstop-']").forEach(function(img){
    var m = img.getAttribute("src").match(/pitstop-(\d\d)\.jpg/); if (!m || !TAGS[m[1]]) return;
    var fig = img.parentNode; if (fig.classList.contains("tg")) return;
    fig.classList.add("tg");
    TAGS[m[1]].forEach(function(t){
      var p = product(t.id); if (!p) return;
      var a = document.createElement("a");
      a.className = "ptag" + (t.x < 50 ? " flip" : ""); a.href = pdURL(t.id, t.ci);
      a.style.left = t.x + "%"; a.style.top = t.y + "%";
      a.innerHTML = '<i class="pt-ar">' + ARROW + '</i><span>' + p.name + '</span>';
      fig.appendChild(a);
    });
    // touch: primo tocco mostra i tag, il secondo (sul tag) apre il prodotto
    fig.addEventListener("click", function(e){
      if (e.target.closest(".ptag")) return;
      if (window.matchMedia("(hover:none)").matches) fig.classList.toggle("show-tags");
    });
  });
}

/* ---------- PAGINA PRODOTTO ---------- */
/* foto fit di un prodotto: p.fit (stringa o lista) + foto della galleria FITS collegate al modello */
function fitsOf(p){
  var out = [].concat(p.fit || []);
  FITS.forEach(function(f){ if (f.id === p.id && out.indexOf(f.img) < 0) out.push(f.img); });
  return out;
}
/* anteprima a schermo intero delle foto fit */
function fitBox(list, k){
  var box = document.createElement("div"); box.className = "pd-lb"; box.setAttribute("role", "dialog");
  function show(){ box.innerHTML = '<img src="' + list[k] + '" alt="Fit ' + (k + 1) + '/' + list.length + '">' +
    '<button type="button" class="pd-lb-x" aria-label="' + T("menu.close") + '">×</button>' +
    (list.length > 1 ? '<button type="button" class="pd-lb-a prev" aria-label="‹">‹</button><button type="button" class="pd-lb-a next" aria-label="›">›</button><span class="pd-lb-n">' + (k + 1) + ' / ' + list.length + '</span>' : ''); }
  function close(){ document.removeEventListener("keydown", key); box.remove(); document.body.style.overflow = ""; }
  function step(d){ k = (k + d + list.length) % list.length; show(); }
  function key(e){ if (e.key === "Escape") close(); else if (e.key === "ArrowRight") step(1); else if (e.key === "ArrowLeft") step(-1); }
  box.addEventListener("click", function(e){ var a = e.target.closest(".pd-lb-a"); if (a) { step(a.classList.contains("next") ? 1 : -1); return; } if (e.target.tagName !== "IMG") close(); });
  var x0 = null; box.addEventListener("touchstart", function(e){ x0 = e.touches[0].clientX; }, { passive: true });
  box.addEventListener("touchend", function(e){ if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40 && list.length > 1) step(dx < 0 ? 1 : -1); x0 = null; });
  document.addEventListener("keydown", key); show(); document.body.appendChild(box); document.body.style.overflow = "hidden";
}
/* Scheda tecnica (pagina prodotto). mat = materiale, fin = finitura, polar = lenti polarizzate, cat = categoria, acc = accessori.
   Tutte le lenti sono UV400. Valori tradotti in i18n.js (mat.*, fin.*, cat.*, acc.*). Mai scrivere "plastica". */
var SPECS = {
  "oregon-mountains": { mat: "pu", polar: true },
  "oregon-wood":      { mat: "pu", fin: "matte", polar: true },
  "tokyo-wide":       { mat: "metal", polar: true },
  "tron":             { polar: true },
  "zurich":           { mat: "acetate", acc: "zurich" },
  "alien-berlin":     { mat: "acetate", cat: "avant" },
  "virginia-x":       { mat: "steel" },
  "london-rider":     { acc: "london" },
  "bones":            { mat: "acetate", fin: "matte" },
  "bones-2":          { mat: "acetate", fin: "matte" },
  "venice-x":         { mat: "acetate" },
  "bruxelles-base":   { mat: "metal", acc: "metal" },
  "milan-xl":         { mat: "acetate" },
  "berlin-mask":      { fin: "enamel" },
  "wien":             { fin: "enamel", cat: "cycling" },
  "round-berlin":     { mat: "pu", fin: "enamel", cat: "avant" },
  "square-milan":     { mat: "acetate" },
  "goth-berlin":      { mat: "tpu" },
  "tokyo-x":          { polar: true, cat: "cycling" },
  "nose-26":          { mat: "pu" },
  "racing-foam":      { polar: true, cat: "cycling", acc: "foam" },
  "virginia-square":  { mat: "metal", polar: true },
  "tron-26":          { mat: "acetate", fin: "matte" }
};
function specHTML(id){
  var x = SPECS[id] || {}, rows = [];
  if (x.mat) rows.push([T("spec.mat"), T("mat." + x.mat)]);
  if (x.fin) rows.push([T("spec.fin"), T("fin." + x.fin)]);
  rows.push([T("spec.lens"), (x.polar ? T("lens.polar") + " · " : "") + "UV400"]);
  if (x.cat) rows.push([T("spec.cat"), T("cat." + x.cat)]);
  if (x.acc) rows.push([T("spec.acc"), T("acc." + x.acc)]);
  return '<dl class="pd-spec">' + rows.map(function(r){ return '<div><dt>' + r[0] + '</dt><dd>' + r[1] + '</dd></div>'; }).join("") + '</dl>';
}
function renderProduct(){
  var root = document.getElementById("pd"); if (!root) return;
  var q = new URLSearchParams(location.search), p = product(q.get("id"));
  if (!p) { root.innerHTML = '<p class="pd-miss">' + T("pd.missing") + ' <a href="index.html#shop">Shop</a></p>'; return; }
  var ci = Math.min(Math.max(+q.get("c") || 0, 0), p.colors.length - 1);
  document.title = p.name + " · USSESS";
  var seen = [];
  Object.keys(TAGS).forEach(function(k){ TAGS[k].forEach(function(t){ if (t.id === p.id && seen.indexOf(k) < 0) seen.push(k); }); });
  function draw(){
    var v = p.colors[ci], gal = v.gallery || [v.img], h = "";
    var fits = fitsOf(p);
    h += '<div class="pd-left"><div class="pd-car"><div class="pd-track">' + gal.map(function(s, k){ return '<figure><img src="' + s + '" alt="' + itemName(p, ci) + ' ' + (k + 1) + '/' + gal.length + '"' + (k ? ' loading="lazy"' : '') + ' draggable="false"></figure>'; }).join("") + '</div>';
    if (gal.length > 1) {
      h += '<button type="button" class="pd-arr prev" aria-label="‹" hidden>‹</button><button type="button" class="pd-arr next" aria-label="›">›</button>';
      h += '<div class="pd-dots">' + gal.map(function(s, k){ return '<button type="button" class="' + (k === 0 ? 'on' : '') + '" data-k="' + k + '" aria-label="' + (k + 1) + '/' + gal.length + '"></button>'; }).join("") + '</div>';
    }
    h += '</div>';
    if (fits.length) h += '<div class="pd-fits"><span class="pd-fits-h">Fit</span><div class="pd-fits-g">' + fits.map(function(s, k){ return '<button type="button" class="pd-fit" data-f="' + k + '"><img src="' + s + '" alt="' + p.name + ' — fit ' + (k + 1) + '" loading="lazy"></button>'; }).join("") + '</div></div>';
    h += '</div>';
    h += '<aside class="pd-info"><div class="pd-sticky">';
    h += '<a class="pd-crumb" href="index.html#shop">Shop</a>';
    h += '<h1 class="pd-name">' + p.name + '</h1>';
    h += '<div class="pd-price">' + (p.was ? '<s>' + eur(p.was) + '</s> ' : '') + eur(p.price) + '</div>';
    if (v.c) {
      h += '<div class="pd-color"><span>' + T("pd.color") + '</span> <b>' + v.c + '</b></div>';
      if (p.colors.length > 1) h += '<div class="swatches pd-sw">' + p.colors.map(function(x, k){
        return '<button type="button" class="sw' + (k === ci ? ' on' : '') + (x.stock <= 0 ? ' out' : '') + '" data-ci="' + k + '" aria-label="' + x.c + '" title="' + x.c + '" style="--f:' + x.sw[0] + ';--l:' + x.sw[1] + '"></button>'; }).join("") + '</div>';
    }
    var ok = left(p, ci) > 0;
    if (SHOP_OPEN) h += '<button class="pd-add" type="button"' + (ok ? '' : ' disabled') + '>' + (ok ? T("add.short") + T("add.long") : (v.stock <= 0 ? T("soldout") : T("incart"))) + '</button>';
    h += '<ul class="pd-notes"><li>' + T("cart.shipNote") + '</li><li>' + T("cart.returns") + '</li></ul>';
    var d = T("pd." + p.id); if (d !== "pd." + p.id) h += '<p class="pd-desc">' + d + '</p>';
    h += specHTML(p.id);
    h += '<div class="pd-box"><span>' + T("box.h") + '</span><p>' + T("box.t") + '</p></div>';
    if (seen.length) {
      h += '<div class="pd-seen"><div class="pd-seen-h"><span>Campaign lens references</span><a href="pitstop.html">Pit Stop ↗</a></div><div class="pd-seen-g">' +
        seen.map(function(k){ return '<a href="pitstop.html"><img src="c/gaex/pitstop-' + k + '.jpg" alt="Pit Stop — ' + p.name + '" loading="lazy"></a>'; }).join("") + '</div></div>';
    }
    h += '</div></aside>';
    root.innerHTML = h;
    var tr = root.querySelector(".pd-track");
    if (tr) tr.addEventListener("scroll", function(){ syncCar(root); }, { passive: true });
  }
  function syncCar(r){
    var tr = r.querySelector(".pd-track"); if (!tr) return;
    var n = tr.children.length, k = Math.round(tr.scrollLeft / tr.clientWidth);
    r.querySelectorAll(".pd-dots button").forEach(function(d, i){ d.classList.toggle("on", i === k); });
    var pv = r.querySelector(".pd-arr.prev"), nx = r.querySelector(".pd-arr.next");
    if (pv) pv.hidden = k <= 0; if (nx) nx.hidden = k >= n - 1;
  }
  function goSlide(k){ var tr = root.querySelector(".pd-track"); if (tr) tr.scrollTo({ left: tr.clientWidth * k, behavior: "smooth" }); }
  draw();
  root.addEventListener("click", function(e){
    var tr = root.querySelector(".pd-track"), cur = tr ? Math.round(tr.scrollLeft / tr.clientWidth) : 0;
    var dot = e.target.closest(".pd-dots button"); if (dot) { goSlide(+dot.getAttribute("data-k")); return; }
    var ar = e.target.closest(".pd-arr"); if (ar) { goSlide(cur + (ar.classList.contains("next") ? 1 : -1)); return; }
    var ft = e.target.closest(".pd-fit"); if (ft) { fitBox(fitsOf(p), +ft.getAttribute("data-f")); return; }
    var sw = e.target.closest(".sw");
    if (sw) { ci = +sw.getAttribute("data-ci"); draw(); history.replaceState(null, "", pdURL(p.id, ci)); return; }
    var b = e.target.closest(".pd-add");
    if (b && !b.disabled && addToCart(p.id, ci)) { b.textContent = T("add.done"); b.classList.add("done"); setTimeout(draw, 1400); }
  });
}

/* ---------- LOOKBOOK PIT STOP ---------- */
function lookbook(){
  var lb = document.getElementById("lb"); if (!lb) return;
  var vid = document.getElementById("lbVideo");
  if (vid) {
    var mob = window.matchMedia("(max-width:700px)").matches;
    vid.poster = "c/gaex/pitstop-poster-" + (mob ? "v" : "h") + ".jpg";
    vid.src = "c/gaex/pitstop-" + (mob ? "v" : "h") + ".mp4";
    var pb = document.getElementById("lbPause");
    if (pb) pb.addEventListener("click", function(){ if (vid.paused) { vid.play(); pb.classList.remove("off"); } else { vid.pause(); pb.classList.add("off"); } });
  }
  lb.querySelectorAll("[data-pid]").forEach(function(el){
    var p = product(el.getAttribute("data-pid")); if (!p) return;
    el.querySelectorAll(".lb-go").forEach(function(a){ a.href = pdURL(p.id, +(el.getAttribute("data-ci") || 0)); });
    var pr = el.querySelector(".lb-pr"); if (pr) pr.textContent = eur(p.price);
  });
}

document.addEventListener("DOMContentLoaded", function(){ tagFigures(document); renderProduct(); lookbook();
  if (/[?&]all=1/.test(location.search)) { var mb = document.getElementById("moreBtn"), g = document.getElementById("grid");
    if (mb && g && g.classList.contains("collapsed")) mb.click(); var s = document.getElementById("shop"); if (s) setTimeout(function(){ s.scrollIntoView(); }, 50); } });
