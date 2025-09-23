// Google Analytics Test Script
// Run this in your browser console on https://spexop.com

console.log('🔍 Testing Google Analytics Setup...');

// Check if gtag is loaded
if (typeof window.gtag === 'function') {
    console.log('✅ gtag function is available');
    
    // Test sending a custom event
    window.gtag('event', 'test_event', {
        event_category: 'testing',
        event_label: 'manual_test',
        value: 1
    });
    console.log('📊 Test event sent');
} else {
    console.log('❌ gtag function not found - GA may not be loaded');
}

// Check if GA tracking ID is present
const trackingId = 'G-BLEJTWDJFQ';
const scripts = Array.from(document.querySelectorAll('script'));
const gaScript = scripts.find(script => script.src && script.src.includes(trackingId));

if (gaScript) {
    console.log('✅ Google Analytics script found with tracking ID:', trackingId);
} else {
    console.log('❌ Google Analytics script not found');
}

// Check dataLayer
if (window.dataLayer && Array.isArray(window.dataLayer)) {
    console.log('✅ dataLayer exists with', window.dataLayer.length, 'items');
    console.log('📋 dataLayer contents:', window.dataLayer);
} else {
    console.log('❌ dataLayer not found');
}