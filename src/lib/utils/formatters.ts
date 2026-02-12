import type {
  VCardData,
  WiFiData,
  EmailData,
  SMSData,
  GeoData,
  QRDataType
} from './types.js';

/**
 * Formats vCard contact data to vCard 3.0 format
 */
export function formatVCard(data: VCardData): string {
  const lines: string[] = ['BEGIN:VCARD', 'VERSION:3.0'];

  if (data.firstName || data.lastName) {
    const name = `${data.lastName || ''};${data.firstName || ''};;;`;
    lines.push(`N:${name}`);
    lines.push(
      `FN:${[data.firstName, data.lastName].filter(Boolean).join(' ')}`
    );
  }

  if (data.organization) {
    lines.push(`ORG:${data.organization}`);
  }

  if (data.title) {
    lines.push(`TITLE:${data.title}`);
  }

  if (data.phone) {
    lines.push(`TEL:${data.phone}`);
  }

  if (data.email) {
    lines.push(`EMAIL:${data.email}`);
  }

  if (data.url) {
    lines.push(`URL:${data.url}`);
  }

  if (data.address || data.city || data.state || data.zip || data.country) {
    const adr = `;;${data.address || ''};${data.city || ''};${data.state || ''};${data.zip || ''};${data.country || ''}`;
    lines.push(`ADR:${adr}`);
  }

  lines.push('END:VCARD');
  return lines.join('\n');
}

/**
 * Formats WiFi configuration to WiFi QR format
 */
export function formatWiFi(data: WiFiData): string {
  const { ssid, password = '', encryption = 'WPA', hidden = false } = data;

  const escape = (str: string) => str.replace(/([\\;,:])/g, '\\$1');

  let result = 'WIFI:';
  result += `T:${encryption};`;
  result += `S:${escape(ssid)};`;

  if (password) {
    result += `P:${escape(password)};`;
  }

  if (hidden) {
    result += 'H:true;';
  }

  result += ';';
  return result;
}

/**
 * Formats email data to mailto URI
 */
export function formatEmail(data: EmailData): string {
  let result = `mailto:${data.email}`;
  const params: string[] = [];

  if (data.subject) {
    params.push(`subject=${encodeURIComponent(data.subject)}`);
  }

  if (data.body) {
    params.push(`body=${encodeURIComponent(data.body)}`);
  }

  if (params.length > 0) {
    result += '?' + params.join('&');
  }

  return result;
}

/**
 * Formats SMS data to SMS URI
 */
export function formatSMS(data: SMSData): string {
  let result = `sms:${data.phone}`;

  if (data.message) {
    result += `?body=${encodeURIComponent(data.message)}`;
  }

  return result;
}

/**
 * Formats geolocation data to geo URI
 */
export function formatGeo(data: GeoData): string {
  return `geo:${data.latitude},${data.longitude}`;
}

/**
 * Formats QR data based on type
 */
export function formatQRData(
  type: QRDataType,
  url?: string,
  data?: VCardData | WiFiData | EmailData | SMSData | GeoData
): string {
  switch (type) {
    case 'url':
      return url || '';

    case 'text':
      return url || '';

    case 'vcard':
      return data ? formatVCard(data as VCardData) : '';

    case 'wifi':
      return data ? formatWiFi(data as WiFiData) : '';

    case 'email':
      return data ? formatEmail(data as EmailData) : '';

    case 'sms':
      return data ? formatSMS(data as SMSData) : '';

    case 'geo':
      return data ? formatGeo(data as GeoData) : '';

    default:
      return url || '';
  }
}
