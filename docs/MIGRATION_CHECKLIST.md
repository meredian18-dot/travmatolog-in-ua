# Migration checklist

## Preflight
- [ ] Identify stack and choose compatible Cloudflare Pages/Workers or alternative runtime
- [ ] Export URL list and crawl existing public site
- [ ] Snapshot response codes, titles, meta descriptions, canonical, hreflang, schema, robots and sitemap
- [ ] Record DNS, email and SSL setup; secure full backup and restore instructions
- [ ] Inventory analytics/conversion tracking and all contact forms

## Staging
- [ ] Deploy full site without changing production DNS
- [ ] Protect staging from indexing (prefer authentication; noindex as secondary measure)
- [ ] Test every language, page, navigation, CTA, contact form and mobile layouts
- [ ] Check asset loading, redirects, internal links, response codes and Core Web Vitals
- [ ] Compare SEO elements and URLs against production; address differences

## Release
- [ ] Agree maintenance window, DNS change and rollback criteria with owner
- [ ] Confirm full backup and recovery are available
- [ ] Switch domain only once staging is signed off
- [ ] Verify HTTPS, WWW/apex, redirects, sitemap, canonical, robots and hreflang
- [ ] Verify DNS email records and send/receive tests
- [ ] Check Search Console, GA4, forms, events and notifications

## Post-release
- [ ] Monitor errors, organic traffic, indexing and contact conversions
- [ ] Keep old hosting available during agreed rollback window
- [ ] Document deployment and access owners
