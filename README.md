# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- 🌙 Dark mode support
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 📝 Sections for:
  - Hero
  - About
  - Skills
  - Projects
  - Experience
  - Certifications
  - Contact
  - Footer

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Project Structure

```
portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   │   └── images/
│   ├── package.json
│   └── vite.config.js
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Create necessary directories for assets:
   ```bash
   mkdir -p public/images/projects
   mkdir -p public/images/certifications
   ```

4. Add your personal information:
   - Update the content in each component with your personal information
   - Add your profile picture to `public/images/profile.jpg`
   - Add project images to `public/images/projects/`
   - Add certification images to `public/images/certifications/`

5. Customize the theme:
   - Colors can be modified in `src/index.css`
   - Dark mode preferences can be adjusted in the components

## Running the Project

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## Building for Production

1. Create a production build:
   ```bash
   npm run build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   ```

## Customization Guide

### Personal Information
1. Update `Hero.jsx`:
   - Your name
   - Professional title
   - Brief description
   - Social media links

2. Update `About.jsx`:
   - Your bio
   - Education details
   - Key skills
   - Interests

3. Update `Skills.jsx`:
   - Modify the skills array with your expertise
   - Adjust skill levels (0-100)

4. Update `Projects.jsx`:
   - Add your projects
   - Update project images
   - Add GitHub and live demo links

5. Update `Experience.jsx`:
   - Add your work experience
   - Update company details
   - Add achievements

6. Update `Certifications.jsx`:
   - Add your certifications
   - Update certification images
   - Add credential IDs and links

7. Update `Contact.jsx`:
   - Add your email
   - Update location
   - Add social media links

8. Update `Footer.jsx`:
   - Update copyright information
   - Add your name
   - Update social links

### Images
- Profile picture: `public/images/profile.jpg`
- Project images: `public/images/projects/`
- Certification images: `public/images/certifications/`

## Technologies Used

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Scroll
- Heroicons

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons from Heroicons
- Design inspiration from various portfolio websites
- Community support and feedback 