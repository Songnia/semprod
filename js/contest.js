// Gestion de l'URL propre (Route /jeu-concours)
document.addEventListener('DOMContentLoaded', function () {
    // Si on est sur jeu-concours.html, on change l'URL visuelle pour /jeu-concours
    /*if (window.location.pathname.indexOf('jeu-concours.html') > -1) {
        var newUrl = window.location.href.replace('jeu-concours.html', 'jeu-concours');
        window.history.replaceState({}, '', newUrl);
    }*/
});

// Sticky Header on Scroll
window.addEventListener('scroll', function () {
    const header = document.getElementById('header-id');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Lazy Loading for Videos
document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.video-frame video');
    videos.forEach(video => {
        video.setAttribute('loading', 'lazy');
        video.setAttribute('preload', 'metadata');
    });
});

// Animated Counter for Prize Amounts
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString('fr-FR') + ' FCFA';
    }, 20);
}

// Intersection Observer for counter animation
const prizeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const valueText = entry.target.textContent;
            const value = parseInt(valueText.replace(/\D/g, ''));
            entry.target.classList.add('counted');
            animateCounter(entry.target, value);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.prize-value').forEach(el => {
        prizeObserver.observe(el);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contest-form');

    // Form Progress Tracking
    function updateFormProgress() {
        if (!form) return;
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        let filled = 0;
        inputs.forEach(input => {
            if (input.type === 'checkbox') {
                if (input.checked) filled++;
            } else if (input.type === 'file') {
                if (input.files.length > 0) filled++;
            } else if (input.value.trim() !== '') {
                filled++;
            }
        });
        const progress = (filled / inputs.length) * 100;
        const progressBar = document.getElementById('form-progress-bar');
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
    }

    // Attach progress tracking to all form fields
    if (form) {
        const fields = form.querySelectorAll('input, select, textarea');
        fields.forEach(field => {
            field.addEventListener('input', updateFormProgress);
            field.addEventListener('change', updateFormProgress);
        });
    }

    // Searchable Select Logic
    const storeContainer = document.getElementById('store-select-container');
    const storeSearch = document.getElementById('store-search');
    const storeOptions = document.getElementById('store-options');
    const storeValue = document.getElementById('store-value');
    const optionItems = document.querySelectorAll('.option-item');

    if (storeContainer && storeSearch && storeOptions) {
        // Function to open dropdown
        const openDropdown = () => {
            storeOptions.classList.add('active');
            storeSearch.removeAttribute('readonly');
        };

        // Toggle dropdown on click
        storeSearch.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent document click from closing immediately
            if (storeOptions.classList.contains('active')) {
                // If already active, just focus
                storeSearch.focus();
            } else {
                openDropdown();
            }
        });

        // Handle focus (e.g. via tab navigation)
        storeSearch.addEventListener('focus', () => {
            openDropdown();
        });

        // Filter options
        storeSearch.addEventListener('input', (e) => {
            if (!storeOptions.classList.contains('active')) {
                openDropdown();
            }

            const filter = e.target.value.toLowerCase();
            let hasResults = false;

            optionItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(filter)) {
                    item.style.display = 'block';
                    hasResults = true;
                } else {
                    item.style.display = 'none';
                }
            });

            // Show/hide group labels based on visible children
            document.querySelectorAll('.option-group-label').forEach(label => {
                let next = label.nextElementSibling;
                let hasVisibleChildren = false;
                while (next && !next.classList.contains('option-group-label')) {
                    if (next.style.display !== 'none') {
                        hasVisibleChildren = true;
                        break;
                    }
                    next = next.nextElementSibling;
                }
                label.style.display = hasVisibleChildren ? 'block' : 'none';
            });
        });

        // Select option
        optionItems.forEach(item => {
            item.addEventListener('click', () => {
                storeSearch.value = item.textContent;
                storeValue.value = item.getAttribute('data-value');
                storeOptions.classList.remove('active');
                storeSearch.setAttribute('readonly', true);

                // Trigger validation
                const formGroup = storeContainer.closest('.form-group');
                if (formGroup) {
                    formGroup.classList.remove('invalid');
                    formGroup.classList.add('valid');
                }
                updateFormProgress();
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!storeContainer.contains(e.target)) {
                storeOptions.classList.remove('active');
                if (storeValue.value === '') {
                    storeSearch.value = '';
                } else {
                    // Restore selected text if user didn't select anything new
                    const selectedOption = document.querySelector(`.option-item[data-value="${storeValue.value}"]`);
                    if (selectedOption) {
                        storeSearch.value = selectedOption.textContent;
                    }
                }
                storeSearch.setAttribute('readonly', true);
            }
        });
    }

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;

            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';

            const formData = new FormData(form);

            fetch('api/submit_participation.php', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        // Show Success Toast
                        showToast("🎉 Participation enregistrée avec succès !", "success");
                        if (storeContainer && storeSearch && storeOptions) {
                            // Reset searchable select
                            storeSearch.value = '';
                            storeValue.value = '';
                            storeSearch.setAttribute('readonly', true);
                            storeOptions.classList.remove('active');
                        }
                        form.reset();
                        document.getElementById('file-name').textContent = "";
                        updateFormProgress(); // Reset progress bar

                        // Optional: Scroll to top or show a modal
                        // Assuming 'container' is defined elsewhere for confetti cleanup
                        // setTimeout(() => {
                        //     if (typeof container !== 'undefined' && container) {
                        //         container.remove();
                        //     }
                        // }, 5000);
                    } else {
                        // Show Error Toast
                        showToast('Erreur : ' + (data.message || 'Une erreur est survenue.'), "error");
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    showToast('Une erreur technique est survenue.', "error");
                })
                .finally(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                });
        });
    }
});

function showToast(message, type) {
    const toast = document.getElementById("toast");
    toast.className = "toast show " + type;
    toast.textContent = message;
    setTimeout(function () {
        toast.className = toast.className.replace("show", "");
    }, 5000);
}
