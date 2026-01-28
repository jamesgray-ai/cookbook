# Feature Spec: Google Analytics 4 (GA4) Integration

## Summary

Add GA4 tracking across all pages of handsonai.info using MkDocs Material's built-in analytics support.

## Motivation

Provide visibility into traffic, engagement, user sources, and conversion metrics for the site.

## Approach

MkDocs Material has native GA4 support via the `extra.analytics` config in `mkdocs.yml`. The theme automatically injects the `gtag.js` script on every page, including pages loaded via `navigation.instant` (SPA-style navigation). No custom JavaScript or template overrides are needed.

## Changes

### `mkdocs.yml`

Added `analytics` key inside the `extra:` block:

```yaml
extra:
  analytics:
    provider: google
    property: G-4YB89PWFET
```

### What this provides

- Pageviews across all pages (including instant-navigation transitions)
- Traffic sources (referral, organic, direct, social)
- User engagement (time on page, scroll depth, bounce rate)
- Geography and demographics of visitors
- Device/browser breakdown
- Real-time monitoring in the GA4 dashboard
- Search Console integration (can be linked separately in GA4)

### What it does NOT require

- No changes to `docs/overrides/main.html`
- No custom JavaScript files
- No additional plugins or dependencies
- No changes to the GitHub Actions deploy workflow

## Verification

1. Run `mkdocs serve` locally and inspect page source — confirm the `gtag.js` script tag appears in `<head>` with measurement ID `G-4YB89PWFET`
2. Open GA4 Real-Time report, visit the local dev site, and confirm a hit registers
3. Deploy to production and verify real-time data flows in GA4 dashboard
