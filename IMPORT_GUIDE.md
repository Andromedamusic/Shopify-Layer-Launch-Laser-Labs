# Shopify Product & Collection Import Guide

## Overview

This guide explains how to import the pre-built product catalog and collections into your Shopify store. The `/data` folder contains CSV files ready for import.

---

## Files Included

| File | Description |
|------|-------------|
| `data/products.csv` | 15 products with variants (slate coasters, golf items) |
| `data/collections.csv` | 7 collections for organizing products |

---

## Step 1: Import Products

### Method A: Shopify Admin Import

1. **Download the CSV file**
   - Download `data/products.csv` from this repository

2. **Go to Products in Shopify Admin**
   - Navigate to: **Products** in the left sidebar

3. **Click Import**
   - Click the **Import** button (top right)
   - Select your `products.csv` file
   - Click **Upload and continue**

4. **Review the Import Preview**
   - Shopify will show you a preview of what will be imported
   - Verify the product count and data looks correct
   - Click **Import products**

5. **Wait for Import to Complete**
   - Large imports may take a few minutes
   - You'll receive an email when complete

### What Gets Imported

| Product | Price | Type |
|---------|-------|------|
| Custom Photo Slate Coaster — Single | $15.00 | Photo personalization |
| Custom Photo Slate Coaster — Set of 4 | $50.00 | Photo personalization |
| Michigan Themed Slate Coaster — Single | $12.00 | 3 design variants |
| Michigan Themed Slate Coaster — Set of 4 | $40.00 | 3 design variants |
| Golf Course Map Slate Coaster — Single | $18.00 | Custom course map |
| Golf Course Map Slate Coaster — Set of 4 | $60.00 | Custom course map |
| Custom Logo Slate Coaster — Single | $14.00 | Logo engraving |
| Custom Logo Slate Coaster — Set of 4 | $48.00 | Logo engraving |
| Custom Text Slate Coaster — Single | $12.00 | 3 font variants |
| Custom Text Slate Coaster — Set of 4 | $40.00 | 3 font variants |
| Slate Coaster Bulk Pack — 10 | $90.00+ | 4 customization types |
| Custom Golf Ball Marker | $12.00+ | 3 design types |
| Custom Golf Ball Marker — Set of 4 | $40.00+ | 2 design types |

---

## Step 2: Create Collections

### Option A: Manual Creation (Recommended)

Since Shopify's collection import is limited, create collections manually:

1. **Go to Products > Collections**
2. **Click Create collection**
3. **For each collection below:**

#### Slate Coasters
- **Title**: Slate Coasters
- **Description**: Premium natural slate coasters with custom laser engraving. Perfect for gifts, home décor, and personalization.
- **Collection type**: Automated
- **Conditions**: Product tag is equal to `coaster`

#### Golf Items
- **Title**: Golf Items
- **Description**: Custom engraved golf accessories for the course and beyond.
- **Collection type**: Automated
- **Conditions**: Product tag is equal to `golf`

#### Branding & Corporate Gifts
- **Title**: Branding & Corporate Gifts
- **Description**: Professional branded products for businesses and organizations.
- **Collection type**: Automated
- **Conditions**: Product tag is equal to `corporate` OR Product tag is equal to `branding`

#### Best Sellers
- **Title**: Best Sellers
- **Description**: Our most popular custom engraved products.
- **Collection type**: Automated
- **Conditions**: Product tag is equal to `bestseller`

#### Michigan Collection
- **Title**: Michigan Collection
- **Description**: Celebrate the Great Lakes State with Michigan-themed designs.
- **Collection type**: Automated
- **Conditions**: Product tag is equal to `michigan`

#### Photo Engraving
- **Title**: Photo Engraving
- **Description**: Transform your photos into laser-engraved keepsakes.
- **Collection type**: Automated
- **Conditions**: Product tag is equal to `photo`

---

## Step 3: Set Up Navigation

### Update Main Menu

1. Go to **Online Store > Navigation**
2. Edit **Main menu**
3. Add/update menu items:

```
Shop
├── Slate Coasters → /collections/slate-coasters
├── Golf Items → /collections/golf-items
├── Branding Gifts → /collections/branding-gifts
└── All Products → /collections/all

Design Library → /pages/design-library
Custom Upload → /pages/custom-upload
Request a Quote → /pages/request-quote
```

---

## Step 4: Add Product Images

Products are imported without images. You'll need to add images manually:

### For Each Product:

1. Go to **Products** and click the product
2. In the **Media** section, click **Add media**
3. Upload 4-6 images:
   - Main product shot (front view)
   - Angle shot showing texture
   - Close-up of engraving detail
   - Lifestyle shot (in use)
   - Packaging shot (optional)
   - Size reference shot (optional)

### Image Requirements:
- **Format**: JPG or PNG
- **Size**: At least 1000x1000 pixels
- **Background**: Clean, preferably white or lifestyle
- **File size**: Under 20MB

---

## Step 5: Configure Product Personalization

For products requiring customer input (text, font choice), you'll need to enable line item properties. This requires either:

### Option A: Use Shopify's Built-in Options
The product variants already include options like "Font Style" - these work automatically.

### Option B: Add Custom Text Fields (Requires App)
For free-form text input (customer's name, message, etc.), install an app:
- **Infinite Options** (free tier available)
- **Product Options & Customizer**
- **Bold Product Options**

These apps let you add text fields, file uploads, and conditional logic to products.

---

## Step 6: Verify Everything Works

### Test Checklist:

- [ ] All 15 products appear in Products list
- [ ] Product variants show correct prices
- [ ] Collections are created and populated
- [ ] Navigation menu links work
- [ ] Products appear on homepage
- [ ] Add to cart works
- [ ] Checkout process works (test mode)

---

## Troubleshooting

### Products Not Showing in Collections
- Verify the product has the correct tags
- Check collection conditions match the tags exactly
- Collections may take a few minutes to populate

### Import Errors
- Check CSV formatting (no extra commas, proper quoting)
- Ensure required fields are filled
- Try importing in smaller batches

### Missing Variants
- Some products have multiple variants (font styles, designs)
- These should import automatically with the CSV
- If missing, re-import or add variants manually

---

## Next Steps

After importing products:

1. **Add real product photos**
2. **Set up shipping rates** (Settings > Shipping)
3. **Configure taxes** (Settings > Taxes)
4. **Enable payments** (Settings > Payments)
5. **Create remaining pages** (About, FAQ, etc.)
6. **Test the complete checkout flow**
7. **Launch!**

---

## Support

Need help? Check these resources:
- [Shopify Help: Importing products](https://help.shopify.com/en/manual/products/import-export/import-products)
- [Shopify Help: Collections](https://help.shopify.com/en/manual/products/collections)
