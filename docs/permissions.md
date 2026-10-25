# Permission plan

## Milestone 1

No extension API permissions are needed for the static popup shell. The MV3 manifest declares only the action popup and icons.

## Milestones 2 onward

- `activeTab`: temporary access to the current tab after the user invokes BugSnap; intended for URL/title and user-triggered capture.
- `scripting`: needed to inject an opt-in monitor into the current page after explicit user action. Injection will be attempted only for the current tab and may fail on restricted pages.
- `storage`: needed for local settings/drafts in extension storage if used; report data will not use sync storage.
- `downloads`: needed for direct downloads of exports if implemented through the Chrome downloads API. Prefer ordinary browser downloads where suitable.

The exact set will be re-evaluated when each feature is implemented. No broad host permissions or `tabs` permission are planned. Chrome's `captureVisibleTab` permits capture with `activeTab` following a user gesture. Restricted browser pages can still reject capture.
