/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                      LANGUAGE DETECTOR MODULE                                 ║
 * ║                                                                              ║
 * ║  Automatically detects user location via IP and adapts language:            ║
 * ║  • Language (Bosnian, English, German)                                       ║
 * ║  • Full translation support for all UI elements                              ║
 * ║                                                                              ║
 * ║  Author: coldfusionz                                                         ║
 * ║  Version: 1.0.0                                                              ║
 * ║  License: MIT                                                                ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

// Export LANGUAGE_MAP to window for geolocation detector
const LANGUAGE_MAP = {
    'US': 'en', 'GB': 'en', 'CA': 'en', 'AU': 'en', 'NZ': 'en', 'IE': 'en',
    'DE': 'de', 'AT': 'de', 'CH': 'de',
    'FR': 'fr', 'BE': 'fr', 'LU': 'fr',
    'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es',
    'IT': 'it',
    'PT': 'pt', 'BR': 'pt',
    'NL': 'nl',
    'PL': 'pl',
    'TR': 'tr',
    'RU': 'ru',
    'BA': 'bs', 'HR': 'bs', 'RS': 'bs', 'ME': 'bs', 'MK': 'bs'
};

// Export to window for geolocation detector
window.LANGUAGE_MAP = LANGUAGE_MAP;

const TRANSLATIONS = {
    'en': {
        lang: 'en',
        cartToggle: 'Open Cart',
        cartClose: 'Close Cart',
        cartTitle: 'Your Cart',
        cartEmpty: 'Your cart is empty.',
        addToCart: 'Pre-order Now',
        stickyCtaBtn: 'Add to Cart',
        sizeGuide: 'Size Guide',
        color: 'Color',
        size: 'Size',
        details: 'Details',
        material: 'Material',
        shipping: 'Shipping & Rules',
        reserved: 'Reserved from this drop',
        premiumCraft: 'Premium Craftsmanship',
        securePayment: 'Secure Online Payment',
        delivery: 'Delivery 10-15 days',
        checkoutBtn: 'Proceed to Checkout',
        cartNote: 'Payment online only (card). Cash on delivery coming soon.',
        cartTotal: 'Total',
        checkoutTitle: 'Complete Purchase',
        checkoutSub: 'Secure online payment. (Cash on delivery option coming soon).',
        checkoutSubmit: 'Proceed to secure payment',
        tosLabel: 'I accept the <strong>Terms of Service</strong> (No return of costs after the hoodie is sent and sewn) and <strong>Cookie Policy</strong>.',
        formName: 'Full Name',
        formPhone: 'Phone Number',
        formEmail: 'Email Address',
        formAddress: 'Street Address',
        formCity: 'City',
        formZip: 'Postal Code',
        newsletterTitle: 'Exclusive Access',
        newsletterDesc: 'Sign up for the list and be the first to know when the next drop drops. No spam, just clean street aesthetic.',
        newsletterBtn: 'Sign Up',
        newsletterSuccess: 'Success! Welcome to the circle.',
        footerShop: 'Shop',
        footerSupport: 'Support & Policies',
        footerContact: 'Contact Us',
        footerTerms: 'Terms of Service',
        footerCookies: 'Cookie Policy',
        footerTracking: 'Track Order',
        footerSizeGuide: 'Sizes & Fit',
        navDrop: 'Drop 001',
        navManifesto: 'Manifesto',
        navLookbook: 'Lookbook',
        navReports: 'Reports',
        hangTag: 'Drop 001 — Exclusive Series',
        productDesc: 'The crown of premium streetwear. Clean lines, heavy materials, uncompromising design. Built for the street, made to last. No going back.',
        tabDetails: 'Details',
        tabMaterial: 'Material',
        tabShipping: 'Rules & Shipping',
        detailsList: [
            'Heavy, oversized silhouette — dominant street fit.',
            'Metal YKK zipper with custom THRIVER logo engraving.',
            'Hidden message pressed inside the hood.',
            'Unisex fit — model wears size M.'
        ],
        materialText: '80% heavy cotton / 20% premium polyester, massive 380 gsm fleece. Wash at 30°C inside out, no bleach, do not tumble dry to maintain the luxurious finish for years.',
        shippingText: 'Sewn directly to your order in limited series (shipping 10–15 business days). Currently exclusively online card payment (cash on delivery option coming soon). <strong>No return of costs</strong> if the product has already been sent and sewn (ToS).',
        scarcityLabel: 'Reserved from this drop',
        premiumSizeNote: '* Sizes XL and XXL require more material (+5.00 €).',
        preorderDiscount: 'Preorder Discount',
        spec1: 'Heavy massive cotton',
        spec2: 'Authentic street silhouette',
        spec3: 'Details that separate from the mass',
        spec4: 'Lifetime construction',
        manifestoTitle: "We're not here to talk. We're here to take over.",
        qualityTitle: 'Uncompromising Quality',
        qualityText: 'We refuse mass production. We use only the highest quality materials (80% heavy cotton, 380 GSM). Each piece is cut to offer pure luxury and comfort on the street.',
        detailTitle: 'Hidden Details',
        detailText: 'Aesthetics are in the details. Minimalist logo, strong message on the back, metal YKK zippers with engraving and sharp design create a piece you must have the moment you see it.',
        movementTitle: 'The Movement',
        movementText: 'Thriver is not merch. It is a streetwear brand for those who work in silence. When you wear Thriver, you wear a mindset, pure aesthetics and belong to the circle of those who know what they want.',
        lookbookTitle: 'Contact Sheet — Drop 001',
        reportsTitle: 'First-hand impressions.',
        review1: 'This hoodie is insane. The material quality and that premium feel are immediate. I never take it off.',
        review2: 'Clean aesthetic. The zipper details and cut are exactly what I needed for every day.',
        review3: 'Takes a bit longer because it\'s sewn to order, but brother it\'s worth every cent. Top-tier streetwear.',
        verified: 'Verified',
        footerBrand: 'Founded in silence. Built through work. Thriver is a premium streetwear brand dedicated to those who strive for perfection without the need for applause. Est. 2025.',
        batchNo: 'Batch No. TH-2026-001 · Stay Thriver.',
        rights: '© 2026 Thriver Clothing. All Rights Reserved.',
        sizeGuideTitle: 'Size Guide',
        sizeGuideSub: 'Measurements are in centimeters, measured flat on the product.',
        sizeGuideNote: 'Fit is oversized by design — for a stricter fit, take one size smaller than usual. <br><span style="color:var(--blood)">* XL and XXL include a price surcharge due to higher material consumption.</span>',
        sizeTableHeaders: ['Size', 'Chest', 'Length', 'Sleeve'],
        sizeTableData: [
            ['S', '58', '68', '62'],
            ['M', '61', '70', '64'],
            ['L', '64', '72', '66'],
            ['XL', '67', '74', '68'],
            ['XXL', '70', '76', '70']
        ],
        orderSummaryTotal: 'Total to pay (Card)',
        connecting: 'Connecting to payment gateway...',
        redirecting: 'Redirecting... (Online payment simulation complete)',
        error: 'Error communicating with the bank. Please try again.',
        toastAdded: 'Added to cart —',
        toastNewsletter: 'Added to the exclusive list.',
        consoleWarning: 'This is the developer console. Do not copy and paste other people\'s code here — this can compromise your account and data.',
        removeItem: 'Remove'
    },
    'de': {
        lang: 'de',
        cartToggle: 'Warenkorb öffnen',
        cartClose: 'Warenkorb schließen',
        cartTitle: 'Ihr Warenkorb',
        cartEmpty: 'Ihr Warenkorb ist leer.',
        addToCart: 'Jetzt vorbestellen',
        stickyCtaBtn: 'In den Warenkorb',
        sizeGuide: 'Größentabelle',
        color: 'Farbe',
        size: 'Größe',
        details: 'Details',
        material: 'Material',
        shipping: 'Versand & Regeln',
        reserved: 'Reserviert aus diesem Drop',
        premiumCraft: 'Premium Handwerk',
        securePayment: 'Sichere Online-Zahlung',
        delivery: 'Lieferung 10-15 Tage',
        checkoutBtn: 'Zur Kasse',
        cartNote: 'Zahlung nur online (Karte). Nachnahme kommt bald.',
        cartTotal: 'Gesamt',
        checkoutTitle: 'Kauf abschließen',
        checkoutSub: 'Sichere Online-Zahlung. (Nachnahme-Option kommt bald).',
        checkoutSubmit: 'Zur sicheren Zahlung',
        tosLabel: 'Ich akzeptiere die <strong>AGB</strong> (Keine Rückzahlung der Kosten, nachdem der Hoodie versendet und genäht wurde) und die <strong>Cookie-Richtlinie</strong>.',
        formName: 'Vollständiger Name',
        formPhone: 'Telefonnummer',
        formEmail: 'E-Mail-Adresse',
        formAddress: 'Straße und Hausnummer',
        formCity: 'Stadt',
        formZip: 'Postleitzahl',
        newsletterTitle: 'Exklusiver Zugang',
        newsletterDesc: 'Melde dich für die Liste an und sei der Erste, der weiß, wann der nächste Drop kommt. Kein Spam, nur saubere Straßenästhetik.',
        newsletterBtn: 'Anmelden',
        newsletterSuccess: 'Erfolg! Willkommen im Kreis.',
        footerShop: 'Shop',
        footerSupport: 'Support & Richtlinien',
        footerContact: 'Kontaktiere uns',
        footerTerms: 'AGB',
        footerCookies: 'Cookie-Richtlinie',
        footerTracking: 'Bestellung verfolgen',
        footerSizeGuide: 'Größen & Passform',
        navDrop: 'Drop 001',
        navManifesto: 'Manifest',
        navLookbook: 'Lookbook',
        navReports: 'Berichte',
        hangTag: 'Drop 001 — Exklusive Serie',
        productDesc: 'Die Krone des Premium Streetwear. Saubere Linien, schwere Materialien, uncompromising design. Für die Straße gebaut, um zu halten. Kein Zurück.',
        tabDetails: 'Details',
        tabMaterial: 'Material',
        tabShipping: 'Regeln & Versand',
        detailsList: [
            'Schwere, oversized Silhouette — dominanter Street-Fit.',
            'Metall-YKK-Reißverschluss mit custom THRIVER-Logo-Gravur.',
            'Versteckte Botschaft in der Kapuze gepresst.',
            'Unisex-Fit — Modell trägt Größe M.'
        ],
        materialText: '80% schwerer Baumwolle / 20% Premium-Polyester, massives 380 gsm Fleece. Bei 30°C links waschen, kein Bleichmittel, nicht im Trockner trocknen, um den luxuriösen Finish jahrelang zu erhalten.',
        shippingText: 'Direkt nach Bestellung in limitierten Serien genäht (Versand 10–15 Werktage). Derzeit ausschließlich Online-Kartenzahlung (Nachnahme-Option kommt bald). <strong>Keine Rückzahlung der Kosten</strong>, wenn das Produkt bereits versendet und genäht wurde (AGB).',
        scarcityLabel: 'Reserviert aus diesem Drop',
        premiumSizeNote: '* Größen XL und XXL benötigen mehr Material (+5.00 €).',
        preorderDiscount: 'Vorbestellungs-Rabatt',
        spec1: 'Schwerer massiver Baumwolle',
        spec2: 'Authentische Straßen-Silhouette',
        spec3: 'Details, die von der Masse abheben',
        spec4: 'Lebenslange Konstruktion',
        manifestoTitle: 'Wir sind nicht hier, um zu reden. Wir sind hier, um zu übernehmen.',
        qualityTitle: 'Uncompromising Qualität',
        qualityText: 'Wir lehnen Massenproduktion ab. Wir verwenden nur höchste Qualität Materialien (80% schwerer Baumwolle, 380 GSM). Jedes Stück wird geschnitten, um puren Luxus und Komfort auf der Straße zu bieten.',
        detailTitle: 'Versteckte Details',
        detailText: 'Ästhetik liegt im Detail. Minimalistisches Logo, starke Botschaft auf dem Rücken, Metall-YKK-Reißverschlüsse mit Gravur und scharfes Design schaffen ein Stück, das du haben musst, sobald du es siehst.',
        movementTitle: 'Die Bewegung',
        movementText: 'Thriver ist keine Merch. Es ist eine Streetwear-Marke für diejenigen, die in Stille arbeiten. Wenn du Thriver trägst, trägst du eine Mindset, pure Ästhetik und gehörst zum Kreis derer, die wissen, was sie wollen.',
        lookbookTitle: 'Kontaktabzug — Drop 001',
        reportsTitle: 'Eindrücke aus der ersten Reihe.',
        review1: 'Dieser Hoodie ist verrückt. Die Materialqualität und dieses Premium-Gefühl sind sofort spürbar. Ich ziehe ihn nie wieder aus.',
        review2: 'Saubere Ästhetik. Die Reißverschluss-Details und der Schnitt sind genau das, was ich für jeden Tag brauchte.',
        review3: 'Dauert etwas länger, weil er auf Bestellung genäht wird, aber Bruder, es ist jeden Cent wert. Top-Level Streetwear.',
        verified: 'Verifiziert',
        footerBrand: 'In Stille gegründet. Durch Arbeit aufgebaut. Thriver ist eine Premium-Streetwear-Marke, die denen gewidmet ist, die nach Perfektion streben, ohne Applaus zu brauchen. Est. 2025.',
        batchNo: 'Batch Nr. TH-2026-001 · Bleib Thriver.',
        rights: '© 2026 Thriver Clothing. Alle Rechte vorbehalten.',
        sizeGuideTitle: 'Größentabelle',
        sizeGuideSub: 'Maße sind in Zentimetern, flach auf dem Produkt gemessen.',
        sizeGuideNote: 'Der Fit ist oversized by design — für einen strafferen Fit eine Größe kleiner als üblich wählen. <br><span style="color:var(--blood)">* XL und XXL beinhalten einen Aufpreis aufgrund höheren Materialverbrauchs.</span>',
        sizeTableHeaders: ['Größe', 'Brust', 'Länge', 'Ärmel'],
        sizeTableData: [
            ['S', '58', '68', '62'],
            ['M', '61', '70', '64'],
            ['L', '64', '72', '66'],
            ['XL', '67', '74', '68'],
            ['XXL', '70', '76', '70']
        ],
        orderSummaryTotal: 'Gesamt zu zahlen (Karte)',
        connecting: 'Verbindung zum Zahlungs-Gateway wird hergestellt...',
        redirecting: 'Weiterleitung... (Online-Zahlungssimulation abgeschlossen)',
        error: 'Fehler bei der Kommunikation mit der Bank. Bitte versuchen Sie es erneut.',
        toastAdded: 'In den Warenkorb gelegt —',
        toastNewsletter: 'Zur exklusiven Liste hinzugefügt.',
        consoleWarning: 'Dies ist die Entwicklerkonsole. Kopieren Sie nicht den Code anderer Personen hierher — dies kann Ihr Konto und Ihre Daten gefährden.',
        removeItem: 'Entfernen'
    },
    'bs': {
        lang: 'bs',
        cartToggle: 'Otvori korpu',
        cartClose: 'Zatvori korpu',
        cartTitle: 'Tvoja Korpa',
        cartEmpty: 'Korpa je prazna.',
        addToCart: 'Prednaruči Odmah',
        stickyCtaBtn: 'Dodaj u Korpu',
        sizeGuide: 'Size Guide',
        color: 'Boja',
        size: 'Veličina',
        details: 'Detalji',
        material: 'Izrada',
        shipping: 'Pravila & Dostava',
        reserved: 'Rezervisano iz ovog dropa',
        premiumCraft: 'Premium Izrada',
        securePayment: 'Sigurno Online Plaćanje',
        delivery: 'Isporuka 10-15 dana',
        checkoutBtn: 'Idi na Plaćanje',
        cartNote: 'Plaćanje isključivo online (karticom). Pouzeće uskoro.',
        cartTotal: 'Ukupno',
        checkoutTitle: 'Završi Kupovinu',
        checkoutSub: 'Sigurna online naplata. (Opcija plaćanja pouzećem stiže uskoro).',
        checkoutSubmit: 'Idi na sigurnu naplatu',
        tosLabel: 'Prihvatam <strong>Terms of Service</strong> (Bez prava na povrat troškova nakon što je duks poslan i sašiven) i <strong>Politiku Kolačića (Cookies)</strong>.',
        formName: 'Ime i Prezime',
        formPhone: 'Broj Telefona',
        formEmail: 'Email Adresa',
        formAddress: 'Adresa Stanovanja (Ulica i broj)',
        formCity: 'Grad',
        formZip: 'Poštanski Broj',
        newsletterTitle: 'Ekskluzivni Pristup',
        newsletterDesc: 'Prijavi se na listu i budi prvi koji zna kad izađe sljedeći drop. Bez spama, samo čista ulična estetika.',
        newsletterBtn: 'Prijavi Se',
        newsletterSuccess: 'Uspješno! Dobrodošao u krug.',
        footerShop: 'Shop',
        footerSupport: 'Podrška & Pravila',
        footerContact: 'Kontaktiraj Nas',
        footerTerms: 'Terms of Service',
        footerCookies: 'Politika Kolačića',
        footerTracking: 'Praćenje Narudžbe',
        footerSizeGuide: 'Veličine i Fit',
        navDrop: 'Drop 001',
        navManifesto: 'Manifesto',
        navLookbook: 'Lookbook',
        navReports: 'Reports',
        hangTag: 'Drop 001 — Ekskluzivna Serija',
        productDesc: 'Kruna premium streetweara. Čiste linije, teški materijali i beskompromisan dizajn. Stvoren za ulicu, izgrađen da traje. Nema nazad.',
        tabDetails: 'Detalji',
        tabMaterial: 'Izrada',
        tabShipping: 'Pravila & Dostava',
        detailsList: [
            'Teška, oversized silueta — dominantan ulični fit.',
            'Metalni YKK zip sa custom gravurom THRIVER loga.',
            'Skrivena poruka utisnuta unutar kapuljače.',
            'Unisex fit — model nosi veličinu M.'
        ],
        materialText: '80% teški pamuk / 20% premium poliester, masivni 380 gsm fleece. Pranje na 30°C naopako, bez izbjeljivača, ne sušiti u mašini kako bi materijal i print zadržali luksuzni finiš godinama.',
        shippingText: 'Šije se direktno po tvojoj narudžbi u ograničenim serijama (isprouka 10–15 radnih dana). Trenutno isključivo online kartično plaćanje (opcija pouzeća stiže uskoro). <strong>Nema povrata troškova</strong> ukoliko je proizvod već poslan i sašiven (ToS).',
        scarcityLabel: 'Rezervisano iz ovog dropa',
        premiumSizeNote: '* Veličine XL i XXL zahtijevaju više materijala (+5.00 €).',
        preorderDiscount: 'Preorder Popust',
        spec1: 'Teški masivni pamuk',
        spec2: 'Autentična ulična silueta',
        spec3: 'Detalji koji odvajaju od mase',
        spec4: 'Doživotna izrada',
        manifestoTitle: 'Nismo ovdje da pričamo. Ovdje smo da preuzmemo.',
        qualityTitle: 'Uncompromising Quality',
        qualityText: 'Odbijamo masovnu proizvodnju. Koristimo samo najkvalitetnije materijale (80% teški pamuk, 380 GSM). Svaki komad je krojen da ponudi čist luksuz i udobnost na ulici.',
        detailTitle: 'Hidden Details',
        detailText: 'Estetika je u detaljima. Minimalistički logo, snažna poruka na leđima, metalni YKK zatvarači sa gravurom i oštar dizajn kreiraju komad koji moraš imati čim ga vidiš.',
        movementTitle: 'The Movement',
        movementText: 'Thriver nije merch. To je streetwear brend za one koji rade u tišini. Kad obučeš Thriver, nosiš mentalitet, čistu estetiku i pripadaš krugu onih koji znaju šta žele.',
        lookbookTitle: 'Contact Sheet — Drop 001',
        reportsTitle: 'Utisci iz prvog reda.',
        review1: 'Ovaj duks je ludilo. Kvalitet materijala i taj premium feel se odmah osjeti. Ne skidam ga.',
        review2: 'Clean estetika. Detalji na zipu i kroj su tačno ono što mi je trebalo za svaki dan.',
        review3: 'Malo se duže čeka jer se šije po narudžbi, ali brate isplati se svaki cent. Vrhunski streetwear.',
        verified: 'Verified',
        footerBrand: 'Osnovano u tišini. Izgrađeno kroz rad. Thriver je premium streetwear brend posvećen onima koji teže savršenstvu bez potrebe za aplauzom. Est. 2025.',
        batchNo: 'Batch No. TH-2026-001 · Stay Thriver.',
        rights: '© 2026 Thriver Clothing. All Rights Reserved.',
        sizeGuideTitle: 'Size Guide',
        sizeGuideSub: 'Mjere su u centimetrima, izmjerene ravno na proizvodu.',
        sizeGuideNote: 'Fit je oversized po dizajnu — za striktniji fit uzmi veličinu manju od uobičajene. <br><span style="color:var(--blood)">* XL i XXL uključuju dodatak na cijenu zbog veće potrošnje materijala.</span>',
        sizeTableHeaders: ['Veličina', 'Grudi', 'Dužina', 'Rukav'],
        sizeTableData: [
            ['S', '58', '68', '62'],
            ['M', '61', '70', '64'],
            ['L', '64', '72', '66'],
            ['XL', '67', '74', '68'],
            ['XXL', '70', '76', '70']
        ],
        orderSummaryTotal: 'Ukupno za platiti (Kartica)',
        connecting: 'Konektovanje na payment gateway...',
        redirecting: 'Preusmjeravanje... (Simulacija online plaćanja završena)',
        error: 'Došlo je do greške u komunikaciji sa bankom. Pokušajte ponovo.',
        toastAdded: 'Dodano u korpu —',
        toastNewsletter: 'Dodani ste na ekskluzivnu listu.',
        consoleWarning: 'Ovo je developerska konzola. Ne kopiraj i ne lijepi tuđi kod ovdje — to može ugroziti tvoj nalog i podatke.',
        removeItem: 'Ukloni'
    }
};

// Default to Bosnian if no match found
let currentLanguage = 'bs';

// Function to apply language translations to the page
function applyLanguage(lang) {
    const t = TRANSLATIONS[lang];
    if (!t) return;

    // Update HTML lang attribute
    document.documentElement.lang = t.lang;

    // Update cart toggle aria-label
    const cartToggle = document.getElementById('cartToggle');
    if (cartToggle) cartToggle.setAttribute('aria-label', t.cartToggle);

    // Update cart close button
    const closeCart = document.getElementById('closeCart');
    if (closeCart) closeCart.setAttribute('aria-label', t.cartClose);

    // Update cart title
    const cartTitle = document.querySelector('.cart-header h3');
    if (cartTitle) cartTitle.textContent = t.cartTitle;

    // Update cart empty message
    const cartEmpty = document.querySelector('.cart-empty span');
    if (cartEmpty) cartEmpty.textContent = t.cartEmpty;

    // Update add to cart buttons
    const addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) addToCartBtn.textContent = t.addToCart;

    const stickyCtaBtn = document.getElementById('stickyCtaBtn');
    if (stickyCtaBtn) stickyCtaBtn.textContent = t.stickyCtaBtn;

    // Update size guide button
    const sizeGuideBtn = document.getElementById('sizeGuideBtn');
    if (sizeGuideBtn) sizeGuideBtn.textContent = t.sizeGuide;

    // Update option labels
    const optionLabels = document.querySelectorAll('.option-label span:first-child');
    if (optionLabels.length >= 2) {
        optionLabels[0].textContent = t.color;
        optionLabels[1].textContent = t.size;
    }

    // Update tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    if (tabBtns.length >= 3) {
        tabBtns[0].textContent = t.tabDetails;
        tabBtns[1].textContent = t.tabMaterial;
        tabBtns[2].textContent = t.tabShipping;
    }

    // Update scarcity label
    const scarcityLabel = document.querySelector('.scarcity-label span:first-child');
    if (scarcityLabel) scarcityLabel.textContent = t.reserved;

    // Update trust items
    const trustItems = document.querySelectorAll('.trust-item');
    if (trustItems.length >= 3) {
        trustItems[0].innerHTML = `<i class="fas fa-scissors"></i> ${t.premiumCraft}`;
        trustItems[1].innerHTML = `<i class="fas fa-credit-card"></i> ${t.securePayment}`;
        trustItems[2].innerHTML = `<i class="fas fa-box-open"></i> ${t.delivery}`;
    }

    // Update cart note
    const cartNote = document.querySelector('.cart-note');
    if (cartNote) cartNote.textContent = t.cartNote;

    // Update cart total label
    const cartTotalLabel = document.querySelector('.cart-total-row span:first-child');
    if (cartTotalLabel) cartTotalLabel.textContent = t.cartTotal;

    // Update checkout modal
    const checkoutTitle = document.querySelector('#checkoutModal h2');
    if (checkoutTitle) checkoutTitle.textContent = t.checkoutTitle;

    const checkoutSub = document.querySelector('#checkoutModal p.sub');
    if (checkoutSub) checkoutSub.textContent = t.checkoutSub;

    const checkoutSubmit = document.querySelector('#checkoutForm button[type="submit"]');
    if (checkoutSubmit) checkoutSubmit.innerHTML = `${t.checkoutSubmit} <i class="fas fa-lock" style="margin-left: 8px; font-size: 0.85rem;"></i>`;

    // Update ToS label
    const tosLabel = document.querySelector('.checkbox-group label');
    if (tosLabel) tosLabel.innerHTML = t.tosLabel;

    // Update form placeholders
    const formInputs = document.querySelectorAll('#checkoutForm input');
    const placeholders = [t.formName, t.formPhone, t.formEmail, t.formAddress, t.formCity, t.formZip];
    formInputs.forEach((input, index) => {
        if (placeholders[index]) input.placeholder = placeholders[index];
    });

    // Update newsletter section
    const newsletterTitle = document.querySelector('.manifest-section h2');
    if (newsletterTitle) newsletterTitle.textContent = t.newsletterTitle;

    const newsletterDesc = document.querySelector('.manifest-section p');
    if (newsletterDesc) newsletterDesc.textContent = t.newsletterDesc;

    const newsletterBtn = document.querySelector('.manifest-form button');
    if (newsletterBtn) newsletterBtn.textContent = t.newsletterBtn;

    const newsletterSuccess = document.getElementById('manifestStatus');
    if (newsletterSuccess) newsletterSuccess.textContent = t.newsletterSuccess;

    // Update footer
    const footerShop = document.querySelectorAll('.footer-links h4')[0];
    if (footerShop) footerShop.textContent = t.footerShop;

    const footerSupport = document.querySelectorAll('.footer-links h4')[1];
    if (footerSupport) footerSupport.textContent = t.footerSupport;

    const footerLinks = document.querySelectorAll('.footer-links ul li a');
    const footerLinkTexts = [
        t.navDrop, t.footerSizeGuide, t.footerTracking,
        t.footerContact, t.footerTerms, t.footerCookies
    ];
    footerLinks.forEach((link, index) => {
        if (footerLinkTexts[index]) link.textContent = footerLinkTexts[index];
    });

    // Update nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    const navLinkTexts = [t.navDrop, t.navManifesto, t.navLookbook, t.navReports];
    navLinks.forEach((link, index) => {
        if (navLinkTexts[index]) link.textContent = navLinkTexts[index];
    });

    // Update mobile nav links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    mobileNavLinks.forEach((link, index) => {
        if (navLinkTexts[index]) link.textContent = navLinkTexts[index];
    });

    // Update hang tag
    const hangTag = document.querySelector('.hang-tag');
    if (hangTag) hangTag.innerHTML = `<i class="fas fa-bolt"></i> ${t.hangTag}`;

    // Update product description
    const productDesc = document.querySelector('.product-desc');
    if (productDesc) productDesc.textContent = t.productDesc;

    // Update tab panels
    const tabDetails = document.getElementById('tabDetails');
    if (tabDetails) {
        tabDetails.innerHTML = `<ul>${t.detailsList.map(item => `<li>${item}</li>`).join('')}</ul>`;
    }

    const tabMaterial = document.getElementById('tabMaterial');
    if (tabMaterial) {
        tabMaterial.innerHTML = `<p>${t.materialText}</p>`;
    }

    const tabShipping = document.getElementById('tabShipping');
    if (tabShipping) {
        tabShipping.innerHTML = `<p>${t.shippingText}</p>`;
    }

    // Update premium size note
    const premiumSizeNote = document.querySelector('.options-container div[style*="font-size: 0.65rem"]');
    if (premiumSizeNote) premiumSizeNote.textContent = t.premiumSizeNote;

    // Update price save label
    const priceSave = document.querySelector('.price-save');
    if (priceSave) priceSave.textContent = t.preorderDiscount;

    // Update spec strip
    const specItems = document.querySelectorAll('.spec-item');
    if (specItems.length >= 4) {
        specItems[0].innerHTML = `<i class="fas fa-weight-hanging"></i><h5>380 GSM</h5><p>${t.spec1}</p>`;
        specItems[1].innerHTML = `<i class="fas fa-shirt"></i><h5>Oversized Fit</h5><p>${t.spec2}</p>`;
        specItems[2].innerHTML = `<i class="fas fa-gem"></i><h5>Premium Feel</h5><p>${t.spec3}</p>`;
        specItems[3].innerHTML = `<i class="fas fa-shield-halved"></i><h5>Doživotna izrada</h5><p>${t.spec4}</p>`;
    }

    // Update manifesto section
    const manifestoTitle = document.querySelector('.lore-title');
    if (manifestoTitle) manifestoTitle.textContent = t.manifestoTitle;

    const loreCards = document.querySelectorAll('.lore-card');
    if (loreCards.length >= 3) {
        loreCards[0].querySelector('h3').textContent = t.qualityTitle;
        loreCards[0].querySelector('p').textContent = t.qualityText;
        loreCards[1].querySelector('h3').textContent = t.detailTitle;
        loreCards[1].querySelector('p').textContent = t.detailText;
        loreCards[2].querySelector('h3').textContent = t.movementTitle;
        loreCards[2].querySelector('p').textContent = t.movementText;
    }

    // Update lookbook title
    const lookbookTitle = document.querySelectorAll('.lore-title')[1];
    if (lookbookTitle) lookbookTitle.textContent = t.lookbookTitle;

    // Update reports title
    const reportsTitle = document.querySelectorAll('.lore-title')[2];
    if (reportsTitle) reportsTitle.textContent = t.reportsTitle;

    // Update reviews
    const reportQuotes = document.querySelectorAll('.report-quote');
    if (reportQuotes.length >= 3) {
        reportQuotes[0].textContent = t.review1;
        reportQuotes[1].textContent = t.review2;
        reportQuotes[2].textContent = t.review3;
    }

    // Update verified stamps
    const reportStamps = document.querySelectorAll('.report-stamp');
    reportStamps.forEach(stamp => stamp.textContent = t.verified);

    // Update footer brand
    const footerBrand = document.querySelector('.footer-brand p');
    if (footerBrand) footerBrand.textContent = t.footerBrand;

    // Update footer bottom
    const footerBottomSpans = document.querySelectorAll('.footer-bottom span');
    if (footerBottomSpans.length >= 2) {
        footerBottomSpans[0].textContent = t.rights;
        footerBottomSpans[1].textContent = t.batchNo;
    }

    // Update size guide modal
    const sizeGuideTitle = document.querySelector('#sizeGuideModal h2');
    if (sizeGuideTitle) sizeGuideTitle.textContent = t.sizeGuideTitle;

    const sizeGuideSub = document.querySelector('#sizeGuideModal p.sub');
    if (sizeGuideSub) sizeGuideSub.textContent = t.sizeGuideSub;

    const sizeGuideNote = document.querySelector('.size-guide-note');
    if (sizeGuideNote) sizeGuideNote.innerHTML = t.sizeGuideNote;

    const sizeTableHeaders = document.querySelectorAll('.size-table th');
    if (sizeTableHeaders.length >= 4) {
        sizeTableHeaders[0].textContent = t.sizeTableHeaders[0];
        sizeTableHeaders[1].textContent = t.sizeTableHeaders[1];
        sizeTableHeaders[2].textContent = t.sizeTableHeaders[2];
        sizeTableHeaders[3].textContent = t.sizeTableHeaders[3];
    }

    // Update console warning
    console.log(`%cSTOP`, "color:#d21f1f; font-weight:bold; font-size:40px; font-family: monospace;");
    console.log(`%c${t.consoleWarning}`, "color:#d21f1f; font-size:14px;");

    // Update order summary total in checkout modal
    const orderSummaryTotal = document.querySelector('.order-summary-total span:first-child');
    if (orderSummaryTotal) {
        orderSummaryTotal.textContent = t.orderSummaryTotal;
    }

    // Re-render order summary if cart has items to ensure translation is applied
    if (typeof renderOrderSummary === 'function') {
        const cart = JSON.parse(localStorage.getItem('thriver_cart_v3') || '[]');
        if (cart.length > 0) {
            renderOrderSummary();
        }
    }

    // Update checkout button in cart drawer
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.textContent = t.checkoutBtn;
    }

    // Update remove item buttons in cart
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(btn => {
        btn.textContent = t.removeItem;
    });

    // Re-render cart UI if it exists to ensure all cart text is translated
    if (typeof renderCartUI === 'function') {
        renderCartUI();
    }
}

// Export function for manual language switching (optional)
window.switchLanguage = function(lang) {
    if (TRANSLATIONS[lang]) {
        currentLanguage = lang;
        applyLanguage(lang);
    }
};

// Crafted with precision by coldfusionz
// © 2026 — All rights reserved
