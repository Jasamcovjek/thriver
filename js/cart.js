// ===== NOVI PODACI ZA PROIZVODE =====
const PRODUCTS = [
    {
        id: 'shaker-promixx',
        name: "Optimum Nutrition Promixx Pro Electric Shaker - 600ml",
        price: 69.99,
        oldPrice: 99.99,
        badge: 'SALE',
        bestSellerText: 'USB-C Rechargeable • Halo Drop-Protection',
        rating: '★★★★★',
        sold: '20',
        img: 'https://www.optimumnutrition.com/cdn/shop/files/on-electric-shaker_4e69d119-255f-436c-92ea-1a7f3a9efdd8.png?v=1757578979&width=2471',
        thumbs: [
            { img: 'https://www.optimumnutrition.com/cdn/shop/files/on-electric-shaker_4e69d119-255f-436c-92ea-1a7f3a9efdd8.png?v=1757578979&width=2471', label: '600ML' }
        ]
        // Ovaj proizvod nema sizes/colors jer je shaker
    },
    {
    id: 'lumbar-01',
    name: '4-Speed Adjustable Lumbar Support Device',
    price: 26.47,
    oldPrice: 91.34,
    badge: '71% OFF',
    bestSellerText: '#2 TOP RATED in Fitness',
    rating: '★★★★★',
    sold: '42',
    img: 'https://img.kwcdn.com/product/open/3501b65ea5c149c8aacaa802f98a0629-goods.jpeg?imageView2/2/w/1300/q/90/format/avif%7CimageVqr/2',
    thumbs: [
        {
            img: 'https://img.kwcdn.com/product/open/3501b65ea5c149c8aacaa802f98a0629-goods.jpeg?imageView2/2/w/1300/q/90/format/avif%7CimageVqr/2',
            label: 'BEST SELLER'
        }
    ],
    colors: ['White/Cyan']
    },
    {
        id: 'gloves-02',
        name: 'GOUNOD Weightlifting Gloves',
        price: 30.01,
        oldPrice: 70.12,
        badge: '69% OFF',
        bestSellerText: '#5 TOP RATED in Fitness',
        rating: '★★★★★',
        sold: '53',
        img: 'https://img.kwcdn.com/product/fancy/443308ff-3a22-4422-b6dc-afe2a1a7a2d7.jpg?imageView2/2/w/1300/q/90/format/avif%7CimageVqr/2',
        thumbs: [
            {
                img: 'https://img.kwcdn.com/product/fancy/443308ff-3a22-4422-b6dc-afe2a1a7a2d7.jpg?imageView2/2/w/1300/q/90/format/avif%7CimageVqr/2',
                label: 'TOP RATED'
            }
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black', 'Pink', 'Blue']
    },
    {
        id: 'jumprope-01',
        name: 'Fitness Jump Rope',
        price: 14.99,
        oldPrice: 29.99,
        badge: 'BEST SELLER',
        bestSellerText: '#36 BEST-SELLING ITEM',
        rating: '★★★★☆',
        sold: '26',
        img: 'https://img.kwcdn.com/product/fancy/85965606-bbcc-46df-980f-8595ec9648c8.jpg?imageView2/2/w/1300/q/90/format/avif%7CimageVqr/2',
        thumbs: [
            {
                img: 'https://img.kwcdn.com/product/fancy/85965606-bbcc-46df-980f-8595ec9648c8.jpg?imageView2/2/w/1300/q/90/format/avif%7CimageVqr/2',
                label: 'CARDIO'
            }
        ],
        colors: ['Black']
    },
];

// ===== RENDER FUNKCIJA =====
function renderProducts() {
    const grid = document.getElementById('productGrid');

    grid.innerHTML = PRODUCTS.map(p => `
        <div class="product-card">
            <div class="product-img-wrapper">
                <img src="${p.img}" class="main-img" alt="${p.name}" onerror="this.style.display='none'">
                
                <div class="side-thumbs">
                    ${p.thumbs ? p.thumbs.map(t => `
                        <div class="thumb-item">
                            <img src="${t.img}" alt="${t.label}">
                            <span>${t.label}</span>
                        </div>
                    `).join('') : ''}
                </div>

                <button class="quick-look">
                    <i class="fas fa-eye"></i> Quick look
                </button>
            </div>

            <div class="product-info-new">
                <div class="deal-row">
                    ${p.badge ? `<span class="deal-badge">⚡ ${p.badge}</span>` : ''}
                    <span class="prod-title">${p.name}</span>
                </div>

                <div class="variants-container" style="display: flex; gap: 10px; margin-top: 8px;">
                    ${p.sizes ? `
                        <select class="variant-select" id="size-${p.id}" style="padding: 6px; border-radius: 4px; background: #222; color: #fff; border: 1px solid #444; font-size: 12px; flex: 1;">
                            ${p.sizes.map(s => `<option value="${s}">Size: ${s}</option>`).join('')}
                        </select>
                    ` : ''}
                    
                    ${p.colors ? `
                        <select class="variant-select" id="color-${p.id}" style="padding: 6px; border-radius: 4px; background: #222; color: #fff; border: 1px solid #444; font-size: 12px; flex: 1;">
                            ${p.colors.map(c => `<option value="${c}">${c}</option>`).join('')}
                        </select>
                    ` : ''}
                </div>
                
                <div class="price-action-row" style="margin-top: 15px;">
                    <div class="price-block">
                        <span class="old-price">€${p.oldPrice ? p.oldPrice.toFixed(2) : ''}</span>
                        <span class="deal-text">Last day</span>
                        <span class="current-price">€${p.price.toFixed(2)}</span>
                    </div>
                    <button class="add-cart-circle add-btn" data-id="${p.id}">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>

                ${p.bestSellerText ? `<div class="best-seller">${p.bestSellerText}</div>` : ''}
                
                <div class="rating-sold">
                    <span class="stars">${p.rating}</span>
                    <span class="sold"><span class="fire-icon">🔥</span>${p.sold} sold</span>
                </div>
            </div>
        </div>
    `).join('');

    // Re-attach event listenere
    grid.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', () => addToCart(btn.dataset.id));
    });
}

// ===== KORPA LOGIKA =====
const ORDER_ENDPOINT = '/api/order';
const CART_KEY = 'thriversports_cart';
let cart = JSON.parse(localStorage.getItem(CART_KEY) || '[]');

function saveCart(){
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    renderCart();
}

function findProduct(id){
    return PRODUCTS.find(p => p.id === id);
}

function addToCart(id){
    const p = findProduct(id);
    
    // Čitanje odabranih vrijednosti iz padajućih menija (ako postoje)
    let selectedSize = null;
    let selectedColor = null;

    if (p.sizes) {
        const sizeSelect = document.getElementById(`size-${id}`);
        selectedSize = sizeSelect ? sizeSelect.value : p.sizes[0];
    }
    if (p.colors) {
        const colorSelect = document.getElementById(`color-${id}`);
        selectedColor = colorSelect ? colorSelect.value : p.colors[0];
    }

    // Kreiranje unikatnog ID-a za stavku u korpi (npr. "pants-02-XL-Black")
    const cartItemId = `${id}${selectedSize ? '-' + selectedSize : ''}${selectedColor ? '-' + selectedColor : ''}`;

    // Provjera da li taj TAČAN item već postoji u korpi
    const existing = cart.find(i => i.cartItemId === cartItemId);
    
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ 
            cartItemId: cartItemId, 
            id: id, 
            size: selectedSize, 
            color: selectedColor, 
            qty: 1 
        });
    }
    
    saveCart();
    openCart();
}

// Ovdje sada koristimo cartItemId umjesto običnog id-a
function changeQty(cartItemId, delta){
    const item = cart.find(i => i.cartItemId === cartItemId);
    if (!item) return;

    item.qty += delta;

    if (item.qty <= 0){
        cart = cart.filter(i => i.cartItemId !== cartItemId);
    }

    saveCart();
}

// Ovdje sada koristimo cartItemId
function removeItem(cartItemId){
    cart = cart.filter(i => i.cartItemId !== cartItemId);
    saveCart();
}

function cartTotal(){
    return cart.reduce((sum, i) => {
        const p = findProduct(i.id);
        return sum + (p ? p.price * i.qty : 0);
    }, 0);
}

function renderCart(){
    const wrap = document.getElementById('cartItems');
    document.getElementById('cartCount').textContent = cart.reduce((n, i) => n + i.qty, 0);
    document.getElementById('cartTotal').textContent = cartTotal().toFixed(2) + ' €';

    if (cart.length === 0){
        wrap.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
        return;
    }

    wrap.innerHTML = cart.map(i => {
        const p = findProduct(i.id);
        if (!p) return '';

        // Prikazujemo odabranu veličinu i boju ako postoje
        let variantHtml = '';
        if (i.size || i.color) {
            variantHtml = `<div style="font-size: 12px; color: #aaa; margin-bottom: 5px;">
                ${i.size ? `Size: <b>${i.size}</b> ` : ''} 
                ${i.color ? `| Color: <b>${i.color}</b>` : ''}
            </div>`;
        }

        return `
        <div class="cart-item">
            <img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'">
            <div class="cart-item-info">
                <h4 style="margin-bottom: 2px;">${p.name}</h4>
                ${variantHtml}
                <p>${p.price.toFixed(2)} €</p>

                <div class="qty-controls">
                    <button data-cart-item-id="${i.cartItemId}" data-delta="-1">−</button>
                    <span>${i.qty}</span>
                    <button data-cart-item-id="${i.cartItemId}" data-delta="1">+</button>
                    <button class="remove-item" data-cart-item-id="${i.cartItemId}">Remove</button>
                </div>
            </div>
        </div>`;
    }).join('');

    // Listeneri se sada kače na cartItemId
    wrap.querySelectorAll('.qty-controls button:not(.remove-item)').forEach(btn => {
        btn.addEventListener('click', () => changeQty(btn.dataset.cartItemId, Number(btn.dataset.delta)));
    });

    wrap.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', () => removeItem(btn.dataset.cartItemId));
    });
}

// ===== Cart drawer open/close =====
function openCart(){
    document.getElementById('cartDrawer').classList.add('active');
    document.getElementById('cartOverlay').classList.add('active');
}

function closeCartDrawer(){
    document.getElementById('cartDrawer').classList.remove('active');
    document.getElementById('cartOverlay').classList.remove('active');
}

function openCheckout(){
    if (cart.length === 0) return;
    closeCartDrawer();
    document.getElementById('checkoutModal').classList.add('active');
}

function closeCheckoutModal(){
    document.getElementById('checkoutModal').classList.remove('active');
}

// ===== CHECKOUT / DISCORD PAYLOAD =====
async function submitOrder(e){
    e.preventDefault();

    const form = e.target;
    const status = document.getElementById('formStatus');
    const data = Object.fromEntries(new FormData(form).entries());

    const payload = {
        customer: data,
        items: cart.map(i => {
            const p = findProduct(i.id);
            
            // Formatiramo ime tako da na Discordu piše npr: "Joggers (Size: XL, Color: Black)"
            let variantText = [];
            if (i.size) variantText.push(`Size: ${i.size}`);
            if (i.color) variantText.push(`Color: ${i.color}`);
            const finalName = variantText.length > 0 
                ? `${p?.name} (${variantText.join(', ')})`
                : p?.name;

            return {
                id: i.cartItemId, // Šaljemo unikatan ID
                name: finalName,
                qty: i.qty,
                price: p?.price
            };
        }),
        total: cartTotal()
    };

    status.textContent = 'Submitting your order...';
    status.className = 'form-status';

    try{
        const res = await fetch(ORDER_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!res.ok) throw new Error('Server error');

        status.textContent = 'Order received successfully! We will contact you shortly.';
        status.className = 'form-status ok';

        cart = [];
        saveCart();
        form.reset();
        setTimeout(closeCheckoutModal, 1800);

    } catch(err) {
        status.textContent = 'Something went wrong. Please try again or contact us directly.';
        status.className = 'form-status err';
    }
}

// ===== Wire everything up =====
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCart();

    document.getElementById('cartToggle').addEventListener('click', e => {
        e.preventDefault();
        openCart();
    });
    document.getElementById('closeCart').addEventListener('click', closeCartDrawer);
    document.getElementById('cartOverlay').addEventListener('click', closeCartDrawer);
    document.getElementById('checkoutBtn').addEventListener('click', openCheckout);
    document.getElementById('closeCheckout').addEventListener('click', closeCheckoutModal);
    document.getElementById('checkoutForm').addEventListener('submit', submitOrder);
});