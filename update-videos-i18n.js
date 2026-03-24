const fs = require('fs');

let i18nPath = 'js/i18n-data.js';
let content = fs.readFileSync(i18nPath, 'utf8');

const videosFr = {
    "videos.title": "Notre Galerie Vidéo",
    "videos.subtitle": "Découvrez nos produits, installations et événements en vidéos",
    "videos.desc1": "Témoignage d’un ancien de la diaspora :<br>🇨🇲 Samuel SAFO TCHOFO, inventeur et entrepreneur camerounais, est à l’origine d’une innovation technologique remarquable.",
    "videos.desc2": "𝗡𝗴𝗼𝗻 𝗯𝘆 𝗦𝗘𝗠 𝗣𝗿𝗼𝗱𝘂𝗰𝘁𝗶𝗼𝗻 𝗮𝘂𝘅 𝗰𝗼̂𝘁𝗲𝘀 𝗱𝗲 𝗹𝗮 𝗷𝗲𝘂𝗻𝗲𝘀𝘀𝗲 𝗽𝗼𝘂𝗿 𝗹’𝗶𝗻𝗻𝗼𝘃𝗮𝘁𝗶𝗼𝗻 𝗲𝘁 𝗹’𝗲𝗻𝘁𝗿𝗲𝗽𝗿𝗲𝗻𝗲𝘂𝗿𝗶𝗮𝘁",
    "videos.desc3": "𝐂𝐡𝐞𝐳 𝐍𝐠𝐨𝐧 𝐛𝐲 𝐒𝐄𝐌 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐢𝐨𝐧, 𝐜𝐡𝐚𝐪𝐮𝐞 𝐠𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐩𝐭𝐞 !<br>Offrez du bonheur, partagez de la joie ! Nos paniers cadeaux sont soigneusement préparés pour illuminer vos moments spéciaux et ravir vos proches.",
    "videos.desc4": "L’Entreprise Ngon by SEM Production lors de son exposition en Égypte dans la ville du Caire .<br>Retrouvez ces produits locaux 100% Made In Cameroun 🇨🇲 dans nos rayons epicerie de ",
    "videos.desc5": "Parce que 𝘃𝗼𝘁𝗿𝗲 𝗯𝗶𝗲𝗻-𝗲̂𝘁𝗿𝗲 𝗲𝘀𝘁 𝗮𝘂 𝗰œ𝘂𝗿 𝗱𝗲 𝘁𝗼𝘂𝘁 𝗰𝗲 𝗾𝘂𝗲 𝗻𝗼𝘂𝘀 𝗰𝗿𝗲𝗼𝗻𝘀 !<br>Nos clients en parlent mieux que nous",
    "videos.desc6": "SEM production à la FIAC (foire internationale des affaires et du commerce) en Mars 2018",
    "videos.desc7": "SEM production à l'émission Business Africa sur AfricaNews en Février 2018",
    "videos.desc8": "Reportage qui présente l'usine de décorticage de SEM production, Février 2018",
    "videos.desc9": "SEM production au journal de 12H sur la CRTV, au mois de Décembre 2015",
    "videos.desc10": "SEM production au SIMAC (salon international du machinisme agricole du cameroun) sur 7News TV en Décembre 2015"
};

const videosEn = {
    "videos.title": "Our Video Gallery",
    "videos.subtitle": "Discover our products, facilities, and events in videos",
    "videos.desc1": "Testimony of a former diaspora member:<br>🇨🇲 Samuel SAFO TCHOFO, Cameroonian inventor and entrepreneur, is the source of a remarkable technological innovation.",
    "videos.desc2": "Ngon by SEM Production alongside youth for innovation and entrepreneurship",
    "videos.desc3": "At Ngon by SEM Production, every gesture counts!<br>Offer happiness, share joy! Our gift baskets are carefully prepared to brighten your special moments and delight your loved ones.",
    "videos.desc4": "Ngon by SEM Production company during its exhibition in Egypt in the city of Cairo.<br>Find these 100% Made in Cameroon 🇨🇲 local products in our grocery aisles of",
    "videos.desc5": "Because your well-being is at the heart of everything we create!<br>Our customers talk about it better than we do",
    "videos.desc6": "SEM production at FIAC (international business and trade fair) in March 2018",
    "videos.desc7": "SEM production on the Business Africa show on AfricaNews in February 2018",
    "videos.desc8": "Report presenting the SEM production shelling plant, February 2018",
    "videos.desc9": "SEM production on the 12PM news on CRTV, in December 2015",
    "videos.desc10": "SEM production at SIMAC (International Agricultural Machinery Exhibition of Cameroon) on 7News TV in December 2015"
};

const insertTranslations = (content, objToInsert, matchStr) => {
    let parts = content.split(matchStr);
    let str = '';
    for (let key in objToInsert) {
        str += '        "' + key + '": ' + JSON.stringify(objToInsert[key]) + ',' + String.fromCharCode(10);
    }
    return parts[0] + str + matchStr + parts[1];
};

content = insertTranslations(content, videosFr, '    },' + String.fromCharCode(10) + '    en: {');
content = insertTranslations(content, videosEn, '    }' + String.fromCharCode(10) + '};');

fs.writeFileSync(i18nPath, content, 'utf8');
console.log('Translations for videos.html generated and updated in i18n-data.js');
