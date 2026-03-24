const fs = require('fs');

let i18nPath = 'js/i18n-data.js';
let content = fs.readFileSync(i18nPath, 'utf8');

const espritFr = {
    "esprit.s1.title": "Histoire et Biensfaits",
    "esprit.recette.title": "Recettes",
    "esprit.recette1.title": "Sauce Pistache Allégée",
    "esprit.recette2.title": "Mets de Pistache Allégé",
    "esprit.recette3.title": "Légumes aux Pistaches",
    "esprit.recette4.title": "Ngon Cake",
    "esprit.patisserie.title": "Pâtisserie"
};

const espritEn = {
    "esprit.s1.title": "History and Benefits",
    "esprit.recette.title": "Recipes",
    "esprit.recette1.title": "Light Pistachio Sauce",
    "esprit.recette2.title": "Light Pistachio Dish",
    "esprit.recette3.title": "Vegetables with Pistachios",
    "esprit.recette4.title": "Ngon Cake",
    "esprit.patisserie.title": "Pastries"
};

const s1ContentFr = `
                            <h3 class="event-title">En bref</h3>
                            <p class="event-description">Issus d’une longue recherche, nos  produits proviennent du décorticage industriel et de la transformation des graines de courge biologique à coque dure propres à certains terroirs d’Afrique. Leur nom scientifique est cucumeropsis mannii. C’est la  reine des graines de courge. Elle possède des vertus exceptionnelles en Santé, Cosmétique, Diététique .</p>
                         
                            <h3 class="event-title">Nos missions</h3>
                            <p class="event-description">Par la recherche, l’industrialisation et la commercialisation nous travaillons pour mettre à votre disposition les produits dérivés de cette graine de courge pour votre Santé, Nutrition, Beauté et Bien-Être. Nous avons le souci développer l’agro-industrie et l’emploi local  tout en préservant l’environnement. Chez nous vous achetez plus qu’un produit: vous êtes acteur d’un développement local tout ayant du bien-être.  Nous sommes aussi propriétaires de la marque déposée Ngon . </p>
                            
                            <h2>Histoire sans filtre </h2>
                            <p class="event-description"></p>
                            <div class="content-table">
                               <table>
                                <thead>
                                    <th>1988</th>
                                    <th>1985</th>
                                    <th>2015</th>
                                    <th>2016-2017</th>
                                    <th>2017</th>
                                    <th>2018</th>
                                    <th>2019</th>
                                    <th>2020</th>                                    
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Début de la recherche</td>
                                        <td>Premier Brevet en France</td>
                                        <td>Fin du prototype opérationnel. Deuxième Brevet d’invention à OAPI.</td>
                                        <td>Construction des machines et de l’usine pilote.</td>
                                        <td>SARL créé en octobre 2017, début du décorticage industriel.</td>
                                        <td>Mise en place de la section Huilerie : Huile et Farine 2018.</td>
                                        <td>Création et démarrage de la commercialisation des produits innovant a base de pistaches.</td>
                                        <td>Certification Biologique.</td>                                        
                                    </tr>
                                </tbody>

                            </table> 
                            </div>
                            
                            <p class="event-description"> </p> 

                            <h3 class="event-title">Pourquoi consommer de la graine de courge et son huile ?</h3>
                            <p class="event-description">Historiquement parlant, les graines de courges sont conseillées aux hommes notamment pour l’entretien de la prostate. Cependant, les recherches montrent que cette graine reine a de nombreuses vertus pour tous, femmes comme hommes que nous résumons dans le slogan Santé et beauté aux 5 étoiles. Ces cinq étoiles sont:</p>
                            <p class="event-description">
                                
                            </p>
                            <ul>
                                <li>Le rajeunissement, c est une véritable graine de jouvence.</li>
                                <li>La nutrition: ces graines sont de petites bombes nutritionelles.</li>
                                <li>La peau: son huile est anti-age, prévient les vergetures.</li>
                                <li>Les cheveux:  son huile fait briller et pousser les cheveux, prévient les chutes.</li>
                                <li>La prostate: entretien de la prostate et prévention des problème liés à hypertrophie bénigne</li>
                            </ul> <br>

                            <h3 class="event-title">En cas de troubles de la prostate </h3>
                            <p class="event-description">L’huile de Pépins de Courge est traditionnellement conseillée dans la prévention de l’hypertrophie bénigne de la prostate (adénome). Une étude publiée dans le « Journal of Medicinal Food » a évalué son effet sur l’hyperplasie de la prostate induite par la testostérone chez l’animal.  Pour connaitre bien l’histoire, cette étude a conclu au bénéfice préventif de l’huile de pépins de courge pour inhiber l’hyperplasie de la prostate induite par la testostérone. Une autre étude publiée dans « Urologia Internationalis » a même permis d’obtenir une régression des marqueurs de l’hypertrophie prostatique. L’huile de Pépins de Courge est donc tout à fait recommandable dans le cadre de la prévention de l’adénome prostatique, bien avant le stade chirurgical de la prostate.
                               <br> <span><strong>Conseil d’utilisation :</strong> par voie orale, 1 cuillère à café par jour d’huile de Pépins de Courge en complément de l’utilisation d’autres huiles</span>
                            </p> 
                            

                            <h3 class="event-title">Pour les peaux matures, sèches et déshydratées </h3>
                            <p class="event-description">L’huile végétale de Pépins de Courge est un excellent anti-âge, notamment grâce à sa forte teneur en polyphénols à l’activité anti-oxydante. Ses molécules captent les radicaux libres à l’origine de la formation des rides et du vieillissement cellulaire. Riche en acide linoléique, cette huile va également favoriser la régénération cutanée, en plus d’être très nourrissante. </p> 
                            <p>l’huile de Pépins de Courge est intéressante en soin des peaux matures.</p>
                            <span><strong>Conseil d’utilisation : </strong> par voie cutanée, quelques gouttes en massage sur les zones concernées</span>
                            <p class="event-description"></p>

                            <h3 class="event-title">Contre la chute de cheveux, les cheveux ternes et cassants </h3>
                            <p class="event-description">L’huile de Pépins de Courge va nourrir en profondeur la fibre capillaire pour la réparer, l’entretenir et la renforcer. Elle va ainsi assouplir, adoucir et fortifier les cheveux, afin qu’ils deviennent plus résistants aux agressions extérieures. 
                                <br><span><strong>Conseil d’utilisation :</strong>en bain d huile, en masque capillaire</span>
                            </p> 
                            

                            <h3 class="event-title">Pour son intérêt nutritionnel </h3>
                            <p class="event-description">Avec une dominante en acides gras polyinsaturés, l’huile de Pépin de Courge est une excellente huile diététique pouvant entrer dans un régime cardio-protecteur, anti-cholestérol. Elle est largement composée d’oméga 6, il sera donc important de consommer des huiles riches en oméga 3 en parallèle afin d’équilibrer le ratio oméga 6/oméga 3.L’huile de Pépins de Courge “Ngon” est également très riche en tocophérols gamma, et contient des minéraux dont le zinc et acides aminés (citrulline, cucurbitine). 
                                <br><span><strong>Conseil d’utilisation :</strong>par voie orale, 1 à 2 cuillères à soupe d’huile de Pépins de Courge servira à couvrir les apports journaliers conseillés en oméga 6. A utiliser en assaisonnement sur des salades par exemple.</span>
                                <br><span><strong>Autres huiles végétales adaptées :</strong> les huiles de <a href="https://www.compagnie-des-sens.fr/huile-vegetale-lin/" style="color: blue; text-decoration: underline; " >Lin</a> ou de <a href="https://www.compagnie-des-sens.fr/huile-vegetale-perilla/" style="color: blue; text-decoration: underline;" >Périlla</a> sont très intéressantes en nutrition car elles sont particulièrement riches en oméga 3. Elles permettent d’équilibrer le rapport oméga 6/oméga 3. Il est recommandé d’apporter 5 fois plus d’oméga 3 que d’oméga 6 (ANSES).</span>
                            </p> 
                            
                            <p class="event-description"></p>

                            <h3 class="event-title">Et la surprise!  </h3>
                            <p class="event-description">pour connaitre l’histoire, nos graines de courges sont particulièrement riches bien au-delà de la moyenne, c’est en grande partie à cause de la qualité du sol dans laquelle elle puise l’essentiel de ses nutriments, de la zone agro-écologique en Afrique équatoriale. Les graines de courges qui y poussent, notamment les graines à coque dure sont cultivéés tous les deux ans ce qui contribue à les maintenir comme les plus riches dans leur catégorie. </p> 
                            

                            <h3 class="event-title">Notre huile, comment est-elle faite ? </h3>
                            <p class="event-description">Notre huile est pressée à froid dans nos installations, sans aucun ingrédients ajouté, et filtrée par une décantation prolongée de plusieurs semaines afin de ne pas perdre les nutriments ni de les contaminer. </p> 
                            <p class="event-description">
                                Les éléments biochimiques les plus abondants sont entre autres :
                                <ul>
                                    <li><strong>Beta Sitostérol :</strong> <br>Gamma tocophérol Anti oxydant, essentiellement curatif <br>Réduction de chute de cheveux <br>Réduction symptômes ménopause </li>
                                     <li><strong>Vitamines E :</strong> <br>Réduction de l’inflammation de la prostate <br>Alpha tocophérol Anti oxydant, essentiellement préventif</li>
                                </ul>
                            </p>
                            <p class="event-description"></p>

                            <h3 class="event-title">La farine allégée : </h3>
                            <p class="event-description">Pourquoi « allégée » : <br>Tout simplement car elle est allégée en huile (moins 70%) <br>Elle est très concentrée en protéines et en minéraux. <br>Un produit diététique parfait pour les sportifs  </p> 

                            <h3 class="event-title"> </h3>
                            <p class="event-description"></p> 

                            <div class="event-divider"></div>
                            <div class="event-meta">
                                <span class="event-author">Sem Production</span>
                                <span class="event-date">• Octobre 2015</span>
                            </div>
`;

const s1ContentEn = `
                            <h3 class="event-title">In short</h3>
                            <p class="event-description">Resulting from long research, our products come from the industrial shelling and processing of organic hard-shell pumpkin seeds specific to certain African regions. Their scientific name is cucumeropsis mannii. It is the queen of pumpkin seeds. It possesses exceptional health, cosmetic, and dietary benefits.</p>
                         
                            <h3 class="event-title">Our missions</h3>
                            <p class="event-description">Through research, industrialization, and commercialization we work to provide you with derivatives of this pumpkin seed for your Health, Nutrition, Beauty, and Well-Being. We are concerned with developing agro-industry and local employment while preserving the environment. With us you buy more than a product: you are an actor of local development while getting well-being. We are also the owners of the registered trademark Ngon.</p>
                            
                            <h2>History without filter</h2>
                            <p class="event-description"></p>
                            <div class="content-table">
                               <table>
                                <thead>
                                    <th>1988</th>
                                    <th>1985</th>
                                    <th>2015</th>
                                    <th>2016-2017</th>
                                    <th>2017</th>
                                    <th>2018</th>
                                    <th>2019</th>
                                    <th>2020</th>                                    
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Start of research</td>
                                        <td>First Patent in France</td>
                                        <td>End of the operational prototype. Second Invention Patent at OAPI.</td>
                                        <td>Construction of machines and the pilot plant.</td>
                                        <td>SARL created in October 2017, start of industrial shelling.</td>
                                        <td>Establishment of the Oil Mill section: Oil and Flour 2018.</td>
                                        <td>Creation and start of commercialization of innovative pistachio-based products.</td>
                                        <td>Organic Certification.</td>                                        
                                    </tr>
                                </tbody>

                            </table> 
                            </div>
                            
                            <p class="event-description"> </p> 

                            <h3 class="event-title">Why consume pumpkin seeds and its oil?</h3>
                            <p class="event-description">Historically speaking, pumpkin seeds are recommended for men, particularly for prostate maintenance. However, research shows that this queen seed has many virtues for everyone, women and men alike, which we summarize in the slogan 5-star Health and Beauty. These five stars are:</p>
                            <p class="event-description">
                                
                            </p>
                            <ul>
                                <li>Rejuvenation, it is a true seed of youth.</li>
                                <li>Nutrition: these seeds are small nutritional bombs.</li>
                                <li>Skin: its oil is anti-aging, prevents stretch marks.</li>
                                <li>Hair: its oil makes hair shine and grow, prevents falls.</li>
                                <li>Prostate: prostate maintenance and prevention of problems related to benign prostatic hyperplasia</li>
                            </ul> <br>

                            <h3 class="event-title">In case of prostate disorders</h3>
                            <p class="event-description">Pumpkin Seed Oil is traditionally recommended in the prevention of benign prostatic hyperplasia (adenoma). A study published in the "Journal of Medicinal Food" evaluated its effect on testosterone-induced prostate hyperplasia in animals. To know the story well, this study concluded on the preventive benefit of pumpkin seed oil to inhibit testosterone-induced prostate hyperplasia. Another study published in "Urologia Internationalis" even made it possible to obtain a regression of the markers of prostatic hypertrophy. Pumpkin Seed Oil is therefore highly recommended as part of the prevention of prostatic adenoma, well before the surgical stage of the prostate.
                               <br> <span><strong>Directions for use:</strong> orally, 1 teaspoon per day of Pumpkin Seed oil in addition to the use of other oils</span>
                            </p> 
                            

                            <h3 class="event-title">For mature, dry and dehydrated skin</h3>
                            <p class="event-description">Pumpkin Seed vegetable oil is an excellent anti-aging agent, notably due to its high content of polyphenols with antioxidant activity. Its molecules capture the free radicals responsible for the formation of wrinkles and cellular aging. Rich in linoleic acid, this oil will also promote cellular regeneration, in addition to being highly nourishing. </p> 
                            <p>Pumpkin seed oil is an interesting treatment for mature skin.</p>
                            <span><strong>Directions for use: </strong> dermal path, a few drops massaged on the concerned areas</span>
                            <p class="event-description"></p>

                            <h3 class="event-title">Against hair loss, dull, and brittle hair</h3>
                            <p class="event-description">Pumpkin Seed oil will deeply nourish the hair fiber to repair, maintain, and strengthen it. It will thus make the hair softer, smoother, and stronger, so that it becomes more resistant to external aggressions. 
                                <br><span><strong>Directions for use:</strong>in an oil bath, in a hair mask</span>
                            </p> 
                            

                            <h3 class="event-title">For its nutritional interest</h3>
                            <p class="event-description">With a dominance in polyunsaturated fatty acids, Pumpkin Seed oil is an excellent dietary oil that can be part of a cardio-protective, anti-cholesterol diet. It is largely composed of omega 6, it will therefore be important to consume oils rich in omega 3 in parallel in order to balance the omega 6 / omega 3 ratio. “Ngon” Pumpkin Seed oil is also very rich in gamma tocopherols, and contains minerals including zinc and amino acids (citrulline, cucurbitin). 
                                <br><span><strong>Directions for use:</strong>orally, 1 to 2 tablespoons of Pumpkin Seed oil will serve to cover the recommended daily intake of omega 6. To be used as a seasoning on salads for example.</span>
                                <br><span><strong>Other suitable vegetable oils:</strong> <a href="https://www.compagnie-des-sens.fr/huile-vegetale-lin/" style="color: blue; text-decoration: underline; " >Linseed</a> or <a href="https://www.compagnie-des-sens.fr/huile-vegetale-perilla/" style="color: blue; text-decoration: underline;" >Perilla</a> oils are very interesting in nutrition because they are particularly rich in omega 3. They help to balance the omega 6 / omega 3 ratio. It is recommended to provide 5 times more omega 3 than omega 6 (ANSES).</span>
                            </p> 
                            
                            <p class="event-description"></p>

                            <h3 class="event-title">And the surprise!</h3>
                            <p class="event-description">To know the story, our pumpkin seeds are particularly rich well above average, this is largely due to the quality of the soil from which it draws most of its nutrients, from the agro-ecological zone in equatorial Africa. The pumpkin seeds that grow there, particularly the hard-shelled seeds, are grown every two years which helps to keep them the richest in their class. </p> 
                            

                            <h3 class="event-title">Our oil, how is it made?</h3>
                            <p class="event-description">Our oil is cold pressed in our facilities, without any added ingredients, and filtered by a prolonged decantation of several weeks in order not to lose the nutrients or contaminate them.</p> 
                            <p class="event-description">
                                The most abundant biochemical elements include:
                                <ul>
                                    <li><strong>Beta Sitosterol :</strong> <br>Gamma tocopherol Antioxidant, mainly curative <br>Reduction of hair loss <br>Reduction of menopause symptoms </li>
                                     <li><strong>Vitamin E :</strong> <br>Reduction of prostate inflammation <br>Alpha tocopherol Antioxidant, mainly preventive</li>
                                </ul>
                            </p>
                            <p class="event-description"></p>

                            <h3 class="event-title">Light flour:</h3>
                            <p class="event-description">Why "light": <br>Quite simply because it is lightened in oil (minus 70%) <br>It is highly concentrated in proteins and minerals. <br>A perfect diet product for athletes.</p> 

                            <h3 class="event-title"> </h3>
                            <p class="event-description"></p> 

                            <div class="event-divider"></div>
                            <div class="event-meta">
                                <span class="event-author">Sem Production</span>
                                <span class="event-date">• October 2015</span>
                            </div>
`;

const recette1DescFr = `
                                <p class="event-description">La sauce pistache, une découverte culinaire délicieuse et surprenante, promet de réveiller vos papilles pour une expérience gustative inoubliable. Issue d’une combinaison ingénieuse de pistaches finement moulues, d’épices exquises et d’autres ingrédients secrets, cette sauce offre une explosion de saveurs qui transcende les attentes culinaires.

                                <br>D’une texture crémeuse et d’une teinte verdoyante, la sauce pistache apporte une touche d’originalité à une variété de plats. Son mariage subtil entre la douceur des pistaches et la complexité des épices crée une harmonie parfaite qui saura ravir les palais les plus exigeants. Que ce soit pour accompagner des plats traditionnels ou pour sublimer des créations contemporaines, la sauce pistache se révèle polyvalente, ajoutant une dimension gustative unique à chaque bouchée.

                                <br>Prête à surprendre les amateurs de cuisine aventureux, la sauce pistache incarne l’art de marier des saveurs contrastantes de manière équilibrée. À la fois délicate et intense, cette découverte culinaire est destinée à devenir un incontournable dans votre répertoire gastronomique, transformant chaque repas en une expérience sensorielle délicieusement inédite.
                                </p>
`;

const recette1DescEn = `
                                <p class="event-description">Pistachio sauce, a delicious and surprising culinary discovery, promises to awaken your taste buds for an unforgettable flavor experience. Stemming from an ingenious combination of finely ground pistachios, exquisite spices and other secret ingredients, this sauce offers an explosion of flavors that transcends culinary expectations.

                                <br>With a creamy texture and green hue, pistachio sauce brings a touch of originality to a variety of dishes. Its subtle marriage between the sweetness of pistachios and the complexity of spices creates a perfect harmony that will delight the most demanding palates. Whether accompanying traditional dishes or enhancing contemporary creations, pistachio sauce proves versatile, adding a unique gustatory dimension to every bite.

                                <br>Ready to surprise adventurous food lovers, pistachio sauce embodies the art of pairing contrasting flavors in a balanced manner. Both delicate and intense, this culinary discovery is destined to become a staple in your gastronomic repertoire, transforming every meal into a deliciously novel sensory experience.
                                </p>
`;

const recette1PrepFr = `
                                        <h3>Préparation</h3>
                                        <p class="event-description">
                                            <ul>
                                                <li><strong>• Etape1: </strong> <br>Faites chauffer de l’huile dans une marmite, découper les oignons, tomates, poireau, carottes et les ajouter.</li>
                                                <li><strong>• Etape2: </strong> <br>Ajouter les écrevisses écrasées, le poisson fumé et la viande (précuite de préférence). Laisser mijoter pendant 10 min.</li>
                                                <li><strong>• Etape3: </strong> <br>Dans un récipient, mélanger le pistache avec un verre d’eau afin d’obtenir une pâte homogène, puis ajouter la dans la marmite avec un peu d’ail émincé et du poivre blanc. Laisser cuire pendant 30 min.</li>
                                            </ul>
                                        </p>

                                        <p class="event-description"></p>
                                        <h3>Informations</h3>
                                        <ul>
                                            <li>Nombre de personnes : 8</li>
                                            <li>Temps de préparation : 10 min</li>
                                            <li>Temps de cuisson : 45 min</li>
                                        </ul>

                                        <p class="event-description"></p>
                                        <h3>Ingrédients</h3>
                                        <ul>
                                            <li>• 1/2 boîte de pistache allégée</li>
                                            <li>• 1 verre d’eau</li>
                                            <li>• Ecrevisses (poignée)</li>
                                            <li>• Poissons sec (viande)</li>
                                            <li>• Ail</li>
                                            <li>• Sel</li>
                                            <li>• Poivre</li>
                                            <li>• Carottes (émincées)</li>
                                            <li>• Oignon</li>
                                            <li>• Poireau</li>
                                            <li>• Tomates</li>
                                        </ul>

                                        <p class="event-description"></p>
                                        <h2 class="event-description">Bon appétit !</h2>

                                        <div class="event-divider"></div>
                                        <div class="event-meta">
                                            <span class="event-author">Sem Production</span>
                                            <span class="event-date">• Octovre 2025</span>
                                        </div>
`;

const recette1PrepEn = `
                                        <h3>Preparation</h3>
                                        <p class="event-description">
                                            <ul>
                                                <li><strong>• Step 1: </strong> <br>Heat oil in a pot, chop the onions, tomatoes, leeks, carrots and add them.</li>
                                                <li><strong>• Step 2: </strong> <br>Add the crushed crayfish, smoked fish and meat (preferably pre-cooked). Simmer for 10 minutes.</li>
                                                <li><strong>• Step 3: </strong> <br>In a container, mix the pistachio with a glass of water to obtain a smooth paste, then add it to the pot with a little minced garlic and white pepper. Cook for 30 min.</li>
                                            </ul>
                                        </p>

                                        <p class="event-description"></p>
                                        <h3>Information</h3>
                                        <ul>
                                            <li>Number of people : 8</li>
                                            <li>Prep time: 10 min</li>
                                            <li>Cook time: 45 min</li>
                                        </ul>

                                        <p class="event-description"></p>
                                        <h3>Ingredients</h3>
                                        <ul>
                                            <li>• 1/2 box of light pistachio</li>
                                            <li>• 1 glass of water</li>
                                            <li>• Crayfish (handful)</li>
                                            <li>• Dry fish (meat)</li>
                                            <li>• Garlic</li>
                                            <li>• Salt</li>
                                            <li>• Pepper</li>
                                            <li>• Carrots (chopped)</li>
                                            <li>• Onion</li>
                                            <li>• Leek</li>
                                            <li>• Tomatoes</li>
                                        </ul>

                                        <p class="event-description"></p>
                                        <h2 class="event-description">Enjoy your meal!</h2>

                                        <div class="event-divider"></div>
                                        <div class="event-meta">
                                            <span class="event-author">Sem Production</span>
                                            <span class="event-date">• October 2025</span>
                                        </div>
`;

const recette2PrepFr = `
                                        <h2 class="event-title">Mets de Pistache Allégé</h2>
                                        <h3>Préparation</h3>
                                        <p class="event-description">
                                            <ul>
                                                <li><strong>• Etape1: </strong> <br>Mélanger 1/2 de la boîte farine Ngon avec le même volume d’eau pour faire une pâte légère</li>
                                                <li><strong>• Etape2: </strong> <br>Ajouter au mélange du sel, 2 oeufs, piment, du poisson fumé, écrevisses (poignée), la viande, poivre</li>
                                                <li><strong>• Etape3: </strong> <br>Disposer sur vos feuilles, attacher et classer dans la marmite. Faire cuire pendant 1h30.</li>
                                            </ul>
                                        </p>

                                        <p class="event-description"></p>
                                        <h3>Informations</h3>
                                        <ul>
                                            <li>Nombre de personnes : 6</li>
                                            <li>Temps de préparation : 20 min</li>
                                            <li>Temps de cuisson : 1h30 min</li>
                                        </ul>

                                        <p class="event-description"></p>
                                        <h3>Ingrédients</h3>
                                        <ul>
                                            <li>• 1/2 boîte de pistache allégée</li>
                                            <li>• 1 verre d'eau</li>
                                            <li>• 2 oeufs</li>
                                            <li>• Poivre</li>
                                            <li>• Poisson sec</li>
                                            <li>• Viande</li>
                                            <li>• Crevettes</li>
                                            <li>• Piments</li>
                                            <li>• Feuilles de bananier</li>
                                        </ul>

                                        <p class="event-description"></p>
                                        <h2 class="event-description">Bon appétit !</h2>

                                        <div class="event-divider"></div>
                                        <div class="event-meta">
                                            <span class="event-author">Sem Production</span>
                                            <span class="event-date">• Octobre 2025</span>
                                        </div>
`;

const recette2PrepEn = `
                                        <h2 class="event-title">Light Pistachio Dish</h2>
                                        <h3>Preparation</h3>
                                        <p class="event-description">
                                            <ul>
                                                <li><strong>• Step 1: </strong> <br>Mix 1/2 of the Ngon flour box with the same volume of water to make a light dough.</li>
                                                <li><strong>• Step 2: </strong> <br>Add to the mixture: salt, 2 eggs, chili pepper, smoked fish, crayfish (handful), meat, pepper.</li>
                                                <li><strong>• Step 3: </strong> <br>Arrange on your leaves, tie and place in the pot. Cook for 1h30.</li>
                                            </ul>
                                        </p>

                                        <p class="event-description"></p>
                                        <h3>Information</h3>
                                        <ul>
                                            <li>Number of people : 6</li>
                                            <li>Prep time: 20 min</li>
                                            <li>Cook time: 1h30 min</li>
                                        </ul>

                                        <p class="event-description"></p>
                                        <h3>Ingredients</h3>
                                        <ul>
                                            <li>• 1/2 box of light pistachio</li>
                                            <li>• 1 glass of water</li>
                                            <li>• 2 eggs</li>
                                            <li>• Pepper</li>
                                            <li>• Smoked fish</li>
                                            <li>• Meat</li>
                                            <li>• Shrimp</li>
                                            <li>• Chilies</li>
                                            <li>• Banana leaves</li>
                                        </ul>

                                        <p class="event-description"></p>
                                        <h2 class="event-description">Enjoy your meal!</h2>

                                        <div class="event-divider"></div>
                                        <div class="event-meta">
                                            <span class="event-author">Sem Production</span>
                                            <span class="event-date">• October 2025</span>
                                        </div>
`;

const recette3PrepFr = `
                                        <h2 class="event-title">Légumes aux Pistaches</h2>                                      
                                        <h3>Préparation</h3>
                                        <p class="event-description">
                                            <ul>
                                                <li><strong>• Etape1: </strong> <br>Faites chauffer de l’huile dans une marmite, découper les oignons, tomates, gingembre écrasé, la viande (précuite) et les écrevisses écrasées</li>
                                                <li><strong>• Etape2: </strong> <br>Ajouter la pâte de pistache (pistache + eau) puis saler, mélanger et faite mijoter pendant 20 min.</li>
                                                <li><strong>• Etape3: </strong> <br>Ajouter les légumes de votre choix (Follong Ndapche…), mélanger et laisser cuire pendant 20 min.</li>
                                            </ul>
                                        </p>

                                        <p class="event-description"></p>
                                        <h3>Informations</h3>
                                        <ul>
                                            <li>Nombre de personnes : 6</li>
                                            <li>Temps de préparation : 20 min</li>
                                            <li>Temps de cuisson : 40 min</li>
                                        </ul>

                                        <p class="event-description"></p>
                                        <h3>Ingrédients</h3>
                                        <ul>
                                            <li>• 1/2 boîte de pistache allégée</li>
                                            <li>• Poissons sec ( ou viande)</li>
                                            <li>• Ecrevisses</li>
                                            <li>• Oignons</li>
                                            <li>• Piments</li>
                                            <li>• Gingembre</li>
                                            <li>• Tomates</li>
                                            <li>• Feuilles de follong</li>
                                        </ul>

                                        <p class="event-description"></p>
                                        <h2 class="event-description">Bon appétit !</h2>

                                        <div class="event-divider"></div>
                                        <div class="event-meta">
                                            <span class="event-author">Sem Production</span>
                                            <span class="event-date">• Octobre 2025</span>
                                        </div>
`;

const recette3PrepEn = `
                                        <h2 class="event-title">Vegetables with Pistachios</h2>                                      
                                        <h3>Preparation</h3>
                                        <p class="event-description">
                                            <ul>
                                                <li><strong>• Step 1: </strong> <br>Heat oil in a pot, finely chop and sauté the onions, tomatoes, crushed ginger, (precooked) meat and crushed crayfish.</li>
                                                <li><strong>• Step 2: </strong> <br>Add the pistachio dough (pistachio + water) then apply salt, mix and simmer for 20 mins.</li>
                                                <li><strong>• Step 3: </strong> <br>Add the vegetables of your liking (Follong Ndapche…), mix and let cook for 20 mins.</li>
                                            </ul>
                                        </p>

                                        <p class="event-description"></p>
                                        <h3>Information</h3>
                                        <ul>
                                            <li>Number of people : 6</li>
                                            <li>Prep time: 20 min</li>
                                            <li>Cook time: 40 min</li>
                                        </ul>

                                        <p class="event-description"></p>
                                        <h3>Ingredients</h3>
                                        <ul>
                                            <li>• 1/2 box of light pistachio</li>
                                            <li>• Dried fish ( or meat)</li>
                                            <li>• Crayfish</li>
                                            <li>• Onions</li>
                                            <li>• Chilies</li>
                                            <li>• Ginger</li>
                                            <li>• Tomatoes</li>
                                            <li>• Follong leaves</li>
                                        </ul>

                                        <p class="event-description"></p>
                                        <h2 class="event-description">Enjoy your meal!</h2>

                                        <div class="event-divider"></div>
                                        <div class="event-meta">
                                            <span class="event-author">Sem Production</span>
                                            <span class="event-date">• October 2025</span>
                                        </div>
`;

const recette4DescFr = `
                                        <p class="event-description">Le Cake, véritable délice sucré, s’inscrit comme un merveilleux dessert à savourer sans modération. Cette création gastronomique offre une expérience sensorielle unique, une véritable symphonie de saveurs exquises qui éveillent les papilles à chaque bouchée.

                                        <br>Composé avec soin, le Ngon Cake est une harmonie parfaite entre des textures moelleuses et des saveurs riches. Son nom, évocateur de délices, promet une expérience gustative exceptionnelle. Les ingrédients soigneusement sélectionnés se marient dans une danse gustative, créant une fusion équilibrée de douceur et de complexité.

                                        <br>Que ce soit la première ou la dernière bouchée, le Ngon Cake séduit par sa capacité à transporter ceux qui le dégustent dans un univers de plaisir sucré. Les nuances subtiles et les notes délicates se dévoilent progressivement, offrant une expérience gourmande qui émerveille les sens.
                                        
                                        <br> Le Ngon Cake incarne bien plus qu’un simple dessert ; c’est une invitation à un voyage gustatif exceptionnel. À partager entre amis ou à savourer en solitaire, chaque instant avec le Ngon Cake est une célébration des plaisirs sucrés, une expérience à déguster sans retenue.
                                        </p>
`;

const recette4DescEn = `
                                        <p class="event-description">Cake, a true sweet delight, stands out as a wonderful dessert to be savored without moderation. This gastronomic creation offers a unique sensory experience, a veritable symphony of exquisite flavors that awaken the taste buds with every bite.

                                        <br>Carefully composed, the Ngon Cake is a perfect harmony between moist textures and rich flavors. Its name, evocative of delights, promises an exceptional taste experience. The carefully selected ingredients blend in a gustatory dance, creating a balanced fusion of sweetness and complexity.

                                        <br>Whether it is the first or the last bite, the Ngon Cake seduces with its ability to transport those who taste it into a universe of sweet pleasure. The subtle nuances and delicate notes gradually reveal themselves, offering a gourmet experience that amazes the senses.
                                        
                                        <br>The Ngon Cake represents much more than a simple dessert; it is an invitation to an exceptional gustatory journey. To be shared with friends or enjoyed alone, every moment with the Ngon Cake is a celebration of sweet pleasures, an experience to be thoroughly enjoyed.
                                        </p>
`;

const recette4PrepFr = `
                                        <h3>Préparation</h3>
                                        <p class="event-description">
                                            <ul>
                                                <li><strong>• Etape1: </strong> <br>Dans un récipient, mettre les œufs, le beurre fondu, le sucre Puis mélanger jusqu’à obtenir l’homogéinité.</li>
                                                <li><strong>• Etape2: </strong> <br>Ajouter dans ce mélange le pot de yaourt, la farine de blé, la farine Ngon et la levure chimique. <br>Mélanger le tout.</li>
                                                <li><strong>• Etape3: </strong> <br>Ajouter le sucre vanillé et éventuellement les morceaux de fruits confis ou des fruits secs.Verser dans un moule et le mettre au four environ 35-40 min à 180°.</li>
                                            </ul>
                                        </p>

                                        <p class="event-description"></p>
                                        <h3>Informations</h3>
                                        <ul>
                                            <li>Nombre de personnes : 6</li>
                                            <li>Temps de préparation : 10 min</li>
                                            <li>Temps de cuisson : 40 min</li>
                                        </ul>

                                        <p class="event-description"></p>
                                        <h3>Ingrédients</h3>
                                        <ul>
                                            <li>• 150g de Farine de Pistache Ngon Allégé</li>
                                            <li>• 100g de farine de blé</li>
                                            <li>• 100g de sucre</li>
                                            <li>• 150g de beurre fondu</li>
                                            <li>• 5 œufs</li>
                                            <li>• 1 pot de yaourt de 125g</li>
                                            <li>• 1 sachet de sucre vanillé</li>
                                            <li>• 1 sachet de levure chimique</li>
                                            <li>• Fruits confis ou fruits secs</li>
                                        </ul>

                                        <p class="event-description"></p>
                                        <h2 class="event-description">Bon appétit !</h2>

                                        <div class="event-divider"></div>
                                        <div class="event-meta">
                                            <span class="event-author">Sem Production</span>
                                            <span class="event-date">• Octobre 2025</span>
                                        </div>
`;

const recette4PrepEn = `
                                        <h3>Preparation</h3>
                                        <p class="event-description">
                                            <ul>
                                                <li><strong>• Step 1: </strong> <br>In a bowl, put the eggs, melted butter, sugar. Then mix to reach a smooth consistency.</li>
                                                <li><strong>• Step 2: </strong> <br>Add the yogurt cup, wheat flour, Ngon flour and baking powder. <br>Mix everything together.</li>
                                                <li><strong>• Step 3: </strong> <br>Add vanilla sugar and potentially the dried or candied fruits. Pour inside a mold and put it in the oven for about 35-40 min at 180°C.</li>
                                            </ul>
                                        </p>

                                        <p class="event-description"></p>
                                        <h3>Information</h3>
                                        <ul>
                                            <li>Number of people : 6</li>
                                            <li>Prep time: 10 min</li>
                                            <li>Cook time: 40 min</li>
                                        </ul>

                                        <p class="event-description"></p>
                                        <h3>Ingredients</h3>
                                        <ul>
                                            <li>• 150g Ngon Light Pistachio Flour</li>
                                            <li>• 100g wheat flour</li>
                                            <li>• 100g sugar</li>
                                            <li>• 150g melted butter</li>
                                            <li>• 5 eggs</li>
                                            <li>• 1 cup of 125g yogurt</li>
                                            <li>• 1 vanilla sugar bag</li>
                                            <li>• 1 baking powder bag</li>
                                            <li>• Candied or dried fruits</li>
                                        </ul>

                                        <p class="event-description"></p>
                                        <h2 class="event-description">Enjoy your meal!</h2>

                                        <div class="event-divider"></div>
                                        <div class="event-meta">
                                            <span class="event-author">Sem Production</span>
                                            <span class="event-date">• October 2025</span>
                                        </div>
`;


espritFr["esprit.s1.content"] = s1ContentFr;
espritFr["esprit.recette1.desc"] = recette1DescFr;
espritFr["esprit.recette1.prep"] = recette1PrepFr;
espritFr["esprit.recette2.prep"] = recette2PrepFr;
espritFr["esprit.recette3.prep"] = recette3PrepFr;
espritFr["esprit.recette4.desc"] = recette4DescFr;
espritFr["esprit.recette4.prep"] = recette4PrepFr;

espritEn["esprit.s1.content"] = s1ContentEn;
espritEn["esprit.recette1.desc"] = recette1DescEn;
espritEn["esprit.recette1.prep"] = recette1PrepEn;
espritEn["esprit.recette2.prep"] = recette2PrepEn;
espritEn["esprit.recette3.prep"] = recette3PrepEn;
espritEn["esprit.recette4.desc"] = recette4DescEn;
espritEn["esprit.recette4.prep"] = recette4PrepEn;


const insertTranslations = (content, objToInsert, matchStr) => {
    let parts = content.split(matchStr);
    let str = '';
    for (let key in objToInsert) {
        str += '        "' + key + '": ' + JSON.stringify(objToInsert[key]) + ',' + String.fromCharCode(10);
    }
    return parts[0] + str + matchStr + parts[1];
};

content = insertTranslations(content, espritFr, '    },' + String.fromCharCode(10) + '    en: {');
content = insertTranslations(content, espritEn, '    }' + String.fromCharCode(10) + '};');

fs.writeFileSync(i18nPath, content, 'utf8');
console.log('Translations for espritngon.html generated and updated in i18n-data.js');

