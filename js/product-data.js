const productsData = [
    {
        id: 1,
        category: "huile-sante",
        names: {
            fr: "Huile Santé Ngon <br> ''Huile de pistache'' ",
            en: "Ngon Health Oil <br> ''Pistachio oil'' "
        },
        brand: {
            fr: "Huile Précieuse de graine de courges Tropicales et Biologiques",
            en: "Precious Oil from Tropical and Organic Pumpkin Seeds"
        },
        description: {
            fr: "Huile Précieuse de la graine de courge à coque dure, ou graine de Courge tropicale, 'Pistache africaine' nom scientifique cucumeropsis manii, 100% Naturel, Biologique, Extra Vierge, Pression à Froid ",
            en: "Precious oil for skin/hair from hard-shelled Tropical Pumpkin seeds, 'African Pistachio', scientific name Cucumeropsis Mannii. 100% Natural, Organic, Extra Virgin, Cold Pressed. Produced by: SEM Production"
        },
        ingredient: {
            fr: [
                "100% Graines de courge Tropicales Biologique ''Pistache''",
                "",
                "",
                ""
            ],
            en: [
                "100% Organic Tropical Pumpkin Seeds ''Pistachio''",
                "Extra Virgin Cold Pressed",
                "No additives",
                ""
            ]
        },
        composition: {
            fr: {
                "Acide gras poly-insaturé": "58.6g",
                "Acide gras mono-insaturé": "12.6g",
                "Vitamine E": "49.5mg",
                "Vitamine A": "60µg",
                "Phytostérols": "407mg",
                "Béta sitostérols": "299",
                "Cholestérol": "0",
                "Zinc": "3.6",
                "Cholesterole": "0"
            },
            en: {
                "Poly-insaturated fatty Acids": "58.6%",
                "Mono-insaturated fatty Acids": "12.6%",
                "Vitamin E": "495mg/kg",
                "Vitamin A": "60µg/kg",
                "Phytosterols": "4069mg/kg",
                "Beta sitosterols": "73.5%",
                "Cholestérol": "0"
            }
        },
        vertues: {
            fr: [
                "Entretien de la Prostate",
                "Système Cardiovasculaire",
                "Système Immunitaire",
                "Rajeunissement cellulaire",
                "Arthrites..."
            ],
            en: [
                "Prostatis",
                "Cardiovascular System",
                "Immune System",
                "cellular rejuvenation",
                "Arthritis..."
            ]
        },
        usage: {
            fr: [
                "Consommation directe (Une à deux cuillérées)",
                "Assaisonnements",
                "Salades",
                "Pâtes"
            ],
            en: [
                "Salads",
                "Toast",
                "Direct consumption (One to two spoons)",
                "Seasoning (Pasta, rice...)"
            ]
        },
        testimonials: [
            {
                author: "Gaelle",
                date: "Avr 29, 2018, 9:12 PM",
                comment: "En application directe sur le cuir chevelu et l'ensemble de la chevelure, l'huile renforce la fibre capillaire tout en la laissant douce et bien nourrie pour moi c'est une huile très pénétrante."
            },
            {
                author: "Brigitte",
                date: "Mai 28, 2018, 10:15 PM",
                comment: "L'huile précieuse de pistache favorise la repousse rapide des cheveux et apporte du volume en 6 semaines. Constat impressionnant après 1 mois d'utilisation régulière. Les cheveux sont hydratés et profondément nourris en bain d'huile. Les cheveux sont doux et faciles à coiffer. Véritable 'OR' Végétal."
            }
        ],
        images: [
            "assets/images/Produits/huille-sante-ngon-250ml.png",
            "assets/images/Produits/agriculture-biologique.jpg",
            "assets/images/Produits/EkoMarketHub Made In Cameroon 266(1).jpg"
        ],
        formats: [
            { volume: "250ml", price: "9000" }
        ],
        tags: ["Cosmétique", "Peau", "Cheveux", "Beauté", "Anti-âge"]
    },
    {
        id: 2,
        category: "huile-sante",
        names: {
            fr: "Pack Huile Santé Ngon<br> ''Huile de pistache''1L",
            en: "Ngon Health Oil Pack<br> ''Pistachio oil'' 1L"
        },
        brand: {
            fr: "Huile Précieuse de graines de Courge Tropicale Ngon 250ml *4",
            en: "Precious Oil from Ngon Tropical Pumpkin Seeds 250ml *4"
        },
        description: {
            fr: "Huile Précieuse Santé/Diététique de la graine de courge à coque dure, graine de Courge tropicale, de 'Pistache', de Pepins de Courge, ou enfin cucumeropsis manii 'Pistache' longs grains du Cameroun 100% Naturel, Biologique + Extra Vierge Pression à Froid Produit par: SEM Production",
            en: "Precious Health / Diet Oil of Hard-shelled Pumpkin Seed, tropicale Pumpkin Seed, de'Pistachio ', Pepins de Courge, or finally cucumeropsis manii 'Pistachio' long grain of Cameroon 100% Natural, Organic + Extra Virgin Cold Pressure Produced by: SEM Production"
        },
        ingredient: {
            fr: [
                "100% Graines de courge Tropicales Biologique ''Pistache''",
                "",
                "",
                ""
            ],
            en: [
                "100% Organic Tropical Pumpkin Seeds ''Pistachio''",
                "Extra Virgin Cold Pressed",
                "No additives",
                ""
            ]
        },
        composition: {
            fr: {
                "Acide gras poly-insaturé": "58.6g",
                "Acide gras mono-insaturé": "12.6g",
                "Vitamine E": "49.5mg",
                "Vitamine A": "60µg",
                "Phytostérols": "407mg",
                "Béta sitostérols": "299",
                "Cholestérol": "0",
                "Zinc": "3.6",
                "Cholesterole": "0"
            },
            en: {
                "Poly-insaturated fatty Acids": "58.6%",
                "Mono-insaturated fatty Acids": "12.6%",
                "Vitamin E": "495mg/kg",
                "Vitamin A": "60µg/kg",
                "Phytosterols": "4069mg/kg",
                "Beta sitosterols": "73.5%",
                "Cholestérol": "0"
            }
        },
        vertues: {
            fr: [
                "Entretien de la Prostate",
                "Système Cardiovasculaire",
                "Système Immunitaire",
                "Rajeunissement cellulaire",
                "Arthrites..."
            ],
            en: [
                "Prostatis",
                "Cardiovascular System",
                "Immune System",
                "cellular rejuvenation",
                "Arthritis..."
            ]
        },
        usage: {
            fr: [
                "Consommation directe (Une à deux cuillérées)",
                "Assaisonnements",
                "Salades",
                "Pâtes"
            ],
            en: [
                "Salads",
                "Toast",
                "Direct consumption (One to two spoons)",
                "Seasoning (Pasta, rice...)"
            ]
        },
        testimonials: [
            {
                author: "Jean",
                date: "Mai 29, 2018, 9:12 PM",
                comment: "Super produit pour ma santé, très agréable en bouche."
            },
            {
                author: "Baudelaire",
                date: "Avr 18, 2018, 10:15 AM",
                comment: "excellent pour les assaisonnements. Joint l'utile à l'agréable."
            }
        ],
        images: [
            "assets/images/Produits/pack-huille-sante-ngon-1l.png",
            "assets/images/Produits/agriculture-biologique.jpg",
            "assets/images/Produits/EkoMarketHub Made In Cameroon 266(1).jpg"
        ],
        formats: [
            { volume: "", price: "34000" }
        ],
    },
    {
        id: 3,
        category: "aperitif",
        names: {
            fr: "Apéro Ngon",
            en: "Useful aperitif of tropicale Pumpkin"
        },
        brand: {
            fr: "Apéritif utile de Courge tropicale torréfiées et salées, Sans sucre<br><br>",
            en: "Useful appetizer of roasted and salted tropical pumpkin seeds, Sugar-free<br><br>"
        },
        description: {
            fr: "Apéritif utile de la graine de Courge tropicale, de 'Pistache', de Pepins de Courge, ou 'Pistache' longs grains Biologique calibrées,delicatement torrefiées. ",
            en: "Useful appetizer of tropical pumpkin seed, 'Pistachio', Pumpkin Seeds, or 'Pistachio' Organic calibrated, roasted delicacy."
        },
        ingredient: {
            fr: [
                "Graines de courge Tropicales Ngon",
                "Sel",
                "Sans conservateur",
                ""
            ],
            en: [
                "Ngon Tropical Pumpkin Seeds",
                "Salt",
                "No preservatives",
                ""
            ]
        },
        composition: {
            fr: {
                "Protéines végétales(g)": "41",
                "Lipides(g)": "47",
                "Fer(mg)": "11",
                "Zinc(mg)": "5.4",
                "Magnésium(mg)": "463",
                "Sucre": "0",
                "phosphore,cuivre, Manganese, Potasium, ...": ""

            },
            en: {
                "Plant proteins(g)": "41",
                "Lipids(g)": "47",
                "Iron(mg)": "11",
                "Zinc(mg)": "5.4",
                "Magnesium(mg)": "463",
                "Sugar": "0"
            }
        },
        vertues: {
            fr: [
                "Source de proteines et minéraux",
                "Relaxation",
                "vitalité",
                "Regroupe les vertus des graines de courge",
                "L'apéritif le plus utile, en particulier pour les Hommes"
            ],
            en: [
                "Prostatis",
                "Reduce the space between the two elements",
                "Arthritis..."
            ]
        },
        usage: {
            fr: [
                "En apéro",
                "Glaces, Gateaux, Légumes",
                "Sur les salades"
            ],
            en: [
                "As appetizer - For receptions",
                "On salads - As useful decoration",
                "As hunger suppressant - Direct consumption to reduce hunger",
                "For tasting - With friends around a drink"
            ]
        },
        testimonials: [
            {
                author: "Robert",
                date: "Aou 09, 2018, 9:12 PM",
                comment: "Il est très agréable au goût."
            },
            {
                author: "Pierre",
                date: "Mai 08, 2018, 10:15 PM",
                comment: "Parfait pour mes apéritifs, décorations, il est très bon et moins gras."
            }
        ],
        images: [
            "assets/images/Produits/apero-ngon.png",
            "assets/images/Produits/agriculture-biologique.jpg",
            "assets/images/Produits/EkoMarketHub Made In Cameroon 266(1).jpg"
        ],
        formats: [
            { volume: "220g", price: "2800" }
        ]
    },
    {
        id: 4,
        category: "",
        names: {
            fr: "Roasty Ngon",
            en: "Roasty Ngon"
        },
        brand: {
            fr: "Pistache Africaine Torréfiée Au Gingembre<br><br><br>",
            en: "Roasted African Pistachio with Ginger<br><br><br>"
        },
        description: {
            fr: "Le booster naturel sans sucre! Savourez la puissance du gingembre alliée à la richesse de la pistache dans un snack sain, sans sucre ajouté. Riche en magnésium, zinc, gingerol, protéines végétales et bons lipides, le Roasty Ngon, améliore le confort digestif. C'est un antioxydant; il booste le système immunitaire tout en soutenant la santé de la prostate et le systeme cardiovasculaire",
            en: "The natural sugar-free booster! Enjoy the power of ginger combined with the richness of the pistachio in a healthy snack, with no added sugar. Rich in magnesium, zinc, gingerol, plant proteins and good fats, Roasty Ngon, improves digestive comfort. It is an antioxidant; it boosts the immune system while supporting prostate health and the cardiovascular system"
        },
        ingredient: {
            fr: [
                "Graines de Courges Tropicales et Biologiques Ngon (Pistaches Africaines)",
                "Sel,",
                "Jus de gingembre",
                "Sans conservateur"
            ],
            en: [
                "Ngon Organic pumpkin seeds",
                "Sait Ginger powder",
                "Preservatives free",
                ""
            ]
        },
        composition: {
            fr: {
                "Proteines vegetales(g)": "41",
                "Lipide": "47",
                "Zinc(mg)": "5.4",
                "Magnésium(mg)": "463",
                "Fer(mg)": "11",
                "Sucre(g)": "0.0"
            },
            en: {
                "Plant proteins(g)": "41",
                "Lipids": "47",
                "Zinc(mg)": "5.4",
                "Magnesium(mg)": "463",
                "Iron(mg)": "11",
                "Sugar(g)": "0.0"
            }
        },
        vertues: {
            fr: [
                "Allie les bienfaits de la graine de courge et du gingembre",
            ],
            en: [
                "Combines the benefits of pumpkin seeds and ginger",
                "Anti Oxydant",
                "",
                ""
            ]
        },
        usage: {
            fr: [
                "Apéritif",
                "Coupe Faim",
                "Salades",
                "Légumes."
            ],
            en: [
                "Appetizer",
                "Appetite Suppressant",
                "Salads",
                "Vegetables."
            ]
        },
        testimonials: [
            {
                author: "",
                date: "",
                comment: ""
            }
        ],
        images: [
            "assets/images/Produits/roasty-ngon.png",
            "assets/images/Produits/",
            "assets/images/Produits/"
        ],
        formats: [
            { volume: "200g", price: "3000" }
        ]
    },
    {
        id: 5,
        category: "aperitif-utile",
        names: {
            fr: "Kara Ngon 250g",
            en: "Kara Ngon 250g"
        },
        brand: {
            fr: "Pistache Africaine Soufflée – Caramélisée",
            en: "African Pistachio - Puﬀed & Caramelised"
        },
        description: {
            fr: "l’Apéritif Gourmand : Graines de courge soufflées caramélisées (en pot transparent)Alliez plaisir et bien-être avec KARA NGON !Riche en magnésium, en protéines et en zinc, ce snack naturel contribue au bon fonctionnement du système nerveux tout en réduisant le stress. Offrez-vous une pause savoureuse qui détend, régale et nourrit en profondeur. Avec KARA NGON, joignez enfin l’utile à l’agréable.Consommer directement ou peut être ajouté dans la glace, yaourt, un bol de fruits sec.Facile à emporter il est disponible en sous format de 50g, 200g et 250g.",
            en: "Gourmet Appetizer: puffed caramelized pumpkin seeds (transparent jar). Combine pleasure and well-being with KARA NGON! Rich in magnesium, proteins and zinc. Soothes the nervous system while reducing stress. Available in 50g, 200g and 250g."
        },
        ingredient: {
            fr: [
                "Graines biologiques de pistache Africaine, sélectionnées et calibrées 100%",
                "Sucre de canne",
                "",
                ""
            ],
            en: [
                "Organic African pistachio seeds, selected and calibrated 100%",
                "Cane sugar",
                "",
                ""
            ]
        },
        composition: {
            fr: {
                "Protéines (g)": "29",
                "Lipides": "30",
                "Magnésium(mg)": "342",
                "Zinc(mg)": "4",
                "Fer(mg)": "7.1",
                "Sucre(g)": "34",
                "Energie (kcal)": "526"
            },
            en: {
                "Tropical and organic pumpkin seeds, selected and calibrated.": "100%",
                "Proteins": "29",
                "Lipids": "30",
                "Magnesium": "342",
                "Zinc": "4",
                "Iron": "7.1",
                "Sugar": "34",
                "Energie (kcal)": "526"
            }
        },
        vertues: {
            fr: [
                "Source de minéraux",
                "Réduction de stresse",
                "Energie",
                ""
            ],
            en: [
                "Organic African pistachio seeds, selected and calibrated 100%",
                "Cane sugar",
                "",
                ""
            ]
        },
        usage: {
            fr: [
                "Apéritif",
                "Ajoutez une touche croquante et savoureuseà vos glaces, gâteaux, yaourts, salades defruits",
                "Bouillie, Céréales",
                "",
                ""
            ],
            en: [
                "Appetizer",
                "Add a crunchy and tasty touch to your ice cream, cakes, yogurts, fruit salads",
                "Porridge, Cereals",
                ""
            ]
        },
        testimonials: [
            {
                author: "",
                date: "",
                comment: ""
            }
        ],
        images: [
            "assets/images/Produits/kara-ngon-250g.jpg",
            "assets/images/Produits/",
            "assets/images/Produits/"
        ],
        formats: [
            { volume: "", price: "2800" }
        ]
    },
    {
        id: 6,
        category: "aperitif-utile",
        names: {
            fr: "Kara Ngon 220g",
            en: "Kara Ngon 220g"
        },
        brand: {
            fr: "Pistache Africaine Soufflée – Caramélisée",
            en: "African Pistachio - Puﬀed & Caramelised"
        },
        description: {
            fr: "l’Apéritif Gourmand : Graines de courge soufflées caramélisées (en pot transparent)Alliez plaisir et bien-être avec KARA NGON !Riche en magnésium, en protéines et en zinc, ce snack naturel contribue au bon fonctionnement du système nerveux tout en réduisant le stress. Offrez-vous une pause savoureuse qui détend, régale et nourrit en profondeur. Avec KARA NGON, joignez enfin l’utile à l’agréable.Consommer directement ou peut être ajouté dans la glace, yaourt, un bol de fruits sec.Facile à emporter il est disponible en sous format de 50g, 200g et 250g.",
            en: "Gourmet Appetizer: puffed caramelized pumpkin seeds (transparent jar). Combine pleasure and well-being with KARA NGON! Rich in magnesium, proteins and zinc. Soothes the nervous system while reducing stress. Available in 50g, 200g and 250g."
        },
        ingredient: {
            fr: [
                "Graines biologiques de pistache Africaine, sélectionnées et calibrées 100%",
                "Sucre de canne",
                "",
                ""
            ],
            en: [
                "Organic African pistachio seeds, selected and calibrated 100%",
                "Cane sugar",
                "",
                ""
            ]
        },
        composition: {
            fr: {
                "Graines biologiques de pistache Africaine, sélectionnées et calibrées": "100% ",
                "Protéines (g)": "29",
                "Lipides": "30",
                "Magnésium(mg)": "342",
                "Zinc(mg)": "4",
                "Fer(mg)": "7.1",
                "Sucre(g)": "34",
                "Energie (kcal)": "526"
            },
            en: {
                "Tropical and organic pumpkin seeds, selected and calibrated.": "100%",
                "Proteins": "29",
                "Lipids": "30",
                "Magnesium": "342",
                "Zinc": "4",
                "Iron": "7.1",
                "Sugar": "34",
                "Energie (kcal)": "526"
            }
        },
        vertues: {
            fr: [
                "Source de minéraux",
                "Réduction de stresse",
                "Energie",
                ""
            ],
            en: [
                "Organic African pistachio seeds, selected and calibrated 100%",
                "Cane sugar",
                "",
                ""
            ]
        },
        usage: {
            fr: [
                "Apéritif",
                "Ajoutez une touche croquante et savoureuseà vos glaces, gâteaux, yaourts, salades defruits",
                "Bouillie, Céréales",
                "",
                ""
            ],
            en: [
                "Appetizer",
                "Add a crunchy and tasty touch to your ice cream, cakes, yogurts, fruit salads",
                "Porridge, Cereals",
                ""
            ]
        },
        testimonials: [
            {
                author: "",
                date: "",
                comment: ""
            }
        ],
        images: [
            "assets/images/Produits/kara-ngon-200g.jpg",
            "assets/images/Produits/",
            "assets/images/Produits/"
        ],
        formats: [
            { volume: "", price: "2800" }
        ]
    },
    {
        id: 7,
        category: "aperitif-utile",
        names: {
            fr: "Kara Ngon 50g",
            en: "Kara Ngon 50g"
        },
        brand: {
            fr: "Pistache Africaine Soufflée – Caramélisée",
            en: "African Pistachio - Puﬀed & Caramelised"
        },
        description: {
            fr: "l’Apéritif Gourmand : Graines de courge soufflées caramélisées (en pot transparent)Alliez plaisir et bien-être avec KARA NGON !Riche en magnésium, en protéines et en zinc, ce snack naturel contribue au bon fonctionnement du système nerveux tout en réduisant le stress. Offrez-vous une pause savoureuse qui détend, régale et nourrit en profondeur. Avec KARA NGON, joignez enfin l’utile à l’agréable.Consommer directement ou peut être ajouté dans la glace, yaourt, un bol de fruits sec.Facile à emporter il est disponible en sous format de 50g, 200g et 250g.",
            en: "Gourmet Appetizer: puffed caramelized pumpkin seeds. Combine pleasure and well-being with KARA NGON! Rich in magnesium, proteins and zinc. Perfect pocket-size snack."
        },
        ingredient: {
            fr: [
                "Graines biologiques de pistache Africaine, sélectionnées et calibrées 100%",
                "Sucre de canne",
                "",
                ""
            ],
            en: [
                "Organic African pistachio seeds, selected and calibrated 100%",
                "Cane sugar",
                "",
                ""
            ]
        },
        composition: {
            fr: {
                "Protéines (g)": "29",
                "Lipides": "30",
                "Magnésium(mg)": "342",
                "Zinc(mg)": "4",
                "Fer(mg)": "7.1",
                "Sucre(g)": "34",
                "Energie (kcal)": "526"
            },
            en: {
                "Tropical and organic pumpkin seeds, selected and calibrated.": "100%",
                "Proteins": "29",
                "Lipids": "30",
                "Magnesium": "342",
                "Zinc": "4",
                "Iron": "7.1",
                "Sugar": "34",
                "Energie (kcal)": "526"
            }
        },
        vertues: {
            fr: [
                "Source de minéraux",
                "Réduction de stresse",
                "Energie",
                ""
            ],
            en: [
                "Organic African pistachio seeds, selected and calibrated 100%",
                "Cane sugar",
                "",
                ""
            ]
        },
        usage: {
            fr: [
                "Apéritif",
                "Ajoutez une touche croquante et savoureuseà vos glaces, gâteaux, yaourts, salades defruits",
                "Bouillie, Céréales",
                "",
                ""
            ],
            en: [
                "Appetizer",
                "Add a crunchy and tasty touch to your ice cream, cakes, yogurts, fruit salads",
                "Porridge, Cereals",
                ""
            ]
        },
        testimonials: [
            {
                author: "",
                date: "",
                comment: ""
            }
        ],
        images: [
            "assets/images/Produits/kara-ngon-50g.jpg",
            "assets/images/Produits/",
            "assets/images/Produits/"
        ],
        formats: [
            { volume: "", price: "550" }
        ]
    },
    {
        id: 8,
        category: "aperitif-utile",
        names: {
            fr: "Cookies Ngon",
            en: "Cookies Ngon"
        },
        brand: {
            fr: "Enrichi A la Farine de Pistache Ngon",
            en: "Enriched with African Pistachio Flour"
        },
        description: {
            fr: "",
            en: ""
        },
        ingredient: {
            fr: [
                "Farine biologiques de pistache Africaine (Graine de courage tropicale).",
                "Farine de blé",
                "Oeufs,Margarine, lait en poudre",
                ""
            ],
            en: [
                "Tropical and organic african pistachio ﬂour (Tropical pumpkin seeds ).",
                "Wheat ﬂour",
                "Eggs, margarine, Milk powder",
                "",
                ""
            ]
        },
        composition: {
            fr: {
                "Protéines (g)": "14.7",
                "Lipides": "21.6",
                "Magnésium(mg)": "126",
                "Zinc(mg)": "1.5",
                "Fer(mg)": "4.2",
                "Sucre(g)": "15.3"
            },
            en: {
                "Proteins (g)": "14.7",
                "Lipids": "21.6",
                "Magnesium(mg)": "126",
                "Zinc(mg)": "1.5",
                "Iron(mg)": "4.2",
                "Sugar(g)": "15.3"
            }
        },
        vertues: {
            fr: [
                "Source de minéraux",
                "Réduction de fatigue",
                "Energie",
                ""
            ],
            en: [
                "Organic African pistachio seeds, selected and calibrated 100%",
                "Cane sugar",
                "",
                ""
            ]
        },
        usage: {
            fr: [
                "Apéritifs, Goûter, Thé, Café, Infusion,Coupe-faim nutritionnel, Evènement...",
                "Aperitif, Snacks, Tea, Coffee and Infusions, Nutritional hunger reducer, Events...",
                "",
                ""
            ],
            en: [
                "Organic African pistachio seeds, selected and calibrated 100%",
                "Cane sugar",
                "",
                ""
            ]
        },
        testimonials: [
            {
                author: "",
                date: "",
                comment: ""
            }
        ],
        images: [
            "assets/images/Produits/cookies-ngon.jpg",
            "assets/images/Produits/",
            "assets/images/Produits/"
        ],
        formats: [
            { volume: "125g", price: "600" }
        ]
    },
    {
        id: 9,
        category: "alimentaire",
        names: {
            fr: "Biscuit Sablé Ngon",
            en: "Shortbread Ngon"
        },
        brand: {
            fr: "A la Farine de Pistache Africaine sans gluten, sucre réduit<br><br><br>",
            en: "With African organic pistachio flour"
        },
        description: {
            fr: "Sable à la farine biologique de pistaches africaines, riche en protéines et minéraux, allégé en sucre -50%, sans colorant ni conservateur.",
            en: "Shortbread with African organic pistachio flour, rich in proteins and minerals, sugar reduced -50%, without food coloring nor preservatives. "
        },
        ingredient: {
            fr: [
                "Farine biologiques de pistache Africaine (Graine de courage tropicale).",
                "Farine de Manioc",
                "Sucre de canne",
                "Margarine",
                "Oeuf frais",
                "Farine de mais"
            ],
            en: [
                "Ngon Tropical Pumpkin Seeds",
                "Fine salt",
                "No preservatives",
                ""
            ]
        },
        composition: {
            fr: {
                "Protéines": "21",
                "Glucides(g)": "45",
                "Lipides(g)": "24",
                "Sucre(g)": "14",
                "Fibre alimentaire(g)": "4.7",
                "Energie(g)": "488",
                "Manganeses": "2.9",
                "Cuivre(mg)": "0.8",
                "Potasium(mg)": "687",
                "Magnésium(mg)": "253",
                "Zinc": "2.5",
                "Fer(mg)": "8.4",
                "Calcium": "687",
                "Phosphore": "578"
            },
            en: {
                "Protéines": "21",
                "Glucides(g)": "45",
                "Lipides(g)": "24",
                "Sucre(g)": "14",
                "Fibre alimentaire(g)": "4.7",
                "Energie(g)": "488",
                "Manganeses": "2.9",
                "Cuivre(mg)": "0.8",
                "Potasium(mg)": "687",
                "Magnésium(mg)": "253",
                "Zinc": "2.5",
                "Fer(mg)": "8.4",
                "Calcium": "687",
                "Phosphore": "578"
            }
        },
        vertues: {
            fr: [
                "Super Aliment",
                "Allégé en sucre : -50%",
                "Sans colorant ni conservateur",
                "Coupe faim / Produit diététique",
                "Sans blé",
                "Sans gluten",
                "À base de farine de graines de courge tropicales biologiques",
                "Sans additifs artificiels",
                "Idéal pour le contrôle de l'appétit",
                "Convient aux régimes sans gluten"
            ],
            en: [
                "Super food",
                "Sugar reduced : -50%",
                "Without food coloring nor preservatives",
                "Hunger reduction / Dietary product",
                "Wheat free",
                "Gluten free",
                "Made from organic tropical pumpkin seeds",
                "No artificial additives",
                "Ideal for appetite control",
                "Suitable for gluten-free diets"
            ]
        },
        usage: {
            fr: [
                "Thé",
                "Café",
                "Goûter",
                "Coupe faim",
            ],
            en: [
                "Organic African pistachio seeds, selected and calibrated 100%",
                "Cane sugar",
                "",
                ""
            ]
        },
        testimonials: [
            {
                author: "",
                date: "",
                comment: ""
            }
        ],
        images: [
            "assets/images/Produits/sable-ngon.png",
            "assets/images/Produits/",
            "assets/images/Produits/"
        ],
        formats: [
            { volume: "", price: "1700" }
        ]
    },
    {
        id: 10,
        category: "speciale",
        names: {
            fr: "Patiss Ngon",
            en: "Patiss Ngon"
        },
        brand: {
            fr: "Poudre de graines de courges tropicales torréfiées - 'Pistaches' Africaines<br><br><br><br>",
            en: "Powder of roasted tropical pumpkin seeds - African 'Pistachios'<br><br><br><br>"
        },
        description: {
            fr: "",
            en: "Roasted tropical pumpkin seed flour — rich in plant proteins, zinc and magnesium. Ideal for cooking, smoothies, porridge and pastry."
        },
        ingredient: {
            fr: [
                "Graines de courge torréfiées",
                "Sel",
                "Sans Conservateur",
                ""
            ],
            en: [
                "Ngon Tropical Pumpkin Seeds",
                "Fine salt",
                "No preservatives",
                ""
            ]
        },
        composition: {
            fr: {
                "Protéines (g)": "41",
                "Lipides": "47",
                "Magnésium(mg)": "463",
                "Zinc(mg)": "5.4",
                "Fer(mg)": "11",
                "Sucre(g)": "00",
                "Mn, Cu, Ph, K": "",
                "": ""
            },
            en: {
                "": "",
                "": "",
                "": "",
                "": "",
                "": "",
                "": "",
                "": ""
            }
        },
        vertues: {
            fr: [
                "Source de proteines et minéraux",
                "Relaxation",
                "vitalité",
                "Regroupe les vertus des graines de courge"],
            en: [
                "Prostatis",
                "Reduce the space between the two elements",
                "Arthritis..."
            ]
        },
        usage: {
            fr: [
                "Patisserie",
                "Cremes",
                "Sauces"
            ],
            en: [
                "Organic African pistachio seeds, selected and calibrated 100%",
                "Cane sugar",
                "",
                ""
            ]
        },
        testimonials: [
            {
                author: "",
                date: "",
                comment: ""
            }
        ],
        images: [
            "assets/images/Produits/patis-ngon.png",
            "assets/images/Produits/",
            "assets/images/Produits/"
        ],
        formats: [
            { volume: "", price: "" }
        ]
    },
    {
        id: 11,
        category: "",
        names: {
            fr: "Huile de Beauté Ngon 100ml",
            en: "Ngon Beauty Oil 100ml"
        },
        brand: {
            fr: "Extra Fine de graine de Courges Tropicales et Biologiques<br>",
            en: "Extra Fine Oil from Tropical and Organic Pumpkin Seeds<br>"
        },
        description: {
            fr: "",
            en: "Extra fine oil from tropical pumpkin seeds — nourishes, moisturises and protects skin and hair naturally."
        },
        ingredient: {
            fr: [
                "Graines de courges tropicales et Biologiques(Pistaches Africaines)",
                "",
                "",
                ""
            ],
            en: [
                "Ngon Tropical Pumpkin Seeds",
                "Fine salt",
                "No preservatives",
                ""
            ]
        },
        composition: {
            fr: {
                "Acides gras polyinsaturé": "58,6%",
                "Acides gras monoinsatutés": "12,6%",
                "Vitamine E": "49,5mg/100g",
                "Vitamine A": "60ug/100g",
                "Zinc": "3,6mg/100g",
                "": "",
                "": ""
            },
            en: {
                "polyinraturated fatty acides": "58,6%",
                "mono insaturated acid": "12,6%",
                "Vitamin E": "49,5mg/100g",
                "Vitamin A": "60ug/100g",
                "Zinc": "3,6mg/100g",
                "": "",
                "": ""
            }
        },
        vertues: {
            fr: [
                "Regenere le peau",
                "Combat les vergetures",
                "Uniformise le teint",
                "Collagene naturel",
                "Supporte la pousse des cheuveux et ongles",
                ""
            ],
            en: [
                "Organic African pistachio seeds, selected and calibrated 100%",
                "Cane sugar",
                "",
                ""
            ]
        },
        usage: {
            fr: [
                "Pure",
                "Dans une composition",
                "",
                ""
            ],
            en: [
                "Organic African pistachio seeds, selected and calibrated 100%",
                "Cane sugar",
                "",
                ""
            ]
        },
        testimonials: [
            {
                author: "",
                date: "",
                comment: ""
            }
        ],
        images: [
            "assets/images/Produits/huille-beaute-ngon.png",
            "assets/images/Produits/",
            "assets/images/Produits/"
        ],
        formats: [
            { volume: "", price: "4500" }
        ]
    },
    {
        id: 12,
        category: "",
        names: {
            fr: "Savon Karité Ngon 100g",
            en: "Karité - Ngon 100g"
        },
        brand: {
            fr: "Enrichi au beurre de Karité, surgraissé a l'Huile Biologique de graine de courge tropicale<br><br>",
            en: "Enriched with shea butter, superfatted with organic tropical pumpkin seed oil"
        },
        description: {
            fr: "",
            en: ""
        },
        ingredient: {
            fr: [
                "Huile Biologique",
                "de graines de courges tropicales (pistachesafricaines)",
                "Beurre de Karité, Huile dePalmiste, huile de Palme",
                "Soude",
                "Eau"
            ],
            en: [
                "Organic Oil",
                "of tropical pumpkin seeds (African pistachios)",
                "Shea butter, Palm kernel oil, Palm oil",
                "Soda",
                "Water"
            ]
        },
        composition: {
            fr: {
                "": "",
                "": ""
            },
            en: {
                "Pumpkin seeds (Africanpistachios)": "",
                "Shea butter": "",
                "Palm kernel oil": "",
                "Palm oil": "",
                "Solder,": "",
                "Water": "",
                "": ""
            }
        },
        vertues: {
            fr: [
                "Régénère la peau",
                "Hydrate la peau",
                "Uniformise de teint.",
                "Lutte contre les vergetures.",
                "Lutte contre les imperfections."
            ],
            en: [
                "Regenerates the skin.",
                "Hydrates the skin.",
                "Evens out skin tone.Fights stretch marks.",
                "Fights imperfections."
            ]
        },
        usage: {
            fr: [
                "",
                "",
                "",
                ""
            ],
            en: [
                "Organic African pistachio seeds, selected and calibrated 100%",
                "Cane sugar",
                "",
                ""
            ]
        },
        testimonials: [
            {
                author: "",
                date: "",
                comment: ""
            }
        ],
        images: [
            "assets/images/Produits/savon-karite-ngon.png",
            "assets/images/Produits/",
            "assets/images/Produits/"
        ],
        formats: [
            { volume: "", price: "1500" }
        ]
    },
    {
        id: 14,
        category: "speciale",
        names: {
            fr: "Farine allégée de graines de courge",
            en: "Light flour of 'ngon'"
        },
        brand: {
            fr: "",
            en: ""
        },
        description: {
            fr: "Farine allégée de 'ngon' de la graine de courge à coque dure, graine de Courge tropicale, de 'Pistache', de Pepins de Courge, ou enfin cucumeropsis manii 'Pistache' longs grains du Cameroun 100% Naturel, Biologique + Matière grasse:-85% Superaliment Protéines et minéraux Produit par: SEM Production",
            en: "Light flour of 'ngon' from hard-shelled Tropical Pumpkin seeds, 'Pistachio', or finally Cucumeropsis Mannii 'Pistachio' long grain from Cameroon. 100% Natural, Organic + Fat-reduced -85%. Superfood rich in Proteins and minerals. Produced by: SEM Production"
        },
        ingredient: {
            fr: [
                "100% graine de courge tropicale Biologique 'Pistache africaine'",
                "",
                "",
                ""
            ],
            en: [
                "100% Organic Tropical Pumpkin Seeds 'African Pistachio'",
                "",
                "",
                ""
            ]
        },
        composition: {
            fr: {
                "Protéines": "63.3%",
                "Lipides": "13.9% (-70%)",
                "Magnésium": "673mg",
                "Phosphore": "1300mg",
                "Riche en minéraux": "",
                "Cholestérol": "0",
                "Zinc": "7.5mg",
                "Calcium": "101mg",
                "Fer": "14mg",
                "Manganese": "14mg"
            },
            en: {
                "Proteines": "63.4%",
                "Lipids": "13.9% (-70)",
                "Magnesium": "673",
                "Phosphorous": "1300mg",
                "Rich in minerals": "",
                "Cholestérol": "0"
            }
        },
        vertues: {
            fr: [
                "Très riche en protéines végétales",
                "Grande source d'énergie, relaxation et anti-stress naturel",
                "Santé de la reproduction",
                "Source du Fer et de Zinc",
                "Pauvre en sucre, convient aux diabétiques"
            ],
            en: [
                "Prostatis",
                "Cardiovascular System"
            ]
        },
        usage: {
            fr: [
                "Patisserie : enrichissement des autres farines",
                "Mets de pistache allégé - Mélanger farine et eau à volume égal; assaisonner à votre goût cuire à l'étouffée",
            ],
            en: [
                "Sauce thickening - Pour flour in sauce and stir",
                "Pistachio dish - Mix flour and water in equal volume; season to your taste and steam cook",
                "Sauce with balls - Mix flour and water, get a dough and put by spoons in the sauce",
                "Pastry - Mix 'ngon' flour with your flour. Continue your classic cake recipe"
            ]
        },
        testimonials: [
            {
                author: "Julie",
                date: "Mar 21, 2018, 5:12 PM",
                comment: "c'est un produit très nourrissant et energétique de part sa composition, super aliment et excellent pour la cuisine."
            },
            {
                author: "Marie-paule",
                date: "Feb 08, 2018, 10:15 PM",
                comment: "Cette farine gonfle énormément, elle est très riche facile pour la cuisson ; c'est un partenaire excellent pour réaliser votre sauce, faire votre mets et des gateaux aux goûts exquis."
            }
        ],
        images: [
            "assets/images/Produits/farine-ngon.png",
            "assets/images/Produits/agriculture-biologique.jpg",
            "assets/images/Produits/EkoMarketHub Made In Cameroon 266(1).jpg"
        ],
        formats: [
            { weight: "", price: "" }
        ]
    },
    {
        id: 13,
        category: "speciale",
        names: {
            fr: "Amandes Ngon ",
            en: "Almonds from 'ngon' of tropicale Pumpkin"
        },
        brand: {
            fr: "<br>",
            en: ""
        },
        description: {
            fr: "Amandes de 'ngon' de la graine de courge à coque dure, graine de Courge tropicale, de 'Pistache', de Pepins de Courge, ou enfin cucumeropsis manii 'Pistache' longs grains du Cameroun 100% Naturel, Biologique + Graines sélectionnées et calibrées Partenaire de la bonne santé Produit par: SEM Production",
            en: "Almonds of 'ngon' from hard-shelled Tropical Pumpkin seeds, 'Pistachio', or finally Cucumeropsis Mannii 'Pistachio' long grain from Cameroon. 100% Natural, Organic. Selected and calibrated seeds. Partner of good health. Produced by: SEM Production"
        },
        ingredient: {
            fr: [
                "100% graine de courge tropicale Biologique 'Pistache africaine'",
                "",
                "",
                ""
            ],
            en: [
                "100% Organic Tropical Pumpkin Seeds 'African Pistachio'",
                "",
                "",
                ""
            ]
        },
        composition: {
            fr: {
                "Amandes calibrées": ""
            },
            en: {
                "Calibrated Almond": ""
            }
        },
        vertues: {
            fr: [
                "Protéines et minéraux",
                "Entretien de la Prostate",
                "Système Cardiovasculaire"
            ],
            en: [
                "Prostatis",
                "Cardiovascular System"
            ]
        },
        usage: {
            fr: [
                "Patisserie ",
                "Décoration culinaire - Elle vient parfaire et rehausser le visuel",
                "Création - Donne lieu à des productions culinaires multiples"
            ],
            en: [
                "In pastry - It allows to achieve excellent results and improves taste",
                "Culinary decoration - It perfects and enhances the visual of our dishes",
                "Creation - Leads to multiple culinary productions"
            ]
        },
        testimonials: [
            {
                author: "Sebastien",
                date: "Aou 09, 2018, 9:12 PM",
                comment: "Il est très agréable au goût."
            },
            {
                author: "Elvis",
                date: "Mai 08, 2018, 10:15 PM",
                comment: "Parfait pour mes apéritifs, décorations, il est très bon et moins gras."
            }
        ],
        images: [
            "assets/images/Produits/amande-ngon.png",
            "assets/images/Produits/agriculture-biologique.jpg",
            "assets/images/Produits/EkoMarketHub Made In Cameroon 266(1).jpg"
        ],
        formats: [
            { volume: "5Litre/3Kg", price: "" }
        ]
    },
    {
        id: 15,
        category: "speciale",
        names: {
            fr: "Service de Décortiquage",
            en: "Shelling Service"
        },
        brand: {
            fr: "<br>",
            en: "<br>"
        },
        description: {
            fr: "",
            en: ""
        },
        ingredient: {
            fr: [
                "",
                "",
                "",
                ""
            ],
            en: [
                "Organic African pistachio seeds, selected and calibrated 100%",
                "Cane sugar",
                "",
                ""
            ]
        },
        composition: {
            fr: {
                "": "",
                "": "",
                "": "",
                "": "",
                "": "",
                "": "",
                "": ""
            },
            en: {
                "": "",
                "": "",
                "": "",
                "": "",
                "": "",
                "": "",
                "": ""
            }
        },
        vertues: {
            fr: [
                "",
                "",
                "",
                ""
            ],
            en: [
                "Organic African pistachio seeds, selected and calibrated 100%",
                "Cane sugar",
                "",
                ""
            ]
        },
        usage: {
            fr: [
                "",
                "",
                "",
                ""
            ],
            en: [
                "Organic African pistachio seeds, selected and calibrated 100%",
                "Cane sugar",
                "",
                ""
            ]
        },
        testimonials: [
            {
                author: "",
                date: "",
                comment: ""
            }
        ],
        images: [
            "assets/images/Produits/machine-a-decortiquer.png",
            "assets/images/Produits/",
            "assets/images/Produits/"
        ],
        formats: [
            { volume: " ", price: "" }
        ],
    },
    {
        id: 16,
        category: "speciale",
        names: {
            fr: "Pistache Décortiqué Vrac",
            en: "Bulk Shelled Pistachio"
        },
        brand: {
            fr: "",
            en: ""
        },
        description: {
            fr: "Graine de courge à coque dure, graine de Courge tropicale, 'Pistache',  Biologique décortiquées",
            en: "Hard-shelled pumpkin seeds, tropical pumpkin seeds, 'Pistachio', Organic hulled"
        },
        ingredient: {
            fr: [
                "100% graine de courge tropicale Biologique 'Pistache africaine'",
                "",
                "",
                ""
            ],
            en: [
                "Organic African pistachio seeds, selected and calibrated 100%",
                "Cane sugar",
                "",
                ""
            ]
        },
        composition: {
            fr: {
                "Amandes calibrées": ""
            },
            en: {
                "Calibrated Almond": ""
            }
        },
        vertues: {
            fr: [
                "Protéines et minéraux",
                "Entretien de la Prostate",
                "Système Cardiovasculaire"
            ],
            en: [
                "Prostatis",
                "Cardiovascular System"
            ]
        },
        usage: {
            fr: [
                "Patisserie ",
                "Décoration culinaire - Elle vient parfaire et rehausser le visuel",
                "Création - Donne lieu à des productions culinaires multiples"
            ],
            en: [
                "In pastry - It allows to achieve excellent results and improves taste",
                "Culinary decoration - It perfects and enhances the visual of our dishes",
                "Creation - Leads to multiple culinary productions"
            ]
        },
        testimonials: [
            {
                author: "",
                date: "",
                comment: ""
            }
        ],
        images: [
            "assets/images/Produits/pistache-vraque.png",
            "assets/images/Produits/",
            "assets/images/Produits/"
        ],
        formats: [
            { volume: " ", price: "" }
        ],
    }
];

/* // Initialisation de la page
        document.addEventListener('DOMContentLoaded', function() {
            // Remplir les informations du produit
            document.getElementById('product-brand').textContent = productData.brand;
            document.getElementById('product-title').textContent = productData.title;
            document.getElementById('product-subtitle').textContent = productData.subtitle;
            document.getElementById('product-price').textContent = productData.price;
            document.querySelector('.price-per-liter').textContent = productData.pricePerLiter;
            document.getElementById('product-image').src = productData.image;
            document.getElementById('product-image').alt = productData.title;

            // Gestion des onglets
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    // Retirer la classe active de tous les onglets
                    tabs.forEach(t => t.classList.remove('active'));
                    // Ajouter la classe active à l'onglet cliqué
                    this.classList.add('active');
                    
                    // Afficher le contenu correspondant
                    const tabId = this.getAttribute('data-tab');
                    const tabPanels = document.querySelectorAll('.tab-panel');
                    tabPanels.forEach(panel => panel.classList.remove('active'));
                    document.getElementById(`${tabId}-panel`).classList.add('active');
                });
            });

            // Gestion des boutons d'action
            document.getElementById('add-to-cart').addEventListener('click', function() {
                alert('Produit ajouté au panier : ' + productData.title);
                // Ici, vous ajouteriez le produit au panier
            });

            document.getElementById('add-to-wishlist').addEventListener('click', function() {
                alert('Produit ajouté à votre liste de souhaits : ' + productData.title);
                // Ici, vous ajouteriez le produit à la liste de souhaits
            });

            // Afficher les produits apparentés
            const relatedProductsContainer = document.getElementById('related-products');
            relatedProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <div class="product-card-content">
                        <h3 class="product-card-title">${product.title}</h3>
                        <div class="product-card-price">${product.price}</div>
                    </div>
                `;
                productCard.addEventListener('click', function() {
                    // Ici, vous redirigeriez vers la page du produit
                    alert(`Redirection vers ${product.title}`);
                });
                relatedProductsContainer.appendChild(productCard);
            });

            // Gestion de la vérification de localisation
            const locationButton = document.querySelector('.location-input button');
            locationButton.addEventListener('click', function() {
                const locationInput = document.querySelector('.location-input input');
                if (locationInput.value.trim() === '') {
                    alert('Veuillez renseigner votre code postal ou ville');
                } else {
                    alert('Vérification en cours pour : ' + locationInput.value);
                    // Ici, vous feriez une requête pour vérifier la disponibilité
                }
            });
        });*/
