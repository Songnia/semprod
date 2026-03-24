/**
 * SEM Production - Main Script
 * Standardized and Hardened Version
 */

// Global Variables
let cart = [];
const phoneNumber = "237699323761"; // WhatsApp Number
const PYTHON_API_URL = 'http://localhost:5000/api';

document.addEventListener('DOMContentLoaded', function () {
    // --- UI Elements ---
    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    const cartOverlay = document.querySelector('.cart-overlay');
    const header = document.querySelector('header');

    // --- Mobile Menu Logic ---
    if (mobileMenu && nav && cartOverlay) {
        mobileMenu.addEventListener('click', function () {
            nav.classList.toggle('active');
            cartOverlay.classList.toggle('active');
        });
    }

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (nav) nav.classList.remove('active');
            if (cartOverlay) cartOverlay.classList.remove('active');
        });
    });

    if (cartOverlay) {
        cartOverlay.addEventListener('click', function () {
            if (nav) nav.classList.remove('active');
            closeCart();
        });
    }

    // --- Header Scroll Animation ---
    window.addEventListener('scroll', function () {
        if (header) {
            if (window.scrollY > 100) {
                header.style.padding = '10px 0';
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            } else {
                header.style.padding = '15px 0';
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            }
        }
    });

    // --- Product Filtering ---
    const searchInput = document.querySelector('.search-box input');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    function filterProducts(filterValue = 'all') {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

        productCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const description = card.querySelector('p')?.textContent.toLowerCase() || '';

            const matchesFilter = filterValue === 'all' || category === filterValue;
            const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);

            if (matchesFilter && matchesSearch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
            filterProducts(activeFilter);
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterProducts(this.getAttribute('data-filter'));
        });
    });

    // --- Cart Management ---
    function saveCartToStorage() {
        localStorage.setItem('semProductionCart', JSON.stringify(cart));
    }

    function loadCartFromStorage() {
        const storedCart = localStorage.getItem('semProductionCart');
        if (storedCart) {
            try {
                cart = JSON.parse(storedCart);
            } catch (e) {
                console.error("Error parsing cart from storage", e);
                cart = [];
            }
        }
    }

    function updateCartDisplay() {
        const cartItemsContainer = document.querySelector('.cart-items');
        const cartTotalDisplay = document.getElementById('cart-total');
        const cartCountDisplay = document.getElementById('cart-count');
        const cartCounter = document.getElementById('cart-counter');

        if (!cartItemsContainer) return;

        cartItemsContainer.innerHTML = '';
        let total = 0;
        let count = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="cart-empty-message">Votre panier est vide.</p>';
        } else {
            cart.forEach((item, index) => {
                total += item.price * item.quantity;
                count += item.quantity;

                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-img" style="background-image: url('${item.image}')"></div>
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.product}</div>
                        <div class="cart-item-price">${item.price} FCFA</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn minus" data-index="${index}">-</button>
                            <span class="quantity-val">${item.quantity}</span>
                            <button class="quantity-btn plus" data-index="${index}">+</button>
                            <button class="quantity-btn remove" data-index="${index}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
        }

        if (cartTotalDisplay) cartTotalDisplay.textContent = total.toLocaleString();
        if (cartCountDisplay) cartCountDisplay.textContent = count;
        if (cartCounter) cartCounter.textContent = count;

        // Re-attach event listeners to new elements
        attachCartActionListeners();
    }

    function attachCartActionListeners() {
        document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
            btn.addEventListener('click', () => updateQuantity(parseInt(btn.dataset.index), -1));
        });
        document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
            btn.addEventListener('click', () => updateQuantity(parseInt(btn.dataset.index), 1));
        });
        document.querySelectorAll('.quantity-btn.remove').forEach(btn => {
            btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.index)));
        });
    }

    function updateQuantity(index, change) {
        if (cart[index]) {
            cart[index].quantity += change;
            if (cart[index].quantity <= 0) {
                removeFromCart(index);
            } else {
                saveCartToStorage();
                updateCartDisplay();
            }
        }
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        saveCartToStorage();
        updateCartDisplay();
    }

    function addToCart(product, price, image) {
        const existingItem = cart.find(item => item.product === product);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ product, price, image, quantity: 1 });
        }
        saveCartToStorage();
        updateCartDisplay();
        showNotification(`${product.replace(/<br>/g, ' ')} ajouté au panier!`);
        openCart();
    }

    function openCart() {
        const cartSidebar = document.querySelector('.cart-sidebar');
        const cartOverlay = document.querySelector('.cart-overlay');
        if (cartSidebar) cartSidebar.classList.add('active');
        if (cartOverlay) cartOverlay.classList.add('active');
    }

    function closeCart() {
        const cartSidebar = document.querySelector('.cart-sidebar');
        const cartOverlay = document.querySelector('.cart-overlay');
        if (cartSidebar) cartSidebar.classList.remove('active');
        if (cartOverlay) cartOverlay.classList.remove('active');
    }

    // --- Event Listeners for Cart Buttons ---
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const product = this.getAttribute('data-product');
            const price = parseInt(this.getAttribute('data-price'));
            const image = this.getAttribute('data-image');
            addToCart(product, price, image);
        });
    });

    const cartToggle = document.querySelector('.cart-toggle');
    if (cartToggle) cartToggle.addEventListener('click', (e) => { e.preventDefault(); openCart(); });

    const cartClose = document.querySelector('.cart-close');
    if (cartClose) cartClose.addEventListener('click', closeCart);

    // --- Order Logic ---
    function calculateTotal() {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.style.cssText = `
            position: fixed; top: 20px; right: 20px;
            background-color: ${type === 'error' ? '#ff5252' : 'var(--primary-color)'};
            color: white; padding: 15px 25px; border-radius: 5px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 3000;
            transition: all 0.3s ease; opacity: 0; transform: translateY(-20px);
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 10);

        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // --- WhatsApp Direct Commands ---
    document.querySelectorAll('.btn-whatsapp').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const product = this.getAttribute('data-product');
            const price = parseInt(this.getAttribute('data-price'));
            const message = `Bonjour, je souhaite commander: ${product.replace(/<br>/g, ' ')} (Prix: ${price} FCFA)`;
            window.open(`https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
        });
    });

    // --- Platform Modal & Form Logic ---
    const checkoutBtn = document.getElementById('checkout-whatsapp');
    const plateformModal = document.getElementById('platform-modal');
    const formCommandModal = document.getElementById('form-commande-modal');
    const whatsappPlatformBtn = document.getElementById('whatsapp-send');
    const commandeForm = document.getElementById('commande-form');

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showNotification('Votre panier est vide!', 'error');
                return;
            }
            if (plateformModal) plateformModal.classList.add('active');
        });
    }

    if (whatsappPlatformBtn) {
        whatsappPlatformBtn.addEventListener('click', () => {
            if (plateformModal) plateformModal.classList.remove('active');
            if (formCommandModal) {
                formCommandModal.classList.add('active');
                const detailsField = document.getElementById('commande-details');
                if (detailsField) {
                    let summary = "Bonjour, je souhaite commander:\n";
                    cart.forEach(item => {
                        summary += `• ${item.product.replace(/<br>/g, ' ')} x${item.quantity} - ${item.price * item.quantity} FCFA\n`;
                    });
                    summary += `\nTotal: ${calculateTotal()} FCFA`;
                    detailsField.value = summary;
                }
            }
        });
    }

    if (commandeForm) {
        commandeForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const name = document.getElementById('command-name')?.value.trim();
            const phone = document.getElementById('command-phone')?.value.trim();
            const details = document.getElementById('commande-details')?.value.trim();

            if (!name || !phone) {
                showNotification('Veuillez remplir votre nom et téléphone.', 'error');
                return;
            }

            // Optional: API Python Call
            try {
                await fetch(`${PYTHON_API_URL}/commande`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nom: name, telephone: phone, details: details, source: 'site_web' })
                });
            } catch (err) {
                console.warn('API Python non disponible, poursuite via WhatsApp seul.');
            }

            // WhatsApp send
            const whatsappMsg = `*Nouvelle commande de ${name}*%0A*Tél:* ${phone}%0A%0A${details.replace(/\n/g, '%0A')}`;
            window.open(`https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${whatsappMsg}`, '_blank');

            // Cleanup
            cart = [];
            saveCartToStorage();
            updateCartDisplay();
            closeCart();
            if (formCommandModal) formCommandModal.classList.remove('active');
            showNotification('Commande envoyée!');
        });
    }

    // Modal Close logic
    document.querySelectorAll('.close-btn, .close-btn-plateform, .close-btn-mail').forEach(btn => {
        btn.addEventListener('click', () => {
            if (plateformModal) plateformModal.classList.remove('active');
            if (formCommandModal) formCommandModal.classList.remove('active');
        });
    });

    // --- Initialization ---
    loadCartFromStorage();
    updateCartDisplay();
});
