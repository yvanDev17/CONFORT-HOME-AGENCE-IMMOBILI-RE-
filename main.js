document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. GESTION DE LA PAGE DE DÉTAIL (detail.html)
    // ==========================================
    const mainImg = document.getElementById("img-main");
    
    if (mainImg && typeof properties !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        const propertyId = urlParams.get('id');

        if (propertyId) {
            // Recherche souple du bien
            const property = properties.find(p => String(p.id) === String(propertyId));

            if (property) {
                document.title = `${property.title} | CONFORT HOME`;

                // Injection de l'image principale
                mainImg.src = property.image;
                mainImg.alt = property.title;

                // Injection des textes et infos
                setElementText("detail-titre", property.title);
                setElementText("detail-localisation", `${property.commune || ''}, ${property.city || ''} - ${property.address || ''}`);
                setElementText("detail-prix", formatPrice(property.price, property.status));
                setElementText("detail-description", property.description);
                setElementText("detail-statut", property.statusLabel || property.status);
                setElementText("detail-type", property.typeLabel || property.type);

                // Caractéristiques
                setElementText("detail-chambres", property.bedrooms > 0 ? property.bedrooms : 'N/A');
                setElementText("detail-salles", property.bathrooms > 0 ? property.bathrooms : 'N/A');
                setElementText("detail-superficie", property.surface ? `${property.surface} m²` : 'N/C');
                setElementText("detail-garages", property.garages > 0 ? property.garages : 'N/A');

                // Bouton WhatsApp dynamique pour ce bien
                const whatsappBtn = document.getElementById("property-whatsapp");
                if (whatsappBtn) {
                    const message = encodeURIComponent(`Bonjour CONFORT HOME, je suis intéressé(e) par le bien ${property.title} (Réf: ${property.id}).`);
                    whatsappBtn.href = `https://wa.me/2250709085268?text=${message}`;
                }
                return;
            }
        }

        // Si le bien n'est pas trouvé
        const sectionDetail = document.querySelector(".section");
        if (sectionDetail) {
            sectionDetail.innerHTML = `
                <div class="container" style="text-align: center; padding: 60px 20px;">
                    <h2 style="color: var(--primary-blue-dark); margin-bottom: 15px;">Bien introuvable</h2>
                    <p style="color: var(--text-muted); margin-bottom: 25px;">Le bien que vous recherchez n'existe pas ou n'est plus disponible.</p>
                    <a href="biens.html" class="btn btn-primary">Retourner au catalogue</a>
                </div>
            `;
        }
    }

    // ==========================================
    // 2. EFFETS D'APPARITION AU DÉFILEMENT (Scroll Reveal)
    // ==========================================
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
                observerInstance.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll(".section, .property-card, .hero-content").forEach(el => {
        observer.observe(el);
    });
});

// ==========================================
// FONCTIONS UTILITAIRES
// ==========================================
function setElementText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

function formatPrice(price, status) {
    if (!price) return "Prix sur demande";
    const formatted = price.toLocaleString('fr-FR') + " FCFA";
    return status === 'location' ? `${formatted} / mois` : formatted;
}
document.addEventListener("DOMContentLoaded", () => {
    const mobileToggles = document.querySelectorAll(".mobile-toggle");

    mobileToggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            // Trouve le menu associé (le .nav-menu le plus proche ou dans la même navbar)
            const navbar = toggle.closest(".navbar");
            const navMenu = navbar ? navbar.querySelector(".nav-menu") : document.getElementById("navMenu");

            if (navMenu) {
                navMenu.classList.toggle("active");
                
                // Change l'icône du menu (barres / croix)
                const icon = toggle.querySelector("i");
                if (navMenu.classList.contains("active")) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-times");
                } else {
                    icon.classList.remove("fa-times");
                    icon.classList.add("fa-bars");
                }
            }
        });
    });

    // Fermeture automatique du menu au clic sur un lien
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            const navMenu = link.closest(".nav-menu");
            if (navMenu) {
                navMenu.classList.remove("active");
                const navbar = navMenu.closest(".navbar");
                const toggle = navbar ? navbar.querySelector(".mobile-toggle") : null;
                if (toggle) {
                    const icon = toggle.querySelector("i");
                    if (icon) {
                        icon.classList.remove("fa-times");
                        icon.classList.add("fa-bars");
                    }
                }
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // --- GESTION DU CHANGEMENT DE LANGUE (Actif / Inactif) ---
    const langButtons = document.querySelectorAll(".btn-lang");

    langButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Retire la classe 'active' de tous les boutons de langue sur la page
            langButtons.forEach(btn => btn.classList.remove("active"));
            
            // Ajoute la classe 'active' uniquement sur le bouton cliqué
            button.classList.add("active");
            
            // Récupère la langue choisie (ex: 'fr' ou 'en')
            const lang = button.id === "btn-en" ? "en" : "fr";
            
            // (Optionnel) Si tu as une fonction de traduction globale, tu peux l'appeler ici :
            // changerLangue(lang); 
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Sélection des éléments du filtre mobile
    const filterToggleBtn = document.querySelector(".mobile-filter-toggle");
    const filterSidebar = document.querySelector(".filter-sidebar");
    const closeFilterBtn = document.querySelector(".close-filter-btn");

    // 1. Ouvrir le filtre au clic sur "Filtrer la recherche"
    if (filterToggleBtn && filterSidebar) {
        filterToggleBtn.addEventListener("click", () => {
            filterSidebar.classList.add("active"); // ou 'open' selon ton CSS
        });
    }

    // 2. Fermer le filtre via la croix (X)
    if (closeFilterBtn && filterSidebar) {
        closeFilterBtn.addEventListener("click", () => {
            filterSidebar.classList.remove("active");
        });
    }

    // 3. (Optionnel) Fermer si on clique en dehors du panneau latéral
    if (filterSidebar) {
        window.addEventListener("click", (e) => {
            if (e.target === filterSidebar) {
                filterSidebar.classList.remove("active");
            }
        });
    }
});