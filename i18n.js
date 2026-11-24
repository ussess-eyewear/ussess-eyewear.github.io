/* USSESS — traduzioni (IT / EN / NL / FR) e selettore lingua.
   Va caricato PRIMA di app.js. Per aggiungere una lingua: copia il blocco "en" in STR e in POLICY, traduci, aggiungi il codice in LANGS. */

var LANGS = [
  { code: "it", label: "IT", name: "Italiano" },
  { code: "en", label: "EN", name: "English" },
  { code: "nl", label: "NL", name: "Nederlands" },
  { code: "fr", label: "FR", name: "Français" }
];
var LKEY = "ussess_lang_v1";

var STR = {
  it: {
    "menu.open": "Apri menu", "menu.close": "Chiudi menu", "nav.shop": "Shop", "nav.cart": "Carrello", "nav.contact": "Contatti", "nav.policy": "Resi e policy", "nav.campaign": "Campagna", "camp.kicker": "Ultima campagna", "camp.worn": "Nella campagna", "camp.prev": "Indietro", "camp.next": "Avanti", "camp.text": "Un diner americano, un telefono dorato, una piscina sotto il sole. Pit Stop è la nuova campagna Ussess, fotografata da Gaex Guarin.", "camp.hover": "Passa sulle foto (o toccale) per scoprire gli occhiali.", "lb.p1": "Ussess presenta Pit Stop, la campagna fotografata da Gaex Guarin.", "lb.p2": "Una sosta in un diner americano: booth rossi, tende veneziane, un telefono dorato che continua a squillare. Poi il sole e il blu della piscina. Quattro modelli raccontano la stagione: Brixton Main, Square Milan, Venice X e Wien.", "lb.camp": "Pit Stop passa dalle cromature e dalla pelle rossa di un diner alla luce piena di una piscina d'estate. Ogni foto nasconde un occhiale: passaci sopra per scoprirlo.", "pd.brixton-main": "Cat-eye geometrica in acetato con rivetti dorati.", "pd.square-milan": "Acetato squadrato a più strati, dal profilo deciso.", "pd.venice-x": "Ovale sottile e avvolgente, spirito Y2K.", "pd.wien": "Maschera sportiva a lente unica, linea aerodinamica.", "pd.color": "Colore", "pd.missing": "Prodotto non trovato.", "title.pitstop": "Pit Stop · USSESS",
    "foot.returns": "Resi e rimborsi", "foot.shipping": "Spedizioni", "foot.privacy": "Privacy", "foot.terms": "Termini", "foot.rights": "Tutti i diritti riservati",
    "lang.choose": "Lingua",
    "home.catalog": "Catalogo", "home.models": "{n} modelli", "home.showAll": "Mostra tutto", "home.showLess": "Mostra meno", "home.moreAria": "Mostra tutto il catalogo",
    "f.filter": "Filtra", "f.sort": "Ordina", "f.featured": "In evidenza", "f.priceAsc": "Prezzo più basso", "f.priceDesc": "Prezzo più alto", "f.color": "Colore", "f.price": "Prezzo", "f.p1": "Fino a 25 €", "f.p2": "25–30 €", "f.p3": "Oltre 30 €", "f.reset": "Azzera", "f.none": "Nessun modello con questi filtri.", "f.close": "Chiudi filtri", "c.black": "Nero", "c.silver": "Argento", "c.brown": "Marrone", "c.blue": "Blu", "c.green": "Verde", "c.gold": "Oro", "c.red": "Rosso", "c.orange": "Arancio", "c.pink": "Rosa", "c.cream": "Crema",
    "add.short": "Aggiungi", "add.long": " al carrello", "add.done": "Aggiunto ✓", "soldout": "Esaurito", "incart": "Nel carrello", "fit.aria": "Foto indossata",
    "shop.soon": "Shop online in arrivo. Per ordinare scrivici:",
    "cart.title": "Carrello", "cart.item": "articolo", "cart.items": "articoli", "cart.empty": "Il carrello è vuoto.", "cart.back": "Torna al catalogo",
    "cart.subtotal": "Subtotale", "cart.deliver": "Consegna in", "cart.italy": "Italia", "cart.eu": "Altro paese europeo", "cart.shipping": "Spedizione",
    "cart.shipNote": "Gratuita in Italia. In Europa gratuita sopra 59,99 €.", "cart.total": "Totale", "cart.returns": "Reso entro 14 giorni", "cart.conditions": "Condizioni",
    "cart.sunglasses": "Occhiali da sole", "cart.dec": "Diminuisci", "cart.inc": "Aumenta", "cart.last": "Ultimo pezzo", "cart.remove": "Rimuovi",
    "cart.tbd": "da definire", "cart.free": "Gratuita",
    "pay.missing": "Il pagamento si attiva quando prezzi e spedizione sono definiti.", "pay.soon": "Pagamento con PayPal in attivazione.",
    "pay.secure": "Pagamento sicuro con PayPal o carta.", "pay.preview": "PayPal non si carica in questa anteprima: funziona sul sito online.",
    "pay.error": "Qualcosa non è andato a buon fine con il pagamento. Riprova o scrivici dalla pagina Contatti.",
    "thanks.title": "Grazie.", "thanks.sub": "Ordine ricevuto. Riceverai la conferma via email da PayPal.", "thanks.code": "Codice ordine",
    "contact.title": "Contatti", "contact.sub": "Per ordini, resi o collaborazioni.", "contact.copy": "Copia", "contact.copied": "Copiato", "contact.open": "Apri",
    "contact.reply": "Rispondiamo entro 2 giorni lavorativi.",
    "title.home": "USSESS Eyewear", "title.cart": "Carrello · USSESS", "title.contact": "Contatti · USSESS", "title.policy": "Resi e policy · USSESS"
  },
  en: {
    "menu.open": "Open menu", "menu.close": "Close menu", "nav.shop": "Shop", "nav.cart": "Cart", "nav.contact": "Contact", "nav.policy": "Returns & policy", "nav.campaign": "Campaign", "camp.kicker": "Latest campaign", "camp.worn": "Worn in the campaign", "camp.prev": "Previous", "camp.next": "Next", "camp.text": "An American diner, a golden phone, a pool in the sun. Pit Stop is the new Ussess campaign, photographed by Gaex Guarin.", "camp.hover": "Hover over (or tap) the photos to discover the frames.", "lb.p1": "Ussess presents Pit Stop, a campaign photographed by Gaex Guarin.", "lb.p2": "A stop at an American diner: red booths, venetian blinds, a golden phone that keeps ringing. Then sunlight and the blue of the pool. Four frames tell the season: Brixton Main, Square Milan, Venice X and Wien.", "lb.camp": "Pit Stop moves from the chrome and red leather of a diner to the full light of a summer pool. Every photo hides a frame: hover over it to find out.", "pd.brixton-main": "Geometric acetate cat-eye with gold rivets.", "pd.square-milan": "Layered square acetate with a bold profile.", "pd.venice-x": "Slim wraparound oval with a Y2K spirit.", "pd.wien": "Single-lens sport shield with an aerodynamic line.", "pd.color": "Colour", "pd.missing": "Product not found.", "title.pitstop": "Pit Stop · USSESS",
    "foot.returns": "Returns & refunds", "foot.shipping": "Shipping", "foot.privacy": "Privacy", "foot.terms": "Terms", "foot.rights": "All rights reserved",
    "lang.choose": "Language",
    "home.catalog": "Catalogue", "home.models": "{n} models", "home.showAll": "Show all", "home.showLess": "Show less", "home.moreAria": "Show the full catalogue",
    "f.filter": "Filter", "f.sort": "Sort", "f.featured": "Featured", "f.priceAsc": "Price: low to high", "f.priceDesc": "Price: high to low", "f.color": "Colour", "f.price": "Price", "f.p1": "Up to €25", "f.p2": "€25–30", "f.p3": "Over €30", "f.reset": "Clear all", "f.none": "No models match these filters.", "f.close": "Close filters", "c.black": "Black", "c.silver": "Silver", "c.brown": "Brown", "c.blue": "Blue", "c.green": "Green", "c.gold": "Gold", "c.red": "Red", "c.orange": "Orange", "c.pink": "Pink", "c.cream": "Cream",
    "add.short": "Add", "add.long": " to cart", "add.done": "Added ✓", "soldout": "Sold out", "incart": "In cart", "fit.aria": "Worn photo",
    "shop.soon": "Online shop coming soon. To order, write to us:",
    "cart.title": "Cart", "cart.item": "item", "cart.items": "items", "cart.empty": "Your cart is empty.", "cart.back": "Back to the catalogue",
    "cart.subtotal": "Subtotal", "cart.deliver": "Deliver to", "cart.italy": "Italy", "cart.eu": "Other European country", "cart.shipping": "Shipping",
    "cart.shipNote": "Free in Italy. Free across Europe over €59.99.", "cart.total": "Total", "cart.returns": "14-day returns", "cart.conditions": "Conditions",
    "cart.sunglasses": "Sunglasses", "cart.dec": "Decrease", "cart.inc": "Increase", "cart.last": "Last piece", "cart.remove": "Remove",
    "cart.tbd": "to be confirmed", "cart.free": "Free",
    "pay.missing": "Payment opens once prices and shipping are set.", "pay.soon": "PayPal payment coming soon.",
    "pay.secure": "Secure payment with PayPal or card.", "pay.preview": "PayPal doesn't load in this preview: it works on the live site.",
    "pay.error": "Something went wrong with the payment. Please try again or write to us from the Contact page.",
    "thanks.title": "Thank you.", "thanks.sub": "Order received. PayPal will email you the confirmation.", "thanks.code": "Order number",
    "contact.title": "Contact", "contact.sub": "For orders, returns or collaborations.", "contact.copy": "Copy", "contact.copied": "Copied", "contact.open": "Open",
    "contact.reply": "We reply within 2 working days.",
    "title.home": "USSESS Eyewear", "title.cart": "Cart · USSESS", "title.contact": "Contact · USSESS", "title.policy": "Returns & policy · USSESS"
  },
  nl: {
    "menu.open": "Menu openen", "menu.close": "Menu sluiten", "nav.shop": "Shop", "nav.cart": "Winkelmand", "nav.contact": "Contact", "nav.policy": "Retour & voorwaarden", "nav.campaign": "Campagne", "camp.kicker": "Laatste campagne", "camp.worn": "Gedragen in de campagne", "camp.prev": "Vorige", "camp.next": "Volgende", "camp.text": "Een Amerikaanse diner, een gouden telefoon, een zwembad in de zon. Pit Stop is de nieuwe Ussess-campagne, gefotografeerd door Gaex Guarin.", "camp.hover": "Beweeg over de foto's (of tik erop) om de monturen te ontdekken.", "lb.p1": "Ussess presenteert Pit Stop, een campagne gefotografeerd door Gaex Guarin.", "lb.p2": "Een tussenstop in een Amerikaanse diner: rode banken, jaloezieën, een gouden telefoon die blijft rinkelen. Daarna zon en het blauw van het zwembad. Vier monturen vertellen het seizoen: Brixton Main, Square Milan, Venice X en Wien.", "lb.camp": "Pit Stop gaat van het chroom en rode leer van een diner naar het volle licht van een zomers zwembad. Elke foto verbergt een montuur: beweeg erover om het te ontdekken.", "pd.brixton-main": "Geometrisch cat-eye montuur in acetaat met gouden klinknagels.", "pd.square-milan": "Gelaagd vierkant acetaat met een uitgesproken profiel.", "pd.venice-x": "Smal, omhullend ovaal montuur met een Y2K-vibe.", "pd.wien": "Sportieve shield met één glas en een aerodynamische lijn.", "pd.color": "Kleur", "pd.missing": "Product niet gevonden.", "title.pitstop": "Pit Stop · USSESS",
    "foot.returns": "Retour & terugbetaling", "foot.shipping": "Verzending", "foot.privacy": "Privacy", "foot.terms": "Voorwaarden", "foot.rights": "Alle rechten voorbehouden",
    "lang.choose": "Taal",
    "home.catalog": "Catalogus", "home.models": "{n} modellen", "home.showAll": "Alles tonen", "home.showLess": "Minder tonen", "home.moreAria": "Toon de volledige catalogus",
    "f.filter": "Filteren", "f.sort": "Sorteren", "f.featured": "Uitgelicht", "f.priceAsc": "Prijs: laag naar hoog", "f.priceDesc": "Prijs: hoog naar laag", "f.color": "Kleur", "f.price": "Prijs", "f.p1": "Tot €25", "f.p2": "€25–30", "f.p3": "Boven €30", "f.reset": "Wissen", "f.none": "Geen modellen met deze filters.", "f.close": "Filters sluiten", "c.black": "Zwart", "c.silver": "Zilver", "c.brown": "Bruin", "c.blue": "Blauw", "c.green": "Groen", "c.gold": "Goud", "c.red": "Rood", "c.orange": "Oranje", "c.pink": "Roze", "c.cream": "Crème",
    "add.short": "Toevoegen", "add.long": " aan winkelmand", "add.done": "Toegevoegd ✓", "soldout": "Uitverkocht", "incart": "In winkelmand", "fit.aria": "Gedragen foto",
    "shop.soon": "Onlineshop komt eraan. Bestellen? Schrijf ons:",
    "cart.title": "Winkelmand", "cart.item": "artikel", "cart.items": "artikelen", "cart.empty": "Je winkelmand is leeg.", "cart.back": "Terug naar de catalogus",
    "cart.subtotal": "Subtotaal", "cart.deliver": "Levering in", "cart.italy": "Italië", "cart.eu": "Ander Europees land", "cart.shipping": "Verzending",
    "cart.shipNote": "Gratis in Italië. Gratis in Europa vanaf € 59,99.", "cart.total": "Totaal", "cart.returns": "14 dagen retour", "cart.conditions": "Voorwaarden",
    "cart.sunglasses": "Zonnebril", "cart.dec": "Minder", "cart.inc": "Meer", "cart.last": "Laatste stuk", "cart.remove": "Verwijderen",
    "cart.tbd": "nog te bepalen", "cart.free": "Gratis",
    "pay.missing": "Betalen kan zodra prijzen en verzending vastliggen.", "pay.soon": "Betalen met PayPal komt eraan.",
    "pay.secure": "Veilig betalen met PayPal of kaart.", "pay.preview": "PayPal laadt niet in deze preview: het werkt op de live site.",
    "pay.error": "Er ging iets mis met de betaling. Probeer opnieuw of schrijf ons via de pagina Contact.",
    "thanks.title": "Bedankt.", "thanks.sub": "Bestelling ontvangen. Je krijgt de bevestiging per e-mail van PayPal.", "thanks.code": "Bestelnummer",
    "contact.title": "Contact", "contact.sub": "Voor bestellingen, retouren of samenwerkingen.", "contact.copy": "Kopiëren", "contact.copied": "Gekopieerd", "contact.open": "Openen",
    "contact.reply": "We antwoorden binnen 2 werkdagen.",
    "title.home": "USSESS Eyewear", "title.cart": "Winkelmand · USSESS", "title.contact": "Contact · USSESS", "title.policy": "Retour & voorwaarden · USSESS"
  },
  fr: {
    "menu.open": "Ouvrir le menu", "menu.close": "Fermer le menu", "nav.shop": "Shop", "nav.cart": "Panier", "nav.contact": "Contact", "nav.policy": "Retours & conditions", "nav.campaign": "Campagne", "camp.kicker": "Dernière campagne", "camp.worn": "Portés dans la campagne", "camp.prev": "Précédent", "camp.next": "Suivant", "camp.text": "Un diner américain, un téléphone doré, une piscine au soleil. Pit Stop est la nouvelle campagne Ussess, photographiée par Gaex Guarin.", "camp.hover": "Survolez (ou touchez) les photos pour découvrir les montures.", "lb.p1": "Ussess présente Pit Stop, une campagne photographiée par Gaex Guarin.", "lb.p2": "Une halte dans un diner américain : banquettes rouges, stores vénitiens, un téléphone doré qui n'arrête pas de sonner. Puis le soleil et le bleu de la piscine. Quatre montures racontent la saison : Brixton Main, Square Milan, Venice X et Wien.", "lb.camp": "Pit Stop passe du chrome et du cuir rouge d'un diner à la pleine lumière d'une piscine d'été. Chaque photo cache une monture : survolez-la pour la découvrir.", "pd.brixton-main": "Cat-eye géométrique en acétate, rivets dorés.", "pd.square-milan": "Acétate carré en couches, au profil affirmé.", "pd.venice-x": "Ovale fin et enveloppant, esprit Y2K.", "pd.wien": "Masque sport à verre unique, ligne aérodynamique.", "pd.color": "Couleur", "pd.missing": "Produit introuvable.", "title.pitstop": "Pit Stop · USSESS",
    "foot.returns": "Retours & remboursements", "foot.shipping": "Livraison", "foot.privacy": "Confidentialité", "foot.terms": "Conditions", "foot.rights": "Tous droits réservés",
    "lang.choose": "Langue",
    "home.catalog": "Catalogue", "home.models": "{n} modèles", "home.showAll": "Tout afficher", "home.showLess": "Afficher moins", "home.moreAria": "Afficher tout le catalogue",
    "f.filter": "Filtrer", "f.sort": "Trier", "f.featured": "En vedette", "f.priceAsc": "Prix croissant", "f.priceDesc": "Prix décroissant", "f.color": "Couleur", "f.price": "Prix", "f.p1": "Jusqu'à 25 €", "f.p2": "25–30 €", "f.p3": "Plus de 30 €", "f.reset": "Effacer", "f.none": "Aucun modèle ne correspond à ces filtres.", "f.close": "Fermer les filtres", "c.black": "Noir", "c.silver": "Argent", "c.brown": "Marron", "c.blue": "Bleu", "c.green": "Vert", "c.gold": "Or", "c.red": "Rouge", "c.orange": "Orange", "c.pink": "Rose", "c.cream": "Crème",
    "add.short": "Ajouter", "add.long": " au panier", "add.done": "Ajouté ✓", "soldout": "Épuisé", "incart": "Dans le panier", "fit.aria": "Photo portée",
    "shop.soon": "Boutique en ligne bientôt disponible. Pour commander, écrivez-nous :",
    "cart.title": "Panier", "cart.item": "article", "cart.items": "articles", "cart.empty": "Votre panier est vide.", "cart.back": "Retour au catalogue",
    "cart.subtotal": "Sous-total", "cart.deliver": "Livraison en", "cart.italy": "Italie", "cart.eu": "Autre pays européen", "cart.shipping": "Livraison",
    "cart.shipNote": "Gratuite en Italie. Gratuite en Europe dès 59,99 €.", "cart.total": "Total", "cart.returns": "Retour sous 14 jours", "cart.conditions": "Conditions",
    "cart.sunglasses": "Lunettes de soleil", "cart.dec": "Diminuer", "cart.inc": "Augmenter", "cart.last": "Dernière pièce", "cart.remove": "Retirer",
    "cart.tbd": "à définir", "cart.free": "Gratuite",
    "pay.missing": "Le paiement s'active une fois les prix et la livraison définis.", "pay.soon": "Paiement PayPal bientôt disponible.",
    "pay.secure": "Paiement sécurisé par PayPal ou carte.", "pay.preview": "PayPal ne se charge pas dans cet aperçu : il fonctionne sur le site en ligne.",
    "pay.error": "Un problème est survenu avec le paiement. Réessayez ou écrivez-nous depuis la page Contact.",
    "thanks.title": "Merci.", "thanks.sub": "Commande reçue. PayPal vous enverra la confirmation par e-mail.", "thanks.code": "Numéro de commande",
    "contact.title": "Contact", "contact.sub": "Pour les commandes, retours ou collaborations.", "contact.copy": "Copier", "contact.copied": "Copié", "contact.open": "Ouvrir",
    "contact.reply": "Nous répondons sous 2 jours ouvrables.",
    "title.home": "USSESS Eyewear", "title.cart": "Panier · USSESS", "title.contact": "Contact · USSESS", "title.policy": "Retours & conditions · USSESS"
  }
};

var MAIL = '<a href="mailto:ussesseyewear@gmail.com" style="text-decoration:underline">ussesseyewear@gmail.com</a>';

var POLICY = {
it: `<h1>Resi e policy</h1>
<p class="sub">Ultimo aggiornamento: 22 novembre 2026</p>
<ul class="toc">
  <li><a href="#spedizioni">Spedizioni</a></li><li><a href="#pagamenti">Pagamenti</a></li><li><a href="#resi">Resi e rimborsi</a></li><li><a href="#garanzia">Garanzia</a></li>
  <li><a href="#privacy">Privacy</a></li><li><a href="#cookie">Cookie</a></li><li><a href="#termini">Termini</a></li><li><a href="#reclami">Reclami</a></li>
</ul>
<h2 id="spedizioni">Spedizioni</h2>
<p>Spediamo in Italia e in Europa. L'ordine parte entro 24/48h lavorative dal pagamento e arriva di solito in 2–4 giorni lavorativi in Italia e a partire da 5 giorni lavorativi nel resto d'Europa.</p>
<p>La spedizione è gratuita in Italia. Nel resto d'Europa è gratuita per ordini sopra 59,99 €; sotto questa soglia il costo viene calcolato al checkout.</p>
<h2 id="pagamenti">Pagamenti</h2>
<p>Paghi con PayPal o con carta tramite PayPal. I dati della carta li gestisce PayPal: noi non li vediamo e non li conserviamo. I prezzi sono in euro, IVA inclusa.</p>
<h2 id="resi">Resi e rimborsi</h2>
<p>Hai <strong>14 giorni</strong> dalla consegna per recedere dall'acquisto senza dare spiegazioni.</p>
<ol>
  <li>Comunicacelo per email a ${MAIL}, indicando nome e numero d'ordine.</li>
  <li>Rispediscici il prodotto entro 14 giorni dalla comunicazione, integro e con la confezione originale. Il costo del reso è a carico del cliente.</li>
  <li>Ti rimborsiamo entro 14 giorni da quando riceviamo la tua comunicazione, con lo stesso metodo di pagamento, comprese le spese di spedizione standard dell'ordine. Possiamo attendere il rimborso finché il prodotto non ci arriva o finché non ci mandi la prova di spedizione.</li>
</ol>
<p>Se il prodotto torna usato oltre quanto serve per provarlo, possiamo trattenere una parte del rimborso pari alla perdita di valore.</p>
<h2 id="garanzia">Garanzia</h2>
<p>Tutti i prodotti hanno la garanzia legale di conformità di <strong>2 anni</strong> dalla consegna. Se un prodotto è difettoso scrivici con una foto del problema: lo ripariamo, lo sostituiamo o ti rimborsiamo.</p>
<h2 id="privacy">Privacy</h2>
<p>Titolare del trattamento: ussesseyewear, email ${MAIL}. In breve: usiamo solo i dati che servono a spedirti l'ordine e non li vendiamo a nessuno.</p>
<div class="pv">
  <section class="pv-b"><h3>Quali dati</h3><p>Nome, indirizzo di consegna, email ed eventualmente telefono, più i dettagli dell'ordine (prodotti, importi, data). Li riceviamo da PayPal quando paghi o direttamente da te quando ci scrivi. Non vediamo né conserviamo i dati della tua carta.</p></section>
  <section class="pv-b"><h3>Perché</h3><p>Per evadere e spedire l'ordine, gestire resi, garanzia e assistenza, e rispettare gli obblighi contabili e fiscali. La base giuridica è il contratto di vendita e gli obblighi di legge. Niente pubblicità né profilazione senza il tuo consenso.</p></section>
  <section class="pv-b"><h3>Con chi li condividiamo</h3><p>Solo con chi ci serve per completare l'ordine: PayPal per il pagamento, il corriere per la consegna (nome, indirizzo, telefono) ed eventualmente il commercialista per gli obblighi fiscali. Le email passano da Gmail. Alcuni di questi fornitori possono trattare dati fuori dall'UE con le garanzie previste dal GDPR. Non vendiamo né cediamo i tuoi dati.</p></section>
  <section class="pv-b"><h3>Per quanto tempo</h3><p>I dati degli ordini e delle fatture li conserviamo per il periodo richiesto dalla legge contabile e fiscale belga (oggi 7 anni). Le email senza ordine al massimo 2 anni dall'ultimo contatto. Il carrello resta solo nel tuo browser finché non lo svuoti. Scaduti questi termini, cancelliamo tutto.</p></section>
  <section class="pv-b"><h3>I tuoi diritti</h3><p>Puoi chiederci in qualsiasi momento di vedere, correggere, <strong>cancellare</strong> o ricevere in copia i tuoi dati, oppure di limitarne l'uso o di opporti. Scrivi a ${MAIL}: rispondiamo entro un mese e cancelliamo subito tutto ciò che la legge non ci obbliga a conservare. Puoi anche presentare reclamo all'Autorità per la protezione dei dati belga (dataprotectionauthority.be) o a quella del tuo paese.</p></section>
</div>
<h2 id="cookie">Cookie</h2>
<p>Il sito non usa cookie di profilazione. Contiamo le visite in forma anonima e aggregata con Cloudflare Web Analytics, che non usa cookie. Il carrello e la lingua scelta restano salvati solo nel tuo browser. Quando paghi, PayPal può usare i suoi cookie secondo la propria informativa.</p>
<h2 id="termini">Termini e condizioni</h2>
<ul>
  <li>Il contratto di vendita si conclude quando il pagamento va a buon fine e ricevi la conferma dell'ordine.</li>
  <li>Il prezzo valido è quello mostrato al momento dell'ordine, IVA inclusa. Le spese di spedizione sono indicate prima del pagamento.</li>
  <li>Se un prodotto non è più disponibile dopo il pagamento, ti avvisiamo e ti rimborsiamo per intero.</li>
  <li>Si applica la legge belga, senza togliere le tutele del paese in cui vivi come consumatore.</li>
</ul>
<h2 id="reclami">Reclami</h2>
<p>Per qualsiasi problema scrivici a ${MAIL}: cerchiamo sempre una soluzione diretta.</p>`,

en: `<h1>Returns &amp; policy</h1>
<p class="sub">Last updated: 22 November 2026</p>
<ul class="toc">
  <li><a href="#spedizioni">Shipping</a></li><li><a href="#pagamenti">Payments</a></li><li><a href="#resi">Returns</a></li><li><a href="#garanzia">Warranty</a></li>
  <li><a href="#privacy">Privacy</a></li><li><a href="#cookie">Cookies</a></li><li><a href="#termini">Terms</a></li><li><a href="#reclami">Complaints</a></li>
</ul>
<h2 id="spedizioni">Shipping</h2>
<p>We ship to Italy and across Europe. Orders leave within 24–48 working hours of payment and usually arrive in 2–4 working days in Italy and from 5 working days in the rest of Europe.</p>
<p>Shipping is free in Italy. In the rest of Europe it is free for orders over €59.99; below that, the cost is calculated at checkout.</p>
<h2 id="pagamenti">Payments</h2>
<p>Pay with PayPal or by card through PayPal. Card details are handled by PayPal: we never see or store them. Prices are in euro, VAT included.</p>
<h2 id="resi">Returns &amp; refunds</h2>
<p>You have <strong>14 days</strong> from delivery to cancel your purchase without giving a reason.</p>
<ol>
  <li>Tell us by email at ${MAIL}, with your name and order number.</li>
  <li>Send the product back within 14 days of telling us, intact and in its original packaging. Return shipping is paid by the customer.</li>
  <li>We refund you within 14 days of receiving your request, using the same payment method, including the standard shipping cost of the order. We may wait to refund until the product reaches us or you send proof of shipment.</li>
</ol>
<p>If the product comes back used beyond what's needed to try it on, we may deduct the loss in value from the refund.</p>
<h2 id="garanzia">Warranty</h2>
<p>All products carry the <strong>2-year</strong> legal guarantee of conformity from delivery. If a product is faulty, write to us with a photo of the problem: we'll repair it, replace it or refund you.</p>
<h2 id="privacy">Privacy</h2>
<p>Data controller: ussesseyewear, email ${MAIL}. In short: we only use the data we need to ship your order, and we never sell it.</p>
<div class="pv">
  <section class="pv-b"><h3>What data</h3><p>Name, delivery address, email and, if you give it, phone number, plus your order details (products, amounts, date). We receive them from PayPal when you pay, or from you when you write to us. We never see or store your card details.</p></section>
  <section class="pv-b"><h3>Why</h3><p>To process and ship your order, handle returns, warranty and support, and meet our accounting and tax obligations. The legal basis is the sales contract and our legal obligations. No advertising or profiling without your consent.</p></section>
  <section class="pv-b"><h3>Who we share it with</h3><p>Only those we need to complete your order: PayPal for payment, the courier for delivery (name, address, phone) and, where needed, our accountant for tax obligations. Emails go through Gmail. Some of these providers may process data outside the EU with the safeguards required by the GDPR. We never sell or hand over your data.</p></section>
  <section class="pv-b"><h3>How long we keep it</h3><p>Order and invoice data are kept for the period required by Belgian accounting and tax law (currently 7 years). Emails without an order, at most 2 years after the last contact. Your cart stays only in your browser until you empty it. After that, everything is deleted.</p></section>
  <section class="pv-b"><h3>Your rights</h3><p>You can ask us at any time to see, correct, <strong>delete</strong> or receive a copy of your data, or to restrict or object to its use. Write to ${MAIL}: we reply within one month and immediately delete anything the law doesn't require us to keep. You can also lodge a complaint with the Belgian Data Protection Authority (dataprotectionauthority.be) or the authority in your country.</p></section>
</div>
<h2 id="cookie">Cookies</h2>
<p>This site uses no profiling cookies. We count visits anonymously and in aggregate with Cloudflare Web Analytics, which uses no cookies. Your cart and chosen language are saved only in your browser. When you pay, PayPal may use its own cookies under its own policy.</p>
<h2 id="termini">Terms &amp; conditions</h2>
<ul>
  <li>The sales contract is concluded when payment succeeds and you receive the order confirmation.</li>
  <li>The valid price is the one shown when you order, VAT included. Shipping costs are shown before payment.</li>
  <li>If a product is no longer available after payment, we'll let you know and refund you in full.</li>
  <li>Belgian law applies, without removing the protections of the country where you live as a consumer.</li>
</ul>
<h2 id="reclami">Complaints</h2>
<p>For any issue, write to us at ${MAIL}: we always look for a direct solution.</p>`,

nl: `<h1>Retour &amp; voorwaarden</h1>
<p class="sub">Laatst bijgewerkt: 22 november 2026</p>
<ul class="toc">
  <li><a href="#spedizioni">Verzending</a></li><li><a href="#pagamenti">Betalen</a></li><li><a href="#resi">Retour</a></li><li><a href="#garanzia">Garantie</a></li>
  <li><a href="#privacy">Privacy</a></li><li><a href="#cookie">Cookies</a></li><li><a href="#termini">Voorwaarden</a></li><li><a href="#reclami">Klachten</a></li>
</ul>
<h2 id="spedizioni">Verzending</h2>
<p>We verzenden naar Italië en heel Europa. Je bestelling vertrekt binnen 24–48 werkuren na betaling en komt meestal aan binnen 2–4 werkdagen in Italië en vanaf 5 werkdagen in de rest van Europa.</p>
<p>Verzending is gratis in Italië. In de rest van Europa is ze gratis vanaf € 59,99; daaronder worden de kosten berekend bij het afrekenen.</p>
<h2 id="pagamenti">Betalen</h2>
<p>Je betaalt met PayPal of met je kaart via PayPal. Je kaartgegevens worden door PayPal verwerkt: wij zien of bewaren ze niet. Prijzen zijn in euro, inclusief btw.</p>
<h2 id="resi">Retour &amp; terugbetaling</h2>
<p>Je hebt <strong>14 dagen</strong> na levering om je aankoop zonder opgave van reden te herroepen.</p>
<ol>
  <li>Laat het ons weten per e-mail via ${MAIL}, met je naam en bestelnummer.</li>
  <li>Stuur het product binnen 14 dagen na je melding terug, onbeschadigd en in de originele verpakking. De retourkosten zijn voor de klant.</li>
  <li>We betalen je terug binnen 14 dagen na ontvangst van je melding, via dezelfde betaalmethode, inclusief de standaard verzendkosten van de bestelling. We mogen wachten met terugbetalen tot het product bij ons is of tot je een verzendbewijs stuurt.</li>
</ol>
<p>Komt het product terug met meer gebruik dan nodig om het te passen, dan mogen we de waardevermindering inhouden.</p>
<h2 id="garanzia">Garantie</h2>
<p>Alle producten hebben de wettelijke conformiteitsgarantie van <strong>2 jaar</strong> vanaf levering. Is een product defect, stuur ons dan een foto van het probleem: we herstellen het, vervangen het of betalen je terug.</p>
<h2 id="privacy">Privacy</h2>
<p>Verwerkingsverantwoordelijke: ussesseyewear, e-mail ${MAIL}. Kort gezegd: we gebruiken alleen de gegevens die nodig zijn om je bestelling te versturen, en we verkopen ze nooit.</p>
<div class="pv">
  <section class="pv-b"><h3>Welke gegevens</h3><p>Naam, leveringsadres, e-mail en eventueel telefoonnummer, plus de details van je bestelling (producten, bedragen, datum). We krijgen ze van PayPal wanneer je betaalt, of van jou wanneer je ons schrijft. Je kaartgegevens zien of bewaren we nooit.</p></section>
  <section class="pv-b"><h3>Waarom</h3><p>Om je bestelling te verwerken en te verzenden, retouren, garantie en vragen af te handelen, en onze boekhoudkundige en fiscale verplichtingen na te komen. De rechtsgrond is de koopovereenkomst en onze wettelijke verplichtingen. Geen reclame of profilering zonder je toestemming.</p></section>
  <section class="pv-b"><h3>Met wie we ze delen</h3><p>Alleen met wie we nodig hebben om je bestelling af te ronden: PayPal voor de betaling, de koerier voor de levering (naam, adres, telefoon) en zo nodig onze boekhouder voor fiscale verplichtingen. E-mails lopen via Gmail. Sommige van deze leveranciers kunnen gegevens buiten de EU verwerken, met de waarborgen die de AVG vereist. We verkopen of geven je gegevens nooit door.</p></section>
  <section class="pv-b"><h3>Hoe lang</h3><p>Bestel- en factuurgegevens bewaren we zolang de Belgische boekhoud- en belastingwetgeving vereist (momenteel 7 jaar). E-mails zonder bestelling maximaal 2 jaar na het laatste contact. Je winkelmand blijft alleen in je browser tot je hem leegmaakt. Daarna wordt alles verwijderd.</p></section>
  <section class="pv-b"><h3>Je rechten</h3><p>Je kunt ons op elk moment vragen je gegevens in te zien, te corrigeren, te <strong>wissen</strong> of er een kopie van te krijgen, of het gebruik ervan te beperken of je ertegen te verzetten. Schrijf naar ${MAIL}: we antwoorden binnen een maand en wissen meteen alles wat we wettelijk niet hoeven te bewaren. Je kunt ook klacht indienen bij de Gegevensbeschermingsautoriteit (gegevensbeschermingsautoriteit.be) of bij de autoriteit in je eigen land.</p></section>
</div>
<h2 id="cookie">Cookies</h2>
<p>Deze site gebruikt geen profileringscookies. We tellen bezoeken anoniem en geaggregeerd met Cloudflare Web Analytics, zonder cookies. Je winkelmand en gekozen taal worden alleen in je browser bewaard. Bij het betalen kan PayPal eigen cookies gebruiken volgens zijn eigen beleid.</p>
<h2 id="termini">Algemene voorwaarden</h2>
<ul>
  <li>De koopovereenkomst komt tot stand wanneer de betaling slaagt en je de orderbevestiging ontvangt.</li>
  <li>De geldende prijs is die bij het bestellen, inclusief btw. Verzendkosten worden vóór de betaling getoond.</li>
  <li>Is een product na betaling niet meer beschikbaar, dan laten we het je weten en betalen we je volledig terug.</li>
  <li>Het Belgisch recht is van toepassing, zonder afbreuk aan de bescherming die je als consument in je eigen land geniet.</li>
</ul>
<h2 id="reclami">Klachten</h2>
<p>Voor elk probleem kun je ons schrijven via ${MAIL}: we zoeken altijd een rechtstreekse oplossing.</p>`,

fr: `<h1>Retours &amp; conditions</h1>
<p class="sub">Dernière mise à jour : 22 novembre 2026</p>
<ul class="toc">
  <li><a href="#spedizioni">Livraison</a></li><li><a href="#pagamenti">Paiement</a></li><li><a href="#resi">Retours</a></li><li><a href="#garanzia">Garantie</a></li>
  <li><a href="#privacy">Confidentialité</a></li><li><a href="#cookie">Cookies</a></li><li><a href="#termini">Conditions</a></li><li><a href="#reclami">Réclamations</a></li>
</ul>
<h2 id="spedizioni">Livraison</h2>
<p>Nous livrons en Italie et dans toute l'Europe. La commande part dans les 24–48 heures ouvrables après le paiement et arrive en général en 2–4 jours ouvrables en Italie et à partir de 5 jours ouvrables dans le reste de l'Europe.</p>
<p>La livraison est gratuite en Italie. Dans le reste de l'Europe, elle est gratuite dès 59,99 € ; en dessous, le coût est calculé au moment du paiement.</p>
<h2 id="pagamenti">Paiement</h2>
<p>Vous payez avec PayPal ou par carte via PayPal. Les données de carte sont gérées par PayPal : nous ne les voyons pas et ne les conservons pas. Les prix sont en euros, TVA comprise.</p>
<h2 id="resi">Retours &amp; remboursements</h2>
<p>Vous disposez de <strong>14 jours</strong> à compter de la livraison pour vous rétracter sans donner de motif.</p>
<ol>
  <li>Prévenez-nous par e-mail à ${MAIL}, avec votre nom et votre numéro de commande.</li>
  <li>Renvoyez-nous le produit dans les 14 jours suivant votre demande, intact et dans son emballage d'origine. Les frais de retour sont à la charge du client.</li>
  <li>Nous vous remboursons dans les 14 jours suivant la réception de votre demande, par le même moyen de paiement, frais de livraison standard de la commande compris. Nous pouvons attendre d'avoir reçu le produit ou une preuve d'expédition avant de rembourser.</li>
</ol>
<p>Si le produit revient utilisé au-delà de ce qui est nécessaire pour l'essayer, nous pouvons retenir la perte de valeur sur le remboursement.</p>
<h2 id="garanzia">Garantie</h2>
<p>Tous les produits bénéficient de la garantie légale de conformité de <strong>2 ans</strong> à compter de la livraison. Si un produit est défectueux, écrivez-nous avec une photo du problème : nous le réparons, le remplaçons ou vous remboursons.</p>
<h2 id="privacy">Confidentialité</h2>
<p>Responsable du traitement : ussesseyewear, e-mail ${MAIL}. En bref : nous n'utilisons que les données nécessaires pour vous livrer, et nous ne les vendons jamais.</p>
<div class="pv">
  <section class="pv-b"><h3>Quelles données</h3><p>Nom, adresse de livraison, e-mail et éventuellement téléphone, ainsi que les détails de votre commande (produits, montants, date). Nous les recevons de PayPal lors du paiement, ou de vous lorsque vous nous écrivez. Nous ne voyons ni ne conservons jamais vos données de carte.</p></section>
  <section class="pv-b"><h3>Pourquoi</h3><p>Pour traiter et expédier votre commande, gérer les retours, la garantie et le service client, et respecter nos obligations comptables et fiscales. La base légale est le contrat de vente et nos obligations légales. Aucune publicité ni profilage sans votre consentement.</p></section>
  <section class="pv-b"><h3>Avec qui nous les partageons</h3><p>Uniquement avec ceux dont nous avons besoin pour finaliser la commande : PayPal pour le paiement, le transporteur pour la livraison (nom, adresse, téléphone) et, si nécessaire, notre comptable pour les obligations fiscales. Les e-mails passent par Gmail. Certains de ces prestataires peuvent traiter des données hors de l'UE, avec les garanties prévues par le RGPD. Nous ne vendons ni ne cédons jamais vos données.</p></section>
  <section class="pv-b"><h3>Combien de temps</h3><p>Les données de commandes et de factures sont conservées pendant la durée imposée par la loi comptable et fiscale belge (actuellement 7 ans). Les e-mails sans commande, au maximum 2 ans après le dernier contact. Votre panier reste uniquement dans votre navigateur jusqu'à ce que vous le vidiez. Ensuite, tout est supprimé.</p></section>
  <section class="pv-b"><h3>Vos droits</h3><p>Vous pouvez à tout moment nous demander de consulter, corriger, <strong>supprimer</strong> ou recevoir une copie de vos données, ou d'en limiter l'usage ou de vous y opposer. Écrivez à ${MAIL} : nous répondons sous un mois et supprimons immédiatement tout ce que la loi ne nous oblige pas à conserver. Vous pouvez aussi introduire une plainte auprès de l'Autorité de protection des données belge (autoriteprotectiondonnees.be) ou de l'autorité de votre pays.</p></section>
</div>
<h2 id="cookie">Cookies</h2>
<p>Ce site n'utilise aucun cookie de profilage. Nous comptons les visites de façon anonyme et agrégée avec Cloudflare Web Analytics, sans cookies. Votre panier et la langue choisie sont enregistrés uniquement dans votre navigateur. Lors du paiement, PayPal peut utiliser ses propres cookies selon sa politique.</p>
<h2 id="termini">Conditions générales</h2>
<ul>
  <li>Le contrat de vente est conclu lorsque le paiement aboutit et que vous recevez la confirmation de commande.</li>
  <li>Le prix valable est celui affiché au moment de la commande, TVA comprise. Les frais de livraison sont indiqués avant le paiement.</li>
  <li>Si un produit n'est plus disponible après le paiement, nous vous prévenons et vous remboursons intégralement.</li>
  <li>Le droit belge s'applique, sans retirer les protections du pays où vous vivez en tant que consommateur.</li>
</ul>
<h2 id="reclami">Réclamations</h2>
<p>Pour tout problème, écrivez-nous à ${MAIL} : nous cherchons toujours une solution directe.</p>`
};

/* ---------- motore ---------- */
function detectLang(){
  var s = null; try { s = localStorage.getItem(LKEY); } catch(e){}
  if (s && STR[s]) return s;
  var list = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"]);
  for (var i = 0; i < list.length; i++){ var c = String(list[i]).slice(0,2).toLowerCase(); if (STR[c]) return c; }
  return "en";
}
var LANG = detectLang();
function T(key, vars){
  var s = (STR[LANG] && STR[LANG][key]) || STR.it[key] || key;
  if (vars) for (var k in vars) s = s.replace("{" + k + "}", vars[k]);
  return s;
}
function setLang(code){ try { localStorage.setItem(LKEY, code); } catch(e){} location.reload(); }

/* testi fissi delle pagine: [selettore, chiave, attributo (facoltativo)] */
var I18N_MAP = [
  [".site-header > .ibtn:first-child", "menu.open", "aria-label"], [".cart-link", "nav.cart", "aria-label"], [".drawer .close", "menu.close", "aria-label"],
  ['.drawer a[href$="#shop"]', "nav.shop"], ['.drawer a[href="cart.html"]', "nav.cart"], ['.drawer a[href="contatti.html"]', "nav.contact"], ['.drawer a[href="policy.html"]', "nav.policy"],
  ['.site-footer a[href="contatti.html"]', "nav.contact"], ['.site-footer a[href$="#resi"]', "foot.returns"], ['.site-footer a[href$="#spedizioni"]', "foot.shipping"],
  ['.site-footer a[href$="#privacy"]', "foot.privacy"], ['.site-footer a[href$="#termini"]', "foot.terms"],
  ["#shop h2", "home.catalog"], ["#fbtnLabel", "f.filter"], ['.drawer a[href="pitstop.html"]', "nav.campaign"], ["#campKicker", "camp.kicker"], ["#campWorn", "camp.worn"], ["#campPrev", "camp.prev", "aria-label"], ["#campNext", "camp.next", "aria-label"], ["#moreLabel", "home.showAll"], ["#moreBtn", "home.moreAria", "aria-label"],
  ['label[for="dest"]', "cart.deliver"], ['#dest option[value="it"]', "cart.italy"], ['#dest option[value="eu"]', "cart.eu"], ["#shipNote", "cart.shipNote"],
  [".copy[onclick]", "contact.copy"], ["a.copy", "contact.open"]
];
function applyI18n(){
  document.documentElement.lang = LANG;
  var page = (location.pathname.split("/").pop() || "index.html").replace(".html", "") || "index";
  var titles = { index: "title.home", cart: "title.cart", contatti: "title.contact", policy: "title.policy", pitstop: "title.pitstop" };
  if (titles[page]) document.title = T(titles[page]);
  document.querySelectorAll("[data-t]").forEach(function(el){ el.textContent = T(el.getAttribute("data-t")); });
  I18N_MAP.forEach(function(m){
    document.querySelectorAll(m[0]).forEach(function(el){ if (m[2]) el.setAttribute(m[2], T(m[1])); else el.textContent = T(m[1]); });
  });
  var fc = document.querySelector(".f-copy");
  if (fc) fc.innerHTML = '© <span id="year">' + new Date().getFullYear() + '</span> Ussess — ' + T("foot.rights");
  var main = document.querySelector("main.page");
  if (main && page === "policy" && POLICY[LANG]) main.innerHTML = POLICY[LANG];
  if (main && page === "cart") {
    var h1 = main.querySelector("h1"); if (h1) h1.textContent = T("cart.title");
    var em = document.getElementById("empty"); if (em) em.innerHTML = T("cart.empty") + ' <a href="index.html#shop">' + T("cart.back") + "</a>";
    var rows = main.querySelectorAll(".summary .row");
    if (rows[0]) rows[0].firstElementChild.textContent = T("cart.subtotal");
    if (rows[2]) rows[2].firstElementChild.textContent = T("cart.shipping");
    if (rows[3]) rows[3].firstElementChild.textContent = T("cart.total");
    var notes = main.querySelectorAll("#pay .pay-note"); var last = notes[notes.length - 1];
    if (last && !last.id) last.innerHTML = T("cart.returns") + ' · <a href="policy.html#resi" style="text-decoration:underline">' + T("cart.conditions") + "</a>";
  }
  if (main && page === "contatti") {
    var h = main.querySelector("h1"); if (h) h.textContent = T("contact.title");
    var sb = main.querySelector(".sub"); if (sb) sb.textContent = T("contact.sub");
    var ps = main.querySelectorAll(":scope > p"); var lp = ps[ps.length - 1]; if (lp) lp.textContent = T("contact.reply");
  }
  buildSwitcher();
}

/* selettore lingua: pillola semitrasparente nell'header, accanto al carrello */
function buildSwitcher(){
  var header = document.querySelector(".site-header"), cart = header && header.querySelector(".cart-link");
  if (!cart || document.querySelector(".lang")) return;
  var wrap = document.createElement("div"); wrap.className = "h-right";
  cart.parentNode.insertBefore(wrap, cart); wrap.appendChild(buildLangEl()); wrap.appendChild(cart);
}
function buildLangEl(){
  var cur = LANGS.filter(function(l){ return l.code === LANG; })[0] || LANGS[0];
  var box = document.createElement("div"); box.className = "lang";
  var h = '<button type="button" class="lang-btn" aria-haspopup="listbox" aria-expanded="false" aria-label="' + T("lang.choose") + ': ' + cur.name + '">' + cur.label + '<svg viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4"/></svg></button><ul class="lang-menu" role="listbox" hidden>';
  LANGS.forEach(function(l){ h += '<li><button type="button" role="option" data-l="' + l.code + '"' + (l.code === LANG ? ' aria-selected="true" class="on"' : "") + '><b>' + l.label + '</b><span>' + l.name + '</span></button></li>'; });
  box.innerHTML = h + "</ul>";
  var btn = box.querySelector(".lang-btn"), menu = box.querySelector(".lang-menu");
  function toggle(open){ menu.hidden = !open; btn.setAttribute("aria-expanded", open ? "true" : "false"); }
  btn.addEventListener("click", function(e){ e.stopPropagation(); toggle(menu.hidden); });
  menu.addEventListener("click", function(e){ var b = e.target.closest("button[data-l]"); if (!b) return; var c = b.getAttribute("data-l"); toggle(false); if (c !== LANG) setLang(c); });
  document.addEventListener("click", function(){ toggle(false); });
  document.addEventListener("keydown", function(e){ if (e.key === "Escape") toggle(false); });
  return box;
}

document.addEventListener("DOMContentLoaded", applyI18n);
