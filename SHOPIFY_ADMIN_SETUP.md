# Shopify Admin Setup Guide

## LayerLaunch Laser Labs - Complete Store Configuration

This guide walks through the complete Shopify admin setup for LayerLaunch Laser Labs. Follow these steps in order for best results.

---

## Table of Contents

1. [Initial Setup](#1-initial-setup)
2. [Theme Configuration](#2-theme-configuration)
3. [Navigation Menus](#3-navigation-menus)
4. [Collections Setup](#4-collections-setup)
5. [Products Setup](#5-products-setup)
6. [Pages Setup](#6-pages-setup)
7. [Payments Configuration](#7-payments-configuration)
8. [Shipping Setup](#8-shipping-setup)
9. [Tax Configuration](#9-tax-configuration)
10. [Email Notifications](#10-email-notifications)
11. [Domain & SSL](#11-domain--ssl)
12. [Final Checklist](#12-final-checklist)

---

## 1. Initial Setup

### Store Details
1. Go to **Settings > Store details**
2. Update:
   - Store name: `LayerLaunch Laser Labs`
   - Store contact email: `hello@layerlaunchlaserlabs.com`
   - Customer email: `orders@layerlaunchlaserlabs.com`
   - Business address: Your Michigan address
   - Store currency: USD
   - Time zone: Eastern Time (US & Canada)

### Store Policies
1. Go to **Settings > Policies**
2. Create/update each policy:
   - **Refund policy**: Include custom product limitations
   - **Privacy policy**: Standard privacy policy
   - **Terms of service**: Terms for custom orders
   - **Shipping policy**: Processing times and carriers

---

## 2. Theme Configuration

### Installing Theme Files
1. Go to **Online Store > Themes**
2. Current theme: Horizon (or your selected theme)
3. Click **Edit code** to add custom sections:
   - Upload files from `/theme/sections/` directory
   - Upload files from `/theme/snippets/` directory
   - Upload files from `/theme/templates/` directory
   - Upload files from `/theme/assets/` directory
   - Update `/config/settings_schema.json`

### Customizing the Theme
1. Go to **Online Store > Themes > Customize**
2. Configure homepage sections:
   - Add **Trust Bar** section
   - Add **Hero Banner** section
   - Add **Featured Collections** section
   - Add **Why We're Different** section
   - Add **Design Library Preview** section
   - Add **Custom Upload CTA** section
   - Add **Testimonials** section
   - Add **Newsletter** section

### Header Settings
1. In Theme Editor, select **Header**
2. Configure:
   - Logo (upload your logo file)
   - Menu: Main Menu
   - Enable announcement bar
   - Announcement text: "Free Shipping on Orders Over $75!"

### Footer Settings
1. In Theme Editor, select **Footer**
2. Configure:
   - Newsletter signup enabled
   - Footer menu: Footer Menu
   - Social media links
   - Payment icons

---

## 3. Navigation Menus

### Main Menu
1. Go to **Online Store > Navigation**
2. Click **Add menu** or edit "Main Menu"
3. Add items:

```
Shop
├── Slate Coasters (link: /collections/slate-coasters)
├── Golf Items (link: /collections/golf-items)
├── Branding Gifts (link: /collections/branding-gifts)
└── All Products (link: /collections/all)

Design Library (link: /pages/design-library)
Custom Upload (link: /pages/custom-upload)
Request a Quote (link: /pages/request-quote)
About (link: /pages/about-us)
FAQ (link: /pages/faq)
```

### Footer Menu
1. Create menu named "Footer Menu"
2. Add items:

```
Shop (link: /collections/all)
About Us (link: /pages/about-us)
FAQ (link: /pages/faq)
Shipping Policy (link: /policies/shipping-policy)
Returns Policy (link: /policies/refund-policy)
Privacy Policy (link: /policies/privacy-policy)
Contact (link: /pages/contact)
```

---

## 4. Collections Setup

### Create Collections
Go to **Products > Collections** and create:

#### Slate Coasters
- Title: `Slate Coasters`
- Handle: `slate-coasters`
- Description: Premium natural slate coasters with custom laser engraving. Perfect for gifts, home décor, and personalization.
- Collection type: Manual (or Automated with tag `coaster`)
- Image: Upload hero image

#### Golf Items
- Title: `Golf Items`
- Handle: `golf-items`
- Description: Personalized golf accessories including custom ball markers and course-themed products.
- Collection type: Manual (or Automated with tag `golf`)
- Image: Upload hero image

#### Branding Gifts
- Title: `Branding Gifts`
- Handle: `branding-gifts`
- Description: Corporate gift solutions with custom logo engraving. Perfect for business gifts, team merchandise, and client appreciation.
- Collection type: Manual (or Automated with tag `corporate`)
- Image: Upload hero image

#### All Products
- Title: `All Products`
- Handle: `all`
- Collection type: Automated - All products

#### Best Sellers (Optional)
- Title: `Best Sellers`
- Handle: `best-sellers`
- Collection type: Manual
- Add top-selling products

---

## 5. Products Setup

### Product Template
For each product, include:

#### Basic Information
- **Title**: Clear, searchable (e.g., "Custom Photo Slate Coaster — Single")
- **Description**: Include materials, personalization options, care instructions
- **Media**: 4-8 images (front, angle, close-up, lifestyle, packaging)
- **Price**: Include note if personalization is included

#### Inventory & Shipping
- **SKU**: Unique identifier (e.g., SC-PHOTO-SINGLE-001)
- **Track quantity**: Enabled
- **Weight**: Required for shipping calculations
- **HS Code**: For international shipping (optional)

#### Variants (if applicable)
- Shape: Square, Round, Hexagon
- Edge: Natural, Beveled
- Size: Standard, Large

### Sample Product SKUs

| Product | SKU | Price | Weight |
|---------|-----|-------|--------|
| Slate Coaster - Single | SC-SINGLE-001 | $15.00 | 0.5 lb |
| Slate Coaster - Set of 4 | SC-SET4-001 | $50.00 | 2 lb |
| Slate Coaster - Set of 10 | SC-SET10-001 | $100.00 | 5 lb |
| Slate Coaster - Set of 25 | SC-SET25-001 | $200.00 | 12 lb |
| Golf Ball Marker - Single | GBM-SINGLE-001 | $12.00 | 0.1 lb |
| Logo Coasters - 25 Pack | LC-LOGO-25 | $225.00 | 12 lb |

### Product Metafields (Optional)
Create metafields for:
- `custom.personalization_type`: text, photo, logo, design_library
- `custom.max_engraving_lines`: Number
- `custom.max_chars_per_line`: Number
- `custom.requires_upload`: Boolean
- `custom.personalization_available`: Boolean

---

## 6. Pages Setup

### Create Pages
Go to **Online Store > Pages** and create:

#### About
- Title: `About`
- Handle: `about`
- Template: `page.about`
- Content: Company story, process, quality standards

#### FAQ
- Title: `FAQ`
- Handle: `faq`
- Template: `page.faq`
- Content: Common questions and answers

#### Custom Upload
- Title: `Custom Upload`
- Handle: `custom-upload`
- Template: `page.custom-upload`
- Content: Image upload form and instructions

#### Request a Quote
- Title: `Request a Quote`
- Handle: `request-quote`
- Template: `page.quote`
- Content: Quote request form

#### Design Library
- Title: `Design Library`
- Handle: `design-library`
- Template: `page.design-library`
- Content: Gallery of available designs

#### Contact
- Title: `Contact`
- Handle: `contact`
- Template: `page.contact`
- Content: Contact form and information

---

## 7. Payments Configuration

### Shopify Payments
1. Go to **Settings > Payments**
2. Set up Shopify Payments:
   - Complete business verification
   - Connect bank account
   - Enable all card types

### PayPal
1. In Payments settings, add PayPal
2. Connect PayPal Business account
3. Enable Venmo (optional)

### Additional Options
- Enable Shop Pay (automatic with Shopify Payments)
- Enable Apple Pay (automatic)
- Enable Google Pay (automatic)

---

## 8. Shipping Setup

### Shipping Zones
Go to **Settings > Shipping and delivery**

#### Domestic (United States)
Create shipping zone "United States":

| Rate Name | Condition | Price |
|-----------|-----------|-------|
| Standard Shipping | Under $75 | $5.99 |
| Free Shipping | $75+ | Free |
| Express Shipping | All orders | $12.99 |

#### Canada
Create shipping zone "Canada":

| Rate Name | Condition | Price |
|-----------|-----------|-------|
| Standard International | All orders | $15.99 |
| Express International | All orders | $29.99 |

### Product Weights
Ensure all products have accurate weights set for calculated rates.

### Packaging
Consider creating custom packaging profiles if using multiple box sizes.

---

## 9. Tax Configuration

### Automatic Tax
1. Go to **Settings > Taxes and duties**
2. Enable automatic tax calculation for US
3. Configure tax settings:
   - US: Enable "Charge taxes"
   - Include tax in prices: No (show tax at checkout)

### Tax Registrations
Register for sales tax in states where you have nexus (physical presence or economic nexus).

---

## 10. Email Notifications

### Customize Notifications
Go to **Settings > Notifications** and customize:

#### Order Confirmation
Include:
- Order details
- Personalization information
- Next steps for photo/logo uploads
- Link to Custom Upload page

#### Shipping Confirmation
Include:
- Tracking information
- Estimated delivery
- Care instructions

#### Custom Notification (Optional)
Create notification for proof approval (requires app integration).

### Sample Order Confirmation Text

```
Thank you for your order!

We've received your order for [Product Name] and we're excited to create it for you.

**IMPORTANT: Photo/Logo Upload Required**
If your order includes photo or logo engraving, please upload your image within 24 hours:
[LINK TO CUSTOM UPLOAD PAGE]

Your order number is: [Order Number]
You'll need this number when uploading your image.

**What Happens Next:**
1. We'll review your order and uploaded image
2. You'll receive a digital proof for approval via email
3. Once approved, we'll begin production
4. Your order will ship within 5-7 business days

Questions? Reply to this email or contact us at hello@layerlaunchlaserlabs.com

Thank you for choosing LayerLaunch Laser Labs!
```

---

## 11. Domain & SSL

### Custom Domain
1. Go to **Settings > Domains**
2. Add custom domain: `layerlaunchlaserlabs.com`
3. Update DNS records:
   - A Record: Shopify IP
   - CNAME: Shopify domain

### SSL Certificate
- Automatic with Shopify (free SSL)
- Verify HTTPS is working on all pages

---

## 12. Final Checklist

### Before Launch
- [ ] All products created with images and descriptions
- [ ] Collections organized
- [ ] Navigation menus configured
- [ ] All pages created with content
- [ ] Payments tested (use test mode)
- [ ] Shipping rates configured
- [ ] Tax settings configured
- [ ] Email notifications customized
- [ ] Domain connected
- [ ] SSL active
- [ ] Mobile testing completed
- [ ] Forms tested (Custom Upload, Quote Request)

### Content Review
- [ ] Homepage content complete
- [ ] Product descriptions written
- [ ] About page content
- [ ] FAQ populated
- [ ] Policy pages complete

### Technical Review
- [ ] All pages load correctly
- [ ] Cart and checkout work
- [ ] Order confirmation emails send
- [ ] Inventory tracking enabled
- [ ] Analytics configured

---

## Ongoing Maintenance

### Weekly Tasks
- Check and fulfill orders
- Respond to quote requests
- Process image uploads
- Update inventory

### Monthly Tasks
- Review analytics
- Update promotions
- Add new products/designs
- Check for theme updates

### Quarterly Tasks
- Review and update policies
- Analyze best sellers
- Plan seasonal products
- Backup store data

---

## Support Resources

- [Shopify Help Center](https://help.shopify.com)
- [Shopify Community](https://community.shopify.com)
- [Horizon Theme Documentation](https://themes.shopify.com/themes/horizon)

---

*Last Updated: January 2026*
