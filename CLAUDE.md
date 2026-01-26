# Wedding Website - AI Agent Instructions

## Project Overview

@README.md

## Design Philosophy

### Visual Style
- **Clean and elegant** - avoid over-engineering and excessive animations
- **Minimal interactivity** - users should see all information without clicking/expanding
- **Photography-focused** - use wedding photos as primary visual elements
- **Pastel palette** - soft, romantic colors matching the wedding theme

### User Experience Principles
- **No hidden content** - avoid expandable cards, accordions, or click-to-reveal patterns
- **Direct information** - present all details upfront
- **Simple navigation** - one-page scroll design without side navigation
- **Mobile-first thinking** - ensure all layouts work well on mobile devices

## Typography

### Font Usage
- **Marck Script** - decorative text (names, monogram, event titles)
- **Playfair Display** - headings and section titles
- **Open Sans** - body text and descriptions

### Font Guidelines
- Keep decorative fonts (Marck Script) for special elements only
- Use serif (Playfair Display) for structure and hierarchy
- Use sans-serif (Open Sans) for readability

## Component Patterns

### Layout Structure
- Hero section uses **photo collage** (two overlapping images)
- Details section uses **horizontal split** for two events (left/right)
- Info sections use **vertical list layout** (icon + content side-by-side)
- Avoid card grids - prefer linear, scannable layouts

### Icons
- Use **Material-UI Icons** instead of emoji
- Icon size: typically 40px for content, 18px for buttons
- Icons should have white color on colored backgrounds

### Buttons
- Solid color backgrounds (no gradients)
- Rounded corners (border-radius: 30px)
- Icon placement: after text (not before)
- Use Framer Motion for scale effects on hover/tap

### Images
- Store in `src/assets/`
- Import and use as components (not CSS backgrounds when possible)
- Apply white overlay for text readability when used as backgrounds
- Two-image collage: main image (75% width) + accent image (absolute positioned, overlapping)

## Color Palette

Primary colors (use these for backgrounds, accents):
- `#FFD3D8` - Pink
- `#D5C8D9` - Lavender
- `#C5D9E3` - Blue
- `#FFE5B4` - Peach
- `#D4E5E4` - Mint
- `#C5A880` - Beige/Gold (accent)
- `#F5EEE6` - Light Beige (backgrounds)

Text colors:
- `#6B5B4D` - Primary text
- `#8B7355` - Secondary text
- `#C5A880` - Accent text

## Component-Specific Rules

### Hero Component
- Two-image collage (img_1.png + img_4.png overlapping)
- Content on the right side
- Monogram circle with initials "А & І"
- Names in large Marck Script
- Date below with decorative lines
- Scroll indicator at bottom

### Details Component
- Background image: img.png (bouquet) with white overlay
- Two events side-by-side: Вінчання (left) + Святкування (right)
- Each event has: title, time (large Marck Script), location details
- LocationOnIcon buttons to open Google Maps
- Mobile: stack vertically

### GuestInfo Component
- Vertical list layout (not grid)
- Each item: colored icon box (80x80px) + content
- Icons from MUI, white color on colored background
- Text visible immediately (no expand/collapse)
- 4 items: Як дістатись, Для дітей, Фото та відео, Дрес-код

### ColorPalette Component
- 12 colors displayed as circles (border-radius: 50%)
- No hover animations
- No white borders on circles
- Grid layout: 6 columns desktop, 4 on tablet, 3 on mobile
- Color names below each circle

### RSVP Component
- Button opens Google Form in new tab
- Use LocationOnIcon or similar for visual interest
- Animated hearts as decorative elements

## Development Guidelines

### When Adding Features
1. **Read existing components first** - understand patterns before implementing
2. **Match existing style** - use same spacing, colors, fonts as other components
3. **Keep it simple** - avoid adding unnecessary complexity
4. **No navigation menu** - this is intentionally removed
5. **Check mobile layout** - test responsive behavior

### When Modifying Components
1. **Preserve animations** - only remove if explicitly requested
2. **Keep accessibility** - maintain semantic HTML
3. **Test on mobile** - flex-direction: column for small screens
4. **Use existing colors** - stick to defined palette

### What NOT to Do
- ❌ Don't add expandable/collapsible sections
- ❌ Don't add grid layouts with cards (use vertical lists instead)
- ❌ Don't use emoji (use MUI icons)
- ❌ Don't add gradients to buttons (solid colors only)
- ❌ Don't add navigation menu (removed by design)
- ❌ Don't add Timeline or Map components (removed)
- ❌ Don't add excessive hover animations

## File Management

- New temporary files: `.ai-kit/tmp/`
- Images: `src/assets/`
- Components: `src/components/` (paired .jsx + .css files)

## Git Workflow

- This is NOT a git repository yet
- When initializing: add only source files, not node_modules
- Use .gitignore for: node_modules, dist, .env, .DS_Store, .ai-kit/tmp/
