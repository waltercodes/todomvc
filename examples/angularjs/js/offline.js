window.addEventListener('load', function() {
  function senseOffline(event) {
    if (navigator.onLine) {
      location.href = '/';
    } else {
      location.href = '/offline.html';
    }
  }

  window.addEventListener('online', senseOffline);
  window.addEventListener('offline', senseOffline);
});
