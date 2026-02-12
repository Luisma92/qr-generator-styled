import QRCode from 'qrcode';
import { createCanvas, Canvas } from 'canvas';
import fs from 'fs';
import { BackgroundRenderer } from './renderers/BackgroundRenderer.js';
import { GradientRenderer } from './renderers/GradientRenderer.js';
import { ModuleRenderer } from './renderers/ModuleRenderer.js';
import { LogoRenderer } from './renderers/LogoRenderer.js';
import { SVGRenderer } from './renderers/SVGRenderer.js';
import { QROptions, DEFAULT_OPTIONS } from './utils/types.js';
import { validateOptions, normalizeOptions } from './utils/validators.js';
import { formatQRData } from './utils/formatters.js';

/**
 * QR Code Generator with advanced styling options
 */
export class QRGenerator {
  private options: Required<QROptions>;

  /**
   * Creates a new QR generator instance
   */
  constructor(options: QROptions) {
    this.options = normalizeOptions(
      options,
      DEFAULT_OPTIONS
    ) as Required<QROptions>;

    // Support deprecated 'color' field with backward compatibility
    if (options.color && !options.foregroundColor) {
      this.options.foregroundColor = options.color;
    }

    validateOptions(this.options);
  }

  /**
   * Generates QR code content from options
   */
  private getQRContent(): string {
    const { type, url, data } = this.options;

    // Use formatter to handle different data types
    return formatQRData(type, url, data);
  }

  /**
   * Generates QR code and returns the canvas
   */
  async generate(): Promise<Canvas> {
    const { errorCorrectionLevel, size, padding, margin, foregroundColor } =
      this.options;

    // Use margin if specified, fallback to padding for backward compatibility
    const actualMargin = margin !== undefined ? margin : padding;
    const qrSize = size - actualMargin * 2;

    // Get formatted content based on type
    const content = this.getQRContent();

    // Generate QR data
    const qrData = await QRCode.create(content, {
      errorCorrectionLevel
    } as any); // margin option not in types but works

    const modules = qrData.modules;
    const moduleCount = modules.size;
    const moduleSize = qrSize / moduleCount;

    // Create canvas
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');

    // Render background
    const backgroundRenderer = new BackgroundRenderer(ctx, this.options);
    backgroundRenderer.render();
    backgroundRenderer.applyClipping();

    // Create fill style (gradient or solid)
    const gradientRenderer = new GradientRenderer(ctx, this.options);
    const fillStyle = gradientRenderer.getFillStyle();

    // Render QR modules with eye customization support
    const moduleRenderer = new ModuleRenderer(ctx, modules, {
      ...this.options,
      color: foregroundColor, // Use new foregroundColor
      moduleCount,
      moduleSize
    });
    moduleRenderer.render(fillStyle);

    backgroundRenderer.restoreClipping();

    // Render logo if provided
    if (this.options.logo) {
      const logoRenderer = new LogoRenderer(ctx, this.options);
      await logoRenderer.render(this.options.logo);
    }

    return canvas;
  }

  /**
   * Generates QR code and saves to file
   */
  async generateToFile(outputPath: string): Promise<void> {
    const canvas = await this.generate();
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputPath, buffer);
  }

  /**
   * Generates QR code and returns buffer
   */
  async generateToBuffer(format: 'png' | 'jpeg' = 'png'): Promise<Buffer> {
    const canvas = await this.generate();
    const mimeType = format === 'jpeg' ? 'image/jpeg' : 'image/png';
    return canvas.toBuffer(mimeType as any);
  }

  /**
   * Generates QR code and returns data URL
   */
  async generateToDataURL(format: 'png' | 'jpeg' = 'png'): Promise<string> {
    const canvas = await this.generate();
    if (format === 'jpeg') {
      return canvas.toDataURL('image/jpeg');
    }
    return canvas.toDataURL('image/png');
  }

  /**
   * Generates QR code as SVG string
   */
  async generateToSVG(): Promise<string> {
    const { errorCorrectionLevel, size } = this.options;

    // Get formatted content based on type
    const content = this.getQRContent();

    // Generate QR data
    const qrData = await QRCode.create(content, {
      errorCorrectionLevel
    } as any);

    // Use SVG renderer
    const svgRenderer = new SVGRenderer(qrData, this.options, size);
    return svgRenderer.generate();
  }

  /**
   * Generates QR code as SVG and saves to file
   */
  async generateToSVGFile(outputPath: string): Promise<void> {
    const svg = await this.generateToSVG();
    fs.writeFileSync(outputPath, svg, 'utf-8');
  }

  /**
   * Updates generator options
   */
  updateOptions(options: Partial<QROptions>): void {
    this.options = normalizeOptions(
      { ...this.options, ...options },
      DEFAULT_OPTIONS
    ) as Required<QROptions>;

    // Support deprecated 'color' field
    if (options.color && !options.foregroundColor) {
      this.options.foregroundColor = options.color;
    }

    validateOptions(this.options);
  }
}

/**
 * Helper function to quickly generate a QR code
 */
export async function generateQR(options: QROptions): Promise<Canvas> {
  const generator = new QRGenerator(options);
  return generator.generate();
}

/**
 * Helper function to quickly generate and save a QR code
 */
export async function generateQRToFile(
  options: QROptions,
  outputPath: string
): Promise<void> {
  const generator = new QRGenerator(options);
  return generator.generateToFile(outputPath);
}
