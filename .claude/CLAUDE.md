# LayerLaunch Laser Lab - Development Guidelines

## Continuous Improvement (Kaizen) Process

**IMPORTANT**: Every time we work on this website, we MUST assign 2 subagents to critique the site:

1. **Structure/Construction Critic** - Analyzes:
   - Code organization and architecture
   - UX flow and navigation
   - Information hierarchy
   - Technical implementation quality
   - Performance considerations

2. **Visualization Critic** - Analyzes:
   - Visual design consistency
   - Typography and contrast
   - Color scheme and accessibility
   - Spacing and layout
   - Responsive design quality

This ensures continuous kaizen (improvement) with each addition and inclusion to the website.

## Brand Colors
- Gold accent: #c9a227
- Dark background: #1a1a1a
- Light background: #f8f8f8

## Key Pages
- Homepage: templates/index.json
- Design Library: pages/design-library
- Custom Upload: pages/custom-upload

## Facebook Marketplace Reviews
Profile: https://www.facebook.com/marketplace/profile/100003393673828/
Rating: 5 stars (15+ reviews)

## Contact Information
- Email: HunterBos@BosBusinessServices.org
- Phone: (248) 838-8314

## Lessons Learned & Solutions

### CRITICAL: Shopify Collection Handle vs Theme Template (Root Cause of 404s)

**The Three Things That Must Align:**
1. **Collection Handle** (URL slug in Shopify Admin → SEO preview) - e.g., `gift-sets`
2. **Navigation Link** (href in header.liquid) - e.g., `/collections/gift-sets`
3. **Theme Template** (filename in templates/) - e.g., `collection.gift-sets.json`

**How to Find the Actual Handle:**
1. Go to Shopify Admin → Products → Collections
2. Click the collection
3. Scroll to "Search engine listing preview"
4. The URL shown is the ACTUAL handle (e.g., `layerlaunchlaserlab.com/collections/gift-sets`)

**IMPORTANT:** The collection TITLE and the collection HANDLE can be different!
- Title: "Corporate Gift Sets" (display name)
- Handle: `gift-sets` (URL slug - found in SEO preview)

### Collection 404 Errors (Resolved Pattern)
**Problem**: Collections work in Shopify Admin preview but return 404 on live site.
**Root Cause**: Navigation links and template files must use the ACTUAL Shopify collection handle (from SEO preview), NOT an assumed handle based on the title.
**Solution**:
1. ALWAYS verify the actual handle in Shopify Admin → Collection → Search engine listing
2. The handle shown in the URL preview is what navigation and templates must use
3. Never assume the handle - always verify in Shopify Admin

### Required Collection Handles for Theme Templates
**VERIFIED** handles used in navigation (check SEO preview if 404 occurs):
- `acrylic-products` → templates/collection.acrylic-products.json
- `glass-etching` → templates/collection.glass-etching.json
- `wedding-events` → templates/collection.wedding-events.json (for "Wedding & Events")
- `gift-sets` → templates/collection.gift-sets.json (for "Corporate Gift Sets" - handle differs from title!)
- `pet-lovers` → templates/collection.pet-lovers.json (for "Pet Lovers")
- `golf` → templates/collection.golf.json
- `slate-coasters` → templates/collection.slate-coasters.json
- `wood-products` → templates/collection.wood-products.json
- `leather-goods` → templates/collection.leather-goods.json
- `metal-engraving` → templates/collection.metal-engraving.json
- `memorial` → templates/collection.memorial.json
- `holiday-gifts` → templates/collection.holiday-gifts.json
- `best-sellers` → templates/collection.best-sellers.json
- `new-arrivals` → templates/collection.new-arrivals.json
- `sale` → templates/collection.sale.json

### Section Group Naming Conflicts (Footer Error Fix)
**Problem**: "Error in tag 'section' - 'footer' is not a valid section type"
**Root Cause**: `footer-group.json` declared `"type": "footer"` as a GROUP type, which prevented `footer.liquid` from being recognized as a SECTION type.
**Solution**: Removed `footer-group.json` since:
- `theme.liquid` uses `{% section 'footer' %}` directly
- Footer doesn't need section group architecture
- Naming conflicts occur when a .json group file uses same "type" as a .liquid section file

### Futureproofing Checklist for New Collections
When adding a new collection:
1. [ ] Create the collection in Shopify Admin
2. [ ] Check the SEO preview URL for the ACTUAL handle
3. [ ] Create template: `templates/collection.{actual-handle}.json`
4. [ ] Add navigation link with: `/collections/{actual-handle}`
5. [ ] Update this CLAUDE.md with the new handle mapping
6. [ ] Test the link on the live site

### Soft Edge Styling Added
CSS classes added to base.css for softer visual appearance:
- Subtle vignette effect on body
- Soft inset shadows on large displays (1440px+)
- `.section-fade-top` / `.section-fade-bottom` for gradient blends
- `.section-rounded` for rounded section corners
- `.section-soft-bg` / `.section-dark-soft` for gradient-edged sections
- Enhanced card shadows with layered soft shadows
- Softer form inputs and buttons with hover lift effects

### Sports/Awards Section Removed
Removed due to copyright concerns - avoid sports team logos and trademarked content.
