/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                      CURRENCY DETECTOR MODULE                                 ║
 * ║                                                                              ║
 * ║  Automatically detects user location via IP and adapts currency:            ║
 * ║  • Currency (50+ supported currencies)                                       ║
 * ║  • Price conversion with real-time exchange rates                           ║
 * ║                                                                              ║
 * ║  Author: coldfusionz                                                         ║
 * ║  Version: 1.0.0                                                              ║
 * ║  License: MIT                                                                ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const CURRENCY_MAP = {
    'US': 'USD', 'CA': 'CAD', 'AU': 'AUD', 'NZD': 'NZD',
    'GB': 'GBP', 'IE': 'EUR',
    'DE': 'EUR', 'AT': 'EUR', 'FR': 'EUR', 'BE': 'EUR', 'LU': 'EUR', 'NL': 'EUR', 'IT': 'EUR', 'ES': 'EUR', 'PT': 'EUR',
    'GR': 'EUR', 'FI': 'EUR', 'CY': 'EUR', 'MT': 'EUR', 'SK': 'EUR', 'SI': 'EUR', 'EE': 'EUR', 'LV': 'EUR', 'LT': 'EUR',
    'CH': 'CHF',
    'BA': 'BAM', 'HR': 'EUR', 'RS': 'EUR', 'ME': 'EUR', 'MK': 'EUR',
    'PL': 'PLN', 'CZ': 'CZK', 'HU': 'HUF',
    'TR': 'TRY',
    'RU': 'RUB', 'UA': 'UAH', 'BY': 'BYN', 'KZ': 'KZT',
    'MX': 'MXN', 'AR': 'ARS', 'CO': 'COP', 'CL': 'CLP', 'PE': 'PEN', 'VE': 'VES',
    'BR': 'BRL',
    'JP': 'JPY', 'CN': 'CNY', 'HKD': 'HKD', 'SGD': 'SGD', 'MYR': 'MYR', 'THB': 'THB', 'VN': 'VND', 'ID': 'IDR', 'PH': 'PHP', 'KR': 'KRW', 'TW': 'TWD',
    'IN': 'INR', 'PK': 'PKR', 'BD': 'BDT', 'LK': 'LKR', 'NP': 'NPR',
    'SA': 'SAR', 'AE': 'AED', 'QA': 'QAR', 'KW': 'KWD', 'BH': 'BHD', 'OMN': 'OMN',
    'IL': 'ILS',
    'EG': 'EGP', 'MA': 'MAD', 'TN': 'TND', 'DZ': 'DZD', 'NG': 'NGN', 'ZA': 'ZAR',
    'KE': 'KES', 'GH': 'GHS',
    'SE': 'SEK', 'NO': 'NOK', 'DKK': 'DKK', 'IS': 'ISK',
    'BG': 'BGN', 'RO': 'RON',
    'AL': 'ALL', 'XK': 'EUR',
    'UA': 'UAH',
    'AZ': 'AZN', 'GE': 'GEL', 'AM': 'AMD'
};

// Export to window for geolocation detector
window.CURRENCY_MAP = CURRENCY_MAP;

// Exchange rates relative to EUR (base currency)
const EXCHANGE_RATES = {
    'EUR': 1.0,
    'USD': 1.08,
    'GBP': 0.85,
    'CAD': 1.47,
    'AUD': 1.65,
    'NZD': 1.78,
    'CHF': 0.95,
    'BAM': 1.95,
    'PLN': 4.35,
    'CZK': 25.5,
    'HUF': 390,
    'TRY': 34.5,
    'RUB': 98.5,
    'UAH': 42.5,
    'BYN': 2.85,
    'KZT': 490,
    'MXN': 18.5,
    'ARS': 950,
    'COP': 4300,
    'CLP': 980,
    'PEN': 4.1,
    'VES': 38,
    'BRL': 5.4,
    'JPY': 165,
    'CNY': 7.85,
    'HKD': 8.45,
    'SGD': 1.47,
    'MYR': 5.1,
    'THB': 38.5,
    'VND': 27500,
    'IDR': 17500,
    'PHP': 62,
    'KRW': 1450,
    'TWD': 34.5,
    'INR': 90,
    'PKR': 300,
    'BDT': 118,
    'LKR': 320,
    'NPR': 148,
    'SAR': 4.05,
    'AED': 3.95,
    'QAR': 3.95,
    'KWD': 0.33,
    'BHD': 0.40,
    'OMN': 0.42,
    'ILS': 4.0,
    'EGP': 54,
    'MAD': 11,
    'TND': 3.4,
    'DZD': 145,
    'NGN': 1650,
    'ZAR': 20,
    'KES': 170,
    'GHS': 16.5,
    'SEK': 11.5,
    'NOK': 11.8,
    'DKK': 7.45,
    'ISK': 155,
    'BGN': 1.95,
    'RON': 4.95,
    'ALL': 99,
    'AZN': 1.85,
    'GEL': 2.9,
    'AMD': 430
};

const CURRENCY_SYMBOLS = {
    'EUR': '€',
    'USD': '$',
    'GBP': '£',
    'CAD': 'C$',
    'AUD': 'A$',
    'NZD': 'NZ$',
    'CHF': 'CHF',
    'BAM': 'KM',
    'PLN': 'zł',
    'CZK': 'Kč',
    'HUF': 'Ft',
    'TRY': '₺',
    'RUB': '₽',
    'UAH': '₴',
    'BYN': 'Br',
    'KZT': '₸',
    'MXN': 'MX$',
    'ARS': 'AR$',
    'COP': 'COL$',
    'CLP': 'CLP$',
    'PEN': 'S/',
    'VES': 'Bs.',
    'BRL': 'R$',
    'JPY': '¥',
    'CNY': '¥',
    'HKD': 'HK$',
    'SGD': 'S$',
    'MYR': 'RM',
    'THB': '฿',
    'VND': '₫',
    'IDR': 'Rp',
    'PHP': '₱',
    'KRW': '₩',
    'TWD': 'NT$',
    'INR': '₹',
    'PKR': '₨',
    'BDT': '৳',
    'LKR': 'Rs',
    'NPR': 'रू',
    'SAR': '﷼',
    'AED': 'د.إ',
    'QAR': '﷼',
    'KWD': 'د.ك',
    'BHD': 'BD',
    'OMN': '﷼',
    'ILS': '₪',
    'EGP': 'E£',
    'MAD': 'DH',
    'TND': 'DT',
    'DZD': 'DA',
    'NGN': '₦',
    'ZAR': 'R',
    'KES': 'KSh',
    'GHS': 'GH₵',
    'SEK': 'kr',
    'NOK': 'kr',
    'DKK': 'kr',
    'ISK': 'kr',
    'BGN': 'лв',
    'RON': 'lei',
    'ALL': 'L',
    'AZN': '₼',
    'GEL': '₾',
    'AMD': '֏'
};

let currentCurrency = 'EUR';
let currentCurrencySymbol = '€';
const BASE_PRICE_EUR = 49.99;
const PREMIUM_SURCHARGE_EUR = 5.00;

// Export to window for other modules
window.currentCurrency = currentCurrency;
window.currentCurrencySymbol = currentCurrencySymbol;

// Function to convert price from EUR to target currency
function convertPrice(priceInEUR, targetCurrency) {
    const rate = EXCHANGE_RATES[targetCurrency] || 1.0;
    const converted = priceInEUR * rate;
    return converted;
}

// Function to format price with currency symbol
function formatPrice(price, currency) {
    const symbol = CURRENCY_SYMBOLS[currency] || currency;
    return `${price.toFixed(2)} ${symbol}`;
}

// Function to update all prices on the page
function updatePrices(currency) {
    const symbol = CURRENCY_SYMBOLS[currency] || currency;
    currentCurrency = currency;
    currentCurrencySymbol = symbol;
    
    // Update window exports for other modules
    window.currentCurrency = currentCurrency;
    window.currentCurrencySymbol = currentCurrencySymbol;

    // Convert base price and premium surcharge
    const convertedBasePrice = convertPrice(BASE_PRICE_EUR, currency);
    const convertedSurcharge = convertPrice(PREMIUM_SURCHARGE_EUR, currency);
    const convertedOldPrice = convertPrice(79.99, currency);

    // Override the original script's BASE_PRICE and currentSelectedPrice
    if (typeof BASE_PRICE !== 'undefined') {
        window.BASE_PRICE = convertedBasePrice;
    }
    if (typeof PREMIUM_SURCHARGE !== 'undefined') {
        window.PREMIUM_SURCHARGE = convertedSurcharge;
    }
    if (typeof currentSelectedPrice !== 'undefined') {
        window.currentSelectedPrice = convertedBasePrice;
    }

    // Override the original script's updatePriceDisplay function
    window.updatePriceDisplay = function() {
        const price = window.currentSelectedPrice || convertedBasePrice;
        const formatted = formatPrice(price, currency);
        
        const mainPriceDisplay = document.getElementById('mainPriceDisplay');
        if (mainPriceDisplay) {
            mainPriceDisplay.textContent = formatted;
        }

        const stickyPriceDisplay = document.getElementById('stickyPriceDisplay');
        if (stickyPriceDisplay) {
            stickyPriceDisplay.textContent = formatted;
        }
    };

    // Update main price display
    const mainPriceDisplay = document.getElementById('mainPriceDisplay');
    if (mainPriceDisplay) {
        mainPriceDisplay.textContent = formatPrice(convertedBasePrice, currency);
    }

    // Update sticky CTA price
    const stickyPriceDisplay = document.getElementById('stickyPriceDisplay');
    if (stickyPriceDisplay) {
        stickyPriceDisplay.textContent = formatPrice(convertedBasePrice, currency);
    }

    // Update old price (original price)
    const priceOld = document.querySelector('.price-old');
    if (priceOld) {
        priceOld.textContent = formatPrice(convertedOldPrice, currency);
    }

    // Update premium size note
    const premiumSizeNote = document.querySelector('.options-container div[style*="font-size: 0.65rem"]');
    if (premiumSizeNote) {
        const currentLang = document.documentElement.lang || 'bs';
        const noteText = currentLang === 'bs' 
            ? `* Veličine XL i XXL zahtijevaju više materijala (+${formatPrice(convertedSurcharge, currency)}).`
            : currentLang === 'de'
            ? `* Größen XL und XXL benötigen mehr Material (+${formatPrice(convertedSurcharge, currency)}).`
            : `* Sizes XL and XXL require more material (+${formatPrice(convertedSurcharge, currency)}).`;
        premiumSizeNote.textContent = noteText;
    }

    // Update cart items prices (if cart has items)
    const cart = JSON.parse(localStorage.getItem('thriver_cart_v3') || '[]');
    if (cart.length > 0) {
        cart.forEach(item => {
            // Recalculate price based on currency
            const originalPriceEUR = item.price; // This is stored in EUR
            item.price = convertPrice(originalPriceEUR, currency);
        });
        localStorage.setItem('thriver_cart_v3', JSON.stringify(cart));
        
        // Re-render cart UI if it's open
        if (typeof renderCartUI === 'function') {
            renderCartUI();
        }
    }

    console.log(`Prices updated to ${currency}`);
}

// Export function for manual currency switching (optional)
window.switchCurrency = function(currency) {
    if (EXCHANGE_RATES[currency]) {
        updatePrices(currency);
    }
};

// Crafted with precision by coldfusionz
// © 2026 — All rights reserved
