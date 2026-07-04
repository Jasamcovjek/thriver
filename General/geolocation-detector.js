/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                      GEOLOCATION DETECTOR MODULE                               ║
 * ║                                                                              ║
 * ║  Automatically detects user location via IP and coordinates:                 ║
 * ║  • Language detection via IP geolocation                                     ║
 * ║  • Currency detection via IP geolocation                                     ║
 * ║  • Multiple API fallbacks for reliability                                     ║
 * ║                                                                              ║
 * ║  Author: coldfusionz                                                         ║
 * ║  Version: 1.0.0                                                              ║
 * ║  License: MIT                                                                ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

// Function to detect user's location via IP with multiple API fallbacks
async function detectUserLocation() {
    let detectedLang = 'bs'; // Default to Bosnian
    let detectedCurrency = 'EUR'; // Default to EUR

    // Import language and currency maps from other modules
    const LANGUAGE_MAP = typeof window.LANGUAGE_MAP !== 'undefined' ? window.LANGUAGE_MAP : {
        'US': 'en', 'GB': 'en', 'CA': 'en', 'AU': 'en', 'NZ': 'en', 'IE': 'en',
        'DE': 'de', 'AT': 'de', 'CH': 'de',
        'FR': 'fr', 'BE': 'fr', 'LU': 'fr',
        'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es',
        'IT': 'it',
        'PT': 'pt', 'BR': 'pt',
        'NL': 'nl',
        'PL': 'pl',
        'TR': 'tr',
        'RU': 'ru',
        'BA': 'bs', 'HR': 'bs', 'RS': 'bs', 'ME': 'bs', 'MK': 'bs'
    };

    const CURRENCY_MAP = typeof window.CURRENCY_MAP !== 'undefined' ? window.CURRENCY_MAP : {
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

    // List of free IP geolocation APIs to try in order
    const ipApis = [
        'https://ipapi.co/json/',
        'https://api.ipgeolocation.io/ipgeo?apiKey=free',
        'https://ipwho.is/'
    ];

    for (const apiUrl of ipApis) {
        try {
            console.log(`Trying IP API: ${apiUrl}`);
            const response = await fetch(apiUrl);
            const data = await response.json();
            
            let countryCode;
            
            // Different APIs have different response structures
            if (data.country_code) {
                countryCode = data.country_code;
            } else if (data.country && data.country.code) {
                countryCode = data.country.code;
            } else if (data.country_code2) {
                countryCode = data.country_code2;
            }
            
            if (countryCode) {
                countryCode = countryCode.toUpperCase();
                console.log(`Detected country via IP: ${countryCode}`);
                detectedLang = LANGUAGE_MAP[countryCode] || 'bs';
                detectedCurrency = CURRENCY_MAP[countryCode] || 'EUR';
                break; // Success, stop trying other APIs
            }
        } catch (error) {
            console.error(`Error with ${apiUrl}:`, error);
            continue; // Try next API
        }
    }

    console.log(`Final detected language: ${detectedLang}`);
    console.log(`Final detected currency: ${detectedCurrency}`);
    
    // Apply language if function is available
    if (typeof applyLanguage === 'function' && detectedLang !== (typeof currentLanguage !== 'undefined' ? currentLanguage : 'bs')) {
        console.log(`Switching language to ${detectedLang}`);
        applyLanguage(detectedLang);
    }

    // Apply currency if function is available
    if (typeof updatePrices === 'function' && detectedCurrency !== (typeof currentCurrency !== 'undefined' ? currentCurrency : 'EUR')) {
        console.log(`Switching currency to ${detectedCurrency}`);
        updatePrices(detectedCurrency);
    }
}

// Initialize location detection on page load
document.addEventListener('DOMContentLoaded', () => {
    detectUserLocation();
});

// Also run after window load to ensure all scripts are loaded
window.addEventListener('load', () => {
    // Re-apply prices after a short delay to ensure original script has finished
    setTimeout(() => {
        if (typeof currentCurrency !== 'undefined' && currentCurrency !== 'EUR') {
            if (typeof updatePrices === 'function') {
                updatePrices(currentCurrency);
            }
        }
        // Re-render cart to ensure translations are applied
        if (typeof renderCartUI === 'function') {
            renderCartUI();
        }
    }, 500);
});

// Crafted with precision by coldfusionz
// © 2026 — All rights reserved
