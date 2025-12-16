/**
 * ==========================================
 * LOMBARDIA DELIVERY - Main JavaScript
 * Premium Pizza & Burgers Delivery
 * ==========================================
 */

// ==========================================
// WHATSAPP CONFIGURATION
// ==========================================
// IMPORTANT: Change this number to your actual WhatsApp business number
// Format: Country code + number without + or spaces
// Example for UK: 447123456789
const WHATSAPP_NUMBER = '447000000000';

// ==========================================
// PRODUCT DATA
// ==========================================
const PRODUCTS = {
  pizzas: [
    {
      id: 'pizza-1',
      name: 'Margherita',
      description: 'Tomato sauce, mozzarella, basil',
      allergens: ['gluten', 'dairy'],
      category: 'classic',
      baseSmall: 8.99,
      baseMedium: 11.99,
      baseLarge: 14.99,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop'
    },
    {
      id: 'pizza-2',
      name: 'Pepperoni',
      description: 'Pepperoni, mozzarella, tomato sauce',
      allergens: ['gluten', 'dairy'],
      category: 'classic',
      baseSmall: 9.99,
      baseMedium: 12.99,
      baseLarge: 15.99,
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&h=400&fit=crop'
    },
    {
      id: 'pizza-3',
      name: 'Ham & Mushroom',
      description: 'Ham, mushrooms, mozzarella',
      allergens: ['gluten', 'dairy'],
      category: 'classic',
      baseSmall: 9.99,
      baseMedium: 12.99,
      baseLarge: 15.99,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop'
    },
    {
      id: 'pizza-4',
      name: 'Veggie Garden',
      description: 'Peppers, onions, olives, mushrooms',
      allergens: ['gluten', 'dairy'],
      category: 'veg',
      baseSmall: 9.49,
      baseMedium: 12.49,
      baseLarge: 15.49,
      image: 'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=600&h=400&fit=crop'
    },
    {
      id: 'pizza-5',
      name: 'Spinach & Ricotta',
      description: 'Spinach, ricotta, mozzarella',
      allergens: ['gluten', 'dairy'],
      category: 'veg',
      baseSmall: 9.99,
      baseMedium: 12.99,
      baseLarge: 15.99,
      image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&h=400&fit=crop'
    },
    {
      id: 'pizza-6',
      name: 'BBQ Chicken',
      description: 'BBQ sauce, chicken, red onion',
      allergens: ['gluten', 'dairy'],
      category: 'special',
      baseSmall: 10.99,
      baseMedium: 13.99,
      baseLarge: 16.99,
      image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&h=400&fit=crop'
    },
    {
      id: 'pizza-7',
      name: 'Spicy Diavola',
      description: 'Spicy salami, chilli, mozzarella',
      allergens: ['gluten', 'dairy'],
      category: 'special',
      baseSmall: 10.99,
      baseMedium: 13.99,
      baseLarge: 16.99,
      image: 'https://images.unsplash.com/photo-1669717879542-65eb286d1b23?w=600&h=400&fit=crop'
    },
    {
      id: 'pizza-8',
      name: 'Four Cheese',
      description: 'Mozzarella, cheddar, parmesan, gorgonzola',
      allergens: ['gluten', 'dairy'],
      category: 'special',
      baseSmall: 10.49,
      baseMedium: 13.49,
      baseLarge: 16.49,
      image: 'https://images.unsplash.com/photo-1677175201981-cb9bf0ccf851?w=600&h=400&fit=crop'
    }
  ],
  burgers: [
    {
      id: 'burger-1',
      name: 'Classic Beef',
      description: 'Beef patty, lettuce, tomato, house sauce',
      allergens: ['gluten'],
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop'
    },
    {
      id: 'burger-2',
      name: 'Cheeseburger',
      description: 'Beef patty, cheddar, pickles, ketchup',
      allergens: ['gluten', 'dairy'],
      price: 10.49,
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&h=400&fit=crop'
    },
    {
      id: 'burger-3',
      name: 'Smoky Bacon',
      description: 'Beef, bacon, smoky mayo',
      allergens: ['gluten', 'dairy'],
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&h=400&fit=crop'
    },
    {
      id: 'burger-4',
      name: 'Chicken Crispy',
      description: 'Crispy chicken, slaw, mayo',
      allergens: ['gluten', 'eggs'],
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&h=400&fit=crop'
    },
    {
      id: 'burger-5',
      name: 'Veggie Burger',
      description: 'Veg patty, salad, vegan mayo',
      allergens: ['gluten'],
      price: 9.49,
      image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600&h=400&fit=crop'
    },
    {
      id: 'burger-6',
      name: 'Double Stack',
      description: 'Two patties, cheddar, house sauce',
      allergens: ['gluten', 'dairy'],
      price: 12.49,
      image: 'https://images.unsplash.com/photo-1651993841930-946a700c1524?w=600&h=400&fit=crop'
    }
  ],
  drinks: [
    {
      id: 'drink-1',
      name: 'Orange Juice',
      description: '500ml',
      allergens: [],
      category: 'juices',
      price: 3.49,
      image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&h=400&fit=crop'
    },
    {
      id: 'drink-2',
      name: 'Apple Juice',
      description: '500ml',
      allergens: [],
      category: 'juices',
      price: 3.49,
      image: 'https://images.unsplash.com/photo-1576673442511-7e39b6545c87?w=600&h=400&fit=crop'
    },
    {
      id: 'drink-3',
      name: 'Mango Juice',
      description: '500ml',
      allergens: [],
      category: 'juices',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&h=400&fit=crop'
    },
    {
      id: 'drink-4',
      name: 'Coca-Cola',
      description: '330ml',
      allergens: [],
      category: 'soft',
      price: 1.99,
      image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600&h=400&fit=crop'
    },
    {
      id: 'drink-5',
      name: 'Diet Coke',
      description: '330ml',
      allergens: [],
      category: 'soft',
      price: 1.99,
      image: 'https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?w=600&h=400&fit=crop'
    },
    {
      id: 'drink-6',
      name: 'Sprite',
      description: '330ml',
      allergens: [],
      category: 'soft',
      price: 1.99,
      image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=600&h=400&fit=crop'
    },
    {
      id: 'drink-7',
      name: 'Fanta Orange',
      description: '330ml',
      allergens: [],
      category: 'soft',
      price: 1.99,
      image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=600&h=400&fit=crop'
    },
    {
      id: 'drink-8',
      name: 'Still Water',
      description: '500ml',
      allergens: [],
      category: 'soft',
      price: 1.49,
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&h=400&fit=crop'
    }
  ]
};

// Pizza extras with prices
const PIZZA_EXTRAS = [
  { id: 'extra-cheese', name: 'Extra cheese', price: 1.50 },
  { id: 'bacon', name: 'Bacon', price: 2.00 },
  { id: 'mushrooms', name: 'Mushrooms', price: 1.00 },
  { id: 'jalapenos', name: 'Jalapeños', price: 0.80 },
  { id: 'stuffed-crust', name: 'Stuffed crust', price: 2.50 }
];

// Burger add-ons
const BURGER_ADDONS = [
  { id: 'extra-patty', name: 'Extra patty', price: 2.50 },
  { id: 'cheese', name: 'Cheese', price: 0.80 },
  { id: 'fries-upgrade', name: 'Fries upgrade', price: 1.50 }
];

// Delivery fee by postcode prefix
const DELIVERY_FEES = {
  'SW': 2.99,
  'W': 2.99,
  'NW': 2.99,
  'E': 3.99,
  'N': 3.99,
  'default': 4.99
};

// Coupon codes
const COUPONS = {
  'WELCOME10': { type: 'percent', value: 10 },
  'FREESHIP': { type: 'freeship', value: 0 }
};

// ==========================================
// CART MANAGEMENT
// ==========================================
let cart = JSON.parse(localStorage.getItem('lombardia_cart')) || [];
let appliedCoupon = JSON.parse(localStorage.getItem('lombardia_coupon')) || null;

function saveCart() {
  localStorage.setItem('lombardia_cart', JSON.stringify(cart));
  updateCartCount();
}

function saveCoupon() {
  localStorage.setItem('lombardia_coupon', JSON.stringify(appliedCoupon));
}

function updateCartCount() {
  const cartCounts = document.querySelectorAll('.cart-count');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  cartCounts.forEach(countEl => {
    countEl.textContent = totalItems;
    countEl.classList.toggle('hidden', totalItems === 0);
  });
}

function addToCart(item) {
  // Check if item with same options exists
  const existingIndex = cart.findIndex(cartItem => 
    cartItem.id === item.id && 
    cartItem.size === item.size &&
    JSON.stringify(cartItem.extras) === JSON.stringify(item.extras)
  );
  
  if (existingIndex > -1) {
    cart[existingIndex].quantity += item.quantity;
  } else {
    cart.push(item);
  }
  
  saveCart();
  showToast(`${item.name} added to cart!`, 'success');
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  if (typeof renderCart === 'function') renderCart();
}

function updateCartItemQty(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity < 1) {
    removeFromCart(index);
  } else {
    saveCart();
    if (typeof renderCart === 'function') renderCart();
  }
}

function getDeliveryFee(postcode) {
  if (!postcode) return DELIVERY_FEES.default;
  
  const prefix = postcode.toUpperCase().replace(/[0-9]/g, '').trim();
  
  for (const key of Object.keys(DELIVERY_FEES)) {
    if (key !== 'default' && prefix.startsWith(key)) {
      return DELIVERY_FEES[key];
    }
  }
  
  return DELIVERY_FEES.default;
}

function calculateSubtotal() {
  return cart.reduce((sum, item) => sum + (item.totalPrice * item.quantity), 0);
}

function calculateDiscount(subtotal) {
  if (!appliedCoupon) return 0;
  
  const coupon = COUPONS[appliedCoupon];
  if (!coupon) return 0;
  
  if (coupon.type === 'percent') {
    return subtotal * (coupon.value / 100);
  }
  
  return 0;
}

function isFreeshipping() {
  return appliedCoupon === 'FREESHIP';
}

// ==========================================
// ESTIMATED DELIVERY TIME
// ==========================================
function getEstimatedDeliveryTime() {
  const now = new Date();
  const hour = now.getHours();
  
  // Peak hours: 18:00 - 21:00
  if (hour >= 18 && hour < 21) {
    return '50–70 min';
  }
  
  return '35–50 min';
}

function isPeakHours() {
  const hour = new Date().getHours();
  return hour >= 18 && hour < 21;
}

// ==========================================
// TOAST NOTIFICATIONS
// ==========================================
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
    <span class="toast-message">${message}</span>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ==========================================
// HEADER & NAVIGATION
// ==========================================
function initHeader() {
  const header = document.querySelector('.header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  
  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  menuToggle?.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileNav?.classList.toggle('active');
    document.body.style.overflow = mobileNav?.classList.contains('active') ? 'hidden' : '';
  });
  
  // Close mobile menu when clicking a link
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle?.classList.remove('active');
      mobileNav?.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Update cart count on load
  updateCartCount();
}

// ==========================================
// PRODUCT CARD RENDERING
// ==========================================
function renderAllergens(allergens) {
  if (!allergens || allergens.length === 0) return '';
  
  return `
    <div class="allergens">
      ${allergens.map(a => `<span class="allergen-tag ${a}">${a}</span>`).join('')}
    </div>
  `;
}

function renderPizzaCard(pizza) {
  return `
    <div class="product-card-full" data-product-id="${pizza.id}">
      <div class="product-image">
        <img src="${pizza.image}" alt="${pizza.name}" loading="lazy">
        ${pizza.category === 'special' ? '<span class="product-badge">Chef\'s Special</span>' : ''}
      </div>
      <div class="product-info">
        <h3 class="product-name">${pizza.name}</h3>
        <p class="product-description">${pizza.description}</p>
        ${renderAllergens(pizza.allergens)}
        
        <div class="size-selector">
          <span class="size-selector-label">Select Size:</span>
          <div class="size-options">
            <div class="size-option selected" data-size="small" data-price="${pizza.baseSmall}">
              <span class="size-name">Small</span>
              <span class="size-price">£${pizza.baseSmall.toFixed(2)}</span>
            </div>
            <div class="size-option" data-size="medium" data-price="${pizza.baseMedium}">
              <span class="size-name">Medium</span>
              <span class="size-price">£${pizza.baseMedium.toFixed(2)}</span>
            </div>
            <div class="size-option" data-size="large" data-price="${pizza.baseLarge}">
              <span class="size-name">Large</span>
              <span class="size-price">£${pizza.baseLarge.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        <div class="extras-section">
          <span class="extras-title">Extras:</span>
          <div class="extras-list">
            ${PIZZA_EXTRAS.map(extra => `
              <label class="extra-item">
                <input type="checkbox" data-extra-id="${extra.id}" data-extra-price="${extra.price}">
                <span>${extra.name}</span>
                <span class="extra-price">+£${extra.price.toFixed(2)}</span>
              </label>
            `).join('')}
          </div>
        </div>
        
        <div class="product-footer">
          <span class="total-price" data-base-price="${pizza.baseSmall}">£${pizza.baseSmall.toFixed(2)}</span>
          <button class="btn btn-primary btn-sm add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
}

function renderBurgerCard(burger) {
  return `
    <div class="product-card-full" data-product-id="${burger.id}">
      <div class="product-image">
        <img src="${burger.image}" alt="${burger.name}" loading="lazy">
      </div>
      <div class="product-info">
        <h3 class="product-name">${burger.name}</h3>
        <p class="product-description">${burger.description}</p>
        ${renderAllergens(burger.allergens)}
        
        <div class="extras-section">
          <span class="extras-title">Add-ons:</span>
          <div class="extras-list">
            ${BURGER_ADDONS.map(addon => `
              <label class="extra-item">
                <input type="checkbox" data-extra-id="${addon.id}" data-extra-price="${addon.price}">
                <span>${addon.name}</span>
                <span class="extra-price">+£${addon.price.toFixed(2)}</span>
              </label>
            `).join('')}
          </div>
        </div>
        
        <div class="product-footer">
          <span class="total-price" data-base-price="${burger.price}">£${burger.price.toFixed(2)}</span>
          <button class="btn btn-primary btn-sm add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
}

function renderDrinkCard(drink) {
  return `
    <div class="product-card-full" data-product-id="${drink.id}">
      <div class="product-image">
        <img src="${drink.image}" alt="${drink.name}" loading="lazy">
      </div>
      <div class="product-info">
        <h3 class="product-name">${drink.name}</h3>
        <p class="product-description">${drink.description}</p>
        
        <div class="qty-input-group">
          <label>Quantity:</label>
          <div class="qty-input">
            <button type="button" class="qty-decrease">-</button>
            <span class="qty-value">1</span>
            <button type="button" class="qty-increase">+</button>
          </div>
        </div>
        
        <div class="product-footer">
          <span class="total-price" data-base-price="${drink.price}">£${drink.price.toFixed(2)}</span>
          <button class="btn btn-primary btn-sm add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
}

function renderPreviewCard(product, type) {
  const price = type === 'pizza' ? product.baseSmall : product.price;
  const priceLabel = type === 'pizza' ? 'from ' : '';
  
  return `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-info">
        <h4 class="product-name">${product.name}</h4>
        <p class="product-description">${product.description}</p>
        <div class="product-meta">
          <span class="product-price">
            <span class="product-price-from">${priceLabel}</span>
            £${price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  `;
}

// ==========================================
// PRODUCT PAGE FUNCTIONALITY
// ==========================================
function initProductCards() {
  // Size selector functionality
  document.querySelectorAll('.size-options').forEach(sizeContainer => {
    sizeContainer.querySelectorAll('.size-option').forEach(option => {
      option.addEventListener('click', () => {
        sizeContainer.querySelectorAll('.size-option').forEach(o => o.classList.remove('selected'));
        option.classList.add('selected');
        updateTotalPrice(option.closest('.product-card-full'));
      });
    });
  });
  
  // Extras checkbox functionality
  document.querySelectorAll('.extra-item input').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      updateTotalPrice(checkbox.closest('.product-card-full'));
    });
  });
  
  // Quantity controls for drinks
  document.querySelectorAll('.qty-input').forEach(qtyContainer => {
    const decreaseBtn = qtyContainer.querySelector('.qty-decrease');
    const increaseBtn = qtyContainer.querySelector('.qty-increase');
    const qtyValue = qtyContainer.querySelector('.qty-value');
    
    decreaseBtn?.addEventListener('click', () => {
      let val = parseInt(qtyValue.textContent);
      if (val > 1) {
        qtyValue.textContent = val - 1;
        updateTotalPrice(qtyContainer.closest('.product-card-full'));
      }
    });
    
    increaseBtn?.addEventListener('click', () => {
      let val = parseInt(qtyValue.textContent);
      qtyValue.textContent = val + 1;
      updateTotalPrice(qtyContainer.closest('.product-card-full'));
    });
  });
  
  // Add to cart buttons
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.product-card-full');
      handleAddToCart(card);
    });
  });
}

function updateTotalPrice(card) {
  const totalPriceEl = card.querySelector('.total-price');
  let basePrice = parseFloat(totalPriceEl.dataset.basePrice);
  
  // Check for size selection (pizzas)
  const selectedSize = card.querySelector('.size-option.selected');
  if (selectedSize) {
    basePrice = parseFloat(selectedSize.dataset.price);
    totalPriceEl.dataset.basePrice = basePrice;
  }
  
  // Add extras
  let extrasTotal = 0;
  card.querySelectorAll('.extra-item input:checked').forEach(checkbox => {
    extrasTotal += parseFloat(checkbox.dataset.extraPrice);
  });
  
  // Check for quantity (drinks)
  const qtyValue = card.querySelector('.qty-value');
  const quantity = qtyValue ? parseInt(qtyValue.textContent) : 1;
  
  const total = (basePrice + extrasTotal) * quantity;
  totalPriceEl.textContent = `£${total.toFixed(2)}`;
}

function handleAddToCart(card) {
  const productId = card.dataset.productId;
  
  // Find product data
  let product = PRODUCTS.pizzas.find(p => p.id === productId) ||
                PRODUCTS.burgers.find(p => p.id === productId) ||
                PRODUCTS.drinks.find(p => p.id === productId);
  
  if (!product) return;
  
  // Get selected options
  let size = null;
  let basePrice = product.price || product.baseSmall;
  const selectedSize = card.querySelector('.size-option.selected');
  
  if (selectedSize) {
    size = selectedSize.dataset.size;
    basePrice = parseFloat(selectedSize.dataset.price);
  }
  
  // Get extras
  const extras = [];
  let extrasTotal = 0;
  card.querySelectorAll('.extra-item input:checked').forEach(checkbox => {
    const extraId = checkbox.dataset.extraId;
    const extraPrice = parseFloat(checkbox.dataset.extraPrice);
    const extraName = checkbox.nextElementSibling.textContent;
    extras.push({ id: extraId, name: extraName, price: extraPrice });
    extrasTotal += extraPrice;
  });
  
  // Get quantity
  const qtyValue = card.querySelector('.qty-value');
  const quantity = qtyValue ? parseInt(qtyValue.textContent) : 1;
  
  // Create cart item
  const cartItem = {
    id: productId,
    name: product.name,
    image: product.image,
    size: size,
    extras: extras,
    basePrice: basePrice,
    totalPrice: basePrice + extrasTotal,
    quantity: quantity
  };
  
  addToCart(cartItem);
  
  // Reset form
  if (qtyValue) qtyValue.textContent = '1';
  card.querySelectorAll('.extra-item input').forEach(cb => cb.checked = false);
  updateTotalPrice(card);
}

// ==========================================
// FILTER TABS
// ==========================================
function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  const productsGrid = document.querySelector('.products-grid');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const filter = tab.dataset.filter;
      filterProducts(filter);
    });
  });
}

function filterProducts(filter) {
  const cards = document.querySelectorAll('.products-grid .product-card-full');
  
  cards.forEach(card => {
    const category = card.dataset.category;
    
    if (filter === 'all' || category === filter) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// ==========================================
// CHECKOUT PAGE
// ==========================================
function initCheckout() {
  if (!document.querySelector('.checkout-page')) return;
  
  renderCart();
  initCouponInput();
  initPaymentOptions();
  initFormValidation();
  updateDeliveryTimeDisplay();
}

function renderCart() {
  const cartItemsContainer = document.querySelector('.cart-items');
  const cartEmptyMessage = document.querySelector('.cart-empty');
  const cartSummary = document.querySelector('.cart-summary');
  const whatsappBtn = document.querySelector('.whatsapp-btn');
  
  if (!cartItemsContainer) return;
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '';
    if (cartEmptyMessage) cartEmptyMessage.style.display = 'block';
    if (cartSummary) cartSummary.style.display = 'none';
    if (whatsappBtn) whatsappBtn.disabled = true;
    return;
  }
  
  if (cartEmptyMessage) cartEmptyMessage.style.display = 'none';
  if (cartSummary) cartSummary.style.display = 'block';
  if (whatsappBtn) whatsappBtn.disabled = false;
  
  cartItemsContainer.innerHTML = cart.map((item, index) => `
    <div class="cart-item" data-index="${index}">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-details">
        <span class="cart-item-name">${item.name}</span>
        <span class="cart-item-options">
          ${item.size ? `Size: ${item.size}` : ''}
          ${item.extras && item.extras.length > 0 ? `<br>Extras: ${item.extras.map(e => e.name).join(', ')}` : ''}
        </span>
        <div class="cart-item-actions">
          <div class="qty-controls">
            <button class="qty-btn" onclick="updateCartItemQty(${index}, -1)">-</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartItemQty(${index}, 1)">+</button>
          </div>
          <span class="cart-item-price">£${(item.totalPrice * item.quantity).toFixed(2)}</span>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${index})">Remove</button>
      </div>
    </div>
  `).join('');
  
  updateCartSummary();
}

function updateCartSummary() {
  const postcodeInput = document.querySelector('#postcode');
  const postcode = postcodeInput ? postcodeInput.value : '';
  
  const subtotal = calculateSubtotal();
  const discount = calculateDiscount(subtotal);
  let deliveryFee = getDeliveryFee(postcode);
  
  if (isFreeshipping()) {
    deliveryFee = 0;
  }
  
  const total = subtotal - discount + deliveryFee;
  
  const subtotalEl = document.querySelector('.summary-subtotal');
  const deliveryEl = document.querySelector('.summary-delivery');
  const discountRow = document.querySelector('.summary-discount-row');
  const discountEl = document.querySelector('.summary-discount');
  const totalEl = document.querySelector('.summary-total');
  
  if (subtotalEl) subtotalEl.textContent = `£${subtotal.toFixed(2)}`;
  if (deliveryEl) deliveryEl.textContent = `£${deliveryFee.toFixed(2)}`;
  
  if (discountRow && discountEl) {
    if (discount > 0 || isFreeshipping()) {
      discountRow.style.display = 'flex';
      if (isFreeshipping()) {
        discountEl.textContent = 'Free Delivery';
      } else {
        discountEl.textContent = `-£${discount.toFixed(2)}`;
      }
    } else {
      discountRow.style.display = 'none';
    }
  }
  
  if (totalEl) totalEl.textContent = `£${total.toFixed(2)}`;
}

function initCouponInput() {
  const couponInput = document.querySelector('#coupon-input');
  const couponBtn = document.querySelector('#apply-coupon');
  const couponMessage = document.querySelector('.coupon-message');
  
  if (!couponBtn) return;
  
  // Show existing coupon
  if (appliedCoupon && couponInput) {
    couponInput.value = appliedCoupon;
    if (couponMessage) {
      couponMessage.textContent = `Coupon ${appliedCoupon} applied!`;
      couponMessage.className = 'coupon-message success';
    }
  }
  
  couponBtn.addEventListener('click', () => {
    const code = couponInput.value.toUpperCase().trim();
    
    if (COUPONS[code]) {
      appliedCoupon = code;
      saveCoupon();
      couponMessage.textContent = `Coupon ${code} applied!`;
      couponMessage.className = 'coupon-message success';
      updateCartSummary();
    } else {
      couponMessage.textContent = 'Invalid coupon code';
      couponMessage.className = 'coupon-message error';
    }
  });
}

function initPaymentOptions() {
  const paymentOptions = document.querySelectorAll('.payment-option');
  const changeInput = document.querySelector('.change-input');
  
  paymentOptions.forEach(option => {
    option.addEventListener('click', () => {
      paymentOptions.forEach(o => o.classList.remove('selected'));
      option.classList.add('selected');
      
      // Show/hide change input for cash
      if (changeInput) {
        changeInput.style.display = option.dataset.method === 'cash' ? 'block' : 'none';
      }
    });
  });
  
  // Select first option by default
  if (paymentOptions.length > 0) {
    paymentOptions[0].click();
  }
}

function initFormValidation() {
  const postcodeInput = document.querySelector('#postcode');
  
  // Update delivery fee when postcode changes
  postcodeInput?.addEventListener('input', () => {
    updateCartSummary();
  });
}

function updateDeliveryTimeDisplay() {
  const deliveryTimeEl = document.querySelector('.delivery-time');
  if (deliveryTimeEl) {
    deliveryTimeEl.textContent = getEstimatedDeliveryTime();
  }
}

function validateForm() {
  const form = document.querySelector('.checkout-form');
  const requiredFields = form.querySelectorAll('[required]');
  let isValid = true;
  
  requiredFields.forEach(field => {
    const errorEl = field.parentElement.querySelector('.form-error');
    
    if (!field.value.trim()) {
      field.classList.add('error');
      if (errorEl) errorEl.textContent = 'This field is required';
      isValid = false;
    } else {
      field.classList.remove('error');
      if (errorEl) errorEl.textContent = '';
    }
  });
  
  // Phone validation
  const phoneInput = document.querySelector('#phone');
  if (phoneInput && phoneInput.value) {
    const phoneRegex = /^[0-9+\-\s()]{10,}$/;
    if (!phoneRegex.test(phoneInput.value)) {
      phoneInput.classList.add('error');
      const errorEl = phoneInput.parentElement.querySelector('.form-error');
      if (errorEl) errorEl.textContent = 'Please enter a valid phone number';
      isValid = false;
    }
  }
  
  return isValid;
}

function generateWhatsAppMessage() {
  const name = document.querySelector('#fullname')?.value || '';
  const phone = document.querySelector('#phone')?.value || '';
  const address = document.querySelector('#address')?.value || '';
  const postcode = document.querySelector('#postcode')?.value || '';
  const notes = document.querySelector('#notes')?.value || '';
  const paymentMethod = document.querySelector('.payment-option.selected')?.dataset.method || 'card';
  const changeFor = document.querySelector('#change-for')?.value || '';
  
  const subtotal = calculateSubtotal();
  const discount = calculateDiscount(subtotal);
  let deliveryFee = getDeliveryFee(postcode);
  if (isFreeshipping()) deliveryFee = 0;
  const total = subtotal - discount + deliveryFee;
  const deliveryTime = getEstimatedDeliveryTime();
  
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB');
  const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  
  let message = `*LOMBARDIA DELIVERY*\n`;
  message += `📅 ${dateStr} at ${timeStr}\n\n`;
  message += `*ORDER DETAILS:*\n`;
  message += `━━━━━━━━━━━━━━━━━━━\n`;
  
  cart.forEach((item, i) => {
    message += `${i + 1}. *${item.name}*`;
    if (item.size) message += ` (${item.size})`;
    message += ` x${item.quantity}\n`;
    if (item.extras && item.extras.length > 0) {
      message += `   + ${item.extras.map(e => e.name).join(', ')}\n`;
    }
    message += `   £${(item.totalPrice * item.quantity).toFixed(2)}\n`;
  });
  
  message += `━━━━━━━━━━━━━━━━━━━\n`;
  message += `Subtotal: £${subtotal.toFixed(2)}\n`;
  if (discount > 0) {
    message += `Discount (${appliedCoupon}): -£${discount.toFixed(2)}\n`;
  }
  message += `Delivery: £${deliveryFee.toFixed(2)}`;
  if (isFreeshipping()) message += ` (FREE)`;
  message += `\n`;
  message += `*TOTAL: £${total.toFixed(2)}*\n\n`;
  
  message += `*CUSTOMER DETAILS:*\n`;
  message += `👤 ${name}\n`;
  message += `📞 ${phone}\n`;
  message += `📍 ${address}, ${postcode}\n`;
  if (notes) message += `📝 Notes: ${notes}\n`;
  message += `\n`;
  
  message += `*PAYMENT:* ${paymentMethod === 'cash' ? '💵 Cash' : '💳 Card'}\n`;
  if (paymentMethod === 'cash' && changeFor) {
    message += `Need change for: £${changeFor}\n`;
  }
  
  message += `\n⏱️ *Estimated delivery: ${deliveryTime}*`;
  
  return encodeURIComponent(message);
}

function handleWhatsAppOrder() {
  if (cart.length === 0) {
    showToast('Your cart is empty!', 'error');
    return;
  }
  
  if (!validateForm()) {
    showToast('Please fill in all required fields', 'error');
    return;
  }
  
  const message = generateWhatsAppMessage();
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  
  // Open WhatsApp
  window.open(whatsappUrl, '_blank');
  
  // Clear cart after order
  // Uncomment the lines below if you want to clear cart after ordering
  // cart = [];
  // appliedCoupon = null;
  // saveCart();
  // saveCoupon();
}

// ==========================================
// HOME PAGE - RENDER PREVIEWS
// ==========================================
function initHomePage() {
  // Render pizza previews
  const pizzaPreview = document.querySelector('#pizza-preview');
  if (pizzaPreview) {
    pizzaPreview.innerHTML = PRODUCTS.pizzas.slice(0, 3).map(p => renderPreviewCard(p, 'pizza')).join('');
  }
  
  // Render burger previews
  const burgerPreview = document.querySelector('#burger-preview');
  if (burgerPreview) {
    burgerPreview.innerHTML = PRODUCTS.burgers.slice(0, 3).map(p => renderPreviewCard(p, 'burger')).join('');
  }
  
  // Render drink previews
  const drinkPreview = document.querySelector('#drink-preview');
  if (drinkPreview) {
    drinkPreview.innerHTML = PRODUCTS.drinks.slice(0, 3).map(p => renderPreviewCard(p, 'drink')).join('');
  }
  
  // Update delivery time
  const deliveryTimeEl = document.querySelector('.delivery-time');
  if (deliveryTimeEl) {
    deliveryTimeEl.textContent = getEstimatedDeliveryTime();
  }
  
  // Render featured item
  const featuredContainer = document.querySelector('#featured-item');
  if (featuredContainer) {
    const featured = PRODUCTS.pizzas.find(p => p.category === 'special') || PRODUCTS.pizzas[0];
    featuredContainer.innerHTML = `
      <div class="featured-image">
        <img src="${featured.image}" alt="${featured.name}">
      </div>
      <div class="featured-content">
        <span class="featured-badge">⭐ Chef's Choice</span>
        <h3>${featured.name}</h3>
        <p>${featured.description}</p>
        <span class="featured-price">from £${featured.baseSmall.toFixed(2)}</span>
        <a href="pizzas.html" class="btn btn-primary">Order Now</a>
      </div>
    `;
  }
}

// ==========================================
// PIZZAS PAGE
// ==========================================
function initPizzasPage() {
  const productsGrid = document.querySelector('.products-grid');
  if (!productsGrid) return;
  
  // Render all pizzas with category data
  productsGrid.innerHTML = PRODUCTS.pizzas.map(pizza => {
    const cardHtml = renderPizzaCard(pizza);
    // Add category data attribute
    return cardHtml.replace('data-product-id=', `data-category="${pizza.category}" data-product-id=`);
  }).join('');
  
  initProductCards();
  initFilterTabs();
}

// ==========================================
// BURGERS PAGE
// ==========================================
function initBurgersPage() {
  const productsGrid = document.querySelector('.products-grid');
  if (!productsGrid) return;
  
  productsGrid.innerHTML = PRODUCTS.burgers.map(burger => renderBurgerCard(burger)).join('');
  
  initProductCards();
}

// ==========================================
// DRINKS PAGE
// ==========================================
function initDrinksPage() {
  const productsGrid = document.querySelector('.products-grid');
  if (!productsGrid) return;
  
  // Render all drinks with category data
  productsGrid.innerHTML = PRODUCTS.drinks.map(drink => {
    const cardHtml = renderDrinkCard(drink);
    return cardHtml.replace('data-product-id=', `data-category="${drink.category}" data-product-id=`);
  }).join('');
  
  initProductCards();
  initFilterTabs();
}

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  
  // Page-specific initialization
  const path = window.location.pathname;
  
  if (path.includes('pizzas.html')) {
    initPizzasPage();
  } else if (path.includes('burgers.html')) {
    initBurgersPage();
  } else if (path.includes('drinks.html')) {
    initDrinksPage();
  } else if (path.includes('checkout.html')) {
    initCheckout();
  } else {
    // Home page
    initHomePage();
  }
});

// Make functions globally available for onclick handlers
window.updateCartItemQty = updateCartItemQty;
window.removeFromCart = removeFromCart;
window.handleWhatsAppOrder = handleWhatsAppOrder;