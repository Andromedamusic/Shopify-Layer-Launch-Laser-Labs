# LayerLaunch Laser Labs - Shopify Implementation Guide

## Overview

This guide outlines the complete implementation of the LayerLaunch Laser Labs (3L) Shopify store. The store sells premium laser-engraved products with a focus on customization and personalization.

## Platform: Shopify (Horizon Theme 3.2.1)

---

## Table of Contents

1. [Store Architecture](#store-architecture)
2. [Navigation Structure](#navigation-structure)
3. [Product Setup](#product-setup)
4. [Collections](#collections)
5. [Pages](#pages)
6. [Theme Customizations](#theme-customizations)
7. [Forms & Personalization](#forms--personalization)
8. [Payments & Shipping](#payments--shipping)
9. [Launch Checklist](#launch-checklist)

---

## Store Architecture

### Primary Navigation (Header Menu)
```
Shop (Mega Menu)
├── Slate Coasters
├── Golf Items
├── Branding Gifts
└── All Products

Design Library
Custom Upload
Request a Quote
About
FAQ
```

### Footer Navigation
```
├── Shop
├── About Us
├── FAQ
├── Shipping Policy
├── Returns Policy
├── Privacy Policy
├── Contact
```

---

## Navigation Structure

### Main Menu Setup (Shopify Admin > Online Store > Navigation)

Create menu called "Main Menu" with:

| Menu Item | Link Type | Target |
|-----------|-----------|--------|
| Shop | Collection | All Products |
| - Slate Coasters | Collection | Slate Coasters |
| - Golf Items | Collection | Golf Items |
| - Branding Gifts | Collection | Branding Gifts |
| - All Products | Collection | All Products |
| Design Library | Page | /pages/design-library |
| Custom Upload | Page | /pages/custom-upload |
| Request a Quote | Page | /pages/request-quote |
| About | Page | /pages/about |
| FAQ | Page | /pages/faq |

---

## Product Setup

### Product Categories (Collections)

1. **Slate Coasters** - Primary revenue category
2. **Golf Items** - Secondary category with local appeal
3. **Branding Gifts** - B2B entry point

### SKU Strategy (Bundle Pricing)

Since Shopify doesn't natively support tiered per-unit pricing, use explicit bundle SKUs:

| Product | SKU Example | Price (example) |
|---------|-------------|-----------------|
| Slate Coaster — Single | SC-SINGLE-001 | $15 |
| Slate Coaster — Set of 4 | SC-SET4-001 | $50 |
| Slate Coaster — Set of 10 | SC-SET10-001 | $100 |
| Slate Coaster — Set of 25 (bulk) | SC-SET25-001 | $200 |

### Product Variants

Use variants for:
- Coaster shape (Square, Round, Hexagon)
- Edge style (Natural, Beveled)
- Design type (if applicable)

### Required Product Fields

For each product, configure:
- **Title**: Clear and searchable (e.g., "Custom Photo Slate Coaster — Single")
- **Description**: Materials, personalization options, care instructions
- **Price**: Clearly state if personalization is included
- **SKU**: Unique identifier
- **Inventory**: Track stock
- **Weight**: For shipping calculations
- **Images**: Minimum 4 (front, angle, close-up detail, lifestyle)

### Personalization via Line Item Properties

Use Shopify's line item properties to capture customization details:

```liquid
{% comment %} Example add-to-cart form with personalization {% endcomment %}
<form action="/cart/add" method="post">
  <input type="hidden" name="id" value="{{ product.variants.first.id }}">

  <label for="engraving-line1">Engraving Line 1 (max 20 characters):</label>
  <input type="text" name="properties[Engraving Line 1]" maxlength="20" required>

  <label for="engraving-line2">Engraving Line 2 (optional):</label>
  <input type="text" name="properties[Engraving Line 2]" maxlength="20">

  <label for="font-style">Font Style:</label>
  <select name="properties[Font Style]">
    <option value="Script">Script</option>
    <option value="Block">Block</option>
    <option value="Modern">Modern</option>
  </select>

  <button type="submit">Add to Cart</button>
</form>
```

---

## Collections

### Collection Setup

| Collection | Handle | Description |
|------------|--------|-------------|
| Slate Coasters | slate-coasters | Premium engraved slate coasters |
| Golf Items | golf-items | Golf accessories with custom engraving |
| Branding Gifts | branding-gifts | Corporate and business gift items |
| All Products | all | Complete product catalog |
| Best Sellers | best-sellers | Top-selling items (manual) |
| Michigan Collection | michigan | Local Michigan-themed designs |
| Seasonal | seasonal | Holiday and seasonal items |

### Collection Page Content

Each collection should include:
- Hero image
- Short intro (2-4 sentences) explaining the category
- Customization callout
- Products grid
- "Need bulk? Request a quote" CTA

---

## Pages

### Required Pages

| Page | Handle | Template | Purpose |
|------|--------|----------|---------|
| About | about | page.about | Company story, process, trust |
| FAQ | faq | page.faq | Common questions, reduce support |
| Custom Upload | custom-upload | page.custom-upload | Image/logo upload form |
| Request a Quote | request-quote | page.quote | Bulk/custom inquiry form |
| Design Library | design-library | page.design-library | Portfolio gallery |
| Shipping Policy | shipping-policy | page | Shipping details |
| Returns Policy | returns-policy | page | Return/refund policy |
| Privacy Policy | privacy-policy | page | Privacy information |
| Contact | contact | page.contact | Contact form |

---

## Theme Customizations

### Announcement Bar

Configure via Theme Editor > Header > Announcement bar:
- Text: "Free Shipping on Orders Over $75!" or seasonal promo
- Link: Shop page or specific collection

### Homepage Sections (Order)

1. **Announcement Bar** - Promo/shipping threshold
2. **Hero Banner** - Flagship product + value prop + CTA
3. **Featured Collections** - 3 tiles (Coasters, Golf, Branding)
4. **Why We're Different** - Rich text or image with text
5. **Design Library Preview** - Featured designs gallery
6. **Custom Upload CTA** - Banner promoting photo/logo engraving
7. **Testimonials** - Customer reviews/social proof
8. **Email Signup** - Newsletter with discount incentive
9. **Footer** - Policies, contact, social links

### Custom CSS (if needed)

Add to Theme Settings > Custom CSS:

```css
/* Trust bar styling */
.trust-bar {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  background: var(--color-background-secondary);
  font-size: 0.875rem;
}

/* Bulk CTA button */
.bulk-cta {
  background: transparent;
  border: 2px solid var(--color-primary);
  padding: 0.75rem 1.5rem;
  margin-top: 1rem;
}

/* Design library grid */
.design-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}
```

---

## Forms & Personalization

### Custom Upload Form

Create using Shopify Forms app or custom page template:

**Required Fields:**
- Order Number (required) - text
- Email (required) - email
- Product Purchased (required) - dropdown
- File Upload (required) - file (PNG, JPG, PDF)
- Engraving Notes - textarea
- Permission Checkbox - "I confirm I have rights to this image/logo"

### Request a Quote Form

**Required Fields:**
- Name (required)
- Email (required)
- Phone (optional)
- Project Type (required) - dropdown
- Quantity (required) - number
- Deadline (optional) - date
- Design Source - dropdown (Library, Upload, Custom idea)
- Budget Range (optional) - dropdown
- File Upload (optional)
- Project Details - textarea

### Recommended Apps for Forms

1. **Shopify Forms** - Free, basic functionality
2. **JotForm** - Advanced forms with file upload
3. **Typeform** - Beautiful, conversational forms
4. **Formstack** - Enterprise-level forms

---

## Payments & Shipping

### Payment Setup (Settings > Payments)

Enable:
- Shopify Payments (credit cards)
- PayPal
- Shop Pay
- Apple Pay / Google Pay (automatic with Shopify Payments)

### Tax Setup (Settings > Taxes and duties)

- Enable automatic tax calculation for US
- Configure tax settings for each state where nexus exists
- Products are taxable by default

### Shipping Setup (Settings > Shipping and delivery)

**Domestic (US) Zones:**
| Rate Name | Condition | Price |
|-----------|-----------|-------|
| Standard Shipping | Orders under $75 | $5.99 |
| Free Shipping | Orders $75+ | Free |
| Express Shipping | All orders | $12.99 |

**Canada Zone:**
| Rate Name | Condition | Price |
|-----------|-----------|-------|
| Standard International | Weight-based | $15+ |

**Product Weights:**
- Single coaster: 0.5 lb
- Set of 4: 2 lb
- Set of 10: 5 lb
- Set of 25: 12 lb

---

## Launch Checklist

### Pre-Launch

- [ ] All products created with images and descriptions
- [ ] Collections organized and products assigned
- [ ] Navigation menus configured
- [ ] All pages created with content
- [ ] Forms tested (Custom Upload, Quote Request)
- [ ] Payments configured and tested
- [ ] Shipping rates configured
- [ ] Tax settings configured
- [ ] Email notifications customized
- [ ] Domain connected
- [ ] SSL certificate active

### Content Check

- [ ] Homepage hero image and copy
- [ ] Collection descriptions
- [ ] Product descriptions complete
- [ ] About page content
- [ ] FAQ content
- [ ] Policy pages (Shipping, Returns, Privacy)
- [ ] Design Library populated (30+ designs)

### Technical Check

- [ ] Mobile responsiveness verified
- [ ] Page load speed acceptable
- [ ] All forms submit correctly
- [ ] Cart and checkout flow tested
- [ ] Order confirmation emails working
- [ ] Inventory tracking enabled

### SEO Check

- [ ] Page titles optimized
- [ ] Meta descriptions written
- [ ] Image alt text added
- [ ] URL handles clean

---

## Maintenance Guide

### Adding New Products

1. Go to Products > Add product
2. Enter title, description, price
3. Upload images (4+ recommended)
4. Set SKU and inventory
5. Add to appropriate collections
6. Configure variants if needed
7. Save and publish

### Running Promotions

1. Go to Discounts > Create discount
2. Choose discount type (percentage, fixed, free shipping)
3. Set conditions (minimum purchase, specific products)
4. Set active dates
5. Update announcement bar to promote

### Updating Prices

1. Go to Products
2. Select product(s)
3. Edit price field
4. Save changes

### Exporting Orders

1. Go to Orders
2. Click Export
3. Choose format (CSV)
4. Select date range
5. Download file

---

## Support Resources

- [Shopify Help Center](https://help.shopify.com)
- [Horizon Theme Documentation](https://themes.shopify.com/themes/horizon)
- [Shopify Community Forums](https://community.shopify.com)
