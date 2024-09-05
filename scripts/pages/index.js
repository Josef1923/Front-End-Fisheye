/**
* Récupère les données du photographe JSON photographerDispo
*/
async function getPhotographers() {
    const response = await fetch('data/photographers.json');
    const photographersAvaible = await response.json();
    return photographersAvaible;
}

/**
 * Affiche les données des photographes sur la page.
 */
async function displayData(photographersAvaible) {

    const photographersSection = document.querySelector(".photographer_section");

    photographersAvaible.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getPhotographerInfo();
        photographersSection.appendChild(userCardDOM);
    });
}

/**
 * Initialise l'affichage 
 */
async function init() {
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init();