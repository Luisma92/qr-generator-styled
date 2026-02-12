import { describe, it, expect } from 'vitest';
import { validateOptions, normalizeOptions } from './validators.js';
import type { QROptions } from './types.js';

describe('validators', () => {
  describe('validateOptions', () => {
    it('should validate valid basic options', () => {
      const options: QROptions = {
        url: 'https://example.com'
      };

      expect(() => validateOptions(options)).not.toThrow();
    });

    it('should throw error for missing URL', () => {
      const options: QROptions = {} as any;

      expect(() => validateOptions(options)).toThrow(
        'URL, text content, or structured data is required'
      );
    });

    it('should throw error for invalid size range', () => {
      const options: QROptions = {
        url: 'https://example.com',
        size: 50
      };

      expect(() => validateOptions(options)).toThrow(
        'Size must be between 100 and 5000 pixels'
      );
    });

    it('should throw error for invalid module radius', () => {
      const options: QROptions = {
        url: 'https://example.com',
        moduleRadius: 0.6
      };

      expect(() => validateOptions(options)).toThrow(
        'Module radius must be between 0.0 and 0.5'
      );
    });

    it('should validate gradient with string colors', () => {
      const options: QROptions = {
        url: 'https://example.com',
        gradient: true,
        gradientColors: '#ff0000,#00ff00'
      };

      expect(() => validateOptions(options)).not.toThrow();
    });

    it('should throw error for invalid error correction level', () => {
      const options: QROptions = {
        url: 'https://example.com',
        errorCorrectionLevel: 'X' as any
      };

      expect(() => validateOptions(options)).toThrow();
    });
  });

  describe('normalizeOptions', () => {
    it('should merge options with defaults', () => {
      const options: QROptions = {
        url: 'https://example.com',
        size: 500
      };

      const defaults = {
        margin: 2,
        backgroundColor: '#ffffff'
      };

      const normalized = normalizeOptions(options, defaults);

      expect(normalized.url).toBe('https://example.com');
      expect(normalized.size).toBe(500);
      expect(normalized.backgroundColor).toBe('#ffffff');
    });
  });
});
