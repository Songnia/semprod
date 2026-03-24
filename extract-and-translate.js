const fs = require('fs');

let i18nPath = 'js/i18n-data.js';
let content = fs.readFileSync(i18nPath, 'utf8');

// The original HTML content for FR
const histFr = `
                        <!--<h3>Nos Débuts</h3>-->
                        <p>
                            Tout est parti d’une idée, d’une passion, puis s’en est suivi dès 1988 un croquis de conception, alors qu’à cette période l’auteur, Samuel Safo Tchofo, est un jeune ingénieur d’opérations pétrolières affecté au Gabon.<br>
                            L’idée ici était de réduire de manière significative la pénibilité liée au décorticage des graines de courges appelées « pistache » ou « égusi ». À cette époque, il n’existait pas de système fiable et d’efficacité reconnue pour accomplir cette tâche sur nos produits locaux. De nombreux dispositifs artisanaux avaient été décrits sans apporter la fiabilité et l’efficacité qui puisse mener à une solution industrielle.
                        </p>
                        <p>
                            Le tout premier prototype de notre projet a été fabriqué en juin 1988 à Lyon en France, durant ses vacances. Ce prototype était manuel et son rendement non prometteur était inférieur à 30%. Néanmoins, il a permis la même année par une modification de valider le concept de base et de porter autour de 50% l’efficacité. Toujours peu satisfaisant mais sur la bonne voie, c’est ainsi que le projet de brevet d’invention est approuvé et déposé en 1989 auprès du cabinet Maisonnier à Lyon. Par la suite, l’auteur est affecté en Algérie toujours comme ingénieur d’opérations travaillant en rotation 7 semaines sur 3 de repos en France.
                        </p>
                        <p>
                            Dès lors, il profitait de ses périodes fréquentes de repos en 1989 pour poursuivre ses travaux et ses efforts menèrent aux conclusions suivantes :
                        </p>
                        <ul>
                            <li>Nécessité d’une étude préalable des propriétés physiques des graines ;</li>
                            <li>Nécessité d’une étude statistique des populations de graine ;</li>
                        </ul>
                        <p>
                            Ces deux études s’avèrent être au cœur du projet qui devient ainsi non plus seulement un projet d’invention technique mais un projet de recherche scientifique préalable.<br>
                            Il a fallu attendre la fin de 1994 et début 1995 qui marque la période sabbatique de l’auteur pour que le projet s’accélère et mène à un changement majeur notamment :
                        </p>
                        <ol>
                            <li>La machine de décorticage devra être mécanisée et non manuelle.</li>
                            <li>Il s’agira d’une chaîne de machines et non d’une seule, d’où l’approche industrielle.</li>
                        </ol>
                        <p>
                            De nombreux dispositifs techniques d’expérimentations, plus de 40, sont ainsi construits en marge du projet initial afin de valider les nouveaux concepts des différents modules du système. Désormais, l’efficacité du décorticage franchit la barre de 60% en 1995. Le premier prototype expérimental de la chaîne est en place. À ce moment, le prototype effectue le travail de 35 personnes et les concepts de base sont validés.
                        </p>
                        <p>
                            Il s’avère alors clair qu’un travail de recherche plus poussé est nécessaire afin d’optimiser et fiabiliser les solutions techniques. Fin 2012, Samuel Safo Tchofo anticipe et prend sa retraite ; il relance un an plus tard à plein temps la recherche qui aboutira à la formulation d’une série d’équations dont certaines sont présentes tant en statistiques, algèbre, équations différentielles…etc. Elles mèneront en 2015 à franchir les hautes barres symboliques de 90% d’efficacité au décorticage et la barre de 95% et au dépôt d’un brevet auprès de l’OAPI. Dans la même lancée, les prototypes industriels sont finalisés en trois unités : Prétraitement, Décorticage, Triage qui sont capables d’effectuer le travail de 80 personnes avec chacun une précision supérieure à 90%.
                        </p>
                        <p>
                            En d’autres termes, ce qu’un homme fait en 80 jours, ce prototype le fait en 1 jour. 28 années se sont écoulées entre le premier dessin et la solution actuelle. Le projet a été financé sur fonds propres, notamment la fabrication des pièces, l’achat de l’outillage et des équipements de mesures et la rémunération des assistants.
                        </p>
                        <p>
                            Les dates ci-dessous résument les périodes historiques partant du début du projet jusqu’à la création de SEM production :
                        </p>
                        <ul>
                            <li><strong>Janvier à Février 1988 :</strong> Cette période marque le début du projet, alors qu’il est ingénieur général des opérations pétrolières au Gabon, il consacre 40% de son temps au dessin de conception.</li>
                            <li><strong>Février à Mai 1988 :</strong> Toujours ingénieur basé au Gabon, il consacre 20% de son temps au suivi des dessinateurs.</li>
                            <li><strong>Mai à Septembre 1988 :</strong> Arrivé en France et officiant en tant qu’ingénieur, le concepteur consacre 75% de son temps à son projet. Cette période est caractérisée par la fabrication du tout premier prototype.</li>
                            <li><strong>Novembre 89 à Novembre 94 :</strong> C’est la période pendant laquelle il fait des études, des modifications et aussi le 1er essai qui donne déjà lieu à des résultats. Également, il est dans le management et des projets, ceci constitue son activité professionnelle, il consacre 20% de son temps à son projet personnel.</li>
                            <li><strong>Novembre 94 à Novembre 95 :</strong> Cette période se caractérise par un repos (année sabbatique) durant lequel il consacre 60% de son temps tant dans la recherche et aussi dans le développement ceci dans le but d’augmenter d’améliorer le rendement du prototype et obtenir de meilleurs résultats.</li>
                            <li><strong>Novembre 95 à Octobre 2012 :</strong> Durant toute cette longue période, son activité professionnelle prend le dessus alors qu’il est successivement dans le management et projets puis Directeur et enfin Directeur Général. Du fait de sa forte mobilité, il passe 15% de son temps à travailler sur ce propre projet qui donne uniquement lieu à des « essais ».</li>
                            <li><strong>Décembre 2012 à Novembre 2013 :</strong> Marquée par la délocalisation de la France pour le Cameroun avec toute la logistique, cette période est caractérisée par une accélération des travaux sur tous les aspects. Il est consultant et travaille sur SEM.</li>
                            <li><strong>Novembre 2013 à Décembre 2015 :</strong> La recherche, le développement sont intenses sur SEM. Ayant pour base de manière définitive le Cameroun, nous assistons dans un premier temps à l’installation de l’atelier ainsi que du laboratoire, ensuite à une recherche ultime plus poussée entre la France et le Cameroun pour se solder à la fin par la mise sur pieds du prototype final.</li>
                            <li><strong>2017 :</strong> C’est la création de SEM production…</li>
                        </ul>
`;

const histEn = `
                        <!--<h3>Our Beginnings</h3>-->
                        <p>
                            Everything started from an idea, a passion, followed in 1988 by a design sketch, while at that time the author, Samuel Safo Tchofo, was a young petroleum operations engineer assigned to Gabon.<br>
                            The idea here was to significantly reduce the arduousness linked to shelling pumpkin seeds called "pistachio" or "egusi". At that time, there was no reliable and recognized efficient system to accomplish this task on our local products. Many artisanal devices had been described without bringing the reliability and efficiency that could lead to an industrial solution.
                        </p>
                        <p>
                            The very first prototype of our project was manufactured in June 1988 in Lyon, France, during his holidays. This prototype was manual and its unpromising yield was less than 30%. Nevertheless, it allowed the same year by a modification to validate the basic concept and to bring the efficiency up to around 50%. Still unsatisfactory but on the right track, this is how the patent project for invention is approved and filed in 1989 with the Maisonnier firm in Lyon. Subsequently, the author is assigned to Algeria, still as an operations engineer working in rotation 7 weeks with 3 weeks of rest in France.
                        </p>
                        <p>
                            From then on, he took advantage of his frequent rest periods in 1989 to continue his work and his efforts led to the following conclusions:
                        </p>
                        <ul>
                            <li>Need for a preliminary study of the physical properties of the seeds;</li>
                            <li>Need for a statistical study of the seed populations;</li>
                        </ul>
                        <p>
                            These two studies turn out to be at the heart of the project which thus becomes not only a technical invention project but a preliminary scientific research project.<br>
                            It was not until the end of 1994 and the beginning of 1995, which marks the author's sabbatical period, that the project accelerated and led to a major change, in particular:
                        </p>
                        <ol>
                            <li>The shelling machine will have to be mechanized and not manual.</li>
                            <li>It will be a chain of machines and not a single one, hence the industrial approach.</li>
                        </ol>
                        <p>
                            Numerous technical devices for experimentation, more than 40, are thus built on the sidelines of the initial project in order to validate the new concepts of the various modules of the system. Now, the efficiency of shelling crosses the 60% mark in 1995. The first experimental prototype of the chain is in place. At this time, the prototype does the work of 35 people and the basic concepts are validated.
                        </p>
                        <p>
                            It then becomes clear that further research is necessary to optimize and make the technical solutions reliable. At the end of 2012, Samuel Safo Tchofo anticipated and retired; a year later, he relaunched full-time the research which would lead to the formulation of a series of equations, some of which are present in both statistics, algebra, differential equations...etc. They will lead in 2015 to crossing the symbolic high bars of 90% efficiency in shelling and the 95% bar and to the filing of a patent with the OAPI. In the same vein, the industrial prototypes are finalized in three units: Pretreatment, Shelling, Sorting which are able to do the work of 80 people with each an accuracy greater than 90%.
                        </p>
                        <p>
                            In other words, what a man does in 80 days, this prototype does in 1 day. 28 years have elapsed between the first drawing and the current solution. The project was financed from equity, including the manufacture of parts, the purchase of tools and measuring equipment and the remuneration of assistants.
                        </p>
                        <p>
                            The dates below summarize the historical periods starting from the beginning of the project until the creation of SEM production:
                        </p>
                        <ul>
                            <li><strong>January to February 1988:</strong> This period marks the beginning of the project, while he is general engineer of petroleum operations in Gabon, he devotes 40% of his time to the design drawing.</li>
                            <li><strong>February to May 1988:</strong> Still an engineer based in Gabon, he devotes 20% of his time to monitoring designers.</li>
                            <li><strong>May to September 1988:</strong> Arriving in France and officiating as an engineer, the designer devoted 75% of his time to his project. This period is characterized by the manufacture of the very first prototype.</li>
                            <li><strong>November 89 to November 94:</strong> This is the period during which he made studies, modifications and also the first test which already gave rise to results. Also, he is into management and projects, this constitutes his professional activity, he devotes 20% of his time to his personal project.</li>
                            <li><strong>November 94 to November 95:</strong> This period is characterized by a rest (sabbatical year) during which he devotes 60% of his time to both research and development with the aim of increasing the prototype's yield and obtaining better results.</li>
                            <li><strong>November 95 to October 2012:</strong> Throughout this long period, his professional activity took over while he was successively in management and projects, then Director and finally Managing Director. Due to his high mobility, he spends 15% of his time working on his own project which only gives rise to "tests".</li>
                            <li><strong>December 2012 to November 2013:</strong> Marked by the relocation from France to Cameroon with all the logistics, this period is characterized by an acceleration of work on all aspects. He is a consultant and works on SEM.</li>
                            <li><strong>November 2013 to December 2015:</strong> Research and development are intense on SEM. Having permanently based in Cameroon, we first witnessed the installation of the workshop as well as the laboratory, then a more extensive ultimate research between France and Cameroon to conclude at the end with the setting up of the final prototype.</li>
                            <li><strong>2017:</strong> This is the creation of SEM production...</li>
                        </ul>
`;

const chaineFr = `
                    <p>Notre chaîne de valeur est conçue pour garantir la qualité, la traçabilité et la durabilité de nos produits. Chaque étape est soigneusement contrôlée pour vous offrir le meilleur des produits naturels.</p>
`;
const chaineEn = `
                    <p>Our value chain is designed to ensure the quality, traceability and sustainability of our products. Every step is carefully controlled to bring you the best of natural products.</p>
`;

const promoFr = `
                        <!--<h3>SAFO TCHOFO</h3>-->
                        
                        <p>
                            Samuel a 28 ans d'expérience dans les secteurs du Pétrole, Gaz et de l'Énergie, dont 15 ans en Afrique et 13 à l'étranger jusqu’en 2012.<br>
                            Il prend sa retraite anticipée pour ensuite être consultant en énergie et surtout finaliser un ancien projet qui lui tenait à cœur&nbsp;: celui de la recherche sur le décorticage des graines de courges, tâche pénible et complexe jusqu’alors manuelle dans son pays d’origine.<br>
                            Ce projet aboutit en 2017 à la première usine de décorticage de graines de courge à coque dure.
                        </p>
                        <p>
                            Il est diplômé de l'École Nationale Supérieure Polytechnique de Yaoundé en 1982 avec un Master en Ingénierie Electromécanique.<br>
                            Il détient divers diplômes et certificats en pétrole et gaz, en gestion d'entreprise, en négociations de contrats pétroliers, en ingénierie pétrolière, en ressources humaines, gestion des projets, etc.
                        </p>
                        <p>
                            Il est par ailleurs un orateur distingué dans diverses conférences sur l’Énergie et consultant en développement de contenu local dans le secteur du pétrole, gaz et mines notamment auprès des organismes des Nations Unies.
                        </p>
                        <p>
                            Samuel SAFO TCHOFO a commencé sa carrière internationale dans le secteur du pétrole, du gaz et de l'énergie en 1984 à Schlumberger, occupant les postes suivants du dernier au premier&nbsp;:
                        </p>
                        <ul>
                            <li>• 3 ans en tant que Directeur Général du Cameroun et de la Guinée Équatoriale basé à Malabo</li>
                            <li>• 3 ans en tant que Directeur RH du groupe informatique basé à Houston</li>
                            <li>• 2 ans Consultant basé à Luanda</li>
                            <li>• 5 ans en tant que Directeur du développement des affaires pour les compagnies pétrolières nationales africaines, et gestionnaire du contenu local basé à Luanda</li>
                            <li>• 3 ans en tant que Directeur des ventes de produits de compteurs d'énergie - Afrique, basé à Paris</li>
                            <li>• 3 ans en tant que chef de projet dans le centre de recherche et développement du groupe Schlumberger à Paris</li>
                            <li>• 2 ans en tant que responsable du recrutement pour l'Afrique basé en France</li>
                            <li>• 2 ans en tant qu'enseignant en technologie d'exploitation pétrolière, basé à Parme - Italie</li>
                            <li>• 1 an en tant que chef de base, Tanzanie-Kenya basé à Mombasa - Kenya puis à Dar es Salaam - Tanzanie</li>
                            <li>• 5 ans en tant qu'ingénieur des opérations pétrolières au Congo, au Gabon, en Angola, en Libye, en Algérie</li>
                        </ul>
                         <p></p>
                         <p></p>
                        <!--<p class="founder-signature">SAFO TCHOFO<br>Fondateur & CEO de SEM Production</p>-->
`;

const promoEn = `
                        <p>
                            Samuel has 28 years of experience in the Oil, Gas and Energy sectors, including 15 years in Africa and 13 abroad until 2012.<br>
                            He took early retirement to then be an energy consultant and especially finalize an old project close to his heart: research on the shelling of pumpkin seeds, an arduous and complex task previously manual in his country of origin.<br>
                            This project culminated in 2017 with the first hard-shelled pumpkin seed shelling plant.
                        </p>
                        <p>
                            He graduated from the National Advanced School of Engineering of Yaoundé in 1982 with a Master's degree in Electromechanical Engineering.<br>
                            He holds various degrees and certificates in oil and gas, business management, negotiation of oil contracts, petroleum engineering, human resources, project management, etc.
                        </p>
                        <p>
                            He is also a distinguished speaker at various energy conferences and a consultant on local content development in the oil, gas and mining sector, particularly with UN agencies.
                        </p>
                        <p>
                            Samuel SAFO TCHOFO started his international career in the oil, gas and energy sector in 1984 at Schlumberger, occupying the following positions from the last to the first:
                        </p>
                        <ul>
                            <li>• 3 years as General Manager of Cameroon and Equatorial Guinea based in Malabo</li>
                            <li>• 3 years as IT Group HR Director based in Houston</li>
                            <li>• 2 years Consultant based in Luanda</li>
                            <li>• 5 years as Business Development Director for African national oil companies, and local content manager based in Luanda</li>
                            <li>• 3 years as Sales Director for energy meter products - Africa, based in Paris</li>
                            <li>• 3 years as project manager in the research and development center of the Schlumberger group in Paris</li>
                            <li>• 2 years as recruitment manager for Africa based in France</li>
                            <li>• 2 years as teacher in petroleum exploitation technology, based in Parma - Italy</li>
                            <li>• 1 year as base manager, Tanzania-Kenya based in Mombasa - Kenya then in Dar es Salaam - Tanzania</li>
                            <li>• 5 years as petroleum operations engineer in Congo, Gabon, Angola, Libya, Algeria</li>
                        </ul>
`;


content = content.replace(
    /"about.s1.p5": "(.*?)"\n    },/g,
    `"about.s1.p5": "$1",\n        "about.s2.content": ${JSON.stringify(histFr)},\n        "about.s3.content": ${JSON.stringify(chaineFr)},\n        "about.s4.content": ${JSON.stringify(promoFr)}\n    },`
);

content = content.replace(
    /"about.s1.p5": "(.*?)"\n    }\n};/g,
    `"about.s1.p5": "$1",\n        "about.s2.content": ${JSON.stringify(histEn)},\n        "about.s3.content": ${JSON.stringify(chaineEn)},\n        "about.s4.content": ${JSON.stringify(promoEn)}\n    }\n};`
);

fs.writeFileSync(i18nPath, content, 'utf8');
console.log('Translations inserted');
