// Import Firebase from node_modules
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

// Config Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDJULo-995uQKeHIu4Do8sLXY9u4sHHgaM',
  authDomain: 'vmo-hotel-booking.firebaseapp.com',
  projectId: 'vmo-hotel-booking',
  storageBucket: 'vmo-hotel-booking.firebasestorage.app',
  messagingSenderId: '474000085398',
  appId: '1:474000085398:web:ec3d3a97bdaf36a2a5cdb7',
  measurementId: 'G-E5G5GWMXZ8',
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register(new URL('../firebase-messaging-sw.js', import.meta.url)) // Path to public/
    .then((registration) => {
      console.log('Service Worker registered:', registration);
    })
    .catch((error) => {
      console.error('Service Worker register failed:', error);
    });
}

// Request notification
async function requestPermission() {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      console.log('Notification permission granted.');

      // Grant FCM Token
      const token = await getToken(messaging, {
        vapidKey:
          'BGXzfKANCVJy0r9OuS1C-99J6Zp-jT0jtX_lBgQu0Nfw7PkIR8BDQ7C3mM7C1fHt4uDZdSFL9jXlnE5Vu8etHNk',
      });
      console.log('FCM Token:', token);
    } else {
      console.warn('Notification permission denied.');
    }
  } catch (error) {
    console.error('Error requesting permission:', error);
  }
}

// While opening
onMessage(messaging, (payload) => {
  console.log('Message received:', payload);
  new Notification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/icon.png',
  });
});

export { app, messaging, requestPermission };
