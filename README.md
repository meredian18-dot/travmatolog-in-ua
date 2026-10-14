# travmatolog.in.ua

Private source repository for the official website of orthopaedic trauma surgeon Maksym Baida.

## Status
**Migration preparation only.** The production website is hosted elsewhere. This repository does not yet contain the existing website source code, and nothing here is deployed.

## Goals
- Preserve the existing site's design, content, language variants, URLs, SEO metadata and search visibility during migration.
- Establish owner-controlled versioning and safe preview/production deployment.
- Improve technical SEO, medical content quality, performance and measurable patient enquiries.

## Proposed infrastructure
- GitHub: private source repository (this repository).
- Cloudflare: preferred DNS/CDN and candidate hosting platform, subject to confirming the existing framework and backend requirements.
- Deployment architecture, CMS and database: **to be decided after the developer handover**.

## Migration policy
1. Obtain original source code, assets, package/lock files, configuration templates, CMS/database export and deployment documentation.
2. Inventory current public URLs, redirects, metadata, language variants, forms and DNS records.
3. Run a non-indexable staging site and verify functional/SEO parity.
4. Back up production and plan rollback before any DNS change.
5. Cut over only after owner approval; verify site and email delivery afterward.

**Do not commit credentials, API keys, patient data or production environment files. Do not change live DNS until staging passes review.**

See [developer handover checklist](docs/DEVELOPER_HANDOVER.md) and [migration checklist](docs/MIGRATION_CHECKLIST.md).
