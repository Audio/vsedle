# V sedle

-   Tracks group activities toward a shared distance goal with configurable
    activity types and virtual distance conversion.

## Backend

-   Express API served via Vite Express.
-   SQLite stores activity data.
-   Domain configuration (users, sports, target distance) lives in
    `server/config.js`.

## Frontend

-   Vite + React UI reads config and activity summaries from the public API.
