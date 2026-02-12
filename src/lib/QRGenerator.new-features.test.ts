import { describe, it, expect } from 'vitest';
import { QRGenerator } from './QRGenerator.js';

describe('QRGenerator - New Features', () => {
  describe('Specialized QR Types', () => {
    it('should generate vCard QR code', async () => {
      const generator = new QRGenerator({
        type: 'vcard',
        data: {
          firstName: 'John',
          lastName: 'Doe',
          phone: '+1234567890',
          email: 'john@example.com'
        },
        size: 300
      });

      const buffer = await generator.generateToBuffer();
      expect(buffer).toBeInstanceOf(Buffer);
      expect(buffer.length).toBeGreaterThan(0);
    });

    it('should generate WiFi QR code', async () => {
      const generator = new QRGenerator({
        type: 'wifi',
        data: {
          ssid: 'MyNetwork',
          password: 'SecurePass123',
          encryption: 'WPA'
        },
        size: 300
      });

      const buffer = await generator.generateToBuffer();
      expect(buffer).toBeInstanceOf(Buffer);
      expect(buffer.length).toBeGreaterThan(0);
    });

    it('should generate email QR code', async () => {
      const generator = new QRGenerator({
        type: 'email',
        data: {
          email: 'contact@example.com',
          subject: 'Hello',
          body: 'Test message'
        },
        size: 300
      });

      const buffer = await generator.generateToBuffer();
      expect(buffer).toBeInstanceOf(Buffer);
      expect(buffer.length).toBeGreaterThan(0);
    });

    it('should generate SMS QR code', async () => {
      const generator = new QRGenerator({
        type: 'sms',
        data: {
          phone: '+1234567890',
          message: 'Hello from QR'
        },
        size: 300
      });

      const buffer = await generator.generateToBuffer();
      expect(buffer).toBeInstanceOf(Buffer);
      expect(buffer.length).toBeGreaterThan(0);
    });

    it('should generate geo location QR code', async () => {
      const generator = new QRGenerator({
        type: 'geo',
        data: {
          latitude: 40.7128,
          longitude: -74.006
        },
        size: 300
      });

      const buffer = await generator.generateToBuffer();
      expect(buffer).toBeInstanceOf(Buffer);
      expect(buffer.length).toBeGreaterThan(0);
    });
  });

  describe('SVG Generation', () => {
    it('should generate SVG QR code', async () => {
      const generator = new QRGenerator({
        url: 'https://example.com',
        size: 300
      });

      const svg = await generator.generateToSVG();
      expect(svg).toContain('<?xml');
      expect(svg).toContain('<svg');
      expect(svg).toContain('</svg>');
      expect(svg).toContain('xmlns="http://www.w3.org/2000/svg"');
    });

    it('should include correct dimensions in SVG', async () => {
      const generator = new QRGenerator({
        url: 'https://test.com',
        size: 500
      });

      const svg = await generator.generateToSVG();
      expect(svg).toContain('width="500"');
      expect(svg).toContain('height="500"');
      expect(svg).toContain('viewBox="0 0 500 500"');
    });

    it('should apply colors in SVG', async () => {
      const generator = new QRGenerator({
        url: 'https://test.com',
        size: 300,
        foregroundColor: '#FF0000',
        backgroundColor: '#FFFFFF'
      });

      const svg = await generator.generateToSVG();
      expect(svg).toContain('#FF0000');
      expect(svg).toContain('#FFFFFF');
    });
  });

  describe('New Options', () => {
    it('should support margin option', async () => {
      const generator = new QRGenerator({
        url: 'https://example.com',
        size: 300,
        margin: 2
      });

      const buffer = await generator.generateToBuffer();
      expect(buffer).toBeInstanceOf(Buffer);
    });

    it('should support foregroundColor', async () => {
      const generator = new QRGenerator({
        url: 'https://example.com',
        size: 300,
        foregroundColor: '#0000FF'
      });

      const buffer = await generator.generateToBuffer();
      expect(buffer).toBeInstanceOf(Buffer);
    });

    it('should support eye customization', async () => {
      const generator = new QRGenerator({
        url: 'https://example.com',
        size: 300,
        eyeColor: '#FF0000',
        eyeRadius: 0.3
      });

      const buffer = await generator.generateToBuffer();
      expect(buffer).toBeInstanceOf(Buffer);
    });

    it('should maintain backward compatibility with color option', async () => {
      const generator = new QRGenerator({
        url: 'https://example.com',
        size: 300,
        color: '#00FF00'
      });

      const buffer = await generator.generateToBuffer();
      expect(buffer).toBeInstanceOf(Buffer);
    });

    it('should support logoSize and logoBackgroundColor', async () => {
      const generator = new QRGenerator({
        url: 'https://example.com',
        size: 300,
        logoSize: 80,
        logoBackgroundColor: '#FFFFFF'
      });

      const buffer = await generator.generateToBuffer();
      expect(buffer).toBeInstanceOf(Buffer);
    });
  });

  describe('Validation', () => {
    it('should reject vCard without name', () => {
      expect(() => {
        new QRGenerator({
          type: 'vcard',
          data: {} // No firstName or lastName
        });
      }).toThrow('vCard requires at least a first name or last name');
    });

    it('should reject WiFi without SSID', () => {
      expect(() => {
        new QRGenerator({
          type: 'wifi',
          data: {
            password: 'test'
          } as any
        });
      }).toThrow('WiFi QR code requires SSID');
    });

    it('should reject email without email address', () => {
      expect(() => {
        new QRGenerator({
          type: 'email',
          data: {} as any
        });
      }).toThrow('Email QR code requires email address');
    });

    it('should reject SMS without phone number', () => {
      expect(() => {
        new QRGenerator({
          type: 'sms',
          data: {} as any
        });
      }).toThrow('SMS QR code requires phone number');
    });

    it('should reject geo without coordinates', () => {
      expect(() => {
        new QRGenerator({
          type: 'geo',
          data: {} as any
        });
      }).toThrow('Geo QR code requires latitude and longitude');
    });

    it('should reject invalid margin', () => {
      expect(() => {
        new QRGenerator({
          url: 'https://test.com',
          margin: -1
        });
      }).toThrow('Margin must be between 0 and 10 modules');
    });

    it('should reject invalid eyeRadius', () => {
      expect(() => {
        new QRGenerator({
          url: 'https://test.com',
          eyeRadius: 1.5
        });
      }).toThrow('Eye radius must be between 0.0 and 0.5');
    });

    it('should reject invalid logoSize', () => {
      expect(() => {
        new QRGenerator({
          url: 'https://test.com',
          logoSize: 600
        });
      }).toThrow('Logo size must be between 50 and 500 pixels');
    });

    it('should reject specialized type without data', () => {
      expect(() => {
        new QRGenerator({
          type: 'wifi'
          // Missing data
        });
      }).toThrow('URL, text content, or structured data is required');
    });
  });
});
