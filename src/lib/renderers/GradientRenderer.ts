import { QROptions } from '../utils/types.js';
import type { CanvasRenderingContext2D, CanvasGradient } from 'canvas';

/**
 * Handles gradient creation for QR codes
 */
export class GradientRenderer {
  private ctx: CanvasRenderingContext2D;
  private options: Required<QROptions>;

  constructor(ctx: CanvasRenderingContext2D, options: Required<QROptions>) {
    this.ctx = ctx;
    this.options = options;
  }

  /**
   * Creates a gradient fill style
   */
  createGradient(): CanvasGradient {
    const { size, gradientColors, gradientAngle } = this.options;
    const ctx = this.ctx;

    // Parse gradient colors
    const colors = gradientColors.split(',').map(c => c.trim());

    // Calculate angle in radians
    const angleRad = (gradientAngle * Math.PI) / 180;

    // Calculate gradient start and end points
    const centerX = size / 2;
    const centerY = size / 2;
    const length = Math.sqrt(size * size + size * size) / 2;

    const x0 = centerX - Math.cos(angleRad) * length;
    const y0 = centerY - Math.sin(angleRad) * length;
    const x1 = centerX + Math.cos(angleRad) * length;
    const y1 = centerY + Math.sin(angleRad) * length;

    // Create linear gradient
    const gradient = ctx.createLinearGradient(x0, y0, x1, y1);

    // Add color stops uniformly distributed
    colors.forEach((color, index) => {
      const stop = index / (colors.length - 1);
      gradient.addColorStop(stop, color);
    });

    return gradient;
  }

  /**
   * Gets the appropriate fill style (gradient or solid color)
   */
  getFillStyle(): string | CanvasGradient {
    const { gradient, foregroundColor } = this.options;
    return gradient ? this.createGradient() : foregroundColor;
  }
}
