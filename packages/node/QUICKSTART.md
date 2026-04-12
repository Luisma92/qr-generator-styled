# 🚀 Quick Start Guide

## Installation

```bash
npm install
```

## Development

### Test the CLI

```bash
npm run dev -- --url "https://github.com" --out test-qr.png
```

### Run Examples

```bash
# Basic examples
npm run example:basic

# Programmatic examples
npm run example:programmatic
```

## Project Structure

### Main Directories

- **`src/`**: Library source code
  - **`lib/`**: Core logic and renderers
    - **`QRGenerator.ts`**: Main class that orchestrates everything
    - **`renderers/`**: Specialized rendering modules
      - `BackgroundRenderer.ts`: Background and clipping
      - `GradientRenderer.ts`: Gradient creation
      - `ModuleRenderer.ts`: QR module rendering
      - `LogoRenderer.ts`: Logo rendering
    - **`utils/`**: Utilities and helpers
      - `types.ts`: TypeScript type definitions
      - `validators.ts`: Option validation
  - **`cli/`**: Command line interface
    - `index.ts`: CLI using yargs
  - **`index.ts`**: Entry point (exports public API)

- **`examples/`**: Usage examples
  - `basic.ts`: Basic examples
  - `programmatic.ts`: Advanced programmatic usage

- **`dist/`**: ESM build output + type definitions (generated)
- **`dist/cjs/`**: CommonJS build output (generated)

### Configuration Files

- **`package.json`**: Package configuration
- **`tsconfig.json`**: TypeScript configuration
- **`README.md`**: Main documentation
- **`LICENSE`**: MIT License
- **`CONTRIBUTING.md`**: Contribution guide
- **`.gitignore`**: Files ignored by Git
- **`.npmignore`**: Files excluded from npm package

## Architecture

### Separation of Concerns

The code is organized following the single responsibility principle:

1. **QRGenerator**: Orchestrates the complete process
2. **Renderers**: Each handles a specific visual aspect
3. **Validators**: Validate user inputs
4. **CLI**: User interface separated from logic

### Execution Flow

```
User (CLI or API)
    ↓
QRGenerator (validates options)
    ↓
generates QR data with qrcode library
    ↓
BackgroundRenderer (draws background)
    ↓
GradientRenderer (creates fill style)
    ↓
ModuleRenderer (draws QR modules)
    ↓
LogoRenderer (draws optional logo)
    ↓
Canvas → File/Buffer/DataURL
```

## Programmatic Usage

### Import the Library

```typescript
import { QRGenerator } from './src/index.js';
```

### Create and Use a Generator

```typescript
const generator = new QRGenerator({
  url: 'https://example.com',
  gradient: true,
  rounded: true
});

// Generate to file
await generator.generateToFile('output.png');

// Generate to buffer (for APIs)
const buffer = await generator.generateToBuffer();

// Generate to Data URL (for HTML)
const dataURL = await generator.generateToDataURL();
```

## Testing

To test everything works:

```bash
# Basic CLI test
npm run dev -- --url "test" --out test.png

# Test examples
npm run example:basic

# Verify test.png was created correctly
ls -lh test.png
```

## Building for Production

### Compile TypeScript

```bash
npm run build
```

This compiles all `.ts` files from `src/` to:

- `dist/` (ESM + `.d.ts`)
- `dist/cjs/` (CommonJS)

### Test the Compiled Output

```bash
node dist/cli/index.js --url "https://example.com"
```

## Publishing to npm

1. Update version in `package.json`
2. Ensure `README.md` is up to date
3. Update `repository.url` field with your GitHub
4. Build the project:

```bash
npm run build
```

5. Publish:

```bash
npm login
npm publish
```

## Next Steps

### Suggested Improvements

1. **Tests**: Add unit tests with Jest or Vitest
2. **CI/CD**: Set up GitHub Actions
3. **More Examples**: Add more integration examples
4. **Documentation Site**: Create an interactive documentation website
5. **Playground**: Create an interactive web interface
6. **Performance**: Optimize rendering for large QR codes
7. **Formats**: Add SVG output support

### Useful Resources

- [node-canvas Documentation](https://github.com/Automattic/node-canvas)
- [node-qrcode Documentation](https://github.com/soldair/node-qrcode)
- [npm Publishing Guide](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

## Troubleshooting

### Build Errors

If you encounter TypeScript errors:

```bash
# Clean and rebuild
rm -rf dist
npm run build
```

### Canvas Installation Issues

The `canvas` package requires native dependencies. If installation fails:

**macOS:**

```bash
brew install pkg-config cairo pango libpng jpeg giflib librsvg
```

**Ubuntu/Debian:**

```bash
sudo apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev
```

See [node-canvas installation guide](https://github.com/Automattic/node-canvas#installation) for more details.

---

Enjoy developing! 🎉
