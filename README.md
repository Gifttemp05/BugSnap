# BugSnap

BugSnap is a local-first Chrome extension for preparing clear website bug reports. This repository currently implements **Milestone 1: project setup and popup shell**.

## Requirements

- Node.js 20.19+ or 22.12+ and npm
- Google Chrome for loading the unpacked extension

## Commands

```sh
npm install
npm run dev
npm run build
```

Vite dev mode previews the popup as a web page; Chrome extension APIs are not active in that mode. `npm run build` creates the unpacked extension in `dist/`. In Chrome, open `chrome://extensions`, enable **Developer mode**, choose **Load unpacked**, and select this project's `dist` folder. The same web extension package is platform independent.

## Architecture and permissions

See [docs/architecture.md](docs/architecture.md), [docs/permissions.md](docs/permissions.md), and [docs/known-limitations.md](docs/known-limitations.md). Milestone 1 requests no extension permissions. Proposed future permissions are `activeTab`, `scripting`, `storage`, and potentially `downloads`, each added only when needed and documented.

## Dependencies and licenses

Runtime/build dependencies: React and React DOM (MIT), Vite (MIT), TypeScript (Apache-2.0), and Vite React plugin (MIT). Type declarations: `@types/react`, `@types/react-dom`, and `@types/chrome` (MIT). Exact resolved versions are recorded by the package lock after `npm install`. Google Fonts are referenced for visual styling in this shell; before store packaging, bundle fonts locally or remove the remote CSS import to avoid an external font request under the extension CSP.
