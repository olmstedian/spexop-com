# Google Analytics Implementation Guide

This guide explains how Google Analytics has been integrated into your Spexop website.

## Setup Steps

### 1. Get Your Google Analytics Tracking ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property for your website (if you haven't already)
3. Get your GA4 Measurement ID (format: `G-XXXXXXXXXX`)

### 2. Add Your Tracking ID

1. Open `.env.local` file in your project root
2. Replace the empty value with your actual tracking ID:
   ```
   NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
   ```

### 3. Deploy and Test

After deploying your site with the tracking ID:

1. Visit your website
2. Check Google Analytics Real-time reports to see if data is coming in
3. Events should start appearing within a few minutes

## What's Being Tracked

### Automatic Tracking
- **Page Views**: All page visits are automatically tracked
- **User Sessions**: Duration, bounce rate, and user flow

### Custom Events
- **Navigation Clicks**: When users click navigation menu items
- **Contact Form Interactions**:
  - Form submission attempts
  - Successful form submissions
  - Form submission errors
  - Lead generation events (with project type)
- **Scroll to Top**: When users click the scroll-to-top button

### Event Categories
- `navigation`: Navigation-related interactions
- `contact`: Contact form interactions  
- `engagement`: User engagement actions

## Files Modified

- `lib/analytics.ts`: Core Google Analytics utility functions
- `components/Analytics.tsx`: Analytics component with tracking scripts
- `app/layout.tsx`: Main layout with Analytics component
- `components/Contact.tsx`: Contact form with event tracking
- `components/Navigation.tsx`: Navigation with click tracking
- `.env.example`: Updated with GA tracking ID variable
- `.env.local`: Local environment file for your tracking ID

## Testing in Development

The tracking will only work when `NEXT_PUBLIC_GA_TRACKING_ID` is set. In development, you might want to use a separate GA property to avoid polluting your production analytics data.

## Custom Event Tracking

To add more custom events, use the `event` function from `lib/analytics.ts`:

```typescript
import { event } from '@/lib/analytics'

// Track a custom event
event('button_click', 'engagement', 'cta_button', 1)
```

## Privacy Considerations

- The implementation follows Google Analytics 4 best practices
- No personally identifiable information (PII) is tracked
- Consider adding a cookie consent banner for GDPR compliance
- The tracking only activates when a valid tracking ID is provided

## Troubleshooting

1. **No data in GA**: Check if `NEXT_PUBLIC_GA_TRACKING_ID` is set correctly
2. **Events not firing**: Open browser dev tools and check for console errors
3. **Real-time not working**: Wait a few minutes; GA can have delays

For more details, refer to the [Google Analytics documentation](https://developers.google.com/analytics/devguides/collection/ga4).