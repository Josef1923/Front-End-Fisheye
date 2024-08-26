/**
* Récupère l'ID du photographe depuis l'URL
*/
function getPhotographerId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
}

/**
* Récupère les données du photographe par son ID
*/
async function getPhotographerData(id) {
    const response = await fetch('data/photographers.json');
    if (!response.ok) {
        alert("Erreur");
        return;
    } 
    const { photographers } = await response.json();  //destructuration objet photographer grace aux {}
    return photographers.find(photographer => photographer.id === id);
}

/**
 * *Initialisation
*/
async function init() {
    const photographerId = getPhotographerId();
    const photographer = await getPhotographerData(photographerId);
    displayPhotographerData(photographer);
}

init();
