window.addEventListener('load', () => {
    registerServiceWorker();
})


async function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js').then(reg => {
            console.log('Registration successful', reg);
        })
            .catch(e => console.error('Error during service worker registration:', e));
    } else {
        console.warn('Service Worker is not supported');
    }

    // if (window.location.protocol === 'http:') {
    //     const requireHTTPS = document.getElementById('requireHTTPS');
    //     const link = requireHTTPS.querySelector('a');
    //     link.href = window.location.href.replace('http://', 'https://');
    //     requireHTTPS.classList.remove('hidden');
    //   }
}

