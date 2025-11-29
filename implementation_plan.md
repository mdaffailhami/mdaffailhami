# Theme Switcher Implementation Plan

## Goal Description
Create a theme switcher component positioned at the top right corner with three options: Light, System, and Dark. The component should use the same glassmorphism style as the Navbar and include an animated indicator that moves between the active theme option. Instead of text labels, use icons from `lucide-react`.

## Proposed Changes
### src/components
#### [NEW] [ThemeSwitcher.tsx](file:///home/mdaffailhami/Documents/mdaffailhami/src/components/ThemeSwitcher.tsx)
- Create a Client Component similar to [Navbar](file:///home/mdaffailhami/Documents/mdaffailhami/src/components/Navbar.tsx#16-155).
- Use three icons: `Sun` (light), `Monitor` (system), `Moon` (dark) from `lucide-react`.
- Implement state management for the current theme.
- Add an animated indicator (similar to Navbar) that moves to the active theme button.
- Use `localStorage` to persist theme preference.
- Apply theme by adding/removing `dark` class to `<html>` element.
- Position fixed at top right corner.

### src/app
#### [MODIFY] [page.tsx](file:///home/mdaffailhami/Documents/mdaffailhami/src/app/page.tsx)
- Import and add `<ThemeSwitcher />` component alongside `<Navbar />`.

## Verification Plan
### Manual Verification
1. Open http://localhost:3000.
2. Verify the theme switcher appears at the top right.
3. Click each theme option and verify:
   - The indicator animates to the clicked button
   - The theme changes (light/dark/system)
   - The preference persists on page reload
