# Gulshan Coffee Shop Website

A small, responsive, single-page website for Gulshan Coffee Shop. Built with plain HTML, CSS, and JavaScript (no build steps required). The site showcases a modern, glassy aesthetic with an in-page menu filter, a gallery, store hours, and a newsletter form.

## Tech Stack
- HTML
- CSS
- JavaScript
- Google Fonts (Inter, Poppins)

## How to Run Locally
1. Download or copy all files from this project.
2. Open index.html directly in a web browser (double-click or right-click > Open).
   - Optionally start a simple local server:
     - Python 3: cd <project-folder> && python -m http.server 8000
     - Node (http-server): npx http-server
3. Navigate through the site:
   - Home: hero with introductory copy
   - Menu: filterable items by Coffee / Tea / Pastry
   - Gallery: inline SVG visuals simulating gallery items
   - Visit: store hours and a map placeholder
   - Contact: newsletter subscription form

## Project Structure
- index.html: Main entry point and page structure
- styles.css: All styling (glassmorphism, responsive grid, typography)
- app.js: Interactive behavior (menu filtering, counters, form feedback, smooth scrolling)
- README.md: This documentation

## Accessibility & UX Notes
- Semantic sections and ARIA labels included
- Keyboard accessible tabs in Menu
- Smooth scrolling for in-page navigation
- High contrast, WCAG-friendly text colors on dark surfaces

## Customization Tips
- Update brand text, menu items, hours, and contact details directly in index.html.
- Adjust colors in styles.css by editing CSS custom properties at the top.
- To add more menu items, duplicate a card block in the Menu section and assign data-category accordingly.

## Credits
- This is a self-contained static website for a fictional Gulshan Coffee Shop, designed to feel like a high-end neighborhood cafe.
