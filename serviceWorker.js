if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('serviceWorker.min.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

var CURRENT_CACHES = {
    prefetch: 'prefetch-cache'
};

self.addEventListener('install', function (event) {
    var urlsToPrefetch = [
        'dist/css/',
        'dist/js/',
        'fonts/',
        'dist/img/favicon/'
    ];

    console.log('Handling install event. Resources to pre-fetch: ', urlsToPrefetch);

    event.waitUntil(
        caches.open(CURRENT_CACHES['prefetch']).then(function (cache) {
            cache.addAll(urlsToPrefetch.map(function (urlToPrefetch) {
                return new Request(urlToPrefetch, { mode: 'no-cors' });
            })).then(function () {
                console.log('All resources have been fetched and cached.');
            });
        }).catch(function (error) {
            console.error('Pre-fetching failed:', error);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }

                // IMPORTANT: Clone the request. A request is a stream and
                // can only be consumed once. Since we are consuming this
                // once by cache and once by the browser for fetch, we need
                // to clone the response.
                var fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(
                    function (response) {
                        // Check if we received a valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // IMPORTANT: Clone the response. A response is a stream
                        // and because we want the browser to consume the response
                        // as well as the cache consuming the response, we need
                        // to clone it so we have two streams.
                        var responseToCache = response.clone();

                        caches.open(CURRENT_CACHES['prefetch'])
                            .then(function (cache) {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});

self.addEventListener('activate', function (event) {
    var cacheWhitelist = ['prefetch-cache'];
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.log('removed cache: ' + cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

////register()