# Changelog

## [2.0.0] - 2024-02-12

### Major Feature Release 🚀

#### New Features

- **Specialized QR Code Types**:
  - 📇 vCard contact cards with full contact information
  - 📶 WiFi network configuration (WPA, WEP, open networks)
  - 📧 Email with pre-filled subject and body
  - 💬 SMS with phone number and message
  - 📍 Geolocation with latitude/longitude

- **SVG Export**:
  - 📄 Vector format for perfect scalability
  - `generateToSVG()` and `generateToSVGFile()` methods
  - Full color and styling support in SVG

- **Eye (Finder Pattern) Customization**:
  - 👁️ Custom eye colors with `eyeColor` option
  - 🔷 Custom eye shapes with `eyeRadius` option
  - Independent styling from main modules

- **Proper QR Margins**:
  - 📏 Standard `margin` option (4 modules by default)
  - Replaces confusing `padding` terminology
  - Maintains backward compatibility

#### API Improvements

- **New Options**:
  - `type`: QR data type ('url' | 'text' | 'vcard' | 'wifi' | 'email' | 'sms' | 'geo')
  - `data`: Structured data for specialized types
  - `foregroundColor`: Replaces deprecated `color`
  - `margin`: Proper QR quiet zone (4 modules standard)
  - `logoSize`: Explicit logo size control
  - `logoBackgroundColor`: Logo background color
  - `eyeColor`: Custom finder pattern color
  - `eyeRadius`: Custom finder pattern corner radius

- **Data Formatters**:
  - `formatVCard()`: Convert contact data to vCard 3.0
  - `formatWiFi()`: Generate WiFi configuration string
  - `formatEmail()`: Create mailto URI
  - `formatSMS()`: Create SMS URI
  - `formatGeo()`: Create geo URI
  - `formatQRData()`: Unified formatter for all types

#### Testing

- ✅ 55 comprehensive tests (up from 11)
- 📝 22 formatter tests
- 🔍 22 new feature tests
- ✅ All validation tests updated
- 100% passing test suite

#### Documentation

- 📚 Complete README update with all new features
- 💡 New advanced examples showcasing all QR types
- 📖 API reference with specialized data structures
- 🔧 Migration guide for deprecated options

#### Breaking Changes

- `color` option deprecated in favor of `foregroundColor` (backward compatible)
- Error messages updated for better clarity

## [1.0.0] - 2026-02-12

### Complete TypeScript Migration

#### Major Changes

- **Complete rewrite in TypeScript** with full type safety
- **Modular architecture** with separated concerns
- **Professional documentation** in English
- **Enhanced type definitions** for all APIs

#### New Features

- Full TypeScript support with strict type checking
- Type-safe CLI with proper argument validation
- Complete type definitions exported for library consumers
- Enhanced code organization with clear separation of concerns

#### Architecture Improvements

- **Separation of Concerns**:
  - `QRGenerator`: Main orchestrator class
  - `BackgroundRenderer`: Background and clipping logic
  - `GradientRenderer`: Gradient creation
  - `ModuleRenderer`: QR module rendering with rounded corners
  - `LogoRenderer`: Logo overlay functionality

- **Type Safety**:
  - Custom type declarations for qrcode library
  - Strict TypeScript configuration
  - Complete interface definitions
  - Exported types for consumers

- **Build System**:
  - TypeScript compilation to dist/
  - Proper module resolution
  - Source maps for debugging
  - Declaration files generation

#### Developer Experience

- `npm run build`: Compile TypeScript to JavaScript
- `npm run dev`: Run CLI in development mode with tsx
- `npm run example:basic`: Run basic usage examples
- `npm run example:programmatic`: Run advanced API examples
- Full JSDoc documentation on all public APIs

#### Documentation

- **README.md**: Complete English documentation with examples
- **CONTRIBUTING.md**: Contribution guidelines in English
- **QUICKSTART.md**: Quick start guide for developers
- **ARCHITECTURE.md**: Detailed architecture documentation
- Removed migration documentation (not needed for public release)

#### Breaking Changes

- Source files moved from `.js` to `.ts`
- Compiled output now in `dist/` directory
- Main entry point changed to `dist/index.js`
- CLI executables point to `dist/cli/index.js`
- Requires Node.js >= 14.0.0

#### Dependencies

##### Production

- `canvas`: ^3.2.0 - Canvas drawing
- `chalk`: ^5.6.2 - Terminal colors
- `qrcode`: ^1.5.4 - QR code generation
- `yargs`: ^18.0.0 - CLI argument parsing

##### Development

- `typescript`: ^5.x - TypeScript compiler
- `@types/node`: Latest - Node.js type definitions
- `@types/yargs`: Latest - Yargs type definitions
- `tsx`: Latest - TypeScript execution for development

#### File Structure

```
qr-generator-styled/
├── src/                    # TypeScript source
│   ├── index.ts           # Public API
│   ├── types/             # Type declarations
│   ├── lib/               # Core library
│   │   ├── QRGenerator.ts
│   │   ├── renderers/     # Specialized renderers
│   │   └── utils/         # Utilities
│   └── cli/               # Command-line interface
├── dist/                  # Compiled JavaScript (generated)
├── examples/              # TypeScript examples
├── tsconfig.json          # TypeScript configuration
└── package.json           # Package metadata
```

#### API Exports

**Classes:**

- `QRGenerator` - Main QR code generator class

**Functions:**

- `generateQR()` - Quick generation helper
- `generateQRToFile()` - Quick file generation helper
- `validateOptions()` - Option validation
- `normalizeOptions()` - Option normalization

**Types:**

- `QROptions` - Configuration interface
- `LogoShape` - Logo shape type
- `ErrorCorrectionLevel` - Error correction level type

**Constants:**

- `DEFAULT_OPTIONS` - Default configuration
- `VALID_LOGO_SHAPES` - Valid logo shapes
- `VALID_ERROR_CORRECTION_LEVELS` - Valid error correction levels

#### Testing

All examples tested and working:

- ✅ Basic QR generation
- ✅ Gradient QR codes
- ✅ Custom styled QR codes
- ✅ Programmatic API usage
- ✅ Buffer generation for APIs
- ✅ Data URL generation for HTML
- ✅ Dynamic option updates
- ✅ Error validation

#### Future Enhancements

Planned for future versions:

- Unit tests with Jest/Vitest
- SVG output format
- Batch QR generation
- Style templates
- Performance optimizations
- CI/CD pipeline with GitHub Actions
- NPM package publication

---

### Migration Notes

This is a complete rewrite from a monolithic JavaScript file to a professional TypeScript library:

**Before:**

- Single 354-line JavaScript file
- Mixed CLI and library logic
- No type safety
- Hard to maintain and extend

**After:**

- Modular TypeScript architecture
- Separated CLI and library
- Full type safety
- Easy to maintain and extend
- Production-ready

The API remains compatible for programmatic usage, but the project structure is completely new and professional.
