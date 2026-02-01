# LayerLaunch Laser Labs - Shopify Store

Premium custom engraved products e-commerce store built on Shopify.

## Overview

LayerLaunch Laser Labs (3L) is a direct-to-consumer e-commerce store specializing in:
- **Slate Coasters** - Premium natural slate with custom laser engraving
- **Golf Items** - Personalized ball markers and accessories
- **Branding Gifts** - Corporate and business gift solutions

## Features

### Personalization System
- Text engraving via line item properties
- Photo/logo upload workflow (post-purchase)
- Design library selection
- Bulk order quote requests

### Custom Sections
- Hero Banner with overlay controls
- Featured Collections grid
- Trust Bar with icons
- Testimonials carousel
- Custom Upload CTA
- Design Library preview
- Newsletter signup

### Page Templates
- `page.about` - Company story and process
- `page.faq` - Accordion-style FAQ
- `page.custom-upload` - Image upload form
- `page.quote` - Bulk order quote request
- `page.design-library` - Filterable design gallery

### Product Features
- Personalization form integration
- Bulk order CTA
- Related products
- Material/care accordion
- Trust badges

## Project Structure

```
theme/
├── assets/                  # CSS and JS assets
│   ├── section-hero-banner.css
│   ├── section-featured-collections.css
│   └── section-testimonials.css
├── config/
│   └── settings_schema.json # Theme settings
├── layout/                  # Theme layouts
├── locales/                 # Translations
├── sections/                # Custom sections
│   ├── hero-banner.liquid
│   ├── featured-collections.liquid
│   ├── trust-bar.liquid
│   ├── testimonials.liquid
│   ├── why-different.liquid
│   ├── custom-upload-cta.liquid
│   ├── design-library-preview.liquid
│   ├── newsletter.liquid
│   ├── product-main.liquid
│   ├── related-products.liquid
│   ├── collection-main.liquid
│   ├── page-custom-upload.liquid
│   ├── page-quote-request.liquid
│   ├── page-faq.liquid
│   ├── page-about.liquid
│   └── page-design-library.liquid
├── snippets/                # Reusable components
│   ├── product-personalization-form.liquid
│   └── bulk-order-cta.liquid
└── templates/               # Page templates
    ├── index.json
    ├── product.json
    ├── collection.json
    ├── page.about.json
    ├── page.faq.json
    ├── page.custom-upload.json
    ├── page.quote.json
    └── page.design-library.json
```

## Documentation

- **[IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md)** - Complete implementation overview
- **[SHOPIFY_ADMIN_SETUP.md](./SHOPIFY_ADMIN_SETUP.md)** - Step-by-step Shopify admin setup

## Quick Start

### 1. Upload Theme Files
Upload the contents of the `/theme` directory to your Shopify theme:
1. Go to **Online Store > Themes > Edit code**
2. Upload files to corresponding directories
3. Replace or merge with existing files

### 2. Configure Settings
1. Go to **Online Store > Themes > Customize**
2. Add sections to homepage in order
3. Configure section settings

### 3. Create Content
1. Create collections (Slate Coasters, Golf Items, Branding Gifts)
2. Create pages using custom templates
3. Set up navigation menus
4. Add products with personalization fields

### 4. Configure Commerce
1. Set up payments (Shopify Payments, PayPal)
2. Configure shipping zones and rates
3. Enable tax calculation
4. Customize email notifications

## Key Pages

| Page | URL | Template | Purpose |
|------|-----|----------|---------|
| Home | `/` | `index.json` | Landing page |
| Shop | `/collections/all` | `collection.json` | All products |
| Slate Coasters | `/collections/slate-coasters` | `collection.json` | Main collection |
| Design Library | `/pages/design-library` | `page.design-library` | Browse designs |
| Custom Upload | `/pages/custom-upload` | `page.custom-upload` | Image upload form |
| Request Quote | `/pages/request-quote` | `page.quote` | Bulk order form |
| About | `/pages/about-us` | `page.about-us` | Company info |
| FAQ | `/pages/faq` | `page.faq` | Common questions |

## Personalization Workflow

### Text Engraving
1. Customer adds product to cart with text fields filled
2. Text captured as line item properties
3. Appears in order details for production

### Photo/Logo Engraving
1. Customer places order for photo/logo product
2. Order confirmation includes upload instructions
3. Customer visits Custom Upload page
4. Submits image with order number
5. Team receives upload, creates proof
6. Customer approves proof
7. Production begins

### Design Library Selection
1. Customer browses Design Library
2. Selects design and requests on product
3. Form submission or adds to cart with design name
4. Order processed with specified design

## Collections

| Collection | Handle | Description |
|------------|--------|-------------|
| Slate Coasters | `slate-coasters` | Primary product line |
| Golf Items | `golf-items` | Golf accessories |
| Branding Gifts | `branding-gifts` | Corporate gifts |
| All Products | `all` | Complete catalog |
| Best Sellers | `best-sellers` | Top products |

## Shipping

| Zone | Rate | Condition |
|------|------|-----------|
| US Standard | $5.99 | Under $75 |
| US Free | Free | $75+ |
| US Express | $12.99 | All orders |
| Canada | $15.99+ | All orders |

## Support

- **Email**: hello@layerlaunchlaserlabs.com
- **Documentation**: See `/docs` folder
- **Shopify Help**: https://help.shopify.com

## Brand

**LayerLaunch Laser Labs** by Andromeda Media LLC

*Premium custom engraved products, made to order in Michigan.*

---

*Built with Shopify + Custom Liquid Theme*
