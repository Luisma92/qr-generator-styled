import {
  QROptions,
  VALID_LOGO_SHAPES,
  VALID_ERROR_CORRECTION_LEVELS
} from './types.js';

/**
 * Validates QR generation options
 * @throws {Error} If options are invalid
 */
export function validateOptions(options: QROptions): void {
  // Validate that either url or data is provided
  if (!options.url && !options.data) {
    throw new Error('URL, text content, or structured data is required');
  }

  // Validate specialized data types
  if (
    options.type &&
    options.type !== 'url' &&
    options.type !== 'text' &&
    !options.data
  ) {
    throw new Error(`Structured data is required for type '${options.type}'`);
  }

  if (options.size && (options.size < 100 || options.size > 5000)) {
    throw new Error('Size must be between 100 and 5000 pixels');
  }

  if (
    options.margin !== undefined &&
    (options.margin < 0 || options.margin > 10)
  ) {
    throw new Error('Margin must be between 0 and 10 modules');
  }

  if (
    options.moduleRadius !== undefined &&
    (options.moduleRadius < 0 || options.moduleRadius > 0.5)
  ) {
    throw new Error('Module radius must be between 0.0 and 0.5');
  }

  if (
    options.eyeRadius !== undefined &&
    (options.eyeRadius < 0 || options.eyeRadius > 0.5)
  ) {
    throw new Error('Eye radius must be between 0.0 and 0.5');
  }

  if (
    options.gradientAngle &&
    (options.gradientAngle < 0 || options.gradientAngle > 360)
  ) {
    throw new Error('Gradient angle must be between 0 and 360 degrees');
  }

  if (
    options.logoShape &&
    !VALID_LOGO_SHAPES.includes(options.logoShape as any)
  ) {
    throw new Error(
      `Logo shape must be one of: ${VALID_LOGO_SHAPES.join(', ')}`
    );
  }

  if (options.logoSize && (options.logoSize < 50 || options.logoSize > 500)) {
    throw new Error('Logo size must be between 50 and 500 pixels');
  }

  if (
    options.errorCorrectionLevel &&
    !VALID_ERROR_CORRECTION_LEVELS.includes(options.errorCorrectionLevel as any)
  ) {
    throw new Error(
      `Error correction level must be one of: ${VALID_ERROR_CORRECTION_LEVELS.join(', ')}`
    );
  }

  // Support both deprecated 'color' and new 'foregroundColor'
  const colorToValidate = options.foregroundColor || options.color;
  if (colorToValidate && !/^#([0-9A-F]{3}){1,2}$/i.test(colorToValidate)) {
    throw new Error('Color must be in hex format (e.g., #000000)');
  }

  if (options.eyeColor && !/^#([0-9A-F]{3}){1,2}$/i.test(options.eyeColor)) {
    throw new Error('Eye color must be in hex format (e.g., #000000)');
  }

  if (
    options.backgroundColor &&
    !/^#([0-9A-F]{3}){1,2}$/i.test(options.backgroundColor)
  ) {
    throw new Error('Background color must be in hex format (e.g., #ffffff)');
  }

  if (
    options.logoBackgroundColor &&
    !/^#([0-9A-F]{3}){1,2}$/i.test(options.logoBackgroundColor)
  ) {
    throw new Error(
      'Logo background color must be in hex format (e.g., #ffffff)'
    );
  }

  if (options.gradientColors) {
    const colors = options.gradientColors.split(',').map(c => c.trim());
    colors.forEach(color => {
      if (!/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
        throw new Error(
          `Invalid gradient color: ${color}. Must be in hex format`
        );
      }
    });
  }

  // Validate specialized data structures
  if (options.data && options.type) {
    switch (options.type) {
      case 'vcard':
        {
          const vcard = options.data as any;
          if (!vcard.firstName && !vcard.lastName) {
            throw new Error(
              'vCard requires at least a first name or last name'
            );
          }
        }
        break;
      case 'wifi':
        {
          const wifi = options.data as any;
          if (!wifi.ssid) {
            throw new Error('WiFi QR code requires SSID');
          }
        }
        break;
      case 'email':
        {
          const email = options.data as any;
          if (!email.email) {
            throw new Error('Email QR code requires email address');
          }
        }
        break;
      case 'sms':
        {
          const sms = options.data as any;
          if (!sms.phone) {
            throw new Error('SMS QR code requires phone number');
          }
        }
        break;
      case 'geo':
        {
          const geo = options.data as any;
          if (geo.latitude === undefined || geo.longitude === undefined) {
            throw new Error('Geo QR code requires latitude and longitude');
          }
        }
        break;
    }
  }
}

/**
 * Normalizes and merges options with defaults
 */
export function normalizeOptions<T extends Partial<QROptions>>(
  options: T,
  defaults: Partial<QROptions>
): T & Partial<QROptions> {
  return {
    ...defaults,
    ...options
  };
}
