# Manifest

This is the public-safe source map for the initial website bootstrap.

## Source Record

- Marketing OS commit used: `904e784176e536fe9d336e9edb29de0e732a5ebc`
- Extraction date: `2026-07-24`
- Website repository state: bootstrap source pack only, no Astro application scaffold yet

## Destination Summary

| Source file | Purpose | Public status | Destination | Copy type | Exclusions |
| --- | --- | --- | --- | --- | --- |
| `brands/toan/.agents/product-marketing.md` | Canonical Toan positioning, audience, voice, and goals | Public-safe context | `content-source/approved/positioning.md`, `content-source/approved/brand-strategy.md`, `content-source/approved/current-status.md` | Curated extract | Internal planning notes, non-public implementation guidance |
| `brands/toan/strategy/brand-strategy.md` | Brand objective, audience priority, differentiation, and conversion intent | Public-safe planning layer | `content-source/approved/brand-strategy.md`, `content-source/approved/current-status.md` | Curated extract | Any non-public planning notes beyond the public website story |
| `brands/toan/strategy/content-authority-map.md` | Content pillars and audience/channel guidance | Public-safe planning layer | `content-source/approved/brand-strategy.md`, `content-source/approved/current-status.md` | Curated extract | Planning-only notes that do not belong on the website |
| `brands/toan/content/drafts/website/homepage.md` | Homepage copy draft | Public-safe draft | `content-source/approved/website-copy.md` | Curated extract | None beyond unsupported claims already omitted from the draft |
| `brands/toan/content/drafts/website/about.md` | About page copy draft | Public-safe draft | `content-source/approved/website-copy.md` | Curated extract | None beyond private contact details and unsupported claims |
| `brands/toan/content/drafts/website/projects-index.md` | Projects index copy draft | Public-safe draft | `content-source/approved/website-copy.md` | Curated extract | None beyond unsupported claims already omitted from the draft |
| `brands/toan/content/drafts/website/contact.md` | Contact page copy draft | Mixed; public-safe after curation | `content-source/approved/website-copy.md`, `content-source/approved/contact-channels.md` | Curated extract | Email, phone, and any contact channel not explicitly approved for publication |
| `brands/toan/content/drafts/case-studies/finderlab.md` | FinderLab case study draft | Public-safe draft with caveats | `content-source/approved/projects/finderlab.md` | Curated extract | TODOs, customer narratives, and any unsupported commercial claims |
| `brands/toan/references/cv.md` and `brands/toan/references/toanle-cv.md` | Verified career source record | Mixed; public-safe only after filtering | `content-source/approved/career-facts.md`, `content-source/approved/proof-register.md`, `content-source/approved/projects/ai-document-operations.md`, `content-source/approved/projects/other-work.md` | Curated extract | Phone number, exact address, avatar, and any unsupported ranking or traction claims |
| `brands/toan/references/proof-register.md` | Claim authority and qualification notes | Public-safe after filtering | `content-source/approved/proof-register.md`, `content-source/approved/contact-channels.md` | Curated extract | Claims marked `needs-external-evidence`, `needs-user-confirmation`, or otherwise private |
| `brands/toan/references/projects.md` | CV-supported project summaries | Public-safe | `content-source/approved/projects/finderlab.md`, `content-source/approved/projects/ai-document-operations.md`, `content-source/approved/projects/aitbase-omnichannel.md`, `content-source/approved/projects/aitbase-camera.md`, `content-source/approved/projects/other-work.md` | Curated extract | Any unsupported customer, revenue, adoption, or ranking claims |
| `brands/toan/references/brand-product-boundaries.md` | Product-boundary rules | Public-safe | `content-source/approved/current-status.md`, `content-source/approved/projects/aitbase-camera.md`, `content-source/approved/projects/aitbase-omnichannel.md` | Curated extract | Any attempt to merge proof across Aitbase products |
| `brands/toan/strategy/website-cro-review.md` | Website conversion review | Public-safe | `content-source/approved/website-cro.md` | Curated extract | None |

## Copied Exactly

- None.

## Curated Files

- `content-source/approved/positioning.md`
- `content-source/approved/brand-strategy.md`
- `content-source/approved/website-copy.md`
- `content-source/approved/website-cro.md`
- `content-source/approved/career-facts.md`
- `content-source/approved/proof-register.md`
- `content-source/approved/current-status.md`
- `content-source/approved/contact-channels.md`
- `content-source/approved/projects/finderlab.md`
- `content-source/approved/projects/ai-document-operations.md`
- `content-source/approved/projects/aitbase-camera.md`
- `content-source/approved/projects/aitbase-omnichannel.md`
- `content-source/approved/projects/other-work.md`

## Sensitive Sections Excluded

- Private phone numbers.
- Detailed home addresses.
- Unpublished customer or employer information.
- Secrets, tokens, and local-only configuration.
- Camera claims that are still discovery-stage or not yet supported by evidence.
- Any ranking, traction, or commercial outcome claim that is not in the proof register.

## Missing Expected Sources

- No missing approved source files were required for the current bootstrap pack.
- The Marketing OS repository still contains private planning material that was not copied.

## Conflicts Or Ambiguities

- Marketing OS has uncommitted changes in source files related to homepage copy, projects index copy, the FinderLab case study draft, and the CRO review; they were not copied into this repo without explicit approval.
- Aitbase Camera remains discovery-stage and must stay separate from Aitbase Omnichannel.
- Email exists in the CV source, but it is not included in this pack until explicitly approved for publication.
- JR Active's `No.1` ranking claim is excluded because it needs external evidence.

## Approved Quantitative Proof

- Toan has 10+ years of software engineering experience.
- Toan has approximately seven years of professional Ruby on Rails experience.
- FinderLab was built as a solo product effort.
- FinderLab exceeded 600 million searchable profile records.
- JobReady team size was 5-7 engineers.

## Product Boundary Notes

- Toan personal brand is the umbrella identity for the website.
- FinderLab scale applies only to FinderLab.
- AI Document Operations is a separate project from Aitbase products.
- Aitbase Camera is separate from Aitbase Omnichannel and must not inherit its proof.
- Aitbase Omnichannel is CV-supported product work and can only carry its own evidence.

## Editorial Use Note

This content pack is editorial input for later website implementation. It must not be published blindly.
