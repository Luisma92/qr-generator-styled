/**
 * QR code data types for specialized content
 */
export type QRDataType =
  | 'url'
  | 'text'
  | 'vcard'
  | 'wifi'
  | 'email'
  | 'sms'
  | 'geo';

/**
 * vCard contact data
 */
export interface VCardData {
  firstName?: string;
  lastName?: string;
  organization?: string;
  title?: string;
  phone?: string;
  email?: string;
  url?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
}

/**
 * WiFi configuration data
 */
export interface WiFiData {
  ssid: string;
  password?: string;
  encryption?: 'WPA' | 'WEP' | 'nopass';
  hidden?: boolean;
}

/**
 * Email data
 */
export interface EmailData {
  email: string;
  subject?: string;
  body?: string;
}

/**
 * SMS data
 */
export interface SMSData {
  phone: string;
  message?: string;
}

/**
 * Geolocation data
 */
export interface GeoData {
  latitude: number;
  longitude: number;
}

/**
 * QR generation options interface
 */
export interface QROptions {
  /** URL or text content for the QR code */
  url?: string;
  /** Type of QR code data */
  type?: QRDataType;
  /** Structured data for specialized QR types */
  data?: VCardData | WiFiData | EmailData | SMSData | GeoData;
  /** Canvas size in pixels */
  size?: number;
  /** QR code quiet zone margin (in modules, typically 4) */
  margin?: number;
  /** Canvas padding in pixels */
  padding?: number;
  /** QR code foreground color (hex format) */
  foregroundColor?: string;
  /** @deprecated Use foregroundColor instead */
  color?: string;
  /** Path or URL to logo image */
  logo?: string;
  /** Logo size in pixels */
  logoSize?: number;
  /** Use rounded module corners */
  rounded?: boolean;
  /** Module corner radius (0.0-0.5) */
  moduleRadius?: number;
  /** Padding around logo */
  logoPadding?: number;
  /** Logo background shape */
  logoShape?: 'circle' | 'square';
  /** Logo background color */
  logoBackgroundColor?: string;
  /** Corner radius for square logo background */
  logoRadius?: number;
  /** Use gradient colors */
  gradient?: boolean;
  /** Comma-separated gradient colors */
  gradientColors?: string;
  /** Gradient angle in degrees (0-360) */
  gradientAngle?: number;
  /** Background corner radius */
  cornerRadius?: number;
  /** Background color */
  backgroundColor?: string;
  /** QR error correction level */
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
  /** Custom eye (finder pattern) color */
  eyeColor?: string;
  /** Custom eye radius (0.0-0.5) */
  eyeRadius?: number;
}

/**
 * Default configuration options for QR code generation
 */
export const DEFAULT_OPTIONS: Required<
  Omit<QROptions, 'url' | 'data' | 'color'>
> = {
  type: 'text',
  size: 600,
  margin: 4,
  padding: 40,
  foregroundColor: '#000000',
  logo: '',
  logoSize: 120,
  rounded: true,
  moduleRadius: 0.35,
  logoPadding: 10,
  logoShape: 'circle',
  logoBackgroundColor: '#ffffff',
  logoRadius: 20,
  gradient: false,
  gradientColors: '#FEDA75,#FA7E1E,#D62976,#962FBF,#4F5BD5',
  gradientAngle: 45,
  cornerRadius: 60,
  backgroundColor: '#ffffff',
  errorCorrectionLevel: 'H',
  eyeColor: '',
  eyeRadius: 0
};

/**
 * Valid logo shapes
 */
export const VALID_LOGO_SHAPES = ['circle', 'square'] as const;

/**
 * Valid error correction levels
 */
export const VALID_ERROR_CORRECTION_LEVELS = ['L', 'M', 'Q', 'H'] as const;

export type LogoShape = (typeof VALID_LOGO_SHAPES)[number];
export type ErrorCorrectionLevel =
  (typeof VALID_ERROR_CORRECTION_LEVELS)[number];
