/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                      COOKIE CONSENT MODULE                                     ║
 * ║                                                                              ║
 * ║  GDPR-compliant cookie consent management:                                    ║
 * ║  • Cookie banner display logic                                               ║
 * ║  • Accept/decline handling with localStorage                                   ║
 * ║  • Terms modal control                                                        ║
 * ║                                                                              ║
 * ║  Author: coldfusionz                                                         ║
 * ║  Version: 1.0.0                                                              ║
 * ║  License: MIT                                                                ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const COOKIE_CONSENT_KEY = 'thriver_cookie_consent';

function initCookieConsent() {
    const banner = document.getElementById('cookieBanner');
    const termsModal = document.getElementById('termsModal');
    const closeTerms = document.getElementById('closeTerms');

    if (!banner || !termsModal || !closeTerms) return;

    function openTerms(e) {
        if (e) e.preventDefault();
        termsModal.classList.add('active');
    }

    ['openTermsFaq', 'openTermsFooter', 'openTermsCheckout', 'openCookiesFooter', 'openCookiesBanner']
        .forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('click', openTerms);
        });

    closeTerms.addEventListener('click', () => termsModal.classList.remove('active'));
    termsModal.addEventListener('click', (e) => {
        if (e.target === termsModal) termsModal.classList.remove('active');
    });

    const saved = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!saved) {
        setTimeout(() => banner.classList.add('show'), 600);
    }

    const cookieAccept = document.getElementById('cookieAccept');
    if (cookieAccept) {
        cookieAccept.addEventListener('click', () => {
            localStorage.setItem(COOKIE_CONSENT_KEY, 'all');
            banner.classList.remove('show');
            // Hook your analytics init here, gated behind consent === 'all'
        });
    }

    const cookieDecline = document.getElementById('cookieDecline');
    if (cookieDecline) {
        cookieDecline.addEventListener('click', () => {
            localStorage.setItem(COOKIE_CONSENT_KEY, 'essential');
            banner.classList.remove('show');
        });
    }
}

// Initialize cookie consent on DOM ready
document.addEventListener('DOMContentLoaded', initCookieConsent);

// Crafted with precision by coldfusionz
// © 2026 — All rights reserved
