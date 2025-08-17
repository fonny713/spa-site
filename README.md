# Serenity Spa - Modern Spa Website

A modern, responsive spa website built with cutting-edge technologies for a luxury wellness experience.

## 🌟 Features

- **Modern Design**: Clean, elegant interface with smooth animations
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Service Booking**: Interactive booking system with modal dialogs
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Proper meta tags and structured content
- **Fast Performance**: Built with Next.js 14 App Router and Turbopack
- **Accessibility**: Following web accessibility best practices

## 🚀 Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations and interactions
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **Turbopack** - Ultra-fast bundler for development

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd spa-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main homepage component
├── components/
│   └── ui/
│       ├── button.tsx       # Reusable button component
│       └── dialog.tsx       # Modal dialog component
└── lib/
    └── utils.ts             # Utility functions
```

## 🎨 Design Features

### Sections Included
- **Hero Section**: Eye-catching introduction with call-to-action
- **Services**: Showcase of spa treatments with pricing
- **About**: Company information and statistics
- **Testimonials**: Customer reviews and ratings
- **Contact**: Contact information and contact form
- **Booking Modal**: Interactive appointment booking system

### Color Scheme
- Primary: Green tones (health and tranquility)
- Secondary: Blue accents (calm and trust)
- Background: Soft gradients for warmth
- Text: Professional gray scale

## 🛠️ Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🎯 Performance Optimizations

- Static site generation with Next.js
- Image optimization (ready for next/image integration)
- CSS-in-JS with Tailwind for optimal bundle size
- Tree-shaking for unused code elimination
- Turbopack for ultra-fast development

## 🔧 Customization

### Adding New Services
Edit the `services` array in `src/app/page.tsx`:

```typescript
const services = [
  {
    name: "Your Service",
    duration: "60 min",
    price: "$120",
    description: "Service description",
    image: "/path/to/image"
  }
]
```

### Modifying Colors
Update the CSS variables in `src/app/globals.css` or modify the Tailwind config.

### Adding New Components
Create new components in `src/components/` and follow the existing patterns.

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically with every push to main branch

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Heroku

## 📄 License

This project is for educational and demonstration purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support and inquiries, please contact the development team.

---

Built with ❤️ using modern web technologies
