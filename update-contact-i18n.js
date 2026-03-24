const fs = require('fs');

let i18nPath = 'js/i18n-data.js';
let content = fs.readFileSync(i18nPath, 'utf8');

const contactFr = {
    "contact.title": "Contactez-Nous",
    "contact.subtitle": "Une question ? Un projet ? Parlons-en !",
    "contact.call": "Appelez-nous",
    "contact.availability": "Disponible du Lundi au Vendredi, de 9h à 17h.",
    "contact.whatsapp": "Discutez avec nous sur WhatsApp",
    "contact.whatsapp_resp": "Réponse rapide et personnalisée",
    "contact.whatsapp_btn": "Démarrer la conversation",
    "contact.email": "Écrivez-nous",
    "contact.email_resp": "Nous répondons sous 24 heures",
    "contact.visit": "Rendez-nous visite",
    "contact.address1": "Maison Bleu Bonamoussadi",
    "contact.address2": "Douala, Cameroun",
    "contact.map_title": "Où nous trouver",
    "contact.map_subtitle": "Visitez notre siège social à Douala"
};

const contactEn = {
    "contact.title": "Contact Us",
    "contact.subtitle": "A question? A project? Let's talk!",
    "contact.call": "Call us",
    "contact.availability": "Available Monday to Friday, 9am to 5pm.",
    "contact.whatsapp": "Chat with us on WhatsApp",
    "contact.whatsapp_resp": "Fast and personalized response",
    "contact.whatsapp_btn": "Start the conversation",
    "contact.email": "Write to us",
    "contact.email_resp": "We reply within 24 hours",
    "contact.visit": "Visit us",
    "contact.address1": "Blue House Bonamoussadi",
    "contact.address2": "Douala, Cameroon",
    "contact.map_title": "Where to find us",
    "contact.map_subtitle": "Visit our headquarters in Douala"
};

const insertTranslations = (content, objToInsert, matchStr) => {
    let parts = content.split(matchStr);
    let str = '';
    for (let key in objToInsert) {
        str += '        "' + key + '": ' + JSON.stringify(objToInsert[key]) + ',' + String.fromCharCode(10);
    }
    return parts[0] + str + matchStr + parts[1];
};

content = insertTranslations(content, contactFr, '    },' + String.fromCharCode(10) + '    en: {');
content = insertTranslations(content, contactEn, '    }' + String.fromCharCode(10) + '};');

fs.writeFileSync(i18nPath, content, 'utf8');
console.log('Translations for contact.html generated and updated in i18n-data.js');
