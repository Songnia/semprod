const fs = require('fs');

let i18nPath = 'js/i18n-data.js';
let content = fs.readFileSync(i18nPath, 'utf8');

const photosFr = {
    "photos.title": "Notre Galerie Photos",
    "photos.subtitle": "Découvrez nos produits, installations et événements en images",
    "photos.filter_all": "Toutes les photos",
    "photos.filter_products": "Nos Produits",
    "photos.filter_machines": "Nos Machines made in Cameroun",
    "photos.filter_events": "Nos Evenements",
    "photos.filter_team": "Notre Équipe",
    "photos.cap_salon": "Salon de l'agriculture Paris",
    "photos.cap_sialy": "SIALY",
    "photos.cap_team": "Notre Équipe",
    "photos.cap_team_desc": "L'équipe passionnée qui fait vivre SEM Production au quotidien",
    "photos.cap_oil": "Huile Précieuse de graines de Courge Tropicale “Ngon” 250ml",
    "photos.cap_kara": "Kara Ngon 250g",
    "photos.cap_kara_desc": "Pistache Africaine<br>Soufflée – Caramélisée",
    "photos.cap_biscuit": "Biscuit Sablé Ngon",
    "photos.cap_biscuit_desc": "A la Farine de Pistache Africaine sans gluten, sucre réduit"
};

const photosEn = {
    "photos.title": "Our Photo Gallery",
    "photos.subtitle": "Discover our products, facilities, and events in pictures",
    "photos.filter_all": "All Photos",
    "photos.filter_products": "Our Products",
    "photos.filter_machines": "Our Machines Made in Cameroon",
    "photos.filter_events": "Our Events",
    "photos.filter_team": "Our Team",
    "photos.cap_salon": "Paris International Agricultural Show",
    "photos.cap_sialy": "SIALY",
    "photos.cap_team": "Our Team",
    "photos.cap_team_desc": "The passionate team that brings SEM Production to life every day",
    "photos.cap_oil": "Precious Tropical Pumpkin Seed Oil “Ngon” 250ml",
    "photos.cap_kara": "Kara Ngon 250g",
    "photos.cap_kara_desc": "African Pistachio<br>Puffed – Caramelized",
    "photos.cap_biscuit": "Ngon Shortbread Cookie",
    "photos.cap_biscuit_desc": "With gluten-free African Pistachio Flour, reduced sugar"
};

const insertTranslations = (content, objToInsert, matchStr) => {
    let parts = content.split(matchStr);
    let str = '';
    for (let key in objToInsert) {
        str += '        "' + key + '": ' + JSON.stringify(objToInsert[key]) + ',' + String.fromCharCode(10);
    }
    return parts[0] + str + matchStr + parts[1];
};

content = insertTranslations(content, photosFr, '    },' + String.fromCharCode(10) + '    en: {');
content = insertTranslations(content, photosEn, '    }' + String.fromCharCode(10) + '};');

fs.writeFileSync(i18nPath, content, 'utf8');
console.log('Translations for photos.html generated and updated in i18n-data.js');
