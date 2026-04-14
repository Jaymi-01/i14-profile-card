# Profile Card Component

A responsive, accessible, and semantic Profile Card built with modern frontend patterns (HTML/CSS/Vanilla JS). This project was designed to meet strict accessibility (WCAG AA) and automated testing requirements.

## Features

- **Semantic HTML5**: Uses appropriate tags like `<article>`, `<figure>`, `<nav>`, and `<section>` for improved SEO and screen reader support.
- **Accessibility (a11y)**:
  - Meaningful `alt` text for images.
  - WCAG AA compliant color contrast.
  - Keyboard-friendly navigation with visible `:focus-visible` states.
  - Dynamic time updates using `aria-live="polite"` for screen reader notifications.
- **Responsive Design**: 
  - Mobile-first approach.
  - Centered layout for mobile devices.
  - Flexbox-driven side-by-side layout for tablets and desktops.
- **Dynamic Content**: Displays the current epoch time in milliseconds, updating every second.
- **Test-Ready**: All critical elements include `data-testid` attributes for stable automated testing.

## Technologies Used

- **HTML5**: Semantic structure.
- **CSS3**: Custom properties (variables), Flexbox, and Media Queries.
- **JavaScript (Vanilla)**: DOM manipulation and time synchronization.
- **Cloudinary**: External image hosting for the profile avatar.

## Setup and Usage

1. Clone the repository.
2. Open `index.html` in any modern web browser.
3. To view the responsive behavior, use the browser's Developer Tools to toggle between mobile and desktop views.

## Project Structure

- `index.html`: The core markup and structure.
- `style.css`: Responsive styling and accessibility rules.
- `sript.js`: Logic for updating the current time in milliseconds.

## Author

**Afuni Mawobe**
- GitHub: [Jaymi-01](https://github.com/Jaymi-01)
- Twitter: [@Jaymi_tsx](https://x.com/Jaymi_tsx)
- LinkedIn: [jaymi1001](https://www.linkedin.com/in/jaymi1001)
