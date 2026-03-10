# Boxcom Frontend - Quick Reference Guide

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Development (with Turbopack - faster)
npm run dev

# Development (standard bundler)
npm run dev2

# Production build
npm run build

# Start production server
npm start

# Lint code
npm lint

# Deploy to GitHub Pages
npm run deploy
```

---

## 📍 Finding Things Quickly

### Adding a New Page
1. Create folder: `src/app/new-page/page.jsx`
2. Import server functions from `BackendContents.js`
3. Create `async` component
4. Fetch data, render components
5. Add SEO via `generateMetadata()`

Example:
```jsx
// src/app/new-page/page.jsx
import { getNewPageSEO, getNewPage } from "../../lib/BackendContents";

export async function generateMetadata() {
  const seo = await getNewPageSEO();
  return parseSeoTagsForMetaData(seo);
}

export default async function NewPage() {
  const data = await getNewPage();
  return <div>{/* render */}</div>;
}
```

### Adding a Backend Data Function
1. Open `src/lib/BackendContents.js`
2. Add `"use server"` if not already present
3. Create async function:
```javascript
export async function getMyContent() {
  const data = await getBackendACF(process.env.MY_PAGE_ID);
  return { myField: data.my_field };
}
```
4. Add page ID to `.env`: `MY_PAGE_ID=123`

### Creating a Reusable Component
```jsx
// src/components/MyComponent/MyComponent.jsx
"use client"; // if interactive

export default function MyComponent({ data, children }) {
  return <div>{children}</div>;
}
```

---

## 🔧 Environment Variables Checklist

### Required Backend URLs (.env)
```
BACKEND_HOST=https://your-wordpress-site.com
BACKEND_URL=/wp-json/acf/v3/pages/:id
BACKEND_POSTS=/wp-json/wp/v2/posts
BACKEND_PORTFOLIO=/wp-json/wp/v2/portfolio
```

### Page IDs Configuration
```
HOMEPAGE_ID=9
ABOUT_US_ID=687
DIGITAL_MARKETING_ID=277
CREATIVE_CONTENT_ID=63
WEB_DEV_ID=132
LEAD_GENERATION_ID=597
```

### Form Configuration
```
CONTACT_FORM_ID=256
CONTACT_FORM_KEY=14eb697
```

### Analytics & Social
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-390N2VZVZK
NEXT_PUBLIC_INSTAGRAM_APP_ID=1365320928429898
```

---

## 📂 Component Organization by Feature

### Forms Components
```
src/components/Forms/
├── Input.jsx              # Generic input/textarea
├── InputEmail.jsx         # Email-specific
├── InputText.jsx          # Text-specific
├── Textarea.jsx           # Large text input
└── RequiredMention.jsx    # Helper text for required fields
```

### Button Variants
```
src/components/Buttons/
├── Button.jsx             # Primary button
├── Button2.jsx            # Secondary variant
└── ScrollButton.jsx       # Scroll-triggered buttons
```

### Animation Components
```
src/components/Doodles/    # Lottie animations
src/components/Audio/      # Sound players (Howler.js)
```

### Service Section Components
- `Homepage/` - 11 numbered sections
- `CreativeContent/` - 6 subsections
- `DigitalMarketing/` - 5 subsections
- `WebDevelopment/` - 6 subsections
- `LeadGeneration/` - 7 subsections

---

## 🎨 Styling Approach

### Tailwind CSS
- Primary utility framework
- Responsive classes: `md:`, `lg:`, `sm:`
- Dark mode: `.dark` class on `<html>`
- Custom colors via CSS variables

### SCSS Modules
- Page-specific styles: `PageName.module.scss`
- Complex animations and layouts
- Example: `Homepage/10_LetsMakeItHappen/LetsMakeItHappen.module.scss`

### Using Both Together
```jsx
// Component.jsx
import styles from './Component.module.scss';
import clsx from 'clsx';

export default function Component() {
  return (
    <div className={clsx(
      styles.container,
      'md:p-4 text-white'  // Tailwind
    )}>
      {/* content */}
    </div>
  );
}
```

---

## 🔄 Context & Hooks Reference

### Theme Context
```javascript
import { useTheme } from "@/contexts/ThemeProvider";

export default function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>{theme}</button>;
}
```

### Mobile Detection
```javascript
import { useIsMobile } from "@/contexts/UserAgentProvider";

export default function MyComponent() {
  const isMobile = useIsMobile();
  return <div>{isMobile ? "Mobile" : "Desktop"}</div>;
}
```

### Custom Hooks
```javascript
import { useDoodle } from "@/hooks/useDoodle";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useNextScreenAboveCurrent } from "@/hooks/useNextScreenAboveCurrent";

// Check if matches media query
const isLarge = useMediaQuery("(min-width: 1024px)");

// Lottie animation lifecycle
const { lottieRef, isPlaying, play } = useDoodle();

// Scroll to next screen
const { scroll } = useNextScreenAboveCurrent();
```

---

## 📊 Data Flow Patterns

### Server Component Pattern (Most Pages)
```jsx
// Async, data on server, rendered as HTML
export default async function Page() {
  const data = await getHomepage();  // Runs on server
  return <Component data={data} />;  // Cached, fast
}
```

### Client Component Pattern (Interactive)
```jsx
"use client";  // Runs in browser
import { useState, useEffect } from "react";

export default function Component() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

### Server Action Pattern (Forms)
```jsx
// Server function called from client
"use server";
export async function submitForm(formData) {
  const result = await axios.post(url, formData);
  return result.data;
}

// Client component
"use client";
export default function Form() {
  const [state, action, isPending] = useActionState(submitForm, {});
  return <form action={action}>...</form>;
}
```

---

## 🎬 Animation Patterns

### GSAP ScrollTrigger
```javascript
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Component() {
  const ref = useRef(null);
  
  useGSAP(() => {
    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        end: "bottom center",
        markers: true,  // dev only
      },
      duration: 1,
      opacity: 1,
      y: 0,
    });
  });
  
  return <div ref={ref} />;
}
```

### Lottie Animation
```jsx
import Lottie from "lottie-react";
import animationData from "./animation.json";

export default function Animation() {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{ width: 200, height: 200 }}
    />
  );
}
```

---

## 🧪 Common Debugging

### Enable API Request Logging
In `src/lib/HttpClients.js`, uncomment interceptors:
```javascript
_backendClient.interceptors.request.use((request) => {
  console.log("Starting Request");
  console.log(JSON.stringify(request, null, 2));
  return request;
});
```

### Check Device Type
Always visible in dev mode:
- `BreakpointIndicator` component shows current breakpoint
- Appears as a small indicator in bottom-left

### Theme Debugging
```javascript
// In browser console
localStorage.setItem('theme', 'dark');
location.reload();
```

### SEO Validation
- Check `generateMetadata()` output in page source
- Verify RankMath integration via `getXxxSEO()` functions
- Use [Next SEO Debugger](https://www.seobythe.dev/)

---

## 🚨 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Build fails with "Cannot find module" | Run `npm install`, check imports use `@/` alias |
| Forms don't submit | Check `.env` CONTACT_FORM_ID and FORM_SUBMISSION_URL |
| GSAP animations don't trigger | Verify ScrollTrigger plugin registered before use |
| Dark mode not working | Check localStorage and `<html>` class in DevTools |
| Images not loading | Verify CDN URL in `next.config.mjs` remotePatterns |
| Blog posts showing 404 | Check BACKEND_POSTS endpoint is correct |
| Lottie animation breaks | Verify JSON path and animation isn't corrupted |

---

## 📈 Performance Optimization Checklist

- [ ] Use `next/image` for images (commented out, consider re-enabling)
- [ ] Enable Turbopack: `npm run dev` (already default)
- [ ] Verify HTTP cache TTLs appropriate for content freshness
- [ ] Lazy load Lottie animations (load only visible sections)
- [ ] Enable component-level code splitting
- [ ] Monitor bundle size: `npm run build -- --analyze`
- [ ] Profile animations with DevTools Performance tab
- [ ] Minimize client-side state in providers

---

## 🔐 Security Checklist

- [ ] Never commit `.env` to repository
- [ ] Use `.env.local` for sensitive values
- [ ] Validate form inputs server-side
- [ ] Check honeypot field protection active
- [ ] Verify CORS headers on API endpoints
- [ ] Sanitize user-generated content from WordPress
- [ ] Keep dependencies updated: `npm audit fix`
- [ ] Use Content Security Policy headers

---

## 📚 Useful Links & Documentation

- **Next.js 16**: https://nextjs.org/docs
- **React 19**: https://react.dev
- **GSAP**: https://greensock.com/docs/v3/
- **Tailwind CSS 4**: https://tailwindcss.com/docs
- **WordPress REST API**: https://developer.wordpress.org/rest-api/
- **ACF REST API**: https://www.advancedcustomfields.com/blog/rest-api/
- **Contact Form 7 API**: https://contactform7.com/rest-api-for-form-requests/

---

## 🎯 Development Workflow

1. **Start development server**
   ```bash
   npm run dev
   ```

2. **Make changes** to components/styles/pages

3. **Check types** (if TypeScript)
   ```bash
   npx tsc --noEmit
   ```

4. **Lint code**
   ```bash
   npm run lint
   ```

5. **Test in production mode**
   ```bash
   npm run build && npm start
   ```

6. **Deploy**
   ```bash
   npm run deploy
   ```

---

## 📝 Git Workflow

```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes, commit
git add .
git commit -m "feat: add my feature"

# Push and create PR
git push origin feature/my-feature
```

### Commit Message Convention
```
feat: add new feature
fix: fix a bug
style: formatting changes
refactor: code restructuring
docs: documentation update
perf: performance improvement
test: add tests
chore: dependency update
```

---

## 💡 Pro Tips

1. **Use TypeScript**: Enable `strict: true` in `tsconfig.json` for better DX
2. **Component Composition**: Build large pages from numbered, reusable sections
3. **Cache Strategy**: Adjust TTL based on content update frequency
4. **Error Boundaries**: Wrap dynamic sections in React error boundaries
5. **Suspense**: Use `Suspense` with fallback skeletons for better UX
6. **Image Optimization**: Consider enabling Next.js Image optimization
7. **Testing**: Add vitest/Jest for component testing
8. **Monitoring**: Set up Sentry or similar for error tracking
9. **Analytics**: Use GA events for user journey tracking
10. **CDN**: Serve static assets via CDN for faster load times

