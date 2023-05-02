// Vérifie si le server est en local ou en production
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

// Fonction register: enregistre le service worker
export function register(config) {
  // Vérifie si le navigateur supporte les service workers
  window.addEventListener('load', () => {
    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
    if (isLocalhost) {
      checkValidServiceWorker(swUrl, config);
    } else {
      registerValidSW(swUrl, config);
    }
  });
}

// Fonction registerValidSW: enregistre le service worker
function registerValidSW(swUrl, config) {
  // Enregistre le service worker
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      // Ecoute l'événement updatefound
      registration.onupdatefound = () => {
        // Récupère le service worker
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        // Ecoute l'événement statechange
        installingWorker.onstatechange = () => {
          // Si le service worker est installé
          if (installingWorker.state === 'installed') {
            // Si le navigateur supporte les service workers
            if (navigator.serviceWorker.controller) {
              console.log(
                'New content is available and will be used when all ' +
                  'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
              );

              // Execute callback
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }

            } else {
              // Si le navigateur ne supporte pas les service workers
              console.log('Content is cached for offline use.');

              // Execute callback
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

// Fonction checkValidServiceWorker: vérifie si le service worker est valide
function checkValidServiceWorker(swUrl, config) {
  // Vérifie si le service worker existe
  fetch(swUrl)
    .then(response => {
      // Vérifie si le service worker est valide
      const contentType = response.headers.get('content-type');
      if (
        // Si le service worker n'existe pas
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // Service worker inexistant. Enregistre le service worker
        navigator.serviceWorker.ready.then(registration => {
          // Supprime le service worker
          registration.unregister().then(() => {
            // Recharge la page
            window.location.reload();
          });
        });
      } else {
        // Service worker valide. Enregistre le service worker
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

// Fonction unregister: supprime le service worker
export function unregister() {
  // Vérifie si le navigateur supporte les service workers
  if ('serviceWorker' in navigator) {
    // Supprime le service worker
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
