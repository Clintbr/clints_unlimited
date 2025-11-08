# 🚀 DevPortfolio - Modern Freelancer Portfolio

Ein modernes, mehrsprachiges Portfolio für Freelance Softwareentwickler, erstellt mit Vue.js 3, Vuetify und Vue Router. Perfekt für Frontend-, UX- oder WebApp-Entwickler mit Designanspruch.

![Vue.js](https://img.shields.io/badge/Vue.js-3.3.0-4FC08D?logo=vue.js)
![Vuetify](https://img.shields.io/badge/Vuetify-3.3.0-1867C0?logo=vuetify)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript)
![i18n](https://img.shields.io/badge/i18n-3%20Sprachen-FF6D70)

## ✨ Features

### 🎨 Design & UX
- **Modernes Design** mit kreativ-tech Farbmodell
- **Dark/Light Mode** mit persistenter Speicherung
- **Responsive Design** für alle Geräte
- **Smooth Animationen** und Hover-Effekte
- **Gradient Text** und Hintergründe
- **Professionelle Typografie** mit Inter Font

### 🌐 Internationalisierung
- **3 Sprachen**: Deutsch, Englisch, Französisch
- **Automatische Spracherkennung** vom Browser
- **Sprachumschalter** mit Flaggen-Icons
- **Persistente Sprachauswahl**

### 📄 Seiten & Funktionen
- **Home** - Elevator Pitch & Skills Overview
- **About** - Persönliche Vorstellung & Werte
- **Portfolio** - Projektgalerie mit Filter
- **Career** - Stellenausschreibungen mit Bewerbungsfunktion
- **Contact** - Kontaktformular mit FAQ

### 🛠 Technische Features
- **Vue 3 Composition API**
- **Vue Router** für Navigation
- **Vuetify 3** für UI Components
- **Vue I18n** für Internationalisierung
- **EmailJS Integration** für Kontaktformulare
- **File Upload** für Bewerbungen
- **Modulare Komponentenarchitektur**

## 🎯 Farbpalette

```css
Primär: #111827 (Tiefes Anthrazit)
Sekundär: #F9FAFB (Warmgrau/Offwhite)
Akzent: Gradient #6366F1 → #3B82F6 (Violett → Blau)
Highlight: #FACC15 (Gelb) oder #10B981 (Mint)
```

## 📁 Projektstruktur

```
src/
├── components/
│   ├── layout/
│   │   ├── AppHeader.vue
│   │   ├── AppFooter.vue
│   │   └── ThemeToggle.vue
│   ├── sections/
│   │   ├── HeroSection.vue
│   │   ├── SkillsSection.vue
│   │   ├── ServicesSection.vue
│   │   ├── ProjectsSection.vue
│   │   ├── TestimonialsSection.vue
│   │   └── ContactSection.vue
│   └── ui/
│       ├── GradientText.vue
│       ├── AnimatedCard.vue
│       ├── ProjectCard.vue
│       └── LanguageSwitcher.vue
├── views/
│   ├── HomeView.vue
│   ├── AboutView.vue
│   ├── PortfolioView.vue
│   ├── CareerView.vue
│   └── ContactView.vue
├── plugins/
│   └── vuetify.js
├── composables/
│   ├── useTheme.js
│   └── useI18n.js
├── locales/
│   └── index.js
├── router/
│   └── index.js
├── App.vue
└── main.js
```

## 🚀 Installation & Setup

### Voraussetzungen
- Node.js 16+ 
- npm oder yarn

### 1. Projekt klonen und installieren
```bash
git clone <your-repo-url>
cd dev-portfolio
npm install
```

### 2. Entwicklungsserver starten
```bash
npm run dev
```
Öffne [http://localhost:3000](http://localhost:3000) im Browser.

### 3. Build für Produktion
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

## ⚙️ Konfiguration

### EmailJS Setup (für Kontaktformular & Bewerbungen)
1. Registriere dich bei [EmailJS](https://www.emailjs.com/)
2. Erstelle einen Email Service (z.B. Gmail)
3. Erstelle Email Templates für Kontakt und Bewerbungen
4. Aktualisiere die Keys in `CareerView.vue` und `ContactView.vue`:

```javascript
await emailjs.send(
  'your_service_id',      // Von EmailJS Dashboard
  'your_template_id',     // Von EmailJS Templates
  templateParams,
  'your_public_key'       // Von EmailJS Account
)
```

### Vuetify Theme Anpassung
Ändere die Farben in `src/plugins/vuetify.js`:

```javascript
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          primary: '#111827',
          secondary: '#F9FAFB',
          accent: '#6366F1',
          // ... deine Farben
        }
      }
      // ...
    }
  }
})
```

## 🌐 Sprachen hinzufügen

1. Neue Sprache in `src/locales/index.js` hinzufügen:
```javascript
export default {
  es: { // Spanisch Beispiel
    navigation: {
      home: 'Inicio',
      about: 'Sobre mí',
      // ...
    }
    // ...
  }
}
```

2. Sprache im LanguageSwitcher ergänzen:
```javascript
const locales = [
  // ... existierende Sprachen
  { code: 'es', name: 'Español', flag: '🇪🇸' }
]
```

## 📧 Kontaktformular & Bewerbungen

### Kontaktformular
- Sendet Emails an konfigurierte Adresse
- Validiert alle Pflichtfelder
- Unterstützt File Uploads

### Bewerbungsformular
- Positions-spezifische Bewerbungen
- Dokumenten-Upload (CV, Portfolio, etc.)
- Automatische Email-Benachrichtigung
- Erfolgsbestätigung

## 🎨 Customization

### Eigene Projekte hinzufügen
Bearbeite `projects` Array in `PortfolioView.vue`:

```javascript
const projects = ref([
  {
    id: 'your-project',
    category: 'web',
    icon: '🚀',
    technologies: ['Vue.js', 'Node.js'],
    features: ['feature1', 'feature2'],
    demoUrl: 'https://your-demo.com'
  }
])
```

### Skills anpassen
Ändere `skillCategories` in `HomeView.vue`:

```javascript
const skillCategories = ref([
  {
    name: 'frontend',
    skills: [
      { name: 'vuejs', level: 90 },
      { name: 'react', level: 80 }
    ]
  }
])
```

## 📱 Responsive Design

Das Portfolio ist optimiert für:
- 📱 Mobile (320px+)
- 📟 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Screens (1440px+)

## 🔧 Scripts

```json
{
  "dev": "vite",           // Start Development Server
  "build": "vite build",   // Build for Production
  "preview": "vite preview" // Preview Production Build
}
```

## 📦 Dependencies

### Core
- `vue` - Vue.js 3 Framework
- `vue-router` - Client-side Routing
- `vuetify` - Material Design Component Framework
- `vue-i18n` - Internationalization

### Development
- `vite` - Build Tool & Dev Server
- `@vitejs/plugin-vue` - Vite Vue Plugin
- `sass` - CSS Preprocessor

### Services
- `emailjs-com` - Email Service Integration

## 🚀 Deployment

### Netlify
1. Build-Befehl: `npm run build`
2. Ausgabe-Verzeichnis: `dist`

### Vercel
1. Connect GitHub Repository
2. Automatic Deploy on Push

### Static Hosting
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 📄 Lizenz

MIT License - siehe [LICENSE](LICENSE) Datei für Details.

## 🌟 Nächste Schritte

- [ ] Blog-Sektion hinzufügen
- [ ] SEO Optimierung
- [ ] PWA Features
- [ ] Analytics Integration
- [ ] Performance Monitoring

---

**Entwickelt mit ❤️ für die Developer Community**

*Letztes Update: November 2025*
