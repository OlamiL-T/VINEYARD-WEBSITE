# Design system — Phase 3

Tokens live in `apps/web/app/globals.css`. The original palette is retained with additional muted text, borders, and error colors. Charcoal and green carry readable text; sage and gold support surfaces and decoration. The font family is a system sans-serif to avoid external font requests, with a restrained Georgia editorial accent. Approved self-hosted typefaces can replace the family token.

`components/ui.tsx` provides navigation buttons, section headings, foundation cards, notices, and inputs with labels, hints, and linked errors. Components use semantic native elements. Only navigation requires client JavaScript. Mobile navigation is a disclosure, not a modal: Escape returns focus, selection closes it, outside clicks dismiss it, and tabbing remains in normal document order. Navigation stays expanded on desktop. Visible focus, 44–48px actions, fluid typography, responsive grids, and reduced-motion preferences are supported.

The home page integrates these components in a design preview, with explicitly labeled original abstract artwork. It is not photography or an official foundation logo. The shared wordmark is plain text. No projects, testimonials, impact figures, registration details, or verified programs are invented. Foundation cards state that content awaits approval.

`/design-system` is a noindex development reference for colors, type, buttons, cards, and form states. Form fields do not submit, store, or simulate successful requests. Real forms and backend validation belong to the engagement phase. No donation or collection flow exists. Navigation uses implemented sections; unavailable features appear as explanatory text rather than broken links or inactive primary buttons.

Before launch, remove the internal design reference from public navigation, integrate approved assets, verify all final copy and colors, complete assistive-technology review, and run the production accessibility/performance checks. No conformance or Lighthouse score is claimed here.
