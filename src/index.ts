/**
 * @module qr-generator-styled
 * @description A professional QR code generator library with advanced styling options
 */

export {
  QRGenerator,
  generateQR,
  generateQRToFile
} from './lib/QRGenerator.js';

export {
  DEFAULT_OPTIONS,
  VALID_LOGO_SHAPES,
  VALID_ERROR_CORRECTION_LEVELS
} from './lib/utils/types.js';

export type {
  QROptions,
  QRDataType,
  VCardData,
  WiFiData,
  EmailData,
  SMSData,
  GeoData,
  LogoShape,
  ErrorCorrectionLevel
} from './lib/utils/types.js';

export { validateOptions, normalizeOptions } from './lib/utils/validators.js';

export {
  formatVCard,
  formatWiFi,
  formatEmail,
  formatSMS,
  formatGeo,
  formatQRData
} from './lib/utils/formatters.js';

export { BackgroundRenderer } from './lib/renderers/BackgroundRenderer.js';
export { GradientRenderer } from './lib/renderers/GradientRenderer.js';
export { ModuleRenderer } from './lib/renderers/ModuleRenderer.js';
export { LogoRenderer } from './lib/renderers/LogoRenderer.js';
export { SVGRenderer } from './lib/renderers/SVGRenderer.js';
