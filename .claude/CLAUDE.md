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
- `golf-items` → templates/collection.golf-items.json (for "Golf Items" / "Golf Ball Markers")
- `slate-coasters` → templates/collection.slate-coasters.json
- `wood-products` → templates/collection.wood-products.json
- `leather-goods` → templates/collection.leather-goods.json
- `metal-engraving` → templates/collection.metal-engraving.json
- `memorial` → templates/collection.memorial.json
- `holiday-gifts` → templates/collection.holiday-gifts.json
- `best-sellers` → templates/collection.best-sellers.json (ALSO used for "On Sale" nav link - same collection with 5% discount strategy)
- `new-arrivals` → templates/collection.new-arrivals.json
- NOTE: "On Sale" navigation links to `best-sellers` collection (no separate `sale` collection exists)

### Footer Section Error (DEFINITIVE FIX)
**Problem**: "Error in tag 'section' - 'footer' is not a valid section type"
**Root Cause**: Shopify's section system was not properly syncing/recognizing section files from the Git repo. Multiple attempts to fix via section files failed:
1. Deleted `footer-group.json` (didn't fix)
2. Renamed `footer.liquid` to `site-footer.liquid` (didn't fix)
3. Verified schema JSON validity (was fine)

**DEFINITIVE Solution**: Inline the footer directly in `layout/theme.liquid`
- Footer HTML, CSS, and Liquid embedded directly in theme.liquid (lines 216-289)
- No dependency on external section files
- Guaranteed to render on all pages
- Located between `</main>` and `{% section 'cart-drawer' %}`

**Why This Works**: The section system requires Shopify to find and parse section files. By inlining, we bypass this entirely. The footer is now part of theme.liquid itself.

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

### CRITICAL: Custom Upload Page 404 (Action Required in Shopify Admin)
**Problem**: `/pages/custom-upload` returns 404 error - this is a primary conversion funnel blocker.
**Root Cause**: The theme template exists (`templates/page.custom-upload.json`) and section exists (`sections/page-custom-upload.liquid`), but the **actual Page must be created in Shopify Admin**.

**Solution - Create the Page in Shopify Admin:**
1. Go to Shopify Admin → Online Store → Pages
2. Click "Add page"
3. Title: "Upload Your Image" (or "Custom Upload")
4. In the right sidebar under "Online store", find "Theme template"
5. Select `page.custom-upload` from the dropdown
6. Save the page

**Verify the handle matches:**
- The page URL handle should be `custom-upload` (check SEO preview)
- Navigation links use `/pages/custom-upload`

**Same Pattern Applies to Other Pages:**
- `request-quote` → needs Page with template `page.request-quote`
- `bulk-orders` → needs Page with template `page.bulk-orders`
- `custom-orders` → needs Page with template `page.custom-orders`
- `design-library` → needs Page with template `page.design-library`
- `faq` → needs Page with template `page.faq`
- `contact` → needs Page with template `page.contact`
- `shipping` → needs Page with template `page.shipping`
- `about-us` → needs Page with template `page.about-us`

### Gold Text Contrast Issue (WCAG Compliance)
**Problem**: Gold text (#c9a227) on light backgrounds fails WCAG AA contrast requirements.
- Current ratio: ~2.14:1 (needs 4.5:1 for normal text, 3:1 for large text)

**Solutions:**
1. **On light backgrounds**: Use darker gold (#8B6914) or dark text (#1a1a1a) with gold accents (borders, icons)
2. **On dark backgrounds**: Gold (#c9a227) works well with sufficient contrast
3. **Alternative approach**: Use gold for decorative elements only, not for essential text

### Custom Order Form - Web3Forms Setup (REQUIRED for Email with Attachments)
**Problem**: Shopify doesn't natively support email forms with file attachments.
**Solution**: The Custom Orders page uses Web3Forms (free service) to send emails with image attachments.

**Setup Instructions:**
1. Go to https://web3forms.com
2. Enter your email address: `HunterBos@BosBusinessServices.org`
3. Click "Create Access Key"
4. Check your email and copy the access key
5. In Shopify Admin → Online Store → Themes → Customize
6. Navigate to the Custom Orders page
7. Find "Form Configuration" section
8. Paste the access key into "Web3Forms Access Key" field
9. Save

**What the form collects:**
- Contact info (name, email, phone, company)
- Project details (order type, quantity, material, timeline)
- Project description
- Image/logo upload (attached to email)
- Additional notes and referral source

**Email format:** Submissions go to configured email with all fields + attached image file.
