// Use compat instead of modules
importScripts(
  'https://www.gstatic.com/firebasejs/10.10.0/firebase-app-compat.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/10.10.0/firebase-messaging-compat.js'
);
// Check firebase
if (firebase && firebase.messaging) {
  // Init firebase
  firebase.initializeApp({
    apiKey: 'AIzaSyDJULo-995uQKeHIu4Do8sLXY9u4sHHgaM',
    authDomain: 'vmo-hotel-booking.firebaseapp.com',
    projectId: 'vmo-hotel-booking',
    storageBucket: 'vmo-hotel-booking.firebasestorage.app',
    messagingSenderId: '474000085398',
    appId: '1:474000085398:web:ec3d3a97bdaf36a2a5cdb7',
    measurementId: 'G-E5G5GWMXZ8',
  });
  const messaging = firebase.messaging();
  // Receive notification on background
  messaging.onBackgroundMessage((payload) => {
    console.log('[Firebase Messaging] Background Message:', payload);
    self.registration.showNotification(payload.notification.title, {
      body: payload.notification.body,
      icon: '/icon.png',
    });
  });
} else console.error('Firebase load failed in Service Worker');
