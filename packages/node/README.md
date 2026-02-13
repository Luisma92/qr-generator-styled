# 🎨 @qr-styled/node

**Professional QR Code Generator for Node.js**

A powerful Node.js/TypeScript library for generating QR codes with advanced styling options including gradients, rounded modules, and logo support.

> 💡 **Looking for browser support?** Check out [@qr-styled/browser](https://github.com/Luisma92/qr-styled-browser) for frontend/React/Vue applications.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)

## ✨ Features

- 🎨 **Customizable Styles**: Solid colors or multi-color gradients
- 🔷 **Rounded Modules**: Smooth, modern edges with radius control
- 🖼️ **Logo Support**: Add logos with circular or square backgrounds
- � **Specialized QR Types**: vCard, WiFi, Email, SMS, Geo location
- 📄 **SVG Export**: Vector format for perfect scalability
- 👁️ **Eye Customization**: Custom colors and shapes (square, rounded, or circular) ✨
- 📏 **Proper Margins**: Standard QR quiet zone support
- 📦 **Multiple Output Formats**: PNG, JPEG, SVG, Buffer, Data URL, or Canvas
- 🛠️ **CLI & API**: Use from command line or programmatically
- ✅ **Built-in Validation**: Options validated automatically
- 🎯 **Full TypeScript Support**: Complete type definitions included
- 🔧 **Modular Architecture**: Clean, maintainable code

## �️ Visual Examples

### Advanced Features

<table>
  <tr>
    <td align="center" valign="top">
      <img src="https://raw.githubusercontent.com/Luisma92/qr-styled/main/packages/node/docs/images/vcard-contact.png" width="180" alt="vCard Contact QR"/>
      <br/>
      <b>vCard Contact</b>
      <br/>
      <sub>Purple gradient with custom eyes</sub>
    </td>
    <td align="center" valign="top">
      <img src="https://raw.githubusercontent.com/Luisma92/qr-styled/main/packages/node/docs/images/wifi-network.png" width="180" alt="WiFi Network QR"/>
      <br/>
      <b>WiFi Network</b>
      <br/>
      <sub>Green gradient with rounded modules</sub>
    </td>
    <td align="center" valign="top">
      <img src="https://raw.githubusercontent.com/Luisma92/qr-styled/main/packages/node/docs/images/email-contact.png" width="180" alt="Email Contact QR"/>
      <br/>
      <b>Email Contact</b>
      <br/>
      <sub>Pink gradient with eye customization</sub>
    </td>
    <td align="center" valign="top">
      <img src="https://raw.githubusercontent.com/Luisma92/qr-styled/main/packages/node/docs/images/custom-eyes.png" width="180" alt="Custom Eyes QR"/>
      <br/>
      <b>Custom Eyes</b>
      <br/>
      <sub>Red eye accents (square modules)</sub>
    </td>
  </tr>
</table>

### Basic Styles

<table>
  <tr>
    <td align="center" valign="top">
      <img src="https://raw.githubusercontent.com/Luisma92/qr-styled/main/packages/node/docs/images/basic-classic.png" width="150" alt="Classic Black & White QR"/>
      <br/>
      <b>Classic</b>
      <br/>
      <sub>Traditional black & white</sub>
    </td>
    <td align="center" valign="top">
      <img src="https://raw.githubusercontent.com/Luisma92/qr-styled/main/packages/node/docs/images/basic-blue.png" width="150" alt="Professional Blue QR"/>
      <br/>
      <b>Professional</b>
      <br/>
      <sub>Blue rounded design</sub>
    </td>
    <td align="center" valign="top">
      <img src="https://raw.githubusercontent.com/Luisma92/qr-styled/main/packages/node/docs/images/basic-green.png" width="150" alt="Eco Green QR"/>
      <br/>
      <b>Eco</b>
      <br/>
      <sub>Green with custom eyes</sub>
    </td>
    <td align="center" valign="top">
      <img src="https://raw.githubusercontent.com/Luisma92/qr-styled/main/packages/node/docs/images/basic-red.png" width="150" alt="Alert Red QR"/>
      <br/>
      <b>Alert</b>
      <br/>
      <sub>Red attention-grabbing</sub>
    </td>
    <td align="center" valign="top">
      <img src="https://raw.githubusercontent.com/Luisma92/qr-styled/main/packages/node/docs/images/basic-purple.png" width="150" alt="Creative Purple QR"/>
      <br/>
      <b>Creative</b>
      <br/>
      <sub>Purple artistic</sub>
    </td>
  </tr>
</table>

### With Logos

<table>
  <tr>
    <td align="center" valign="top">
      <img src="https://raw.githubusercontent.com/Luisma92/qr-styled/main/packages/node/docs/images/logo-corporate.png" width="160" alt="Corporate QR with Logo"/>
      <br/>
      <b>Corporate</b>
      <br/>
      <sub>Circle logo, professional blue</sub>
    </td>
    <td align="center" valign="top">
      <img src="https://raw.githubusercontent.com/Luisma92/qr-styled/main/packages/node/docs/images/logo-eco.png" width="160" alt="Eco Brand QR with Logo"/>
      <br/>
      <b>Eco Brand</b>
      <br/>
      <sub>Square logo, green gradient</sub>
    </td>
    <td align="center" valign="top">
      <img src="https://raw.githubusercontent.com/Luisma92/qr-styled/main/packages/node/docs/images/logo-tech.png" width="160" alt="Tech Startup QR with Logo"/>
      <br/>
      <b>Tech Startup</b>
      <br/>
      <sub>Circle logo, purple gradient</sub>
    </td>
    <td align="center" valign="top">
      <img src="https://raw.githubusercontent.com/Luisma92/qr-styled/main/packages/node/docs/images/logo-restaurant.png" width="160" alt="Restaurant QR with Logo"/>
      <br/>
      <b>Restaurant</b>
      <br/>
      <sub>Square logo, red gradient</sub>
    </td>
  </tr>
</table>
### Circular Eyes ✨ NEW

Experience modern QR codes with perfectly smooth circular finder patterns instead of traditional squares.

<table>
  <tr>
    <td align="center" valign="top">
      <img src="https://raw.githubusercontent.com/Luisma92/qr-styled/main/packages/node/docs/images/circular-eyes-simple.png" width="180" alt="Simple Circular Eyes QR"/>
      <br/>
      <b>Simple Circular</b>
      <br/>
      <sub>Blue circular eyes with rounded modules</sub>
    </td>
    <td align="center" valign="top">
      <img src="https://raw.githubusercontent.com/Luisma92/qr-styled/main/packages/node/docs/images/circular-eyes-gradient.png" width="180" alt="Gradient Circular Eyes QR"/>
      <br/>
      <b>Gradient Circular</b>
      <br/>
      <sub>Pink gradient with circular eyes</sub>
    </td>
    <td align="center" valign="top">
      <img src="https://raw.githubusercontent.com/Luisma92/qr-styled/main/packages/node/docs/images/circular-eyes-contrast.png" width="180" alt="High Contrast Circular Eyes QR"/>
      <br/>
      <b>High Contrast</b>
      <br/>
      <sub>Pink circular eyes on dark modules</sub>
    </td>
  </tr>
</table>

```typescript
// Simple circular eyes
const qr = new QRGenerator({
  url: 'https://example.com',
  eyeColor: '#1e40af',
  eyeShape: 'circle', // ✨ NEW: 'square' | 'rounded' | 'circle'
  rounded: true
});

// Gradient with circular eyes
const gradientQR = new QRGenerator({
  url: 'https://example.com',
  gradient: true,
  gradientColors: '#f093fb, #f5576c',
  eyeColor: '#c2185b',
  eyeShape: 'circle',
  rounded: true
});
```

> 💡 **Tip**: All examples shown above were generated with this library! Check the [`examples/`](examples/) directory for source code.

## �📦 Installation

```bash
npm install @qr-styled/node
```

Or for global CLI usage:

```bash
npm install -g @qr-styled/node
```

## 🚀 Quick Start

### CLI Usage

```bash
# Basic QR code
qr-styled --url "https://github.com"

# QR with gradient
qr-styled --url "https://github.com" --gradient

# QR with logo
qr-styled --url "https://github.com" --logo ./my-logo.png --out my-qr.png
```

### Library Usage

```typescript
import { QRGenerator, generateQRToFile } from '@qr-styled/node';

// Basic URL QR code
const generator = new QRGenerator({
  url: 'https://github.com',
  gradient: true,
  gradientColors: '#667eea,#764ba2'
});

await generator.generateToFile('qr-output.png');

// vCard contact QR code
const vCardGenerator = new QRGenerator({
  type: 'vcard',
  data: {
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1234567890',
    email: 'john@example.com',
    organization: 'Tech Corp'
  }
});

await vCardGenerator.generateToFile('contact-qr.png');

// WiFi QR code
const wifiGenerator = new QRGenerator({
  type: 'wifi',
  data: {
    ssid: 'MyNetwork',
    password: 'SecurePassword123',
    encryption: 'WPA'
  }
});

await wifiGenerator.generateToFile('wifi-qr.png');

// SVG export for scalability
const svgGenerator = new QRGenerator({
  url: 'https://example.com',
  foregroundColor: '#2196F3',
  eyeColor: '#FF5722',
  eyeRadius: 0.4
});

const svg = await svgGenerator.generateToSVG();
await svgGenerator.generateToSVGFile('qr.svg');

// Helper function
await generateQRToFile(
  {
    url: 'https://github.com',
    foregroundColor: '#2d3748'
  },
  'qr-output.png'
);
```

## 📖 Documentation

### Configuration Options

#### Basic Options

| Option            | Type         | Default      | Description                                            |
| ----------------- | ------------ | ------------ | ------------------------------------------------------ |
| `url`             | `string`     | _optional_   | URL or text content                                    |
| `type`            | `QRDataType` | `'text'`     | QR data type (url, text, vcard, wifi, email, sms, geo) |
| `data`            | `object`     | _optional_   | Structured data for specialized types                  |
| `size`            | `number`     | `600`        | Canvas size in pixels                                  |
| `margin`          | `number`     | `4`          | Quiet zone margin (4 modules standard)                 |
| `padding`         | `number`     | `40`         | Canvas padding in pixels                               |
| `foregroundColor` | `string`     | `'#000000'`  | QR code color (hex format)                             |
| `color`           | `string`     | _deprecated_ | Use `foregroundColor` instead                          |
| `rounded`         | `boolean`    | `true`       | Use rounded module corners                             |
| `moduleRadius`    | `number`     | `0.35`       | Corner radius (0.0 - 0.5)                              |
| `cornerRadius`    | `number`     | `60`         | Background corner radius                               |
| `backgroundColor` | `string`     | `'#ffffff'`  | Background color                                       |

#### Eye Customization

| Option      | Type     | Default    | Description                                          |
| ----------- | -------- | ---------- | ---------------------------------------------------- |
| `eyeColor`  | `string` | `''`       | Custom eye (finder pattern) color                    |
| `eyeRadius` | `number` | `0`        | Eye corner radius (0.0 - 0.5)                        |
| `eyeShape`  | `string` | `'square'` | Eye shape: `'square'`, `'rounded'`, or `'circle'` ✨ |

#### Gradient Options

| Option           | Type      | Default                 | Description              |
| ---------------- | --------- | ----------------------- | ------------------------ |
| `gradient`       | `boolean` | `false`                 | Enable gradient          |
| `gradientColors` | `string`  | `'#FEDA75,#FA7E1E,...'` | Comma-separated colors   |
| `gradientAngle`  | `number`  | `45`                    | Angle in degrees (0-360) |

#### Logo Options

| Option                | Type                 | Default     | Description                    |
| --------------------- | -------------------- | ----------- | ------------------------------ |
| `logo`                | `string`             | `''`        | Logo image path or URL         |
| `logoSize`            | `number`             | `120`       | Logo size in pixels            |
| `logoPadding`         | `number`             | `10`        | Padding around logo            |
| `logoShape`           | `'circle'\|'square'` | `'circle'`  | Logo background shape          |
| `logoBackgroundColor` | `string`             | `'#ffffff'` | Logo background color          |
| `logoRadius`          | `number`             | `20`        | Corner radius for square logos |

### Specialized QR Codes

#### vCard (Contact Card)

```typescript
{
  type: 'vcard',
  data: {
    firstName: 'John',
    lastName: 'Doe',
    organization: 'Tech Corp',
    title: 'CEO',
    phone: '+1234567890',
    email: 'john@example.com',
    url: 'https://example.com',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    country: 'USA'
  }
}
```

#### WiFi Network

```typescript
{
  type: 'wifi',
  data: {
    ssid: 'MyNetwork',
    password: 'SecurePassword123',
    encryption: 'WPA', // 'WPA' | 'WEP' | 'nopass'
    hidden: false      // optional
  }
}
```

#### Email

```typescript
{
  type: 'email',
  data: {
    email: 'contact@example.com',
    subject: 'Hello',    // optional
    body: 'Message text' // optional
  }
}
```

#### SMS

```typescript
{
  type: 'sms',
  data: {
    phone: '+1234567890',
    message: 'Hello!'  // optional
  }
}
```

#### Geo Location

```typescript
{
  type: 'geo',
  data: {
    latitude: 40.7128,
    longitude: -74.0060
  }
}
```

| `logoRadius` | `number` | `20` | Corner radius (for square) |

### API Reference

#### `QRGenerator`

Main class for generating QR codes.

```typescript
import { QRGenerator } from '@qr-styled/node';

const generator = new QRGenerator(options);
```

##### Methods

###### `generate()`

Generates QR code and returns the canvas.

```typescript
const canvas = await generator.generate();
```

###### `generateToFile(outputPath)`

Generates and saves QR code to file.

```typescript
await generator.generateToFile('output.png');
```

###### `generateToBuffer(format)`

Generates and returns a Buffer (useful for APIs/servers).

```typescript
const buffer = await generator.generateToBuffer('png');
// In Express: res.type('png').send(buffer)
```

###### `generateToDataURL(format)`

Generates and returns a Data URL (useful for HTML).

```typescript
const dataURL = await generator.generateToDataURL('png');
// In HTML: <img src="${dataURL}" />
```

###### `updateOptions(options)`

Updates generator options.

```typescript
generator.updateOptions({ gradient: true });
await generator.generateToFile('updated.png');
```

#### Helper Functions

##### `generateQR(options)`

Quickly generate a QR code and return the canvas.

```typescript
import { generateQR } from '@qr-styled/node';

const canvas = await generateQR({ url: 'https://example.com' });
```

##### `generateQRToFile(options, outputPath)`

Generate and save a QR code to file.

```typescript
import { generateQRToFile } from '@qr-styled/node';

await generateQRToFile(
  { url: 'https://example.com', gradient: true },
  'output.png'
);
```

## 💻 Usage Examples

### Example 1: Instagram Gradient QR

```typescript
const generator = new QRGenerator({
  url: 'https://instagram.com/your-profile',
  gradient: true,
  gradientColors: '#FEDA75,#FA7E1E,#D62976,#962FBF,#4F5BD5',
  gradientAngle: 45,
  rounded: true
});

await generator.generateToFile('instagram-qr.png');
```

### Example 2: Corporate QR with Logo

```typescript
const generator = new QRGenerator({
  url: 'https://your-company.com',
  foregroundColor: '#1a365d',
  logo: './company-logo.png',
  logoShape: 'square',
  logoRadius: 15,
  backgroundColor: '#f7fafc'
});

await generator.generateToFile('company-qr.png');
```

### Example 3: QR for HTTP API

```typescript
import express from 'express';
import { QRGenerator } from '@qr-styled/node';

const app = express();

app.get('/qr', async (req, res) => {
  const generator = new QRGenerator({
    url: req.query.url,
    gradient: true,
    gradientColors: '#667eea,#764ba2'
  });

  const buffer = await generator.generateToBuffer('png');
  res.type('png').send(buffer);
});

app.listen(3000);
```

### Example 4: Dynamic QR in Frontend

```typescript
// In your Node.js server
app.get('/api/qr-data', async (req, res) => {
  const generator = new QRGenerator({
    url: 'https://example.com',
    gradient: true
  });

  const dataURL = await generator.generateToDataURL('png');
  res.json({ qrCode: dataURL });
});

// In your frontend (React, Vue, etc.)
fetch('/api/qr-data')
  .then(res => res.json())
  .then(data => {
    document.getElementById('qr').src = data.qrCode;
  });
```

## 🔧 CLI

### Global Installation

```bash
npm install -g @qr-styled/node
```

### Available Commands

```bash
# Available commands
qr-styled [options]
qrgen [options]  # Short alias
```

### CLI Examples

```bash
# Basic QR
qr-styled --url "https://github.com"

# Custom filename
qr-styled --url "https://github.com" --out my-code.png

# QR with gradient
qr-styled --url "https://github.com" --gradient --gradientColors "#ff6b6b,#ee5a6f"

# QR with logo
qr-styled --url "https://github.com" --logo ./logo.png --logoShape square

# QR with all options
qr-styled \
  --url "https://github.com" \
  --size 800 \
  --gradient \
  --gradientColors "#667eea,#764ba2" \
  --gradientAngle 90 \
  --logo ./logo.png \
  --logoShape circle \
  --out custom-qr.png
```

### Help

```bash
qr-styled --help
```

## 🏗️ Architecture

```
src/
├── index.ts                    # Main entry point
├── lib/
│   ├── QRGenerator.ts         # Main class
│   ├── renderers/             # Rendering modules
│   │   ├── BackgroundRenderer.ts
│   │   ├── GradientRenderer.ts
│   │   ├── ModuleRenderer.ts
│   │   └── LogoRenderer.ts
│   └── utils/                 # Utilities
│       ├── types.ts
│       └── validators.ts
└── cli/
    └── index.ts               # Command line interface
```

### Design Principles

- **Separation of Concerns**: Each renderer handles a specific function
- **Composition over Inheritance**: Renderers are composed in QRGenerator
- **Input Validation**: All options validated before processing
- **Flexible API**: Supports multiple output formats
- **Clean Code**: Complete TypeScript types and documentation

## 🧪 Included Examples

The project includes complete examples you can run:

```bash
# Basic examples
npm run example:basic

# Programmatic usage examples
npm run example:programmatic
```

Examples will generate files in `examples/output/` for you to review.

## 🤝 Framework Integration

### Express.js

```typescript
app.get('/qr/:text', async (req, res) => {
  const generator = new QRGenerator({ url: req.params.text });
  const buffer = await generator.generateToBuffer();
  res.type('png').send(buffer);
});
```

### Next.js (API Route)

```typescript
// pages/api/qr.ts
import { QRGenerator } from '@qr-styled/node';

export default async function handler(req, res) {
  const { url } = req.query;
  const generator = new QRGenerator({ url });
  const buffer = await generator.generateToBuffer();

  res.setHeader('Content-Type', 'image/png');
  res.send(buffer);
}
```

### Fastify

```typescript
fastify.get('/qr', async (request, reply) => {
  const generator = new QRGenerator({ url: request.query.url });
  const buffer = await generator.generateToBuffer();

  reply.type('image/png').send(buffer);
});
```

## 🛠️ Development

### Build

```bash
npm run build
```

### Development Mode

```bash
npm run dev -- --url "https://example.com"
```

### Run Examples

```bash
npm run example:basic
npm run example:programmatic
```

## 📄 License

MIT © Luis Manuel Yerena Sosa

## 🙏 Contributing

Contributions are welcome! Please:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## 🐛 Report Issues

If you find a bug or have a suggestion, please [open an issue](https://github.com/Luisma92/@qr-styled/node/issues).

## 📚 Resources

- [QRCode Documentation](https://github.com/soldair/node-qrcode)
- [Canvas API](https://github.com/Automattic/node-canvas)
- [QR Code Specification](https://www.qrcode.com/en/about/)

---

**⭐ If you find this project useful, consider giving it a star on GitHub!**
