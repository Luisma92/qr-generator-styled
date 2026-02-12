# Setting Up GitHub Pages for the Demo

## Steps to Enable GitHub Pages:

### 1. Push the workflow files

```bash
git add .github/workflows/deploy-demo.yml
git add README.md packages/browser/README.md
git commit -m "Add GitHub Pages workflow for browser demo"
git push origin main
```

> **Note**: The demo uses esbuild to bundle all dependencies into a single file (`dist/bundle.js`). This ensures the demo works correctly on GitHub Pages without needing node_modules or external CDN dependencies.

### 2. Enable GitHub Pages in your repository

1. Go to your repository on GitHub: `https://github.com/Luisma92/qr-styled`
2. Click on **Settings**
3. In the left sidebar, find **Pages**
4. Under **Source**, select:
   - **Source**: GitHub Actions
5. Save changes

### 3. The workflow will run automatically

Every time you push to the `packages/browser/` folder, the workflow will:

- ✅ Install dependencies
- ✅ Compile TypeScript code
- ✅ Publish the demo to GitHub Pages

### 4. Access your demo

The demo will be available at:

```
https://luisma92.github.io/qr-styled/
```

## Verify the deployment

1. Go to the **Actions** tab in your repository
2. Verify that the "Deploy Browser Demo" workflow executed successfully
3. Once it completes (~1-2 minutes), your demo will be live

## Update the demo

Simply push any changes to `packages/browser/` and the workflow will run automatically.

---

## Alternative Option: Netlify (no GitHub configuration needed)

If you prefer a simpler solution without configuring GitHub Pages:

### Using Netlify:

1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Configure:
   - **Base directory**: `packages/browser`
   - **Build command**: `npm install && npm run build`
   - **Publish directory**: `.` (root)
4. Add a `netlify.toml` file in the root:

```toml
[build]
  base = "packages/browser"
  command = "npm install && npm run build"
  publish = "."

[[redirects]]
  from = "/*"
  to = "/demo.html"
  status = 200
```

Netlify will give you a URL like: `https://your-app.netlify.app`

---

## Simplest Option: HTMLPreview

For a quick demo without configuration, use:

```
https://htmlpreview.github.io/?https://github.com/Luisma92/qr-styled/blob/main/packages/browser/demo.html
```

⚠️ **Note**: This option may have issues with ES modules, so GitHub Pages or Netlify are preferable.

---

## Troubleshooting

### QR codes not showing (empty grid)

If the demo page loads but the QR codes don't appear:

1. **Check the browser console** for errors
2. **Verify the bundle was built**: The workflow should create `dist/bundle.js`
3. **Check GitHub Actions logs**: Go to Actions tab and verify the workflow completed successfully
4. **Clear cache**: GitHub Pages may cache old versions. Try hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
5. **Wait a few minutes**: After deployment, GitHub Pages CDN may take 1-2 minutes to update

### How the bundle works

The demo uses **esbuild** to create a single JavaScript file (`dist/bundle.js`) that includes:
- All QR generation code
- The `qrcode` library dependency
- All utilities and renderers

This approach ensures the demo works on GitHub Pages without needing:
- ❌ Import maps
- ❌ node_modules directory
- ❌ External CDN dependencies

To rebuild the bundle locally:
```bash
cd packages/browser
npm run build:demo
```
