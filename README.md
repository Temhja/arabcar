# 🚗 ArabCar – Website Project

Premium car rental website for Arabic-speaking Gulf travelers visiting Germany.
Built with vanilla HTML, CSS, and JavaScript — no frameworks required.

---

## 📁 Folder Structure

```
arabcar/
├── index.html              ← Main page (open this in browser)
├── css/
│   ├── reset.css           ← CSS reset (don't edit)
│   ├── variables.css       ← Colors, fonts, spacing tokens
│   ├── layout.css          ← All sections layout & styling
│   ├── components.css      ← Loader, toast, small components
│   ├── animations.css      ← Keyframes & scroll-reveal
│   ├── responsive.css      ← Mobile/tablet breakpoints
│   └── rtl.css             ← Arabic RTL overrides
├── js/
│   ├── i18n.js             ← All translations (EN/AR/DE)
│   ├── animations.js       ← Scroll-reveal & testimonials carousel
│   ├── filters.js          ← Car filter, search, sort, price range
│   └── main.js             ← Header, forms, loader, misc
└── images/
    ├── README.md           ← Image guide
    ├── logo.png            ← ⚠️ ADD YOUR LOGO HERE
    └── (car images…)      ← ⚠️ ADD CAR PHOTOS HERE
```

---

## 🚀 Quick Start (VS Code)

1. Open the `arabcar/` folder in VS Code
2. Install the **Live Server** extension (ritwickdey.LiveServer)
3. Right-click `index.html` → **Open with Live Server**
4. The site opens at `http://127.0.0.1:5500`

---

## ✏️ What You Need to Edit

### 1. Logo
- Place your logo at `images/logo.png` (or `.svg`)
- The fallback "ARABCAR" text shows automatically if no image found

### 2. Car Photos
- Add car images to `images/` folder
- See `images/README.md` for exact filenames needed
- Update the `<img src="images/...">` in each `.car-card` in `index.html`

### 3. Add / Remove Cars
- In `index.html`, find the `<!-- Car Grid -->` section
- Duplicate any `.car-card` block for a new car
- Update: `data-category`, `data-price`, `data-name`, image src, price, specs, total

### 4. Company Contact Info
Search `index.html` for these `<!-- NOTE: -->` comments:
- Phone number: `+49 151 234 56789`
- Email: `info@arabcar.de`
- WhatsApp number in the `wa.me/` link
- Social media links (Instagram, X, TikTok)

### 5. Translations
- Edit `js/i18n.js`
- Find the `en:`, `ar:`, or `de:` object
- Update any text string by its key
- ⚠️ Have a native Arabic speaker review the `ar:` section for accuracy

### 6. Booking Integration
- In `js/main.js`, find the `BOOKING FORM` section
- Replace the `showToast(...)` line with your actual booking URL or API call
- Options: redirect to a booking platform, use Calendly, or build a backend

### 7. Contact Form Backend
- In `js/main.js`, find the `CONTACT FORM` section
- Replace with [Formspree](https://formspree.io) (free tier), EmailJS, or your server
- Quick Formspree: replace `<form>` submit handler with a `fetch('https://formspree.io/f/YOUR_ID', ...)`

### 8. Legal Pages (Required in Germany!)
- Create a `legal/` folder
- Create `impressum.html`, `datenschutz.html`, `agb.html`
- ⚠️ German law requires Impressum — consult a lawyer for content
- Footer links already point to these files

### 9. Colors / Branding
- Edit `css/variables.css`
- Main brand color: `--clr-primary: #F5A623` (amber orange from logo)
- Background dark: `--clr-black: #0F0F0F`
- Change any variable to update it site-wide

### 10. Adding More Locations
- In `index.html`, find the `LOCATIONS` section
- Duplicate a `.location-card` and update city name / terminal info
- Also add the city to the `<select>` dropdowns in the booking form

---

## 🌍 Languages

| Code | Language | Direction |
|------|----------|-----------|
| `en` | English  | LTR       |
| `ar` | Arabic   | RTL ✅    |
| `de` | German   | LTR       |

- User's preferred language is **remembered** via `localStorage`
- All text strings are in `js/i18n.js` — easy to edit without touching HTML
- RTL layout for Arabic is handled by `css/rtl.css` + `<html dir="rtl">`

---

## 📱 Mobile Responsive

- Tested breakpoints: 480px, 768px, 1024px
- Mobile menu: hamburger → full-screen overlay
- Booking form stacks vertically on mobile
- Car grid: 3 cols → 2 cols → 1 col
- Filter pills scroll horizontally on small screens

---

## 🔌 Integrations (Recommended)

| Feature           | Suggested Service               |
|-------------------|---------------------------------|
| Contact Form      | [Formspree](https://formspree.io) (free) |
| Newsletter        | [Mailchimp](https://mailchimp.com) |
| Booking Engine    | Custom backend or [Rentware](https://www.rentware.com) |
| Analytics         | Google Analytics 4 or Plausible |
| WhatsApp Chat     | [wa.me/](https://wa.me) link (already in contact section) |
| Maps              | Google Maps embed in Locations section |

---

## ⚠️ Legal (Germany)

German websites MUST have:
1. **Impressum** (company legal notice) — required by TMG §5
2. **Datenschutzerklärung** (privacy policy) — required by GDPR
3. **AGB** (general terms and conditions) — required for rental contracts
4. **Cookie consent** banner — if using analytics/tracking

→ Links to these are in the footer, but you must create the content.
→ Consult a German lawyer or use a service like [e-recht24.de](https://www.e-recht24.de).

---

## 📦 Deployment

### Free Hosting Options
- **Netlify**: Drag & drop the `arabcar/` folder to [netlify.com](https://netlify.com)
- **Vercel**: Connect GitHub repo, auto-deploys
- **GitHub Pages**: Push to GitHub, enable Pages in settings

### Custom Domain
- Buy `arabcar.de` or `arabcar-germany.com` from a registrar
- Connect to Netlify/Vercel via DNS settings

---

## 🛠 VS Code Recommended Extensions

| Extension                   | Purpose                        |
|-----------------------------|--------------------------------|
| Live Server                 | Local dev server with hot reload |
| Prettier                    | Code formatting                |
| HTML CSS Support            | Autocomplete for classes       |
| Arabic Language Pack        | Arabic text support in editor  |
| Auto Rename Tag             | Rename HTML tags together      |

---

*Built for ArabCar GmbH — Premium Car Rental in Germany*
