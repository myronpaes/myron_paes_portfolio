# Content Guide — Adding Projects & Experience

All portfolio content lives in `src/data/`. Nothing in the UI needs to change when you add a new entry.

---

## Adding a new Project

### 1. Create the data file

Copy any file in `src/data/projects/` as a starting point and save it as `src/data/projects/<your-slug>.ts`.

Fill in the fields:

| Field | Required | Notes |
|---|---|---|
| `slug` | ✅ | URL-safe identifier, e.g. `"my-new-project"` |
| `number` | ✅ | Display number, e.g. `"13"` |
| `title` | ✅ | Short title shown on cards and the PDP |
| `subtitle` | ✅ | One-sentence descriptor shown on the PDP |
| `category` | ✅ | Dot-separated tags, e.g. `"Product · Strategy"` |
| `year` | ✅ | e.g. `"2026"` or `"2025–2026"` |
| `heroImage` | ✅ | Image shown on project **cards** and the homepage grid |
| `screenshot` | — | Full-width image shown on the **project page** below the buttons. Leave it out until you have a real screenshot — a placeholder will appear automatically. |
| `excerpt` | ✅ | One-sentence summary shown on the Projects grid |
| `kind` | ✅ | `"narrative"` (full case study), `"external"` (link out), or `"pdf"` |
| `externalUrl` | if external | URL to open when `kind === "external"` |
| `pdfUrl` | if pdf | URL to the PDF |
| `projectLinks` | — | Buttons shown below the title on the PDP, e.g. pitch deck links |
| `content` | ✅ for narrative | Array of `text`, `quote`, and `image` blocks (see below) |

**Content block types:**

```ts
{ type: 'text',  content: "Paragraph copy." }
{ type: 'quote', content: '"Pull quote text."' }
{ type: 'image', src: "https://...", alt: "Description", caption: "Optional caption" }
```

### 2. Register it in `portfolio.ts`

Open `src/data/portfolio.ts` and add two lines:

```ts
// at the top with the other project imports
import myNewProject from './projects/my-new-project'

// in the projects array, at whichever position you want it to appear
export const projects = [
  ...
  myNewProject,
]
```

### 3. Adding a project screenshot later

Once you have a screenshot, set the `screenshot` field in the project's data file:

```ts
screenshot: '/src/assets/my-new-project-screenshot.png',
// or an external URL:
screenshot: 'https://...',
```

Drop the image file in `src/assets/` and reference it with `/src/assets/<filename>`.

---

## Adding a new Experience entry

### 1. Decide the category

- **Professional role** → create the file in `src/data/experience/professional/`
- **Leadership role** → create the file in `src/data/experience/leadership/`

### 2. Create the data file

Copy any existing file from the relevant folder and save it as `<company-name>.ts`.

Fill in the fields:

| Field | Required | Notes |
|---|---|---|
| `company` | ✅ | Org name displayed as the heading |
| `role` | ✅ | Job title |
| `period` | ✅ | e.g. `"June 2026 – Present"` |
| `location` | ✅ | City, State |
| `type` | ✅ | `"Internship"`, `"Startup"`, `"Full-time"`, or `"Leadership"` |
| `bullets` | ✅ | Array of achievement strings |
| `gallery` | — | Array of image URLs shown as a scrollable photo strip |

### 3. Register it in `portfolio.ts`

Open `src/data/portfolio.ts` and add two lines:

```ts
// at the top — professional or leadership import section
import myNewRole from './experience/professional/my-new-role'

// in the experiences array, in the order you want it displayed
export const experiences = [
  myNewRole,  // Professional entries first, then Leadership
  ...
]
```

> **Tip:** The Experience page automatically splits entries into **Professional** and **Leadership** tabs based on `type`. Any entry with `type: "Leadership"` lands in the Leadership tab; everything else goes to Professional.

---

## Updating the Featured Projects on the homepage

The four cards on the homepage are controlled by `FEATURED_SLUGS` near the top of `portfolio.ts`:

```ts
export const FEATURED_SLUGS = [
  'five-below-treasure-hunt',
  'tiktok-hero-ad',
  'af-playground',
  'creator-copilot',
]
```

Replace any slug with the slug of the project you want to feature. Order = display order.
