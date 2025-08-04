# Malang Coffee House - Web Development Project

A modern, responsive website for Malang Coffee House, showcasing premium coffee experiences in Malang, Indonesia. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern React Application** - Built with React 18 and TypeScript
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Multi-page Navigation** - Home, About, Menu, Gallery, Blog, and Contact pages
- **SEO Optimized** - React Helmet for meta tags and page titles
- **Beautiful UI** - Coffee-themed design with warm, inviting aesthetics
- **Fast Development** - Vite for lightning-fast development and build times

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

## 🛠️ Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd web-dev-cafe
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or if you prefer yarn:
   ```bash
   yarn install
   ```

## 🏃‍♂️ Running the Project

### Development Mode

To start the development server:

```bash
npm run dev
```

This will start the Vite development server, typically at `http://localhost:5173`. The page will automatically reload when you make changes to the code.

### Production Build

To create a production build:

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

### Linting

To check for code quality issues:

```bash
npm run lint
```

## 📁 Project Structure

```
web-dev-cafe/
├── public/                 # Static assets
│   └── coffee-icon.svg
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── pages/             # Page components
│   │   ├── Homepage.tsx
│   │   ├── About.tsx
│   │   ├── Menu.tsx
│   │   ├── Gallery.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogPost.tsx
│   │   └── Contact.tsx
│   ├── data/              # Data files
│   │   └── blogPosts.ts
│   ├── styles/            # Global styles
│   │   └── global.css
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Base styles
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Color Palette

This project uses a carefully selected coffee-themed color palette. Here are all the colors with their hex codes, names, and visual representation:

### Primary Colors
- **Primary Brown** `#2E1A0F` ![#2E1A0F](https://via.placeholder.com/20/2E1A0F/FFFFFF?text=+) - Deep coffee brown (used for headings, text)
- **Secondary Cream** `#F8F4E9` ![#F8F4E9](https://via.placeholder.com/20/F8F4E9/000000?text=+) - Warm cream (used for backgrounds)
- **Accent Gold** `#D4A017` ![#D4A017](https://via.placeholder.com/20/D4A017/FFFFFF?text=+) - Rich gold (used for buttons, highlights)
- **Light Brown** `#8B5A2B` ![#8B5A2B](https://via.placeholder.com/20/8B5A2B/FFFFFF?text=+) - Medium brown (used for secondary text)

### Supporting Colors
- **Dark Cream** `#F0E6D2` ![#F0E6D2](https://via.placeholder.com/20/F0E6D2/000000?text=+) - Muted cream (used for subtle backgrounds)
- **White** `#FFFFFF` ![#FFFFFF](https://via.placeholder.com/20/FFFFFF/000000?text=+) - Pure white (used for cards, text on dark backgrounds)
- **Gray 100** `#F5F5F5` ![#F5F5F5](https://via.placeholder.com/20/F5F5F5/000000?text=+) - Light gray (used for subtle backgrounds)
- **Gray 600** `#6B7280` ![#6B7280](https://via.placeholder.com/20/6B7280/FFFFFF?text=+) - Medium gray (used for muted text)
- **Gray 800** `#1F2937` ![#1F2937](https://via.placeholder.com/20/1F2937/FFFFFF?text=+) - Dark gray (used for dark text)

### Interactive Colors
- **Hover Gold** `#B8910A` ![#B8910A](https://via.placeholder.com/20/B8910A/FFFFFF?text=+) - Darker gold (used for button hover states)

### Usage Examples
- **Text Colors**: Primary brown for headings, light brown for body text
- **Backgrounds**: Cream for main sections, white for cards
- **Accents**: Gold for buttons, highlights, and interactive elements
- **Overlays**: Primary brown with opacity for image overlays

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Helmet** - Document head management
- **Lucide React** - Icon library
- **ESLint** - Code linting

## 🎨 Design Features

- **Coffee-themed color palette** with warm browns and golds
- **Responsive layout** that works on all device sizes
- **Modern typography** with custom fonts
- **Smooth animations** and transitions
- **Professional imagery** showcasing coffee culture

## 📱 Pages

- **Homepage** - Hero section with featured content
- **About** - Company story and values
- **Menu** - Coffee and food offerings
- **Gallery** - Photo showcase
- **Blog** - Articles and updates
- **Contact** - Location and contact information

## 🔧 Configuration Files

- `vite.config.ts` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS customization
- `tsconfig.json` - TypeScript compiler options
- `eslint.config.js` - ESLint rules
- `postcss.config.js` - PostCSS plugins

## 🚀 Deployment

This project can be deployed to any static hosting service:

- **Vercel** - Recommended for React apps
- **Netlify** - Easy deployment with drag-and-drop
- **GitHub Pages** - Free hosting for public repositories
- **Firebase Hosting** - Google's hosting solution

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help with the project, please open an issue on GitHub or contact the development team.

---

**Happy coding! ☕**
