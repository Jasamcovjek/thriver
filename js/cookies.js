document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('cookieBanner');
    const termsModal = document.getElementById('termsModal');
    const closeTerms = document.getElementById('closeTerms');

    const CONSENT_KEY = 'thriversports_cookie_consent';

    function openTerms(e){
        if (e) e.preventDefault();
        termsModal.classList.add('active');
    }

    ['openTermsFaq','openTermsFooter','openTermsCheckout','openCookiesFooter','openCookiesBanner']
        .forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('click', openTerms);
        });

    closeTerms.addEventListener('click', () => termsModal.classList.remove('active'));
    termsModal.addEventListener('click', (e) => {
        if (e.target === termsModal) termsModal.classList.remove('active');
    });

    const saved = localStorage.getItem(CONSENT_KEY);
    if (!saved) {
        setTimeout(() => banner.classList.add('show'), 600);
    }

    document.getElementById('cookieAccept').addEventListener('click', () => {
        localStorage.setItem(CONSENT_KEY, 'all');
        banner.classList.remove('show');
        // hook your analytics init here, gated behind consent === 'all'
    });

    document.getElementById('cookieDecline').addEventListener('click', () => {
        localStorage.setItem(CONSENT_KEY, 'essential');
        banner.classList.remove('show');
    });
});
