/**
 * @file service worker
 * @author Marx
 */

import PouchDB from 'pouchdb';

const NAME = 'hackernews'

var db = new PouchDB(NAME);

const staticFiles = [
    '/app.js'
]

const api = [
    '/api/getinitdata',
    '/api/getstories'
]

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(staticFiles);
        })
    );
});

self.addEventListener('fetch', function(event) {
    console.log('fetch');
    const fetchRequest = event.request.clone();
    const {referrer, url} = event.request;
    const path = '/' + url.replace(referrer, '');
   
    if (~staticFiles.indexOf(path)) {
        event.respondWith(caches.match(event.request)
            .then(function(response) {
                if (response) {
                    console.log('from caches');
                    return response;
                }
                var fetchRequest = event.request.clone();
                return fetch(fetchRequest).then(
                    function(response) {
                        console.log('from fetch')
                        // Check if we received a valid response
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        var responseToCache = response.clone();
                        caches.open(NAME)
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            });
                        return response;
                    }
                );
            }))
    }
    else {
        event.respondWith(fetch(fetchRequest).then(res => {
            return res;
        }))
    }
});