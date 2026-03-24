const fs = require('fs');

let i18nPath = 'js/i18n-data.js';
let content = fs.readFileSync(i18nPath, 'utf8');

const techFr = {
    "tech.title": "Notre Technologie",
    "tech.subtitle": "De la passion est née la recherche , de la recherche est née l'invention,de l'invention est née l'industrialisation.",
    "tech.s1.title": "1-LA NECESSITE D’UN PROGRAMME DE RECHERCHE.",
    "tech.s2.title": "2-RESUME DES EFFORTS CONSENTIS",
    "tech.s3.title": "3-PHASES DU PROJET",
    "tech.s4.title": "4-LES ETUDES CLES",
    "tech.annexes.title": "Annexes",
    "tech.annexes.subtitle": "Graines et Amandes",
    "tech.s5.title": "CONCEPTION ET FABRICATION DES MACHINES.",
    "tech.s7.title": "Machines et Spécifications",
    "tech.img.caption": "Vue Partielle de la chainne de decorticage",
    "tech.s8.title": "SPECIFICATIONS DE L’USINE"
};

const techEn = {
    "tech.title": "Our Technology",
    "tech.subtitle": "From passion research was born, from research invention was born, from invention industrialization was born.",
    "tech.s1.title": "1-THE NEED FOR A RESEARCH PROGRAM.",
    "tech.s2.title": "2-SUMMARY OF EFFORTS MADE",
    "tech.s3.title": "3-PROJECT PHASES",
    "tech.s4.title": "4-KEY STUDIES",
    "tech.annexes.title": "Appendices",
    "tech.annexes.subtitle": "Seeds and Kernels",
    "tech.s5.title": "DESIGN AND MANUFACTURING OF MACHINES.",
    "tech.s7.title": "Machines and Specifications",
    "tech.img.caption": "Partial View of the shelling chain",
    "tech.s8.title": "FACTORY SPECIFICATIONS"
};

const techS1Fr = `
                        <p>
                            Les graines de courges font partie de la famille botanique appelées cucurbitacées. Cette famille comporte de nombreuses variétés.<br>
                            La variété objet de nos recherches pousse en Afrique tropicale et subtropicale ; sa coque est dure. Elle est présente au Cameroun et les principaux bassins de production se trouvent dans les régions du Sud, l’Adamaoua, du Centre et l’Est Cameroun.<br>
                            Son nom scientifique est <strong>cucumeropsis mannii</strong>.<br><br>
                            Ces graines de courge localement sont appelées <em>‘egusi-itoo’</em> chez les Anglophones et <em>‘pistache’</em> chez les Francophones dans la sous-région.<br>
                            Une fois décortiquées, elles constituent un aliment très prisé et fort apprécié dans de nombreux pays tropicaux notamment en Afrique sub-saharienne.<br>
                            Leur amande est consommée sous forme de gâteaux ou de pâte dans les sauces.<br>
                            Sur le plan gastronomique il fait partie des mets des grandes occasions culturelles et des fêtes.<br>
                            Sur le plan de la santé c’est un aliment riche en protéines, en acides gras polyinsaturé et en minéraux.<br>
                            Son huile est non saturée, n’a pas de cholestérol et est connue pour ses nombreux bienfaits parmi lesquels :
                        </p>
                        <ul>
                            <li>Protection contre la prostate</li>
                            <li>Facilitation de la circulation sanguine</li>
                            <li>Le débouchage des artères</li>
                            <li>Antioxydant…</li>
                        </ul>
                        <p>
                            Pour obtenir l’amande, les graines sont décortiquées une à une à la main.<br>
                            En pratique, cette opération de décorticage manuelle est très lente, pénible ; En effet, son amande se présente sous une forme plate et ovale, enveloppée de deux demi-coques de même forme, plus ou moins dures et liées sur le contour par une arrête de forte résistance.<br>
                            Le décorticage manuel consiste à séparer les deux demi-coques en frappant au milieu de l’arrête avec un objet dur pour briser l’arrête, et en extraire l’amande.<br>
                            Cette difficulté, limite toute grande production agricole et les applications industrielles de ce produit fort prisé.<br>
                            Cette limitation nous prive de toute valeur ajoutée lié à l’industrialisation de cette opération.<br>
                            L’industrialisation du décorticage des graines de courge non seulement boostera la production agricole, mais elle ouvrira la voie à la fabrication de nombreux produits industriels dérivés.<br><br>
                            L’idée était de réduire la pénibilité qui caractérise le décorticage de cette graine par un système mécanique est fort ancienne.<br>
                            Remplacer le décorticage manuel par une système mécanique s’avère être une opération très délicate, car il faudrait un système qui décortique la graine sans l’écraser ni endommager l’amande.<br>
                            C’est ainsi que de nombreux dispositifs mécaniques avaient été décrits et présentés sans apporter la fiabilité, et l’efficacité qui puisse mener à une solution industrielle.<br>
                            Plusieurs projets inities en ce sens ont été abandonnés au vu de la complexité du décorticage et de la séparation des coques des amandes.<br>
                            En outre il faudrait que ce soit économiquement rentable.<br>
                            Pour bon nombre de système présentés l’efficacité plafonnait autour de 60%, ce qui a conduit à l’abandon de nombreux projets de recherche aussi bien des projets publics que privés.<br><br>
                            Au cours de ses travaux, l’auteur a construit de nombreux dispositifs techniques d’expérimentation afin de valider de nouveaux concepts.<br>
                            Il s’est avéré alors clair qu’un travail de recherche plus poussé, était nécessaire afin d’optimiser et fiabiliser les solutions techniques.<br>
                            Ce travail a finalement pris la forme d’un véritable programme de recherche.<br>
                            Ce programme s’est largement appuyé sur l’expérience passée de l’auteur en tant que chef de projet de recherche dans le centre de recherche du numéro un mondial des services pétroliers.<br><br>
                            Cette recherche aussi bien expérimentale que théorique mènera finalement à la formulation d’une série d’équations aussi bien en statistiques, algèbre, anlayses…etc.<br>
                            Elles seront vérifiées expérimentalement et mèneront en 2015, à franchir les hautes barres symboliques de 90% d’efficacité au décorticage et atteindre 95% sur la base d’un protocole d’essais et de validation.<br>
                            Ces résultats encourageants ont permis de conclure l’aboutissement des travaux de recherche.<br><br>
                            Dans la foulée le premier prototype industriel est finalisé et capable d’effectuer le travail de 80 personnes avec une précision de 94% avec encore une marge de progression.<br>
                            Un mémoire a été rédigé avec pour but de présenter le processus de développement et les recherches scientifiques et technologiques qui ont mené à la construction des machines pour décortiquer les graines de courge, et en séparer les amandes des coques, ce à l’échelle industrielle.
                        </p>
`;

const techS1En = `
                        <p>
                            Pumpkin seeds belong to the botanical family called Cucurbitaceae. This family has many varieties.<br>
                            The variety that is the subject of our research grows in tropical and subtropical Africa; its shell is hard. It is present in Cameroon and the main production basins are located in the South, Adamaoua, Center and East Cameroon regions.<br>
                            Its scientific name is <strong>cucumeropsis mannii</strong>.<br><br>
                            These pumpkin seeds are locally called <em>'egusi-itoo'</em> among Anglophones and <em>'pistachio'</em> among Francophones in the sub-region.<br>
                            Once unshelled, they constitute a highly prized and well appreciated food in many tropical countries, particularly in sub-Saharan Africa.<br>
                            Their kernel is consumed in the form of cakes or paste in sauces.<br>
                            Gastronomically speaking, it is part of the dishes for major cultural occasions and celebrations.<br>
                            Health-wise, it is a food rich in proteins, polyunsaturated fatty acids and minerals.<br>
                            Its oil is unsaturated, has no cholesterol and is known for its many benefits, including:
                        </p>
                        <ul>
                            <li>Protection against prostate issues</li>
                            <li>Facilitation of blood circulation</li>
                            <li>Unclogging of arteries</li>
                            <li>Antioxidant properties…</li>
                        </ul>
                        <p>
                            To obtain the kernel, the seeds are unshelled one by one by hand.<br>
                            In practice, this manual shelling operation is very slow and tedious; Indeed, its kernel comes in a flat and oval shape, wrapped in two half-shells of the same shape, more or less hard and linked on the contour by an edge of strong resistance.<br>
                            Manual shelling consists of separating the two half-shells by striking the middle of the edge with a hard object to break the edge, and extracting the kernel.<br>
                            This difficulty limits any large agricultural production and industrial applications of this highly prized product.<br>
                            This limitation deprives us of any added value linked to the industrialization of this operation.<br>
                            The industrialization of pumpkin seed shelling will not only boost agricultural production, but it will pave the way for the manufacture of numerous derived industrial products.<br><br>
                            The idea of reducing the arduousness that characterizes the shelling of this seed by a mechanical system is very old.<br>
                            Replacing manual shelling with a mechanical system turns out to be a very delicate operation, because it would require a system that shells the seed without crushing it or damaging the kernel.<br>
                            This is how numerous mechanical devices had been described and presented without providing the reliability and efficiency that could lead to an industrial solution.<br>
                            Several projects initiated along these lines have been abandoned due to the complexity of shelling and the separation of the shells from the kernels.<br>
                            In addition, it must be economically profitable.<br>
                            For many of the systems presented, the efficiency peaked at around 60%, which led to the abandonment of many research projects, both public and private.<br><br>
                            During his work, the author built numerous technical experimental devices to validate new concepts.<br>
                            It then became clear that further research was necessary to optimize and make the technical solutions reliable.<br>
                            This work finally took the form of a true research program.<br>
                            This program drew heavily on the author's past experience as a research project manager in the research center of the world leader in oilfield services.<br><br>
                            This research, both experimental and theoretical, will ultimately lead to the formulation of a series of equations in statistics, algebra, analysis...etc.<br>
                            They will be verified experimentally and will lead in 2015 to crossing the symbolic high bars of 90% efficiency in shelling and reaching 95% based on a test and validation protocol.<br>
                            These encouraging results made it possible to conclude the culmination of the research work.<br><br>
                            In the wake of this, the first industrial prototype was finalized and capable of performing the work of 80 people with an accuracy of 94% with a margin of progress remaining.<br>
                            A dissertation was drafted with the aim of presenting the development process and the scientific and technological research that led to the construction of machines for shelling pumpkin seeds and separating the kernels from the shells on an industrial scale.
                        </p>
`;

const techS2Fr = `
                        <p>
                           <ul>
                                <li>Plus de 20000 mesures analysées (statistiques)</li>
                                <li>Près de 40 dispositifs expérimentaux de recherche</li>
                                <li>Plus 1000 pièces mécaniques assemblées</li>
                                <li>Plus de 20000 trous percés à la main</li>
                                <li>Formulation et vérification des Equations Spécifiques aux graines de courges</li>
                                <li>Installation d’atelier et laboratoire personnel dans le garage familial</li>
                                <li>5 Stagiaires (a des périodes différentes)</li>
                                <li>4 sous-traitants pour la fabrication des pièces</li>
                                <li>Financement sur Fonds propres</li>
                                <li>27 ans de persévérance</li>
                           </ul>
                        </p>
`;

const techS2En = `
                        <p>
                           <ul>
                                <li>More than 20,000 analyzed measurements (statistics)</li>
                                <li>Nearly 40 experimental research devices</li>
                                <li>Over 1,000 assembled mechanical parts</li>
                                <li>More than 20,000 holes drilled by hand</li>
                                <li>Formulation and verification of specific equations for pumpkin seeds</li>
                                <li>Installation of a personal workshop and laboratory in the family garage</li>
                                <li>5 Interns (at different periods)</li>
                                <li>4 subcontractors for manufacturing parts</li>
                                <li>Self-funded financing</li>
                                <li>27 years of perseverance</li>
                           </ul>
                        </p>
`;

const techS3Fr = `
                                <p>
                                    Le projet a 6 phases de la phase 0 (première idée et croquis) à la fin, phase 5 (optimisation et documentation finale).
                                </p>
                                <p>
                                    Pour chaque phase nous avons relevé l’évolution sur les quatre plans suivants :
                                </p>
                                <ol>
                                    <li>Mental</li>
                                    <li>Technique et opérations</li>
                                    <li>Technologie</li>
                                    <li>Science</li>
                                </ol>
                                <p>
                                    L’évolution de l’ensemble est mesurée par le rendement ou encore l’efficacité du système.<br>
                                    L’efficacité du système a évolué de 30% à 95%
                                </p>
`;

const techS3En = `
                                <p>
                                    The project has 6 phases from phase 0 (initial idea and sketch) to the end, phase 5 (optimization and final documentation).
                                </p>
                                <p>
                                    For each phase we have noted the evolution on the following four levels:
                                </p>
                                <ol>
                                    <li>Mental</li>
                                    <li>Technical and operations</li>
                                    <li>Technology</li>
                                    <li>Science</li>
                                </ol>
                                <p>
                                    The evolution of the whole is measured by the yield or efficiency of the system.<br>
                                    The system's efficiency evolved from 30% to 95%
                                </p>
`;

const techS4Fr = `
                        <p>
                            La recherche devant mener au décorticage de la graine a consisté en 5 domaines clés d’études :
                        </p>    
                            <ol>
                                <li>Étude géométrique de la graine</li>
                                <li>Études mécaniques des graines</li>
                                <li>Études statistiques des populations de graines et modèles représentatifs</li>
                                <li>Analyse mathématique (équations différentielles, convolution, séries…), lois spécifiques</li>
                                <li>Protocole d’essais et de validation</li>
                            </ol>

                            <p>
                            Afin de tirer des conclusions viables, cette recherche s’appuie sur cinq échantillons de courges issues des quatre principaux bastions de culture du Cameroun : Adamaoua, Centre, Sud, Est.
                            </p>

                            <h1>QUELQUES EXTRAITS DES ETUDES DE BASE</h1>

                            <ul>
                                <li><strong>Photos des graines</strong></li>
                                <li><strong>Modèle géométrique de la graine</strong></li>
                                <li><strong>Mécanique du décorticage manuel</strong></li>
                                <li><strong>Dispositif de mesure de la force de décorticage d'une graine par pression</strong></li>
                            </ul>

                            <p>
                            La résistance de la graine est réduite si la graine est mouillée. Nous avons privilégié de garder les graines sèches, car mouiller les grains pose les problèmes suivants :
                            </p>
                            <ol>
                                <li>Sur le plan industriel, mouiller les graines introduit au moins une étape supplémentaire dans la chaîne : le mouillage et re-séchage éventuel.</li>
                                <li>Sur le plan hygiénique, le mouillage favorise le développement des bactéries et nécessite un contrôle sanitaire accru. Au sortir du décorticage, les amandes sont mélangées aux coques avant leur séparation. Durant le contact des coques mouillées avec les amandes, les impuretés voire bactéries présentes sur la coque mouillée peuvent se transmettre à l’amande.</li>
                            </ol>
                            <p>
                            Pour ces deux raisons, notre processus est élaboré pour des graines sèches.
                            </p>

                            <h1>ANALYSES STATISTIQUES : Echantillon représentatif</h1>
                            
                            <p>
                            Le très grand nombre d’expériences de cette recherche requiert une très grande quantité de pistache, ce qui implique beaucoup de temps et d’argent. Afin d’optimiser la recherche nous avons mené les expériences sur des échantillons représentatifs. La taille de l’échantillon représentatif d’une population répartie de manière aléatoire en 2 groupes de proportion p et 1-p est donnée par la formule statistique suivante :
                            </p>
                            <p>
                            <em>p</em> : proportion de bonnes graines<br>
                            <em>K</em> : niveau de confiance<br>
                            <em>alpha</em> : marge d’erreur absolue
                            </p>
                            <p>
                            La valeur de k pour un niveau de confiance choisi est la suivante, issue des tables statistiques :
                            </p>
                            <p>
                            Nous optons pour un niveau de confiance de 95% (fiabilité) et une marge d'erreur de 5%.<br>
                            Ceci nous a permis d'avoir des échantillons de faible poids mais scientifiquement valables.
                            </p>

                            <p><strong>Exemple de dispositif expérimental pour séparation de déchets par criblage</strong></p>

                            <h1>EXTRAIT DE LA METHODOLOGIE ET PROTOCOLES D’ESSAI</h1>
                            <p>
                            Éléments pris en compte :
                            </p>
                            <ul>
                                <li>Amandes</li>
                                <li>Coques</li>
                                <li>Grains non décortiqués</li>
                            </ul>
                            <p>
                            Parmi les grains non décortiqués nous distinguons :
                            </p>
                            <ul>
                                <li>Les grains mous : grains trop tendres non décorticables par le principe de la machine.</li>
                                <li>Les grains vides : grains n’ayant pas d’amandes (mauvais grains).</li>
                                <li>Les bons grains : non décortiqués par la machine (les fuites).</li>
                            </ul>
                            
                            <p>
                            <strong>Définitions :</strong><br>
                            Déchet manuel : grains vides + mauvais grains issus du décorticage manuel.<br>
                            Déchet machine : grains vides + mauvais grains + grains mous indécorticables par la machine.
                            </p>

                            <h1>Extrait de l’essai de validation</h1>
`;

const techS4En = `
                        <p>
                            Research leading to seed shelling consisted of 5 key areas of study:
                        </p>
                            <ol>
                                <li>Geometric study of the seed</li>
                                <li>Mechanical studies of the seeds</li>
                                <li>Statistical studies of seed populations and representative models</li>
                                <li>Mathematical analysis (differential equations, convolution, series...), specific laws</li>
                                <li>Test and validation protocols</li>
                            </ol>

                            <p>
                            In order to draw viable conclusions, this research relies on five samples of squash from the four main growing strongholds of Cameroon: Adamaoua, Center, South, East.
                            </p>

                            <h1>SOME EXCERPTS FROM BASE STUDIES</h1>

                            <ul>
                                <li><strong>Seed photos</strong></li>
                                <li><strong>Geometric seed model</strong></li>
                                <li><strong>Mechanisms of manual shelling</strong></li>
                                <li><strong>Measurement device for the shelling force of a seed by pressure</strong></li>
                            </ul>

                            <p>
                            The seed's resistance is reduced if the seed is wet. We preferred to focus on dry seeds, as wetting them causes the following issues:
                            </p>
                            <ol>
                                <li>Industrially, wetting seeds introduces at least one extra step in the chain: wetting and potential re-drying.</li>
                                <li>Hygienically, wetting promotes bacterial growth and requires increased health checks. After shelling, the kernels are mixed with the shells before separation. During contact between wet shells and kernels, impurities or even bacteria on the wet shell can transfer to the kernel.</li>
                            </ol>
                            <p>
                            For these two reasons, our process is developed around dry seeds.
                            </p>

                            <h1>STATISTICAL ANALYSES: Representative Sample</h1>
                            
                            <p>
                            The enormous number of experiments for this research requires a very large amount of pistachio, translating into significant time and money. To optimize the research, we conducted experiments on representative samples. The size of the representative sample of a randomly distributed population into 2 groups with proportion p and 1-p is given by the following statistical formula:
                            </p>
                            <p>
                            <em>p</em> : proportion of good seeds<br>
                            <em>K</em> : confidence level<br>
                            <em>alpha</em> : absolute margin of error
                            </p>
                            <p>
                            The value of k for a chosen confidence level from statistical tables is as follows:
                            </p>
                            <p>
                            We adopted a 95% confidence level (reliability) and a 5% margin of error.<br>
                            This allowed us to have samples with low weight but scientific validity.
                            </p>

                            <p><strong>Example of experimental device for waste separation by screening</strong></p>

                            <h1>EXCERPTS OF THE METHODOLOGY AND TEST PROTOCOLS</h1>
                            <p>
                            Factors taken into account:
                            </p>
                            <ul>
                                <li>Kernels</li>
                                <li>Shells</li>
                                <li>Unshelled seeds</li>
                            </ul>
                            <p>
                            Among unshelled seeds we distinguish:
                            </p>
                            <ul>
                                <li>Soft seeds: seeds too soft to be shelled by the machine principle.</li>
                                <li>Empty seeds: seeds with no kernel inside (bad seeds).</li>
                                <li>Good seeds: not shelled by the machine (leaks).</li>
                            </ul>
                            
                            <p>
                            <strong>Definitions :</strong><br>
                            Manual Waste: empty seeds + bad seeds from manual shelling.<br>
                            Machine Waste: empty seeds + bad seeds + soft seeds unshellable by the machine.
                            </p>

                            <h1>Excerpt from the validation trial</h1>
`;

const techS5Fr = `
                        <p>
                            <p>
                                À l’issue des travaux de recherche, il a fallu construire des machines qui respectent les principes découverts et qui soient fiables dans le contexte africain. Malgré la complexité du procédé, nous avons pris le pari de construire nos machines localement. Ce pari difficile nous a amené à concevoir des machines qui tiennent compte des limitations technologiques propres à un pays tropical et en voie de développement.
                            </p>

                            <h2>Considérations générales</h2>
                            <ul>
                                <li>Environnement local chaud et humide</li>
                                <li>Rareté des ateliers de mécanique de précision pourtant nécessaires à ce projet</li>
                                <li>Contrôle de qualité personnalisé par étape</li>
                                <li>Rareté des matériaux spéciaux (aciers spéciaux)</li>
                                <li>Imprécision des profils supposés être standard</li>
                                <li>Absence quasi-totale d’expérience locale dans la construction des machines industrielles</li>
                            </ul>
                            <p>
                                Ces difficultés, loin de nous décourager, nous ont plutôt motivés à aller jusqu’au bout localement et à contourner les obstacles de manière créative et efficace par des solutions telles que :
                            </p>
                            <ul>
                                <li>Utilisation des matériaux locaux dès que possible (bois, aluminium)</li>
                                <li>Remplacement de certaines précisions de fabrication par des précisions de réglages</li>
                            </ul>

                            <h2>Considérations de conception</h2>
                            <p>
                                La durabilité, la continuité de service et l’expertise locale sont au cœur des considérations propres à la conception des machines. Les principes directeurs ont été les suivants :
                            </p>
                            <ul>
                                <li>Fonctionnalités détaillées</li>
                                <li>Modularité : des modules définis pour remplir quelques fonctions ; peu de fonctions par module</li>
                                <li>Séparation des fonctions : les fonctions sont remplies par des sous-ensembles identifiables, séparables, démontage et réparation accessibles</li>
                                <li>Maximisation des pièces disponibles localement</li>
                                <li>Pour les pièces importées : utilisation de pièces standardisées et de grande production</li>
                                <li>Utilisation maximale des éléments à maintenance réduite ou nulle</li>
                                <li>Sécurité d’utilisation</li>
                                <li>Dispositifs de réglages</li>
                                <li>Système de contrôle qualité</li>
                            </ul>

                            <h1>Exemple de la modularité dans la conception de la décortiqueuse</h1>
                        </p>
`;

const techS5En = `
                        <p>
                            <p>
                                Following the research work, it was necessary to build machines honoring the discovered principles that remained reliable in the African context. Despite the process's complexity, we took the bet of building our machines locally. This difficult bet led us to design machinery taking into account the technological limitations specific to a developing tropical country.
                            </p>

                            <h2>General considerations</h2>
                            <ul>
                                <li>Hot and humid local environment</li>
                                <li>Scarcity of precision mechanical workshops, though necessary for this project</li>
                                <li>Custom quality control checks at every stage</li>
                                <li>Scarcity of special materials (special steels)</li>
                                <li>Imprecision of supposedly standard profiles</li>
                                <li>Near absence of local industrial machine construction experience</li>
                            </ul>
                            <p>
                                These difficulties, far from discouraging us, motivated us to go all the way locally, creatively bypassing obstacles through efficient solutions such as:
                            </p>
                            <ul>
                                <li>Using local materials whenever possible (wood, aluminum)</li>
                                <li>Replacing certain manufacturing precision components with adjustable calibrations</li>
                            </ul>

                            <h2>Design Considerations</h2>
                            <p>
                                Durability, service continuity, and local expertise lie at the conceptual heart of our machines. The guiding principles were:
                            </p>
                            <ul>
                                <li>Detailed functional scopes</li>
                                <li>Modularity: defined modules carrying out a few functions; a minimal function set per module</li>
                                <li>Separation of functions: functions are fulfilled by identifiable, separable sub-assemblies enabling accessible teardown and repair</li>
                                <li>Maximizing locally available parts</li>
                                <li>For imported parts: employing mass-produced standardized parts</li>
                                <li>Maximum use of zero or low-maintenance components</li>
                                <li>Safe operation metrics</li>
                                <li>Built-in adjustment mechanisms</li>
                                <li>Systematic Quality control parameters</li>
                            </ul>

                            <h1>Example of modularity in the huller's design</h1>
                        </p>
`;

const techS6Fr = `
                    <h1>Origine des éléments et pièces</h1>
                <ul>
                    <li><strong>Moteur :</strong> il est importé mais est disponible sur le marché local.</li>
                    <li><strong>Chaine cinématique :</strong> organes de transmission standard tels que les poulies, engrenages et chaînes ; étudiés localement en fonction des disponibilités en standard sur le marché Européen et Africain.</li>
                    <li>
                        La chaine cinématique entraîne <strong>7 axes</strong> qui tournent à des vitesses différentes.<br>
                        À titre de comparaison, la plupart des moulins artisanaux construits au Cameroun ont un seul axe de rotation donc une seule vitesse.
                    </li>
                    <li>
                        <strong>La décortiqueuse</strong> est la machine la plus complexe de la chaîne.<br>
                        Elle comprend plus de <strong>250 pièces assemblées</strong> par <strong>350 éléments de boulonnerie et visserie</strong>, soit au total plus de <strong>600 pièces</strong>.
                    </li>
                </ul>
`;

const techS6En = `
                    <h1>Origin of parts and components</h1>
                <ul>
                    <li><strong>Engine:</strong> Imported but readily available on the local market.</li>
                    <li><strong>Kinematic chain:</strong> Standard transmission components such as pulleys, gears and chains; sourced taking into account standard availability on the European and African markets.</li>
                    <li>
                        The kinematic chain drives <strong>7 shafts</strong> turning at varying speeds.<br>
                        Comparatively, most artisanal mills built in Cameroon have a single rotation axis and hence a single speed.
                    </li>
                    <li>
                        <strong>The Sheller</strong> is the most complex machine in the lineup.<br>
                        It groups over <strong>250 assembled parts</strong> attached by <strong>350 bolting and screwing elements</strong>, totaling over <strong>600 parts</strong>.
                    </li>
                </ul>
`;

const techS7Fr = `
                    <h1>La chaîne industrielle complète</h1>
                    <p>
                        La chaîne industrielle complète comporte <strong>10 machines</strong>. Les graines parcourent toutes ces machines.<br>
                        Ce principe de chaîne obéit à deux logiques :
                    </p>
                    <ol>
                        <li>L’option industrielle retenue</li>
                        <li>La séparation des fonctions : chaque machine a été étudiée et construite pour remplir des fonctions précises, facilitant ainsi l’utilisation et l’entretien.</li>
                    </ol>
                    <p>
                        Le principe de chaîne industrielle conduit à une recherche particulière sur les débits de chaque machine afin que la chaîne soit cohérente et qu’il n’y ait pas de points d’engorgement. Des contrôleurs de débit ont été placés sur des points sensibles de la chaîne afin de mettre en harmonie les débits des machines.
                    </p>
                    <p>
                        Les machines sont classées en deux groupes :
                    </p>
                    <ol>
                        <li>Les machines dont les principes font partie du brevet d’invention</li>
                        <li>Les machines qui ne font pas partie du brevet</li>
                    </ol>
                    <h1>Machines faisant partie du brevet</h1>
                    <p>
                        Les machines au centre de la chaîne, parmi lesquelles :
                    </p>
                    <ul>
                        <li>La décortiqueuse (<strong>SEM – DC4</strong>)</li>
                        <li>La trieuse automatique (<strong>SEM – TA4</strong>)</li>
                    </ul>
                    <p>
                        Ces deux machines en sont à leur quatrième version, qui est la version industrielle.
                    </p>
                    <h1>Machines ne faisant pas partie du brevet</h1>
                    <p>
                        Il s’agit des systèmes et machines que l’on retrouve couramment dans les industries agroalimentaires.<br>
                        Nous les avons étudiées et construites localement en respectant nos principes de construction énoncés plus haut. Ces machines sont les suivantes :
                    </p>
                    <ul>
                        <li>La trémie d’arrivée (<strong>SEM-TE1</strong>)</li>
                        <li>Les convoyeurs à godets (<strong>SEM-CG1</strong>)</li>
                        <li>Les convoyeurs vibrants</li>
                        <li>Le silo</li>
                    </ul>
                    <p>
                        Auxquels nous avons rajouté deux machines spéciales pour notre projet :
                    </p>
                    <ul>
                        <li>Un séparateur multifonction par ventilation, réglable avec une entrée et trois sorties (<strong>SEM-SM1</strong>)</li>
                        <li>Une trieuse semi-automatique appelée <strong>iTrieuse</strong> (TS3) : triage par l’index. Cet appareil permet le contrôle de qualité finale. Les graines décortiquées défilent sous l’œil attentif d’une opératrice qui, avec son index, pousse les mauvaises graines sur le côté dans un canal de récupération.</li>
                    </ul>
                    <p>
                        Ces machines (<strong>TE1, CG1, SM1, iTrieuse TS3</strong>) sont construites localement et donc de maintenance réduite. Elles remplissent des fonctions que l’on trouve dans plusieurs de nos industries. On gagnerait donc à en étendre les utilisations.
                    </p>
`;

const techS7En = `
                    <h1>The complete industrial chain</h1>
                    <p>
                        The complete industrial chain compromises <strong>10 machines</strong>. Seeds travel through all these machines.<br>
                        This chain principle stems from two logics:
                    </p>
                    <ol>
                        <li>The industrial paradigm selected</li>
                        <li>Function separation: each machine was designed and tailored to fulfill specific precise functions, to ease ease-of-use and maintenance.</li>
                    </ol>
                    <p>
                        The industrial chain required particular research on the flow rates of each node to maintain consistency and prevent bottlenecks. Flow controllers were placed at sensitive points throughout the chain to bring throughputs in harmony.
                    </p>
                    <p>
                        The machines are grouped in two categories:
                    </p>
                    <ol>
                        <li>Machines with mechanisms derived from the invention patent</li>
                        <li>Machines exempt from patent coverage</li>
                    </ol>
                    <h1>Machines within patent bounds</h1>
                    <p>
                        Machines centered down the chain, essentially:
                    </p>
                    <ul>
                        <li>The sheller (<strong>SEM – DC4</strong>)</li>
                        <li>The automatic sorter (<strong>SEM – TA4</strong>)</li>
                    </ul>
                    <p>
                        These two assemblies are at their fourth iteration, which constitutes the ultimate industrial design.
                    </p>
                    <h1>Machines outside patent bounds</h1>
                    <p>
                        These systems apply commonly known agrifood industry mechanics.<br>
                        We have studied and manufactured them locally upholding our previously emphasized construction principles. They are comprised of:
                    </p>
                    <ul>
                        <li>The input hopper (<strong>SEM-TE1</strong>)</li>
                        <li>The bucket elevators (<strong>SEM-CG1</strong>)</li>
                        <li>Vibrating conveyors</li>
                        <li>The Silo</li>
                    </ul>
                    <p>
                        Alongside two purpose-built specialized machines addressing our unique pipeline:
                    </p>
                    <ul>
                        <li>An adjustable multifunctional ventilation separator utilizing one input and branching tridirectionally (<strong>SEM-SM1</strong>)</li>
                        <li>A semi-automatic sorter dubbed <strong>iTrieuse</strong> (TS3): Index sorting. Allowing ultimate late-stage quality control. Hulled kernels slip by beneath a watchful operator who slides away bad seeds linearly via their index into a recovery trough.</li>
                    </ul>
                    <p>
                        These assemblies (<strong>TE1, CG1, SM1, iTrieuse TS3</strong>) are built locally ensuring streamlined low-maintenance downtime. Their capabilities branch to roles widely replicated through several industries and applications could readily be expanded.
                    </p>
`;

const techS8Fr = `
                            <ul>
                                <li><strong>Production d’amandes :</strong> 100 kg/jour</li>
                                <li><strong>Efficacité du décorticage :</strong> 97%</li>
                                <li><strong>Amandes cassées :</strong> &lt; 1%</li>
                                <li><strong>Graines partiellement décortiquées :</strong> &lt; 1%</li>
                                <li><strong>Énergie électrique :</strong> 220/380 V, fréquence 50 Hz</li>
                                <li><strong>Courant maxi :</strong> 15 A</li>
                                <li><strong>Commande électrique de la décortiqueuse :</strong> Contrôle électronique et contrôle manuel</li>
                            </ul>
`;

const techS8En = `
                            <ul>
                                <li><strong>Kernel Production Yield:</strong> 100 kg/day</li>
                                <li><strong>Shelling Efficiency:</strong> 97%</li>
                                <li><strong>Fractured Kernels:</strong> &lt; 1%</li>
                                <li><strong>Partially Shelled Extracts:</strong> &lt; 1%</li>
                                <li><strong>Electrical Output Framework:</strong> 220/380 V, frequency 50 Hz</li>
                                <li><strong>Max Amperage:</strong> 15 A</li>
                                <li><strong>Sheller Electrical Commands:</strong> Electronic and manual oversight module configurations</li>
                            </ul>
`;



techFr["tech.s1.content"] = techS1Fr;
techFr["tech.s2.content"] = techS2Fr;
techFr["tech.s3.content"] = techS3Fr;
techFr["tech.s4.content"] = techS4Fr;
techFr["tech.s5.content"] = techS5Fr;
techFr["tech.s6.content"] = techS6Fr;
techFr["tech.s7.content"] = techS7Fr;
techFr["tech.s8.content"] = techS8Fr;

techEn["tech.s1.content"] = techS1En;
techEn["tech.s2.content"] = techS2En;
techEn["tech.s3.content"] = techS3En;
techEn["tech.s4.content"] = techS4En;
techEn["tech.s5.content"] = techS5En;
techEn["tech.s6.content"] = techS6En;
techEn["tech.s7.content"] = techS7En;
techEn["tech.s8.content"] = techS8En;


const insertTranslations = (content, objToInsert, matchStr) => {
    let parts = content.split(matchStr);
    let str = '';
    for (let key in objToInsert) {
        str += '        "' + key + '": ' + JSON.stringify(objToInsert[key]) + ',' + String.fromCharCode(10);
    }
    return parts[0] + str + matchStr + parts[1];
};

content = insertTranslations(content, techFr, '    },' + String.fromCharCode(10) + '    en: {');
content = insertTranslations(content, techEn, '    }' + String.fromCharCode(10) + '};');

fs.writeFileSync(i18nPath, content, 'utf8');
console.log('Translations for technologie.html generated and updated in i18n-data.js');

