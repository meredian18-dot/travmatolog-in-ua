# Architecture decisions (pending)

| Decision | Status | Notes |
| --- | --- | --- |
| Source control | Confirmed | Private GitHub repository |
| Deployment provider | Candidate | Cloudflare Pages/Workers if compatible |
| Framework/runtime | Unknown | Await original source |
| CMS/content workflow | Unknown | Preserve existing authoring capabilities |
| Database | Unknown | Do not assume static-only |
| Staging | Required | Prevent indexing; preserve production |
| Domain/DNS cutover | Not authorized | No DNS modifications until validated |
| Analytics | To audit | Track enquiries without medical/patient-sensitive details |

Avoid speculative rewrites or configuration for an unverified stack.
