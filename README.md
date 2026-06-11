# Yoshan Coffee Roasters — Website

**Domain**: store.gohaiyangai.com  
**Stack**: Pure HTML/CSS/JS — no build tools, no framework  
**Hosting**: Cloudflare Pages (free)  
**Repo**: GitHub

## File Structure

```
yoshan-site/
├── index.html           # Homepage (Hero + Products + Quote form)
├── about.html           # About Us + Factory + Certifications
├── products/
│   ├── index.html       # All Products listing page
│   ├── dy-series.html   # DY Series collection
│   ├── ys-series.html   # YS Series collection
│   ├── sd-series.html   # SD Series collection
│   ├── accessories.html # Accessories page
│   ├── dy-1kg.html      # DY-1KG product detail
│   ├── ys-6kg.html      # YS-6KG product detail
│   ├── ys-15kg.html     # YS-15KG product detail
│   ├── sd-15kg.html     # SD-15KG Pro product detail
│   └── sd-30kg.html     # SD-30KG Pro product detail
├── css/
│   └── style.css        # All styles
├── js/
│   └── main.js          # Interactions + calculator + form
├── images/
│   ├── hero-banner.png  # Homepage hero image
│   ├── products/        # Product photos (copy from local)
│   └── factory/         # Factory photos (copy from local)
├── robots.txt
├── sitemap.xml
└── _redirects           # Cloudflare Pages redirects
```

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub repo (e.g., `yoshan-roasters-site`)
2. Go to https://pages.cloudflare.com → Connect to GitHub → Select repo
3. Build settings: **Framework preset: None** | Build command: (leave blank) | Output dir: `/` (root)
4. Deploy → takes ~30 seconds
5. Add custom domain: `store.gohaiyangai.com`
6. In Namecheap DNS: add CNAME record `store` → `yoshan-roasters-site.pages.dev`

## Adding Images

Copy your product photos to:
- `images/products/` — product main images (jpg, min 800×600px)
- `images/factory/` — factory/company photos

Naming convention matches HTML references:
- `dy-1kg.jpg`, `ys-6kg.jpg`, `sd-15kg.jpg`, `sd-30kg.jpg`, `ys-15kg.jpg`, `ec-500g.jpg`
- `factory-main.jpg`, `factory-exterior.jpg`, `factory-floor.jpg`, `factory-qc.jpg`, `factory-drum.jpg`, `factory-assembly.jpg`, `factory-test.jpg`
- `hero-banner.png` (hero banner, 1920×1080px)

## Contact Config (already set)
- WhatsApp: +86 18407714607 (Leon)
- Email: leonzka0620@gmail.com
