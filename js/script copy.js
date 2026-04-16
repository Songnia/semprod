  // Menu mobile
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenu = document.querySelector('.mobile-menu');
            const nav = document.querySelector('nav');
            
            mobileMenu.addEventListener('click', function() {
                nav.classList.toggle('active');
            });
            
            // Fermer le menu en cliquant sur un lien
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    nav.classList.remove('active');
                });
            });
            
            // Animation au défilement
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 100) {
                    header.style.padding = '10px 0';
                    header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                } else {
                    header.style.padding = '15px 0';
                    header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                }
            });
            
            // Filtrage des produits
            const searchInput = document.querySelector('.search-box input');
            const categoryFilter = document.querySelectorAll('.filter-select')[0];
            const locationFilter = document.querySelectorAll('.filter-select')[1];
            
            // Simulation de filtrage (dans une implémentation réelle, cela serait connecté à une base de données)
            function filterProducts() {
                const searchTerm = searchInput.value.toLowerCase();
                const category = categoryFilter.value;
                const location = locationFilter.value;
                
                // Ici, vous implémenteriez la logique de filtrage réelle
                console.log('Filtrage avec:', searchTerm, category, location);
            }
            
            searchInput.addEventListener('input', filterProducts);
            categoryFilter.addEventListener('change', filterProducts);
            locationFilter.addEventListener('change', filterProducts);
        });


        // Variables globales
        let cart = [];
        const phoneNumber = "+23754725521"; // Numéro de téléphone pour WhatsApp

        // Filtrage des produits
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Retirer la classe active de tous les boutons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Ajouter la classe active au bouton cliqué
                    this.classList.add('active');
                    
                    const filterValue = this.getAttribute('data-filter');
                    filterProducts(filterValue);
                });
            });
            
            // Initialiser le panier depuis le localStorage
            loadCartFromStorage();
            updateCartDisplay();
            
            // Gestion des événements pour les boutons d'ajout au panier
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const product = this.getAttribute('data-product');
                    const price = parseInt(this.getAttribute('data-price'));
                    const image = this.getAttribute('data-image');
                    addToCart(product, price, image);
                });
            });
            
            // Gestion des événements pour les boutons de commande WhatsApp directs
            document.querySelectorAll('.btn-whatsapp').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const product = this.getAttribute('data-product');
                    const price = parseInt(this.getAttribute('data-price'));
                    
                    // Ouvrir WhatsApp avec le message de commande
                    openWhatsApp([{product, price, quantity: 1}]);
                });
            });
            
            // Ouvrir/fermer le panier
            document.querySelector('.cart-close').addEventListener('click', closeCart);
            document.querySelectorAll('.btn-close').addEventListener('click', closeCart);
            document.querySelector('.cart-overlay').addEventListener('click', closeCart);
            
            // Commander via WhatsApp depuis le panier
            document.getElementById('checkout-whatsapp').addEventListener('click', function() {
                if (cart.length > 0) {
                    openWhatsApp(cart);
                    // Vider le panier après commande
                    cart = [];
                    saveCartToStorage();
                    updateCartDisplay();
                    closeCart();
                } else {
                    alert('Votre panier est vide!');
                }
            });
        });
        
        // Fonction de filtrage des produits
        function filterProducts(category) {
            const products = document.querySelectorAll('.product-card');
            
            products.forEach(product => {
                if (category === 'all' || product.getAttribute('data-category') === category) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        }
        
        // Fonctions de gestion du panier
        function addToCart(product, price, image) {
            // Vérifier si le produit est déjà dans le panier
            const existingItem = cart.find(item => item.product === product);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    product: product,
                    price: price,
                    image: image,
                    quantity: 1
                });
            }
            
            // Sauvegarder le panier et mettre à jour l'affichage
            saveCartToStorage();
            updateCartDisplay();
            
            // Ouvrir le panier
            openCart();
            
            // Afficher une notification
            showNotification(`${product} ajouté au panier!`);
        }
        
        function removeFromCart(index) {
            cart.splice(index, 1);
            saveCartToStorage();
            updateCartDisplay();
        }
        
        function updateQuantity(index, change) {
            cart[index].quantity += change;
            
            // Si la quantité est 0, supprimer l'article
            if (cart[index].quantity <= 0) {
                removeFromCart(index);
            } else {
                saveCartToStorage();
                updateCartDisplay();
            }
        }
        
        function saveCartToStorage() {
            localStorage.setItem('semProductionCart', JSON.stringify(cart));
        }
        
        function loadCartFromStorage() {
            const storedCart = localStorage.getItem('semProductionCart');
            if (storedCart) {
                cart = JSON.parse(storedCart);
            }
        }
        
        function updateCartDisplay() {
            const cartItems = document.querySelector('.cart-items');
            const cartTotal = document.getElementById('cart-total');
            const card_count = document.querySelector('.cart-count');

            
            // Vider le contenu actuel
            cartItems.innerHTML = '';
            
            // Calculer le total
            let total = 0;
            let count = parseInt(card_count.textContent);

            // Ajouter chaque article du panier
            cart.forEach((item, index) => {
                total += item.price * item.quantity;
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-img" style="background-image: url('${item.image}')"></div>
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.product}</div>
                        <div class="cart-item-price">${item.price} FCFA</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn minus" data-index="${index}">-</button>
                            <input type="text" class="quantity-input" value="${item.quantity}" readonly>
                            <button class="quantity-btn plus" data-index="${index}">+</button>
                            <button class="quantity-btn remove" data-index="${index}" style="margin-left: 10px; color: #ff5252;">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `;
                
                cartItems.appendChild(cartItem);
            });

            // Mettre à jour le compteur du panier
            const cart_item_details = document.querySelectorAll('.cart-item-details');
            count = 0;
            cart_item_details.forEach(item => {
                count += 1;
                card_count.textContent = count;
            });

            
            // Mettre à jour le total
            cartTotal.textContent = total;
            
            // Ajouter les écouteurs d'événements pour les boutons de quantité
            document.querySelectorAll('.quantity-btn.minus').forEach(button => {
                button.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    updateQuantity(index, -1);
                });
            });
            
            document.querySelectorAll('.quantity-btn.plus').forEach(button => {
                button.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    updateQuantity(index, 1);
                });
            });
            
            document.querySelectorAll('.quantity-btn.remove').forEach(button => {
                button.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    removeFromCart(index);
                });
            });
        }
        
        function openCart() {
            document.querySelector('.cart-sidebar').classList.add('active');
            document.querySelector('.cart-overlay').classList.add('active');
        }
        
        function closeCart() {
            document.querySelector('.cart-sidebar').classList.remove('active');
            document.querySelector('.cart-overlay').classList.remove('active');
        }
        
        function openWhatsApp(items) {
            let message = "Bonjour, je souhaite commander:%0A";
            
            items.forEach(item => {
                message += `${item.product} x${item.quantity}%0A`;
            });
            
            message += `%0APrix total: ${calculateTotal(items)} FCFA`;
            
            const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}&type=phone_number&app_absent=0`;
            window.open(url, '_blank');
        }
        
        function calculateTotal(items) {
            return items.reduce((total, item) => total + (item.price * item.quantity), 0);
        }
        
        function showNotification(message) {
            // Créer une notification simple
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 30px;
                background-color: var(--secondary-color);
                color: black;
                padding: 10px 25px;
                border-radius: 5px;
                box-shadow: var(--shadow);
                z-index: 2000;
                transition: var(--transition);
            `;
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            // Supprimer la notification après 3 secondes
            setTimeout(() => {
                notification.remove();
            }, 3000);
            
            function openCommandeModal() {
                document.getElementById('checkout-platform').style.display = 'block';
            }
    }


        // =============================================
        // PHASE 1: CHOIX PRODUIT
        // =============================================
        // Fonction pour afficher les détails du produit
        function displayProductDetails() {
            const product = productsData;
            console.log(product)
            const container = document.getElementById('products-grid');
            if (product) {
                container.innerHTML = product.map(product =>`
                    <div class="product-card" data-category="nutri-Sante">
                        <a href=" detailproduit.html?id=${product.id}">
                        <div class="product-img" style="background-image: url(${product.images[0]});">
                            <div class="product-badge">BIO</div>
                        </div></a>
                        <div class="product-content">
                            <h3 class="product-name">${product.names.fr}</h3>
                            <p class="product-description">${product.brand.fr}</p>
                            
                            <div class="product-price">
                            ${product.formats[0].price} <span class="price-currency">FCFA</span>
                            </div>
                            
                            <div class="product-actions">
                                <button class="btn btn-primary add-to-cart" data-product="${product.names.fr}" data-price="${product.formats[0].price}">
                                    <i class="fas fa-shopping-cart"></i> 
                                </button>
                                <button class="btn btn-secondary btn-commander" id="btn-checkout-platform" onclick="openCommandeModal()" data-product="${product.names.fr}" data-price="${product.formats[0].price}">
                                    <i class="fab fa-whatsapp"></i> Commander
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('');
                return;
            }
        }
        // Charger les détails du produit au chargement de la page
        document.addEventListener('DOMContentLoaded', displayProductDetails);





        // =============================================
        // PHASE 1: AFFICHAGE DU HEADER
        // =============================================
        // Fonction pour afficher les détails du produit
        function displayheader() {
    const header = document.getElementById('header-id');
    if (!header) return; // Sécurité si l'élément n'existe pas

    header.innerHTML = `
        <div class="container header-container">
            <a href="index.html" class="logo"><img src="assets/images/logo.webp" alt=""></a>
            <nav>
                <ul>
                    <li><a href="index.html">Accueil</a></li>
                    <li class="dropdown">
                        <a href="qui-sommes-nous.html">Qui Sommes-Nous ? <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="qui-sommes-nous.html#entreprise">Notre Entreprise</a></li>
                            <li><a href="qui-sommes-nous.html#histoire">Notre Histoire</a></li>
                            <li><a href="qui-sommes-nous.html#chaine-valeur">Notre Chaine de Valeur</a></li>
                            <li><a href="qui-sommes-nous.html#promoteur">Le Promoteur</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="produits.html">Produits <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown-menu" id="dropdown-menu"></ul>
                    </li>
                    <li><a href="evenements.html">Evenements</a></li>
                    <li class="dropdown">
                        <a href="technologie.html">Notre Technologie  <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="technologie.html#la-recherche">La recherche</a></li>
                            <li><a href="technologie.html#la-Conception-Fabrication">Conception et Fabrication</a></li>
                            <li><a href="technologie.html#la-Machine-specialisation">Machine et specialisation</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="espritngon.html">Esprit Ngon  <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="espritngon.html#biens-faits">Bienfaits</a></li>
                            <li><a href="espritngon.html#utilisations">Utilisations</a></li>
                            <li><a href="espritngon.html#patisseries">Patisseries</a></li>
                        </ul>
                    </li>  
                    <li><a href="photos.html">Nos Photos</a></li>                  
                    <li><a href="videos.html">Nos Vidéos</a></li>
                    <li><a href="contact.html">Nous contacter</a></li>
                </ul>
            </nav>
            <div class="icon-action">
                <div class="cart-icon add-to-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <span class="cart-count" onclick="openCart()">0</span>
                </div>
                <div class="mobile-menu">
                    <i class="fas fa-bars"></i>
                </div>                  
            </div>
        </div>
    `;
    // Appelle ici displayProductMenu() si tu veux remplir le menu produits dynamiquement
}
document.addEventListener('DOMContentLoaded', displayheader);