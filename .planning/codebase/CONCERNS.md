# Concerns

## Technical Debt
- **No Tests**: Lack of automated testing increases regression risk during UI overhauls.
- **Single File Data**: `portfolio.js` is growing; may eventually need splitting if content expands significantly.

## UI/UX Concerns
- **Cluttered Layout**: User reports that the current layout and element placement feel cluttered.
- **Typography**: Font choices and sizes may be contributing to the perceived clutter.
- **Performance**: High use of background gradients (mesh) and glassmorphism could impact performance on lower-end devices.

## SEO
- **Static Content**: While SEO is implemented via `react-helmet-async`, the content is mostly static. Ensure semantic HTML is strictly followed.
