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

### Collection 404 Errors (Resolved Pattern)
**Problem**: Collections work in Shopify Admin preview but return 404 on live site.
**Root Cause**: Theme templates and navigation links must use handles that match the actual Shopify collection handles (auto-generated from collection title).
**Solution**:
1. Template filenames and navigation URLs have been updated to match Shopify's auto-generated handles
2. When creating a collection named "Glass Etching", Shopify creates handle `glass-etching`
3. Theme templates are now named to match these auto-generated handles

### Required Collection Handles for Theme Templates
These handles are used in navigation and must match your Shopify Admin collections:
- `acrylic-products` → templates/collection.acrylic-products.json
- `glass-etching` → templates/collection.glass-etching.json
- `wedding-events` → templates/collection.wedding-events.json (for "Wedding & Events")
- `corporate-gifts` → templates/collection.corporate-gifts.json (for "Corporate Gift Sets")
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
