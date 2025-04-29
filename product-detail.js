// Product Detail Page JavaScript - Amazon-inspired functionality

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Product Image Gallery
    initImageGallery();

    // Initialize Tabs System
    initTabs();

    // Initialize FAQ Accordion
    initFaqAccordion();

    // Initialize Size & Color Options
    initProductOptions();

    // Initialize Add to Cart Button
    initAddToCart();

    // Initialize Image Zoom
    initImageZoom();

    // Recently Viewed Products
    loadRecentlyViewedProducts();
});

// Product Image Gallery
function initImageGallery() {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            // Skip special thumbnails (video/360)
            if (this.classList.contains('video-thumbnail') || this.classList.contains('360-thumbnail')) {
                handleSpecialThumbnail(this);
                return;
            }

            // Update active thumbnail
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            this.classList.add('active');

            // Update main image
            const imgSrc = this.getAttribute('data-img');
            mainImage.src = imgSrc;
            mainImage.setAttribute('data-high-res', imgSrc); // For zoom functionality

            // Reset zoom if active
            resetZoom();
        });
    });
}

function handleSpecialThumbnail(thumbnailElement) {
    if (thumbnailElement.classList.contains('video-thumbnail')) {
        alert('Video feature coming soon!');
        // Video player implementation would go here
    } else if (thumbnailElement.classList.contains('360-thumbnail')) {
        alert('360° View feature coming soon!');
        // 360 view implementation would go here
    }
}

// Product Tabs
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Show corresponding tab content
            const tabId = this.getAttribute('data-tab');
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });
}

// FAQ Accordion
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function () {
            // Toggle current item
            item.classList.toggle('active');

            // Close other items (uncomment for accordion behavior)
            // faqItems.forEach(otherItem => {
            //     if (otherItem !== item) {
            //         otherItem.classList.remove('active');
            //     }
            // });
        });
    });
}

// Product Options (Size, Color)
function initProductOptions() {
    // Size Options
    const sizeOptions = document.querySelectorAll('.size-option');
    const priceElement = document.querySelector('.current-price');
    const originalPriceElement = document.querySelector('.original-price');

    sizeOptions.forEach(option => {
        option.addEventListener('click', function () {
            // Update selected option
            sizeOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');

            // Update price based on selected size
            const price = this.getAttribute('data-price');
            const originalPrice = this.getAttribute('data-original');

            if (priceElement && price) {
                priceElement.textContent = `₹${parseInt(price).toLocaleString()}`;
            }

            if (originalPriceElement && originalPrice) {
                originalPriceElement.textContent = `₹${parseInt(originalPrice).toLocaleString()}`;
            }

            // Update saving amount and percentage
            if (price && originalPrice) {
                const saving = originalPrice - price;
                const savingPercent = Math.round((saving / originalPrice) * 100);

                const savingElement = document.querySelector('.saving');
                if (savingElement) {
                    savingElement.textContent = `You save: ₹${saving.toLocaleString()} (${savingPercent}%)`;
                }
            }
        });
    });

    // Color Options
    const colorOptions = document.querySelectorAll('.color-option');

    colorOptions.forEach(option => {
        option.addEventListener('click', function () {
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');

            // Additional color-specific logic could be added here
            // For example, changing product images based on color
        });
    });
}

// Add to Cart Functionality
function initAddToCart() {
    const addToCartBtn = document.querySelector('.add-to-cart');
    const buyNowBtn = document.querySelector('.buy-now');
    const quantitySelect = document.getElementById('quantitySelect');
    const toast = document.getElementById('addToCartToast');

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function () {
            const quantity = quantitySelect ? parseInt(quantitySelect.value) : 1;
            const selectedSize = document.querySelector('.size-option.selected');
            const selectedColor = document.querySelector('.color-option.selected');

            const product = {
                name: document.querySelector('.product-information h1').textContent,
                price: document.querySelector('.current-price').textContent,
                quantity: quantity,
                size: selectedSize ? selectedSize.getAttribute('data-size') : null,
                color: selectedColor ? selectedColor.getAttribute('data-color') : null,
                image: document.getElementById('mainImage').src
            };

            // Add to cart (would normally use localStorage or session)
            addProductToCart(product);

            // Show toast notification
            showToast('Item added to cart successfully!');

            // Update cart count
            updateCartCount(1);
        });
    }

    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', function () {
            // First add to cart
            const quantity = quantitySelect ? parseInt(quantitySelect.value) : 1;
            const selectedSize = document.querySelector('.size-option.selected');
            const selectedColor = document.querySelector('.color-option.selected');

            const product = {
                name: document.querySelector('.product-information h1').textContent,
                price: document.querySelector('.current-price').textContent,
                quantity: quantity,
                size: selectedSize ? selectedSize.getAttribute('data-size') : null,
                color: selectedColor ? selectedColor.getAttribute('data-color') : null,
                image: document.getElementById('mainImage').src
            };

            addProductToCart(product);
            updateCartCount(1);

            // Then open cart sidebar or redirect to checkout
            const cartSidebar = document.getElementById('cart-sidebar');
            if (cartSidebar) {
                cartSidebar.classList.add('active');
                showToast('Proceeding to checkout...');
            } else {
                alert('Proceeding to checkout... (This is a demo)');
            }
        });
    }

    // Wishlist button functionality
    const wishlistBtn = document.querySelector('.wishlist-btn');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function () {
            this.classList.toggle('active');
            const isActive = this.classList.contains('active');

            // Toggle heart icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.className = isActive ? 'fas fa-heart' : 'far fa-heart';
            }

            showToast(isActive ? 'Added to wishlist!' : 'Removed from wishlist!');
        });
    }

    // Compare button functionality
    const compareBtn = document.querySelector('.compare-btn');
    if (compareBtn) {
        compareBtn.addEventListener('click', function () {
            showToast('Added to compare list!');
        });
    }
}

function showToast(message) {
    const toast = document.getElementById('addToCartToast');
    if (!toast) return;

    toast.textContent = message;
    toast.style.display = 'block';

    // Add animation classes if they exist in your CSS
    toast.classList.remove('animate__fadeOut');
    toast.classList.add('animate__animated', 'animate__fadeIn');

    // Auto hide after 3 seconds
    setTimeout(() => {
        toast.classList.remove('animate__fadeIn');
        toast.classList.add('animate__fadeOut');

        setTimeout(() => {
            toast.style.display = 'none';
        }, 500);
    }, 3000);
}

function updateCartCount(increment = 0) {
    const cartCountElement = document.querySelector('.cart-count');
    if (!cartCountElement) return;

    let currentCount = parseInt(cartCountElement.textContent) || 0;
    currentCount += increment;

    cartCountElement.textContent = currentCount;
    cartCountElement.style.display = currentCount > 0 ? 'flex' : 'none';

    // Add animation for better visual feedback
    if (increment > 0) {
        cartCountElement.classList.add('animate__animated', 'animate__rubberBand');
        setTimeout(() => {
            cartCountElement.classList.remove('animate__animated', 'animate__rubberBand');
        }, 1000);
    }
}

function addProductToCart(product) {
    // This would normally save to localStorage or session
    console.log('Added to cart:', product);

    // For demo purposes, we'll add item to cart sidebar
    const cartItems = document.getElementById('cartItems');
    const cartTotalAmount = document.getElementById('cartTotalAmount');

    if (cartItems) {
        // Clear "empty cart" message if present
        const emptyMessage = cartItems.querySelector('.empty-cart-message');
        if (emptyMessage) {
            emptyMessage.style.display = 'none';
        }

        // Create cart item
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        // Clean price string to get numeric value
        const priceValue = parseFloat(product.price.replace(/[^0-9.-]+/g, ""));
        const totalItemPrice = priceValue * product.quantity;

        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${product.name}</div>
                <div class="cart-item-options">
                    ${product.size ? `<span>Size: ${product.size}</span>` : ''}
                    ${product.color ? `<span>Color: ${product.color}</span>` : ''}
                </div>
                <div class="cart-item-price">
                    <span>${product.price}</span> × <span>${product.quantity}</span>
                </div>
            </div>
            <button class="cart-item-remove">×</button>
        `;

        cartItems.appendChild(cartItem);

        // Update total
        if (cartTotalAmount) {
            let currentTotal = parseFloat(cartTotalAmount.textContent.replace(/[^0-9.-]+/g, "")) || 0;
            currentTotal += totalItemPrice;
            cartTotalAmount.textContent = `₹${currentTotal.toLocaleString()}`;
        }

        // Add remove functionality
        const removeButton = cartItem.querySelector('.cart-item-remove');
        if (removeButton) {
            removeButton.addEventListener('click', function () {
                cartItem.remove();

                // Update cart count
                updateCartCount(-product.quantity);

                // Update total price
                if (cartTotalAmount) {
                    let currentTotal = parseFloat(cartTotalAmount.textContent.replace(/[^0-9.-]+/g, "")) || 0;
                    currentTotal -= totalItemPrice;
                    cartTotalAmount.textContent = `₹${currentTotal.toLocaleString()}`;
                }

                // Show empty message if cart is empty
                const remainingItems = cartItems.querySelectorAll('.cart-item');
                if (remainingItems.length === 0 && emptyMessage) {
                    emptyMessage.style.display = 'block';
                }
            });
        }
    }

    // Save cart to localStorage for persistence
    saveCartToLocalStorage();
}

// Save cart data to localStorage
function saveCartToLocalStorage() {
    const cartItems = document.getElementById('cartItems');
    if (!cartItems) return;

    const items = [];
    const cartElements = cartItems.querySelectorAll('.cart-item');

    cartElements.forEach(item => {
        const name = item.querySelector('.cart-item-name').textContent;
        const image = item.querySelector('img').src;
        const priceText = item.querySelector('.cart-item-price').textContent;
        const quantity = parseInt(priceText.split('×')[1].trim());

        items.push({
            name,
            image,
            price: priceText.split('×')[0].trim(),
            quantity
        });
    });

    localStorage.setItem('hscCart', JSON.stringify(items));
}

// Load cart data from localStorage
function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('hscCart');
    if (!savedCart) return;

    try {
        const items = JSON.parse(savedCart);
        items.forEach(item => {
            addProductToCart(item);
        });
    } catch (e) {
        console.error('Error loading cart from localStorage', e);
    }
}

// Image Zoom Functionality
function initImageZoom() {
    const mainContainer = document.querySelector('.main-image-container');
    const lens = document.getElementById('zoomLens');
    const result = document.getElementById('zoomResult');
    const mainImage = document.getElementById('mainImage');

    if (!mainContainer || !lens || !result || !mainImage) return;

    // Hide lens and result initially
    if (lens) lens.style.display = 'none';
    if (result) result.style.display = 'none';

    mainContainer.addEventListener('mouseenter', function () {
        if (lens) lens.style.display = 'block';
        if (result) result.style.display = 'block';
    });

    mainContainer.addEventListener('mousemove', function (e) {
        // Get cursor position
        let pos = getCursorPos(e);

        // Calculate lens position
        let x = pos.x - (lens.offsetWidth / 2);
        let y = pos.y - (lens.offsetHeight / 2);

        // Prevent lens from going outside image
        if (x > mainImage.width - lens.offsetWidth) { x = mainImage.width - lens.offsetWidth; }
        if (x < 0) { x = 0; }
        if (y > mainImage.height - lens.offsetHeight) { y = mainImage.height - lens.offsetHeight; }
        if (y < 0) { y = 0; }

        // Position the lens
        lens.style.left = x + "px";
        lens.style.top = y + "px";

        // Calculate and set background position for result
        const cx = result.offsetWidth / lens.offsetWidth;
        const cy = result.offsetHeight / lens.offsetHeight;

        result.style.backgroundImage = `url('${mainImage.src}')`;
        result.style.backgroundSize = (mainImage.width * cx) + "px " + (mainImage.height * cy) + "px";
        result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    });

    function getCursorPos(e) {
        let rect = mainContainer.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        return { x, y };
    }

    // Hide zoom when mouse leaves container
    mainContainer.addEventListener('mouseleave', resetZoom);
}

function resetZoom() {
    const result = document.getElementById('zoomResult');
    const lens = document.getElementById('zoomLens');

    if (result) result.style.display = 'none';
    if (lens) lens.style.display = 'none';
}

// Recently Viewed Products
function loadRecentlyViewedProducts() {
    // This would normally load from localStorage or user history
    const recentlyViewed = document.getElementById('recentlyViewed');
    if (!recentlyViewed) return;

    // Try to load from localStorage first
    const savedRecentlyViewed = localStorage.getItem('recentlyViewedProducts');
    let products = [];

    if (savedRecentlyViewed) {
        try {
            products = JSON.parse(savedRecentlyViewed);
        } catch (e) {
            console.error('Error loading recently viewed products', e);
        }
    }

    // If no saved items, use demo products
    if (products.length === 0) {
        products = [
            {
                name: "Standard Desert Cooler",
                image: "WhatsApp Image 2025-04-24 at 11.09.05_0700b3e4.jpg",
                price: "₹2,900",
                rating: 4.2,
                reviews: 28
            },
            {
                name: "Room Cooler Deluxe",
                image: "WhatsApp Image 2025-04-24 at 19.03.30_1f2c5484.jpg",
                price: "₹3,200",
                rating: 4.5,
                reviews: 36
            },
            {
                name: "Mini Cooler",
                image: "WhatsApp Image 2025-04-24 at 11.09.44_2d801cd5.jpg",
                price: "₹1,800",
                rating: 4.0,
                reviews: 15
            }
        ];
    }

    recentlyViewed.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-card';

        // Generate HTML for stars
        let starsHTML = '';
        const fullStars = Math.floor(product.rating);
        const hasHalfStar = product.rating % 1 >= 0.5;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                starsHTML += '<i class="fas fa-star"></i>';
            } else if (i === fullStars && hasHalfStar) {
                starsHTML += '<i class="fas fa-star-half-alt"></i>';
            } else {
                starsHTML += '<i class="far fa-star"></i>';
            }
        }

        productElement.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="image-zoom-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="rating">
                    ${starsHTML}
                    <span>(${product.reviews})</span>
                </div>
                <p class="price">${product.price}</p>
                <div class="product-buttons">
                    <button class="quick-view"><i class="fas fa-eye"></i> View</button>
                    <button class="buy-now"><i class="fas fa-shopping-cart"></i> Buy</button>
                </div>
            </div>
        `;

        recentlyViewed.appendChild(productElement);

        // Add functionality to the buttons
        const quickViewBtn = productElement.querySelector('.quick-view');
        const buyNowBtn = productElement.querySelector('.buy-now');

        if (quickViewBtn) {
            quickViewBtn.addEventListener('click', function () {
                showToast('Quick view for ' + product.name);
                // In a real implementation, this would open a modal
            });
        }

        if (buyNowBtn) {
            buyNowBtn.addEventListener('click', function () {
                addProductToCart({
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    image: product.image
                });
                showToast(product.name + ' added to cart!');
                updateCartCount(1);
            });
        }
    });
}

// Add a product to recently viewed
function addToRecentlyViewed(product) {
    // Get current recently viewed products
    let recentlyViewed = [];
    const savedRecentlyViewed = localStorage.getItem('recentlyViewedProducts');

    if (savedRecentlyViewed) {
        try {
            recentlyViewed = JSON.parse(savedRecentlyViewed);
        } catch (e) {
            console.error('Error loading recently viewed products', e);
        }
    }

    // Check if product already exists
    const existingIndex = recentlyViewed.findIndex(p => p.name === product.name);
    if (existingIndex !== -1) {
        // Remove existing entry
        recentlyViewed.splice(existingIndex, 1);
    }

    // Add to beginning of array
    recentlyViewed.unshift(product);

    // Keep only the last 4 items
    if (recentlyViewed.length > 4) {
        recentlyViewed = recentlyViewed.slice(0, 4);
    }

    // Save back to localStorage
    localStorage.setItem('recentlyViewedProducts', JSON.stringify(recentlyViewed));

    // Update the UI if needed
    loadRecentlyViewedProducts();
}

// Cart Sidebar Toggle
document.addEventListener('DOMContentLoaded', function () {
    const cartToggle = document.getElementById('cartToggle');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartClose = document.querySelector('.cart-close');

    if (cartToggle && cartSidebar) {
        cartToggle.addEventListener('click', function (e) {
            e.preventDefault();
            cartSidebar.classList.toggle('active');
        });
    }

    if (cartClose && cartSidebar) {
        cartClose.addEventListener('click', function () {
            cartSidebar.classList.remove('active');
        });
    }

    // Close cart when clicking outside
    document.addEventListener('click', function (e) {
        if (cartSidebar &&
            cartSidebar.classList.contains('active') &&
            !cartSidebar.contains(e.target) &&
            e.target !== cartToggle &&
            !cartToggle.contains(e.target)) {
            cartSidebar.classList.remove('active');
        }
    });

    // Initialize cart from localStorage on page load
    loadCartFromLocalStorage();
});

// Quantity selector functionality
document.addEventListener('DOMContentLoaded', function () {
    const decreaseBtn = document.querySelector('.quantity-btn.decrease');
    const increaseBtn = document.querySelector('.quantity-btn.increase');
    const quantityInput = document.getElementById('quantityInput');

    if (decreaseBtn && increaseBtn && quantityInput) {
        decreaseBtn.addEventListener('click', function () {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });

        increaseBtn.addEventListener('click', function () {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue < 99) {
                quantityInput.value = currentValue + 1;
            }
        });

        // Prevent manual input of invalid values
        quantityInput.addEventListener('change', function () {
            const value = parseInt(quantityInput.value);
            if (isNaN(value) || value < 1) {
                quantityInput.value = 1;
            } else if (value > 99) {
                quantityInput.value = 99;
            }
        });
    }
});

// Handle "Read More" button click to show product features in modal
document.addEventListener('DOMContentLoaded', function () {
    // Get all read more buttons
    const readMoreButtons = document.querySelectorAll('.readmore-btn');
    const modal = document.getElementById('quickViewModal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close');

    // Add click event listener to each read more button
    if (readMoreButtons.length) {
        readMoreButtons.forEach(button => {
            button.addEventListener('click', function (e) {
                e.preventDefault();

                // Get product card data
                const productCard = this.closest('.product-card');
                const productName = productCard.querySelector('h3').textContent;
                const productImage = productCard.querySelector('.product-image').src;

                // Get features from the specs list
                const specsList = productCard.querySelector('.specs-list');
                const features = Array.from(specsList.querySelectorAll('li')).map(li => li.innerHTML);

                // Get additional features from tooltip if exists
                const tooltipEl = productCard.querySelector('.feature-tooltip');
                const tooltipText = tooltipEl ? tooltipEl.querySelector('.tooltip-text').textContent : '';
                const featureTitle = tooltipEl ? tooltipEl.textContent.replace(tooltipText, '').trim() : '';

                // Create modal content
                let modalContent = `
                    <div class="modal-product-details">
                        <div class="modal-product-image">
                            <img src="${productImage}" alt="${productName}">
                        </div>
                        <div class="modal-product-info">
                            <h3>${productName} - Features</h3>
                            <div class="modal-features">
                                <h4>Product Specifications:</h4>
                                <ul class="modal-specs-list">
                                    ${features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                                
                                <div class="modal-additional-features">
                                    <h4>Special Features:</h4>
                                    <p><strong>${featureTitle}</strong> ${tooltipText}</p>
                                    
                                    <div class="detailed-features">
                                        <h4>Additional Information:</h4>
                                        <ul>
                                            <li><strong>Energy Efficiency:</strong> Low power consumption design helps save on electricity bills</li>
                                            <li><strong>Water Consumption:</strong> Optimized water distribution system for efficient cooling</li>
                                            <li><strong>Maintenance:</strong> Easy-to-clean components and accessible design</li>
                                            <li><strong>Warranty:</strong> 6-month warranty on manufacturing defects</li>
                                            <li><strong>Support:</strong> Dedicated customer service through WhatsApp and phone</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <button class="modal-buy-btn buy-now"><i class="fas fa-shopping-cart"></i> Buy Now</button>
                        </div>
                    </div>
                `;

                // Set modal content and show modal
                modalBody.innerHTML = modalContent;
                modal.style.display = 'block';
                setTimeout(() => {
                    modal.classList.add('show');
                }, 10);

                // Add click event to the buy now button in modal
                const modalBuyBtn = modalBody.querySelector('.modal-buy-btn');
                if (modalBuyBtn) {
                    modalBuyBtn.addEventListener('click', function () {
                        modal.classList.remove('show');
                        setTimeout(() => {
                            modal.style.display = 'none';
                        }, 300);

                        // Show toast notification
                        const toast = document.getElementById('addToCartToast');
                        if (toast) {
                            toast.style.display = 'block';
                            setTimeout(() => {
                                toast.style.display = 'none';
                            }, 3000);
                        }
                    });
                }
            });
        });

        // Close modal when clicking the close button
        if (closeBtn) {
            closeBtn.addEventListener('click', function () {
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300);
            });
        }

        // Close modal when clicking outside the modal content
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300);
            }
        });
    }
});

// Mobile-specific enhancements
document.addEventListener('DOMContentLoaded', function () {
    // Back to top button functionality
    const backToTopButton = document.getElementById('backToTop');

    if (backToTopButton) {
        // Show button after scrolling down 300px
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        // Scroll to top when button is clicked
        backToTopButton.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Handle mobile swipe hint for product images
    const mainImage = document.querySelector('.main-image-container');

    if (mainImage && window.innerWidth < 768) {
        // Create swipe hint element
        const swipeHint = document.createElement('div');
        swipeHint.className = 'swipe-hint show';
        swipeHint.innerHTML = '<i class="fas fa-hand-point-right"></i> Swipe to view more';

        // Add to main image container
        mainImage.appendChild(swipeHint);

        // Remove after 3 seconds
        setTimeout(() => {
            swipeHint.classList.remove('show');
            setTimeout(() => {
                swipeHint.remove();
            }, 500);
        }, 3000);
    }

    // Sync mobile buy bar price with main price
    const mainPriceElement = document.querySelector('.product-information .current-price');
    const mobilePriceElement = document.querySelector('.mobile-buy-bar .current-price');

    if (mainPriceElement && mobilePriceElement) {
        // Set mobile price initially
        mobilePriceElement.textContent = mainPriceElement.textContent;

        // Update mobile price when size option changes
        const sizeOptions = document.querySelectorAll('.size-option');
        sizeOptions.forEach(option => {
            option.addEventListener('click', function () {
                const price = this.getAttribute('data-price');
                if (price) {
                    mobilePriceElement.textContent = `₹${parseInt(price).toLocaleString()}`;
                }
            });
        });
    }

    // Mobile tab menu scroll indicator
    const tabsNav = document.querySelector('.tabs-nav');

    if (tabsNav && window.innerWidth < 768) {
        // Add visual indicator that tabs can be scrolled
        tabsNav.classList.add('scrollable');

        // Hide scrollable indicator after user has scrolled tabs
        tabsNav.addEventListener('scroll', function () {
            if (!this.classList.contains('scrolled')) {
                this.classList.add('scrolled');
                setTimeout(() => {
                    this.classList.remove('scrollable');
                }, 1000);
            }
        }, { once: true });
    }

    // Enhanced touch feedback for buttons on mobile
    const touchButtons = document.querySelectorAll('.buy-now, .add-to-cart, .wishlist-btn, .tab-button, .size-option, .compare-btn');

    touchButtons.forEach(button => {
        button.addEventListener('touchstart', function () {
            this.classList.add('touch-active');
        });

        button.addEventListener('touchend', function () {
            this.classList.remove('touch-active');
        });
    });
});