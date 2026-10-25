# BugSnap architecture

## Milestone 1

The initial build is a Vite-hosted React popup shell with strict TypeScript. `src/popup` owns popup UI, `src/styles.css` owns presentation, and `public/manifest.json` is copied unchanged into the extension build. Business logic and browser APIs will be separated into feature modules as later milestones are approved.

## Planned modules

- `src/background`: typed service-worker message handling and capture orchestration.
- `src/content` and `src/monitoring`: user-started page monitoring and validated bridge messages.
- `src/capture` and `src/metadata`: visible-tab screenshot and permitted metadata collection.
- `src/reports`, `src/storage`, `src/exports`: report model, local drafts, and export adapters.
- `src/pages`: editor, review, saved reports, settings, and help views.

The popup action will open a report editor. Capture and monitoring are initiated only by explicit user actions. Drafts remain local. No server or analytics endpoint is part of the design.
