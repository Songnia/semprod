const fs = require('fs');

let content = fs.readFileSync('js/product-data.js', 'utf8');

// I will now use regex or replace to fill in the translations.
// Let's extract the JS object, modify it, and convert back.
// Since it's not strictly JSON, we can't easily parse and stringify without losing comments and formatting.
// But we can do specific string replacements safely.

const replacements = [
  {
    target: `        names: {
            fr: "Huile Santé Ngon <br> ''Huile de pistache'' ",
            en: ""
        },`,
    replace: `        names: {
            fr: "Huile Santé Ngon <br> ''Huile de pistache'' ",
            en: "Ngon Health Oil <br> ''Pistachio oil'' "
        },`
  },
  {
    target: `        brand:{
            fr: "Huile Précieuse de graine de courges Tropicales et Biologiques",
            en: ""
        },`,
    replace: `        brand:{
            fr: "Huile Précieuse de graine de courges Tropicales et Biologiques",
            en: "Precious Oil from Tropical and Organic Pumpkin Seeds"
        },`
  },
  {
    target: `        ingredient: {
            fr: [
                "100% Graines de courge Tropicales Biologique ''Pistache''", 
                "",
                "",
                ""
            ],
            en: [
                "", 
                "",
                "",
                ""
            ]
        },`,
    replace: `        ingredient: {
            fr: [
                "100% Graines de courge Tropicales Biologique ''Pistache''", 
                "",
                "",
                ""
            ],
            en: [
                "100% Organic Tropical Pumpkin Seeds ''Pistachio''", 
                "",
                "",
                ""
            ]
        },`
  },
  {
    target: `        names: {
            fr: "Pack Huile Santé Ngon<br> ''Huile de pistache''1L",
            en: ""
        },`,
    replace: `        names: {
            fr: "Pack Huile Santé Ngon<br> ''Huile de pistache''1L",
            en: "Ngon Health Oil Pack<br> ''Pistachio oil'' 1L"
        },`
  },
  {
    target: `        brand:{
            fr: "Huile Précieuse de graines de Courge Tropicale Ngon 250ml *4",
            en: ""
        },`,
    replace: `        brand:{
            fr: "Huile Précieuse de graines de Courge Tropicale Ngon 250ml *4",
            en: "Precious Oil from Ngon Tropical Pumpkin Seeds 250ml *4"
        },`
  }
];

let updatedContent = content;
for (const r of replacements) {
    if (updatedContent.includes(r.target)) {
        updatedContent = updatedContent.replace(r.target, r.replace);
    } else {
        console.log("Could not find target:", r.target.substring(0, 50));
    }
}

// Special cases that appear multiple times or have varied whitespace
updatedContent = updatedContent.replace(
    /ingredient:\s*\{\s*fr:\s*\[\s*"100% Graines de courge Tropicales Biologique ''Pistache''",\s*"",\s*"",\s*""\s*\],\s*en:\s*\[\s*"",\s*"",\s*"",\s*""\s*\]\s*\}/g,
    \`ingredient: {\n            fr: [\n                "100% Graines de courge Tropicales Biologique ''Pistache''", \n                "",\n                "",\n                ""\n            ],\n            en: [\n                "100% Organic Tropical Pumpkin Seeds ''Pistachio''", \n                "",\n                "",\n                ""\n            ]\n        }\`
);

fs.writeFileSync('js/product-data.js', updatedContent, 'utf8');
console.log("Replacements applied.");
