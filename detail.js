document.addEventListener("DOMContentLoaded", () => {
    // 1. Récupérer l'ID depuis l'URL (?id=X)
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = parseInt(urlParams.get("id")) || 1; // Par défaut : bien ID 1

    // 2. Chercher le bien correspondant
    const bien = biensData.find(item => item.id === propertyId);

    // Si le bien n'existe pas, réorienter vers la liste
    if (!bien) {
        window.location.href = "biens.html";
        return;
    }

    // 3. Mettre à jour la page HTML
    document.title = `${bien.titre} | CONFORT HOME`;

    // Fil d'ariane & En-tête
    document.getElementById("breadcrumb-titre").textContent = bien.titre;
    document.getElementById("detail-statut").textContent = bien.statut;
    document.getElementById("detail-type").textContent = bien.type;
    document.getElementById("detail-titre").textContent = bien.titre;
    document.getElementById("detail-localisation").innerHTML = `<i class="fas fa-map-marker-alt" style="color: var(--accent-yellow-dark);"></i> ${bien.localisation}`;
    document.getElementById("detail-prix").innerHTML = `${bien.prix}`;

    // Caractéristiques
    document.getElementById("detail-chambres").textContent = bien.chambres;
    document.getElementById("detail-salles").textContent = bien.sallesDeBain;
    document.getElementById("detail-superficie").textContent = bien.superficie;
    document.getElementById("detail-garages").textContent = bien.garages;

    // Galerie Photos
    document.getElementById("img-main").src = bien.images[0];
    document.getElementById("img-main").alt = bien.titre;
    document.getElementById("img-thumb-1").src = bien.images[1] || bien.images[0];
    document.getElementById("img-thumb-2").src = bien.images[2] || bien.images[0];

    // Description
    document.getElementById("detail-description").textContent = bien.description;

    // Équipements
    const equipementsContainer = document.getElementById("detail-equipements");
    equipementsContainer.innerHTML = bien.equipements.map(req => `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-check-circle" style="color: var(--accent-yellow-dark);"></i> ${req}
        </div>
    `).join("");

    // Formulaire & Bouton WhatsApp
    const defaultMsg = `Bonjour, je souhaite plus d'informations concernant le bien : ${bien.titre} (${bien.prix})`;
    document.getElementById("message").value = defaultMsg;
    
    const waUrl = `https://wa.me/2250000000000?text=${encodeURIComponent(defaultMsg)}`;
    document.getElementById("btn-whatsapp-detail").href = waUrl;
});