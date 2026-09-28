const translations = {
    fr: {
        "nav-accueil": "Accueil",
        "nav-biens": "Nos Biens",
        "nav-apropos": "À Propos",
        "nav-contact": "Contact",
        "hero-badge": "Agence Agréée par l'État — 6 ans d'expérience",
        "hero-title": "Trouvez le bien idéal ou confiez-nous votre gestion immobilière",
        "hero-subtitle": "Achat, Vente, Location courte/longue durée, Gestion locative & Syndic à Abidjan, Grand-Bassam, Bingerville et Bouaké.",
        "search-type-label": "Type de bien",
        "search-status-label": "Projet",
        "search-zone-label": "Zone / Ville",
        "opt-all-types": "Tous les types",
        "opt-apt": "Appartement",
        "opt-villa": "Villa / Maison",
        "opt-terrain": "Terrain",
        "opt-bureau": "Bureau / Local commercial",
        "opt-buy-rent": "Acheter ou Louer",
        "opt-sale": "Achat (Vente)",
        "opt-rent": "Location",
        "opt-all-zones": "Toutes les zones",
        "btn-search": "Rechercher",
        "services-title": "Nos Domaines d'Expertise",
        "services-subtitle": "Une assistance responsable, dynamique et confidentielle pour tous vos projets immobiliers.",
        "serv-1-title": "Gestion Locative",
        "serv-1-desc": "Prise en charge complète de vos biens, recherche de locataires et sécurisation des loyers.",
        "serv-2-title": "Locations Courte & Longue Durée",
        "serv-2-desc": "Appartements meublés et résidences de standing pour vos séjours à Abidjan.",
        "serv-3-title": "Achat & Vente de Biens",
        "serv-3-desc": "Accompagnement sécurisé pour l'acquisition ou la vente de maisons, villas et terrains.",
        "serv-4-title": "Syndic & Travaux",
        "serv-4-desc": "Gestion de copropriété rigoureuse et suivi de tous vos projets de construction et rénovation.",
        "gestion-title": "Proche de nos locataires & propriétaires",
        "gestion-desc": "Gagnez du temps dans vos démarches. Effectuez vos demandes de quittance, signalez un besoin ou gérez vos biens en toute simplicité.",
        "btn-gestion": "Faire gérer mon bien",
        "btn-whatsapp": "Assistance Directe",
        "info-siege-label": "Siège :",
        "info-siege-val": "Abidjan M'badon, non loin de l'Ambassade de Chine, Immeuble Stratégique, 2e étage Apt B3",
        "info-horaires-label": "Ouverture :",
        "info-horaires-val": "Lundi/Vendredi de 08h00 à 17h00",
        "info-phones-label": "Téléphones :",
        "footer-desc": "Agence immobilière agréée par l'État. 6 ans d'accompagnement.",
        "footer-nav": "Navigation",
        "footer-contacts": "Contacts",
        "footer-rights": "Tous droits réservés."
    },
    en: {
        "nav-accueil": "Home",
        "nav-biens": "Properties",
        "nav-apropos": "About Us",
        "nav-contact": "Contact",
        "hero-badge": "State-Certified Agency — 6 years of experience",
        "hero-title": "Find your ideal property or entrust us with your real estate management",
        "hero-subtitle": "Purchase, Sale, Short/long-term rental, Rental management & Property management in Abidjan, Grand-Bassam, Bingerville and Bouaké.",
        "search-type-label": "Property type",
        "search-status-label": "Project",
        "search-zone-label": "Area / City",
        "opt-all-types": "All types",
        "opt-apt": "Apartment",
        "opt-villa": "Villa / House",
        "opt-terrain": "Land",
        "opt-bureau": "Office / Commercial space",
        "opt-buy-rent": "Buy or Rent",
        "opt-sale": "Purchase (Sale)",
        "opt-rent": "Rental",
        "opt-all-zones": "All areas",
        "btn-search": "Search",
        "services-title": "Our Areas of Expertise",
        "services-subtitle": "Responsible, dynamic, and confidential assistance for all your real estate projects.",
        "serv-1-title": "Rental Management",
        "serv-1-desc": "Complete management of your properties, tenant placement, and rent security.",
        "serv-2-title": "Short & Long-Term Rentals",
        "serv-2-desc": "Furnished apartments and luxury residences for your stays in Abidjan.",
        "serv-3-title": "Purchase & Sale",
        "serv-3-desc": "Secure support for buying or selling houses, villas, and land.",
        "serv-4-title": "Property Management & Works",
        "serv-4-desc": "Rigorous co-ownership management and monitoring of your construction and renovation projects.",
        "gestion-title": "Close to our tenants & owners",
        "gestion-desc": "Save time in your procedures. Request receipts, report a need, or manage your properties with ease.",
        "btn-gestion": "Have my property managed",
        "btn-whatsapp": "Direct Assistance",
        "info-siege-label": "Headquarters:",
        "info-siege-val": "Abidjan M'badon, near the Chinese Embassy, Strategic Building, 2nd floor Apt B3",
        "info-horaires-label": "Opening hours:",
        "info-horaires-val": "Monday/Friday from 08:00 AM to 05:00 PM",
        "info-phones-label": "Phones:",
        "footer-desc": "State-certified real estate agency. 6 years of support.",
        "footer-nav": "Navigation",
        "footer-contacts": "Contacts",
        "footer-rights": "All rights reserved."
    }
};

function changeLanguage(lang) {
    localStorage.setItem('selectedLang', lang);
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('selectedLang') || 'fr';
    changeLanguage(savedLang);

    const btnFr = document.getElementById('btn-fr');
    const btnEn = document.getElementById('btn-en');

    if (btnFr) {
        btnFr.addEventListener('click', () => changeLanguage('fr'));
    }
    if (btnEn) {
        btnEn.addEventListener('click', () => changeLanguage('en'));
    }
});