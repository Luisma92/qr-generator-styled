# Project Architecture

## Overview

This project is a professional, TypeScript-based QR code generator library with advanced styling capabilities. The architecture follows SOLID principles with clear separation of concerns.

## Core Design Principles

### 1. Single Responsibility Principle

Each class/module has one clearly defined purpose:

- `QRGenerator`: Orchestrates the generation process
- `BackgroundRenderer`: Handles background and clipping
- `GradientRenderer`: Manages gradient creation
- `ModuleRenderer`: Renders QR code modules
- `LogoRenderer`: Handles logo rendering
- `Validators`: Input validation logic

### 2. Composition Over Inheritance

The `QRGenerator` class composes various renderers rather than inheriting functionality. This makes the code more flexible and easier to extend.

### 3. Dependency Injection

Renderers receive their dependencies (canvas context, options) through constructors, making them testable and loosely coupled.

### 4. Type Safety

Full TypeScript implementation with:

- Strict type checking enabled
- Complete type definitions for all public APIs
- Custom type declarations for third-party libraries
- Interface segregation for better type inference

## Directory Structure

```
@qr-styled/node/
├── src/
│   ├── index.ts                       # Public API entry point
│   ├── types/
│   │   └── qrcode.d.ts               # Type definitions for qrcode library
│   ├── lib/
│   │   ├── QRGenerator.ts            # Main orchestrator class
│   │   ├── renderers/
│   │   │   ├── BackgroundRenderer.ts # Background & clipping
│   │   │   ├── GradientRenderer.ts   # Gradient generation
│   │   │   ├── ModuleRenderer.ts     # QR module drawing
│   │   │   └── LogoRenderer.ts       # Logo overlay
│   │   └── utils/
│   │       ├── types.ts              # Core type definitions
│   │       └── validators.ts         # Input validation
│   └── cli/
│       └── index.ts                  # Command-line interface
├── examples/
│   ├── basic.ts                      # Basic usage examples
│   └── programmatic.ts               # Advanced API examples
├── dist/                             # ESM build + type definitions (generated)
│   └── cjs/                          # CommonJS build (generated)
├── tsconfig.json                     # TypeScript configuration
├── package.json                      # Package metadata
├── README.md                         # Main documentation
├── CONTRIBUTING.md                   # Contribution guidelines
├── QUICKSTART.md                     # Quick start guide
└── LICENSE                           # MIT License
```

## Component Details

### QRGenerator (Main Class)

**Responsibilities:**

- Coordinate the entire QR code generation process
- Validate input options
- Create and manage canvas
- Delegate rendering to specialized renderers
- Provide multiple output formats (file, buffer, data URL)

**Key Methods:**

- `generate()`: Core generation logic
- `generateToFile()`: Save to file system
- `generateToBuffer()`: Return as Buffer (for APIs)
- `generateToDataURL()`: Return as Data URL (for HTML)
- `updateOptions()`: Modify options dynamically

### Renderers

#### BackgroundRenderer

**Purpose:** Render canvas background with rounded corners

**Methods:**

- `render()`: Draw the background
- `applyClipping()`: Set up clipping path
- `restoreClipping()`: Restore canvas state

#### GradientRenderer

**Purpose:** Create gradient fill styles

**Methods:**

- `createGradient()`: Generate CanvasGradient based on colors and angle
- `getFillStyle()`: Return appropriate fill (gradient or solid)

#### ModuleRenderer

**Purpose:** Render QR code modules (the actual QR pattern)

**Methods:**

- `render()`: Main rendering method
- `renderRoundedModules()`: Draw with rounded corners
- `renderSquareModules()`: Draw standard squares
- `hasModule()`: Check if module exists at position

**Advanced Features:**

- Intelligent corner rounding based on adjacent modules
- Gap elimination for seamless appearance
- Support for both rounded and square styles

#### LogoRenderer

**Purpose:** Overlay logos on QR codes

**Methods:**

- `render()`: Main logo rendering
- `drawLogoBackground()`: Circular or square background
- `drawLogoWithShadow()`: Logo with shadow effects

### Utilities

#### types.ts

**Contains:**

- `QROptions`: Main options interface
- `DEFAULT_OPTIONS`: Default configuration
- Type constants and unions
- Error correction levels
- Logo shapes

#### validators.ts

**Functions:**

- `validateOptions()`: Comprehensive input validation
- `normalizeOptions()`: Merge user options with defaults

**Validations:**

- URL presence
- Size ranges (100-5000px)
- Module radius (0.0-0.5)
- Gradient angle (0-360°)
- Hex color format
- Shape and level enums

### CLI

**Features:**

- Full argument parsing with yargs
- Colored output with chalk
- Comprehensive help text
- Examples in help output
- Type-safe argument handling

**Commands:**

- `qr-styled`: Primary command
- `qrgen`: Short alias

## Data Flow

```
1. User Input (CLI or API)
        ↓
2. Option Validation & Normalization
        ↓
3. QRGenerator Initialization
        ↓
4. Generate QR Data (qrcode library)
        ↓
5. Create Canvas
        ↓
6. BackgroundRenderer → Draw background
        ↓
7. GradientRenderer → Create fill style
        ↓
8. ModuleRenderer → Draw QR modules
        ↓
9. LogoRenderer → Add logo (if provided)
        ↓
10. Output Generation (File/Buffer/DataURL)
```

## Extension Points

The architecture is designed for easy extension:

### Adding New Renderers

```typescript
// 1. Create new renderer
export class PatternRenderer {
  constructor(
    private ctx: CanvasRenderingContext2D,
    private options: Required<QROptions>
  ) {}

  render(): void {
    // Implementation
  }
}

// 2. Add to QRGenerator
const patternRenderer = new PatternRenderer(ctx, this.options);
patternRenderer.render();
```

### Adding New Output Formats

```typescript
// In QRGenerator class
async generateToSVG(): Promise<string> {
  // SVG generation logic
  return svgString;
}
```

### Adding New Options

```typescript
// 1. Update QROptions interface
export interface QROptions {
  // ... existing options
  newOption?: string;
}

// 2. Update DEFAULT_OPTIONS
export const DEFAULT_OPTIONS = {
  // ... existing defaults
  newOption: 'default-value'
};

// 3. Update validator if needed
export function validateOptions(options: QROptions): void {
  // Add validation for newOption
}
```

## Testing Strategy (Recommended)

```
Unit Tests:
- Validators (input validation)
- Each renderer in isolation
- Option normalization

Integration Tests:
- Complete QR generation flow
- Output format conversions
- CLI argument parsing

E2E Tests:
- Generated QR code scanning
- Visual regression tests
- Performance benchmarks
```

## Performance Considerations

1. **Canvas Operations**: Minimize state changes
2. **Module Rendering**: Batch operations when possible
3. **Image Loading**: Cache loaded logos
4. **Memory**: Clean up resources after generation

## Security Considerations

1. **Input Validation**: All inputs validated before processing
2. **File Paths**: Validate file paths to prevent directory traversal
3. **URLs**: Sanitize URLs before encoding
4. **Buffer Sizes**: Limit canvas sizes to prevent DoS

## Build Process

```
TypeScript Source (src/)
        ↓
 TypeScript Compiler (ESM + CJS builds)
        ↓
ESM + types (dist/) and CommonJS (dist/cjs/)
        ↓
      npm package
```

## Type System

### Internal Types

- Strict mode enabled
- No implicit any
- Complete type coverage

### External Types

- Custom declarations for qrcode library
- Type imports from canvas library
- Proper type exports for consumers

## Future Enhancements

1. **SVG Output**: Add SVG generation support
2. **Batch Processing**: Generate multiple QR codes efficiently
3. **Templates**: Pre-defined style templates
4. **Animations**: Animated QR codes
5. **Analytics**: QR code usage tracking
6. **Compression**: Optimize output file sizes
7. **Cloud Integration**: Direct upload to cloud storage
8. **QR Code Reading**: Add decoding functionality

## Contributing

When contributing, please:

1. Follow the existing architecture patterns
2. Add TypeScript types for all new code
3. Update relevant documentation
4. Add examples for new features
5. Ensure all builds pass (`npm run build`)

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Canvas API](https://github.com/Automattic/node-canvas)
- [QR Code Spec](https://www.qrcode.com/en/about/)
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)

---

Last Updated: February 2026
