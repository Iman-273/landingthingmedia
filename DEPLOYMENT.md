# Thing Media Landing Page - Deployment Guide

## Overview
This is a professional landing page for Thing Media, designed to help Seattle home service businesses scale with predictable growth. The page features a minimalist design with the updated brand color (#0f69ff) and Gotham typography.

## Features
- ✅ Responsive design optimized for all devices
- ✅ Professional typography using Gotham font family
- ✅ Brand-consistent blue color scheme (#0f69ff)
- ✅ Clean, minimalist design inspired by Razorpay and Logobly
- ✅ All required sections: Hero, Problem, Solution, Testimonial, Why Us, CTA
- ✅ SEO-optimized with proper meta tags
- ✅ Fast loading with optimized assets

## Sections Included
1. **Hero Section** - Main headline and call-to-action
2. **Problem Section** - Pain points for Seattle home service businesses
3. **Solution Section** - Introduction to Thing Media's services
4. **Testimonial Section** - Social proof from satisfied clients
5. **Why Us Section** - Key differentiators
6. **Call-to-Action Section** - Final conversion opportunity

## Deployment Instructions

### Using SiteGround Hosting
1. **Access SiteGround Control Panel**
   - URL: https://login.siteground.com
   - Email: william@thingmedia.com
   - Password: ndh_tga8QXY@cdv*ght

2. **Build the Project**
   ```bash
   npm run build
   ```

3. **Upload Files**
   - Upload the contents of the `dist` folder to your website's public directory
   - Ensure `index.html` is in the root directory

4. **Domain Configuration**
   - Point your domain to the uploaded files
   - Ensure SSL certificate is active

### Alternative Deployment Options

#### Netlify (Recommended for easy deployment)
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

#### Vercel
1. Import project from GitHub
2. Framework preset: Vite
3. Deploy automatically

## Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Customization

### Brand Colors
The brand color (#0f69ff) is defined in `src/index.css` and can be easily updated by modifying the CSS custom properties.

### Typography
Gotham font is loaded from CDN and applied throughout the site. To change fonts, update the font imports in `index.html` and the font family in `tailwind.config.ts`.

### Content Updates
All content is located in the respective component files in `src/components/sections/`. Each section can be easily modified without affecting others.

## File Structure
```
src/
├── components/
│   ├── sections/          # Main page sections
│   └── ui/               # Reusable UI components
├── assets/               # Images and static assets
├── lib/                  # Utility functions
└── pages/                # Page components
```

## Performance Optimizations
- Optimized images and assets
- Lazy loading for better performance
- Minimal JavaScript bundle
- CSS purging for smaller file sizes
- Responsive images

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contact
For technical support or customization requests, contact the development team.

---
**Thing Media** - Scale Your Seattle Home Service Business With Predictable Growth
