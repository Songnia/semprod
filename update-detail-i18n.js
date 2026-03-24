const fs = require('fs');

let i18nPath = 'js/i18n-data.js';
let content = fs.readFileSync(i18nPath, 'utf8');

const detailFr = {
    "detail.back": "← Retour aux produits",
    "detail.loading": "Chargement du produit...",
    "detail.error.title": "Produit non trouvé",
    "detail.error.desc": "Le produit que vous recherchez n'existe pas ou a été supprimé.",
    "detail.error.btn": "Retour à la liste des produits",
    "detail.contact_us": "Nous contacter",
    "detail.add_cart": "Ajouter au panier",
    "detail.tabs.title": "RUBRIQUES",
    "detail.tabs.desc": "Description détaillée",
    "detail.tabs.ingredients": "Ingrédients",
    "detail.tabs.nutrition": "Valeur Nutritonnelle",
    "detail.tabs.benefits": "Bienfaits",
    "detail.tabs.usage": "Utilisation",
    "detail.comp.th1": "Composition",
    "detail.comp.th2": "valeur pour 100g",
    "detail.comp.iterg": "Analysé par les laboratoires ITERG, Pessac -France",
    "detail.comp.capinov": "Analysé par les laboratoires Capinov-Brest France",
    "detail.reviews.title": "Avis clients",
    "detail.reviews.none": "Aucun témoignage pour le moment.",
    "detail.reviews.btn": "Donner mon avis"
};

const detailEn = {
    "detail.back": "← Back to products",
    "detail.loading": "Loading product...",
    "detail.error.title": "Product not found",
    "detail.error.desc": "The product you are looking for does not exist or has been removed.",
    "detail.error.btn": "Back to product list",
    "detail.contact_us": "Contact us",
    "detail.add_cart": "Add to cart",
    "detail.tabs.title": "CATEGORIES",
    "detail.tabs.desc": "Detailed description",
    "detail.tabs.ingredients": "Ingredients",
    "detail.tabs.nutrition": "Nutritional Value",
    "detail.tabs.benefits": "Benefits",
    "detail.tabs.usage": "Usage",
    "detail.comp.th1": "Composition",
    "detail.comp.th2": "value per 100g",
    "detail.comp.iterg": "Analyzed by ITERG laboratories, Pessac - France",
    "detail.comp.capinov": "Analyzed by Capinov-Brest laboratories, France",
    "detail.reviews.title": "Customer reviews",
    "detail.reviews.none": "No reviews yet.",
    "detail.reviews.btn": "Write a review"
};

const insertTranslations = (content, objToInsert, matchStr) => {
    let parts = content.split(matchStr);
    let str = '';
    for (let key in objToInsert) {
        str += '        "' + key + '": ' + JSON.stringify(objToInsert[key]) + ',' + String.fromCharCode(10);
    }
    return parts[0] + str + matchStr + parts[1];
};

content = insertTranslations(content, detailFr, '    },' + String.fromCharCode(10) + '    en: {');
content = insertTranslations(content, detailEn, '    }' + String.fromCharCode(10) + '};');

fs.writeFileSync(i18nPath, content, 'utf8');
console.log('Detail Translations inserted');
