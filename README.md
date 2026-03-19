# GCPE Business Insights Frontend

Frontend for the GCPE Business Insights application.

This project is built with React and Vite.

## Requirements

- Node.js
- npm

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app will be available at:

```text
http://localhost:5173
```

## Available Scripts

### `npm run dev`

Runs the app in development mode using Vite.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run preview`

Serves the production build locally for preview/testing.

## Production Build

To create a production build:

```bash
npm run build
```

The output will be generated in the `dist` folder.

## Deployment

This frontend is intended to be built and then copied into the `wwwroot` folder of the corresponding .NET API/application for static file hosting.

Typical flow:

1. Build the frontend:

   ```bash
   npm run build
   ```

2. Copy the contents of `dist` into the target application's `wwwroot` folder.

## Environment Variables

If environment variables are used in this project, Vite requires them to be prefixed with:

```text
VITE_
```

They are accessed in code using:

```js
import.meta.env
```

## Notes

- Static assets such as `favicon.ico` and similar files should live in the `public` folder.
- The main HTML entry point is `index.html` at the project root.
