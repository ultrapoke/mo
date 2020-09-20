'use strict';
importScripts('sw/sw-toolbox.js');
toolbox.router.get('*', toolbox.networkFirst, { networkTimeoutSeconds: 5});
importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');
