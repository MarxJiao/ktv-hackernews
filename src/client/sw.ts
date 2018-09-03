/**
 * @file service worker
 * @author Marx
 */

self.addEventListener('install', function(event) {
    console.log('install');
});

self.addEventListener('fetch', function(event) {
    console.log('fetch');
});