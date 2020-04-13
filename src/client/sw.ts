/**
 * @file service worker
 * @author Marx
 */

import PouchDB from 'pouchdb';

import {getSuccessData, getErrorData} from '../utils/resData';

interface ExtendableEvent extends Event {
	waitUntil(fn: Promise<any>): void;
}

interface FetchEvent extends Event {
	request: Request;
	respondWith(response: Promise<Response>|Response): Promise<Response>;
}

const NAME = 'hackernews-v1'

var initDb = new PouchDB('ids');

var storyDb = new PouchDB('stories');

const staticFiles = [
    '/app.js',
    '/',
    'sw.js'
]

const api = [
    '/api/getinitdata',
    '/api/getstories'
]

self.addEventListener('install', function(event: ExtendableEvent) {
    event.waitUntil(
        caches.open(NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(staticFiles);
        }).catch(err => {
            console.log(err);
        })
    );
});

self.addEventListener('activate', function(event: ExtendableEvent) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event: FetchEvent) {
    const {referrer, url} = event.request;
    const path = '/' + url.replace(referrer, '');
    if ('/api/getinitdata' === path) {
        event.respondWith(handleInitData(path, event));
    }
    else if ('/api/getstories' === path) {
        event.respondWith(handleStoriesData(path, event));
    }
    else {
        event.respondWith(caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                var fetchRequest = event.request.clone();
                return fetch(fetchRequest).then(
                    function(response) {
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
});

function handleInitData(path, fetchEvent: FetchEvent) {
    const onLine = navigator.onLine;
    if (onLine) {
        const fetchRequest = fetchEvent.request.clone();
        return fetch(fetchRequest).then(res => {
            res.clone().json().then(initRes => {
                if (initRes.errno === 0) {
                    const data = initRes.data;
                    const initData = {
                        _id: 'initData',
                        ...data
                    }
                    initDb.get('initData').then(function(doc) {
                        initDb.put({
                            _id: 'initData',
                            _rev: doc._rev,
                            ...data
                        });
                    }).catch(err => {
                        initDb.put(initData);
                    })
                    for (let story of data.top20News) {
                        cacheStory(story);
                    }
                }
                
            });
            return res;
        })
    }
    else {
        return initDb.get('initData').then(doc => {
            return new Response(JSON.stringify(getSuccessData(doc)), { headers: { 'Content-Type': 'application/json' }});
        });
    }
}

function handleStoriesData(path, fetchEvent) {
    const onLine = navigator.onLine;
    const fetchRequest = fetchEvent.request.clone();
    const resStories = []
    const notCachedStoryIds = []
    return fetchRequest.json().then(async storiesReqData => {
        for (let id of storiesReqData.ids) {
            try {
                const story = await storyDb.get(id + '');
                resStories.push(story);
            }
            catch (err) {
                notCachedStoryIds.push(id);
            }
        }
        if (notCachedStoryIds.length === 0) {
            return new Response(JSON.stringify(getSuccessData(resStories)), { headers: { 'Content-Type': 'application/json' }});
        }
        if (onLine) {
            if (resStories.length === 0) {
                return fetchStories(notCachedStoryIds).then(res => {
                    res.clone().json().then(resJson => {
                        if (resJson.errno === 0) {
                            const data = resJson.data;
                            for (let story of data) {
                                cacheStory(story);
                            }
                        }
                        
                    });
                    return res;;
                });
            }
            if (resStories.length > 0 && notCachedStoryIds.length > 0) {
                return fetchStories(notCachedStoryIds).then(res => {
                    return res.clone().json().then(resJson => {
                        if (resJson.errno === 0) {
                            const data = resJson.data;
                            for (let story of data) {
                                cacheStory(story);
                            }
                        }
                        return new Response(JSON.stringify(getSuccessData([...resStories, ...resJson.data])), { headers: { 'Content-Type': 'application/json' }});
                    });
                });
            }
        }
        else {
            if (resStories.length > 0) {
                return new Response(JSON.stringify(getSuccessData(resStories)), { headers: { 'Content-Type': 'application/json' }});
            }
            else {
                return new Response(JSON.stringify(getErrorData(40004)), { headers: { 'Content-Type': 'application/json' }});
            }
        }
    });
}

function cacheStory(story) {
    const storyDoc = {
        _id: story.id + '',
        ...story
    }
    storyDb.get(story.id + '').then(doc => {
        storyDb.put({
            _id: story.id + '',
            _rev: doc._rev,
            ...story
        });
    }).catch(err => {
        storyDb.put(storyDoc).catch(err => {
            console.log('cache errr', err);
        });
    })
}

function fetchStories(ids) {
    return fetch('/api/getstories', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ids})
    })
}
