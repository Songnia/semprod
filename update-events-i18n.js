const fs = require('fs');

let i18nPath = 'js/i18n-data.js';
let content = fs.readFileSync(i18nPath, 'utf8');

const eventsFr = {
    "events.title": "Nos Événements Récents",
    "events.subtitle": "Découvrez les dernières actualités et événements de SEM Production",
    "events.e1.title": "SIALY 2025.",
    "events.e1.desc": "Nous avons eu le plaisir d'accueillir la visite de Carine Andela, présidente de l Association des Entrepreneurs Ingénieux d'Afrique (Asenia), Egérie du Made in Cameroun qu'on ne présente plus.\\nVisite tres intéressante, grands moments d'échanges sur la difficile problématique du produire et consommer local.\\nToutes nos félicitations et encouragements à Mme Andela pour son engagement sans faille pour  promouvoir les produits locaux.\\n\" O bosso \"",
    "events.e1.author": "Sem Production",
    "events.e1.date": "• 28 Juin 2025",
    "events.e2.title": "Ngon by SEM Production est au Salon de l'Agriculture de Paris.",
    "events.e2.desc": "Ne manquez pas Ngon by SEM Production au Salon International de l'Agriculture - Paris 2025.\\n1 Graine - 1 Technologie - 20 Produits \\nDécouvrez notre savoir-faire et dégustez nos produits à base de pistache africaine !\\nLe compte à rebours est lancé… On vous attend ! \\nRendez-vous à notre stand !",
    "events.e2.author": "Sem Production",
    "events.e2.date": "• 28 Fevrier 2025",
    "events.e3.title": "SEM Production Salon des Entrepreneur aout 2018",
    "events.e3.desc": "SEM production sera à la foire des entrepreneurs qui a lieu ce vendredi 10 Aout à l'hotel SAWA Novotel à partir de 09 heures. Une nouvelle occasion s'offre à vous de découvrir et vous offrir les vertus de la reine des graines de pistache et acquérir ses produits dérivés (huile précieuse, farine allégée, apéritif utile...) de la marque Ngon: Santé et beauté aux 5 étoiles.",
    "events.e3.author": "Sem Production",
    "events.e3.date": "• Aout 2018",
    "events.e4.title": "SEM Production Foire exposition de l'EEC juin 2018",
    "events.e4.desc": "Occasion unique et rare, SEM production est présent à la foire exposition qui a lieu à Douala au quartier Makèpè rhone poulenc face église évangélique EEC du cinquantenaire. Au menu la découverte, l'exposition et la dégustation des produits de la marque \"Ngon\" aux 5 étoiles notamment l'huile précieuse, la farine allégée et protéinée... ainsi que quelques recettes qui en découlent. Un véritable régal pour les curieux visiteurs, la communauté évangélique repartis comblés...",
    "events.e4.author": "Sem Production",
    "events.e4.date": "• juin 2018",
    "events.e5.title": "Présentation des produits 'Ngon' dans diverses communautés en France Mai 2018",
    "events.e5.desc": "Présentation des produits de la marque \"Ngon\" aux 5 étoiles à la diaspora Française, elle a suscité de l'émerveillement et de l'émoie. la satisfaction était au rendez-vous...",
    "events.e5.author": "Sem Production",
    "events.e5.date": "•  Mai 2018",
    "events.e6.title": "SEM Production à la Fiac (Foire International des Affaires et du Commerce mars-avril 2018",
    "events.e6.desc": "Dans une ambiance conviviale à la FIAC 2018 à Camtel-Bepanda la jeune équipe dynamique de SEM Production pilotée par son Promoteur et concepteur de la Décortiqueuse de la graine de courge (pistache long grain) a pu faire découvrir l'immense richesse des produits de la marque Ngon et ses 5 Etoiles aux citoyens camerounais, qui ont d’ailleurs été très agréablement surpris par : Le décorticage industriel, la production de l’ huile précieuse, les vertus de l’huile et de la farine, sans compter les graines sélectionnées et grillées. Sans doute pour le futur le reste est à venir.",
    "events.e6.author": "Sem Production",
    "events.e6.date": "•  Mars-Avril 2018",
    "events.e7.title": "SEM Production au Salon international du Machinisme agricole décembre 2015",
    "events.e7.desc": "La Chambre d'Agriculture des Pêches, de l'Elevage et des Forêts du Cameroun (CAPEF) organise le premier Salon Internation du Machinisme Agricole du 15 au 20 Decembre 2015 au Palais des Congrès de Yaoundé, sous le thème << Révolution Agricole : les enjeux et défis pour une Agriculture performante et durable >>. Placé sous le Très Haut Patronage du Président de la République, Son Excellence, Monsieur Paul BIYA, cet évènement a por objectif de proumouvoir et de concrétiser en actes, L'Agriculture de seconde génération dont l'accroissement des surfaces cultivées est une invite à la substitution des méthodes artisanales par les pratiques modernes. Le SIMAC qui se veut un espace de rencontres et d'echanges entre Profesionnels Agro-Sylvo-Pastoraux et Alieutiques est structuré en cinq pavillons spécialisés.",
    "events.e7.author": "Sem Production",
    "events.e7.date": "•  Decembre 2015"
};

const eventsEn = {
    "events.title": "Our Recent Events",
    "events.subtitle": "Discover the latest news and events from SEM Production",
    "events.e1.title": "SIALY 2025.",
    "events.e1.desc": "We had the pleasure of welcoming the visit of Carine Andela, president of the Association of Ingenious Entrepreneurs of Africa (Asenia), muse of Made in Cameroon that needs no introduction.\\nVery interesting visit, great moments of exchange on the difficult problem of producing and consuming locally.\\nAll our congratulations and encouragement to Ms. Andela for her unfailing commitment to promoting local products.\\n\" O bosso \"",
    "events.e1.author": "Sem Production",
    "events.e1.date": "• June 28, 2025",
    "events.e2.title": "Ngon by SEM Production is at the Paris Agricultural Show.",
    "events.e2.desc": "Do not miss Ngon by SEM Production at the International Agricultural Show - Paris 2025.\\n1 Seed - 1 Technology - 20 Products \\nDiscover our know-how and taste our products based on African pistachio!\\nThe countdown begins... We are waiting for you! \\nSee you at our stand!",
    "events.e2.author": "Sem Production",
    "events.e2.date": "• February 28, 2025",
    "events.e3.title": "SEM Production Entrepreneurs Show August 2018",
    "events.e3.desc": "SEM production will be at the entrepreneurs fair taking place this Friday, August 10 at the SAWA Novotel hotel starting at 09 am. A new opportunity is offered to you to discover and offer yourself the virtues of the queen of pistachio seeds and acquire its derived products (precious oil, light flour, useful aperitif...) of the Ngon brand: Health and beauty with 5 stars.",
    "events.e3.author": "Sem Production",
    "events.e3.date": "• August 2018",
    "events.e4.title": "SEM Production EEC Trade Fair June 2018",
    "events.e4.desc": "Unique and rare opportunity, SEM production is present at the trade fair taking place in Douala in the Makèpè rhone poulenc district opposite the EEC 50th anniversary evangelical church. On the menu: discovery, exhibition and tasting of products from the 5-star \"Ngon\" brand, including precious oil, light and protein-rich flour... as well as some recipes derived from them. A real treat for curious visitors, the evangelical community left delighted...",
    "events.e4.author": "Sem Production",
    "events.e4.date": "• June 2018",
    "events.e5.title": "Presentation of 'Ngon' products in various communities in France May 2018",
    "events.e5.desc": "Presentation of the 5-star \"Ngon\" brand products to the French diaspora sparked wonder and emotion. Satisfaction was guaranteed...",
    "events.e5.author": "Sem Production",
    "events.e5.date": "• May 2018",
    "events.e6.title": "SEM Production at Fiac (International Business and Trade Fair March-April 2018",
    "events.e6.desc": "In a friendly atmosphere at FIAC 2018 in Camtel-Bepanda, the young dynamic team of SEM Production led by its Promoter and designer of the Pumpkin seed sheller (long grain pistachio) was able to help Cameroonian citizens discover the immense wealth of products from the Ngon brand and its 5 Stars, who were pleasantly surprised by: Industrial shelling, the production of precious oil, the virtues of oil and flour, not to mention the selected and roasted seeds. No doubt for the future the rest is to come.",
    "events.e6.author": "Sem Production",
    "events.e6.date": "• March-April 2018",
    "events.e7.title": "SEM Production at the International Agricultural Machinery Show December 2015",
    "events.e7.desc": "The Chamber of Agriculture, Fisheries, Livestock and Forestry of Cameroon (CAPEF) is organizing the first International Agricultural Machinery Show from December 15 to 20, 2015 at the Yaoundé Conference Center, under the theme << Agricultural Revolution: issues and challenges for performing and sustainable Agriculture >>. Placed under the Very High Patronage of the President of the Republic, His Excellency, Mr. Paul BIYA, this event aims to promote and concretize in acts, Second generation Agriculture whose increase in cultivated areas is an invitation to the substitution of artisanal methods with modern practices. SIMAC, which is intended to be a space for meeting and exchange between Agro-Sylvo-Pastoral and Fishery Professionals, is structured into five specialized pavilions.",
    "events.e7.author": "Sem Production",
    "events.e7.date": "• December 2015"
};

const insertTranslations = (content, objToInsert, matchStr) => {
    let parts = content.split(matchStr);
    let str = '';
    for (let key in objToInsert) {
        str += '        "' + key + '": ' + JSON.stringify(objToInsert[key]) + ',' + String.fromCharCode(10);
    }
    return parts[0] + str + matchStr + parts[1];
};

content = insertTranslations(content, eventsFr, '    },' + String.fromCharCode(10) + '    en: {');
content = insertTranslations(content, eventsEn, '    }' + String.fromCharCode(10) + '};');

fs.writeFileSync(i18nPath, content, 'utf8');
console.log('Events Translations inserted');
