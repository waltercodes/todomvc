self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('todomvc-v1').then(function(cache) {
      return cache.addAll([
        '/offline.html',
        '/js/offline.js',
      ]);
    })
  );
});
