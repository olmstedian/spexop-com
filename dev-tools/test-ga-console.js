// Test Google Analytics Implementation
// Copy and paste this in your browser console on https://spexop.com

console.log('🔍 Testing Google Analytics Implementation...');

// Check if GA tracking ID is available
const trackingId = 'G-BLEJTWDJFQ';
console.log('Expected Tracking ID:', trackingId);

// Check if gtag is loaded
if (typeof window.gtag === 'function') {
    console.log('✅ gtag function is available');
    
    // Send a test event
    window.gtag('event', 'test_event', {
        event_category: 'testing',
        event_label: 'manual_test_' + Date.now(),
        value: 1
    });
    console.log('📊 Test event sent to GA');
} else {
    console.log('❌ gtag function not found');
}

// Check if GA script is loaded
const gaScript = document.querySelector(`script[src*="${trackingId}"]`);
if (gaScript) {
    console.log('✅ GA script tag found:', gaScript.src);
} else {
    console.log('❌ GA script tag not found');
}

// Check dataLayer
if (window.dataLayer && Array.isArray(window.dataLayer)) {
    console.log('✅ dataLayer exists with', window.dataLayer.length, 'items');
    console.log('📋 Recent dataLayer items:', window.dataLayer.slice(-3));
} else {
    console.log('❌ dataLayer not found');
}

// Check for any GA-related network requests
const gaRequests = performance.getEntriesByType('resource')
    .filter(r => r.name.includes('google') || r.name.includes('gtag'))
    .map(r => ({ name: r.name, status: r.responseStatus }));

if (gaRequests.length > 0) {
    console.log('✅ GA-related network requests found:', gaRequests);
} else {
    console.log('❌ No GA-related network requests found');
}

console.log('🎯 Test complete! Check the results above.');