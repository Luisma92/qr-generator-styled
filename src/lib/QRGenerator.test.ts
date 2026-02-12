import { describe, it, expect } from 'vitest';
import { QRGenerator } from './QRGenerator.js';
import type { QROptions } from './utils/types.js';
import fs from 'fs';
import path from 'path';

describe('QRGenerator - Essential Tests', () => {
  const testOutputDir = path.join(process.cwd(), 'test-output');

  it('should create an instance with valid options', () => {
    const options: QROptions = {
      url: 'https://example.com'
    };

    const generator = new QRGenerator(options);
    expect(generator).toBeInstanceOf(QRGenerator);
  });

  it('should generate QR code to buffer', async () => {
    const options: QROptions = {
      url: 'https://example.com'
    };

    const generator = new QRGenerator(options);
    const buffer = await generator.generateToBuffer();

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBeGreaterThan(0);
  });

  it('should generate QR code to data URL', async () => {
    const options: QROptions = {
      url: 'https://example.com'
    };

    const generator = new QRGenerator(options);
    const dataURL = await generator.generateToDataURL();

    expect(dataURL).toMatch(/^data:image\/png;base64,/);
    expect(dataURL.length).toBeGreaterThan(100);
  });

  it('should throw error with invalid options', () => {
    const options: QROptions = {
      url: 'https://example.com',
      size: 50 // Too small
    };

    expect(() => new QRGenerator(options)).toThrow();
  });
});
