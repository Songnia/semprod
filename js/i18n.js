// i18n.js

document.addEventListener("DOMContentLoaded", () => {
    // Determine the current language (default to 'fr')
    let currentLang = localStorage.getItem('siteLang') || 'fr';

    // Function to apply translations to the DOM
    function updateContent(lang) {
        if (!window.translations || !window.translations[lang]) {
            console.warn("Translations not found for language:", lang);
            return;
        }

        const dict = window.translations[lang];

        // Translate elements with data-i18n attribute
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        // Update active state on language selectors if they exist
        document.querySelectorAll(".lang-selector").forEach(el => {
            if (el.getAttribute("data-lang") === lang) {
                el.classList.add("active-lang");
            } else {
                el.classList.remove("active-lang");
            }
        });

        // Update the main dropdown flag and text
        const currentLangIcon = document.getElementById("current-lang-icon");
        const currentLangText = document.getElementById("current-lang-text");
        if (currentLangIcon && currentLangText) {
            if (lang === 'fr') {
                // Site en français → drapeau anglais (langue cible), texte "FR" (langue active)
                currentLangIcon.textContent = '\uD83C\uDDEC\uD83C\uDDE7'; // 🇬🇧
                currentLangText.textContent = 'FR';
            } else if (lang === 'en') {
                // Site en anglais → drapeau français (langue cible), texte "EN" (langue active)
                currentLangIcon.textContent = '\uD83C\uDDEB\uD83C\uDDF7'; // 🇫🇷
                currentLangText.textContent = 'EN';
            }
        }

        // Dispatch custom event to notify other scripts (like product-data loading)
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    }

    // Function to change language
    window.setLanguage = function (lang) {
        if (lang !== 'fr' && lang !== 'en') return;
        currentLang = lang;
        localStorage.setItem('siteLang', currentLang);
        updateContent(currentLang);
    };

    // Make setLanguage globally available for onclick handlers
    window.setLanguage = setLanguage;

    // Attach click events to language selectors
    document.querySelectorAll(".lang-selector").forEach(el => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            const lang = el.getAttribute("data-lang");
            setLanguage(lang);
            // Close dropdown after selection
            const langSwitch = document.querySelector('.lang-switch');
            if (langSwitch) langSwitch.classList.remove('active');
        });
    });

    // Toggle dropdown on click (for mobile)
    const langSwitch = document.querySelector('.lang-switch');
    const currentLangDisplay = document.querySelector('.current-lang-display');

    if (currentLangDisplay && langSwitch) {
        currentLangDisplay.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            langSwitch.classList.toggle('active');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        const langSwitch = document.querySelector('.lang-switch');
        if (langSwitch) {
            langSwitch.classList.remove('active');
        }
    });

    // Prevent closing when clicking inside the menu
    const dropdownMenu = document.querySelector('.lang-switch .dropdown-menu');
    if (dropdownMenu) {
        dropdownMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // Initial translation application
    updateContent(currentLang);
});
