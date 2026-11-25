# Portfolio (React + Vite)

## Run it
1. Install Node.js LTS from nodejs.org (check with `node -v`).
2. Keep this folder OUTSIDE OneDrive (for example `C:\Projects\portfolio`).
3. In a terminal inside the folder:
   ```
   npm install
   npm run dev
   ```
4. Open the address it prints (usually http://localhost:5173).

## Edit your content (no component code needed)
- `src/data/profile.js`: name, email, links, skills. Replace the LinkedIn TODO.
- `src/data/projects.js`: your projects. Replace the K-Map GitHub link TODO.
- `public/Rudra_Ankur_Resume.docx`: the file behind "Download resume".

## Where each React concept lives
| Concept | File |
|---|---|
| Components and props | `components/ProjectCard.jsx`, `Navbar.jsx` |
| `map()` and keys | `pages/Home.jsx`, `pages/Projects.jsx` |
| `useState` | `KMapDemo.jsx`, `Projects.jsx`, `Contact.jsx` |
| Derived data | `KMapDemo.jsx` (minterms), `Projects.jsx` (shown) |
| `useEffect` | `App.jsx` (scroll to top), `hooks/useTheme.js` |
| Custom hook | `hooks/useTheme.js` |
| Routing | `main.jsx`, `App.jsx`, `Navbar.jsx` |
| Controlled form and validation | `pages/Contact.jsx` |

## Deploy
Push to GitHub, then import the repo at vercel.com (or netlify.com). Build command `npm run build`, output folder `dist`. `vercel.json` and `public/_redirects` already handle page refreshes on routes.
