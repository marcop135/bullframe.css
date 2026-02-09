# Bullframe CSS Social Media Banner Specification

## Dimensions
- **Standard**: 1200x630px (works for Twitter, LinkedIn, Facebook)
- **Twitter**: 1200x675px (optional taller version)
- **Format**: PNG or JPG

## Design Elements

### Layout
- **Left Side (60%)**: Main branding area
- **Right Side (40%)**: Feature highlights

### Color Palette
- **Primary Orange**: `#f95c1f` (rgb(249 92 31)) - Bullframe brand color
- **Dark Orange**: `#e0541c` (for gradient middle)
- **Darker Orange**: `#c74a18` (for gradient end)
- **White**: `#FFFFFF` (text)
- **Light Orange Accent**: `#ff7a4a` (for highlights)

### Typography
- **Main Title**: "Bullframe CSS" - Bold, large (80-100px), white
- **Version Badge**: "v6" - Medium size (24-30px), white with orange background badge
- **Tagline**: "The Lightweight CSS Framework" - Medium (32-40px), light white/gray
- **Features**: Small-medium (18-24px), white

### Content

**Left Side:**
```
Bullframe CSS
v6
The Lightweight CSS Framework
```

**Right Side (Feature Grid):**
```
✓ Native CSS
✓ ~8KB gzipped
✓ WCAG AA
✓ PostCSS
```

### Background
- Gradient: `#f95c1f` → `#e0541c` → `#c74a18` (diagonal, top-left to bottom-right)
- Optional: Subtle geometric patterns or code brackets in low opacity

### Visual Style
- Modern, clean, professional
- Developer-focused aesthetic
- Plenty of white space
- High contrast for readability
- No clutter

## Canva Dream Lab Prompt

Use this prompt in Canva Dream Lab:

```
Create a professional social media banner for a CSS framework called "Bullframe CSS". 
Design: 1200x630px landscape. Background: gradient from vibrant orange (#f95c1f) to darker orange (#c74a18). 
Left side: Large bold white text "Bullframe CSS", version badge "v6" below, tagline "The Lightweight CSS Framework" in lighter white. 
Right side: Feature list with checkmarks - "Native CSS", "~8KB gzipped", "WCAG AA", "PostCSS" in white text arranged in a grid. 
Style: Modern, clean, developer-focused, professional, high contrast, plenty of white space. 
Color scheme: orange gradient background (using brand color #f95c1f), white text, subtle geometric patterns optional.
```

## Microsoft Designer Prompt

Use this prompt in Microsoft Designer:

```
Social media banner 1200x630px for Bullframe CSS framework. 
Orange gradient background (#f95c1f to #c74a18) using brand color. 
Left: Bold white "Bullframe CSS" title, "v6" badge, "The Lightweight CSS Framework" tagline. 
Right: White feature list - Native CSS, 8KB gzipped, WCAG AA, PostCSS. 
Modern, clean, professional developer aesthetic with high contrast white text on orange gradient.
```

## Alternative: Manual Creation

### Step 1: Background
1. Create 1200x630px canvas
2. Apply gradient: `#f95c1f` (top-left) → `#e0541c` (middle) → `#c74a18` (bottom-right)

### Step 2: Left Side Content
1. Add "Bullframe CSS" text - Bold, 90px, white
2. Add "v6" badge - 28px, white text on semi-transparent white background (rounded rectangle)
3. Add tagline "The Lightweight CSS Framework" - 36px, light gray (#E0E0E0)

### Step 3: Right Side Features
1. Create grid layout (2x2)
2. Each feature: Checkmark icon + text
   - ✓ Native CSS
   - ✓ ~8KB gzipped  
   - ✓ WCAG AA
   - ✓ PostCSS
3. Text: 22px, white, medium weight

### Step 4: Polish
- Add subtle geometric shapes (optional)
- Ensure all text is readable
- Export as PNG

## File Location
Save the final banner as:
- `src/docs/github-readme/bullframe-css-social-banner.png`
- Or `docs/social-banner.png`

## Usage
- GitHub repository social preview
- Twitter/X posts
- LinkedIn announcements
- Blog post headers
- Documentation site hero image
