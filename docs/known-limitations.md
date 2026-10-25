# Known limitations

- This milestone contains a popup shell only. Capture, monitoring, reports, persistence, and exports are not implemented yet.
- Browser console history from before a monitoring session cannot be read. Future monitoring is intended to capture supported `console.error`/`console.warn` calls and uncaught `error`/`unhandledrejection` events only while active. Page-world hooks can be blocked or affected by site behavior; monitoring must fail gracefully.
- Chrome internal, extension, and other restricted pages may not allow screenshot capture or script injection.
- Browser/platform identification may be unavailable or approximate; unavailable values must be labeled honestly.
