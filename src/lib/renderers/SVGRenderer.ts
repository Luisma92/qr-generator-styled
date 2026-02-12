import type { QROptions } from '../utils/types.js';

/**
 * Renderer for SVG output
 */
export class SVGRenderer {
  private options: Required<QROptions>;
  private qrData: any;
  private size: number;

  constructor(qrData: any, options: Required<QROptions>, size: number) {
    this.qrData = qrData;
    this.options = options;
    this.size = size;
  }

  /**
   * Generates SVG string
   */
  generate(): string {
    const {
      size,
      backgroundColor,
      foregroundColor,
      moduleRadius,
      eyeColor,
      eyeRadius
    } = this.options;
    const modules = this.qrData.modules;
    const moduleCount = modules.size;
    const moduleSize = size / moduleCount;

    let svg = `<?xml version="1.0" encoding="UTF-8"?>`;
    svg += `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">`;

    // Background
    svg += `<rect width="${size}" height="${size}" fill="${backgroundColor}"/>`;

    // QR modules
    svg += `<g fill="${foregroundColor}">`;

    for (let row = 0; row < moduleCount; row++) {
      for (let col = 0; col < moduleCount; col++) {
        if (this.hasModule(col, row)) {
          const x = col * moduleSize;
          const y = row * moduleSize;

          // Check if this is part of an eye (finder pattern)
          const isEye = this.isPartOfEye(col, row, moduleCount);
          const color = isEye && eyeColor ? eyeColor : foregroundColor;
          const radius =
            isEye && eyeRadius
              ? eyeRadius * moduleSize
              : moduleRadius * moduleSize;

          if (radius > 0) {
            svg += `<rect x="${x}" y="${y}" width="${moduleSize}" height="${moduleSize}" rx="${radius}" fill="${color}"/>`;
          } else {
            svg += `<rect x="${x}" y="${y}" width="${moduleSize}" height="${moduleSize}" fill="${color}"/>`;
          }
        }
      }
    }

    svg += `</g>`;
    svg += `</svg>`;

    return svg;
  }

  /**
   * Checks if module exists at position
   */
  private hasModule(x: number, y: number): boolean {
    const modules = this.qrData.modules;
    if (x < 0 || x >= modules.size || y < 0 || y >= modules.size) {
      return false;
    }
    return modules.data[y * modules.size + x] === 1;
  }

  /**
   * Checks if position is part of finder pattern (eye)
   */
  private isPartOfEye(x: number, y: number, size: number): boolean {
    // Top-left eye
    if (x < 7 && y < 7) return true;
    // Top-right eye
    if (x >= size - 7 && y < 7) return true;
    // Bottom-left eye
    if (x < 7 && y >= size - 7) return true;
    return false;
  }
}
