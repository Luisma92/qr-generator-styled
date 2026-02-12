import { describe, it, expect } from 'vitest';
import {
  formatVCard,
  formatWiFi,
  formatEmail,
  formatSMS,
  formatGeo,
  formatQRData
} from './formatters.js';

describe('Data Formatters', () => {
  describe('formatVCard', () => {
    it('should format basic vCard with name', () => {
      const result = formatVCard({
        firstName: 'John',
        lastName: 'Doe'
      });

      expect(result).toContain('BEGIN:VCARD');
      expect(result).toContain('VERSION:3.0');
      expect(result).toContain('N:Doe;John;;;');
      expect(result).toContain('FN:John Doe');
      expect(result).toContain('END:VCARD');
    });

    it('should format complete vCard with all fields', () => {
      const result = formatVCard({
        firstName: 'Jane',
        lastName: 'Smith',
        organization: 'Acme Corp',
        title: 'CEO',
        phone: '+1234567890',
        email: 'jane@acme.com',
        url: 'https://acme.com',
        address: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA'
      });

      expect(result).toContain('ORG:Acme Corp');
      expect(result).toContain('TITLE:CEO');
      expect(result).toContain('TEL:+1234567890');
      expect(result).toContain('EMAIL:jane@acme.com');
      expect(result).toContain('URL:https://acme.com');
      expect(result).toContain('ADR:;;123 Main St;New York;NY;10001;USA');
    });

    it('should handle missing optional fields', () => {
      const result = formatVCard({
        firstName: 'Bob'
      });

      expect(result).toContain('N:;Bob;;;');
      expect(result).toContain('FN:Bob');
      expect(result).not.toContain('ORG:');
      expect(result).not.toContain('TEL:');
    });
  });

  describe('formatWiFi', () => {
    it('should format WiFi with WPA encryption', () => {
      const result = formatWiFi({
        ssid: 'MyNetwork',
        password: 'SecurePassword123',
        encryption: 'WPA'
      });

      expect(result).toBe('WIFI:T:WPA;S:MyNetwork;P:SecurePassword123;;');
    });

    it('should format WiFi without password (open network)', () => {
      const result = formatWiFi({
        ssid: 'OpenWiFi',
        encryption: 'nopass'
      });

      expect(result).toBe('WIFI:T:nopass;S:OpenWiFi;;');
    });

    it('should escape special characters', () => {
      const result = formatWiFi({
        ssid: 'Network;Name',
        password: 'Pass:word',
        encryption: 'WPA'
      });

      expect(result).toContain('S:Network\\;Name');
      expect(result).toContain('P:Pass\\:word');
    });

    it('should mark hidden network', () => {
      const result = formatWiFi({
        ssid: 'HiddenNet',
        password: 'secret',
        encryption: 'WPA',
        hidden: true
      });

      expect(result).toContain('H:true;');
    });
  });

  describe('formatEmail', () => {
    it('should format email with address only', () => {
      const result = formatEmail({
        email: 'test@example.com'
      });

      expect(result).toBe('mailto:test@example.com');
    });

    it('should format email with subject', () => {
      const result = formatEmail({
        email: 'contact@company.com',
        subject: 'Hello World'
      });

      expect(result).toBe('mailto:contact@company.com?subject=Hello%20World');
    });

    it('should format email with subject and body', () => {
      const result = formatEmail({
        email: 'support@app.com',
        subject: 'Bug Report',
        body: 'I found a bug in the app'
      });

      expect(result).toContain('mailto:support@app.com');
      expect(result).toContain('subject=Bug%20Report');
      expect(result).toContain('body=I%20found%20a%20bug%20in%20the%20app');
    });
  });

  describe('formatSMS', () => {
    it('should format SMS with phone number only', () => {
      const result = formatSMS({
        phone: '+1234567890'
      });

      expect(result).toBe('sms:+1234567890');
    });

    it('should format SMS with message', () => {
      const result = formatSMS({
        phone: '+9876543210',
        message: 'Hello there!'
      });

      expect(result).toBe('sms:+9876543210?body=Hello%20there!');
    });
  });

  describe('formatGeo', () => {
    it('should format geographic coordinates', () => {
      const result = formatGeo({
        latitude: 40.7128,
        longitude: -74.006
      });

      expect(result).toBe('geo:40.7128,-74.006');
    });

    it('should handle negative coordinates', () => {
      const result = formatGeo({
        latitude: -33.8688,
        longitude: 151.2093
      });

      expect(result).toBe('geo:-33.8688,151.2093');
    });
  });

  describe('formatQRData', () => {
    it('should format URL type', () => {
      const result = formatQRData('url', 'https://example.com');
      expect(result).toBe('https://example.com');
    });

    it('should format text type', () => {
      const result = formatQRData('text', 'Hello World');
      expect(result).toBe('Hello World');
    });

    it('should format vCard type', () => {
      const result = formatQRData('vcard', undefined, {
        firstName: 'John',
        lastName: 'Doe'
      });

      expect(result).toContain('BEGIN:VCARD');
      expect(result).toContain('FN:John Doe');
    });

    it('should format WiFi type', () => {
      const result = formatQRData('wifi', undefined, {
        ssid: 'TestNet',
        password: 'pass123',
        encryption: 'WPA'
      });

      expect(result).toContain('WIFI:');
      expect(result).toContain('S:TestNet');
    });

    it('should format email type', () => {
      const result = formatQRData('email', undefined, {
        email: 'test@test.com'
      });

      expect(result).toBe('mailto:test@test.com');
    });

    it('should format SMS type', () => {
      const result = formatQRData('sms', undefined, {
        phone: '+123456'
      });

      expect(result).toBe('sms:+123456');
    });

    it('should format geo type', () => {
      const result = formatQRData('geo', undefined, {
        latitude: 10.5,
        longitude: 20.3
      });

      expect(result).toBe('geo:10.5,20.3');
    });

    it('should return empty string when data is missing', () => {
      const result = formatQRData('vcard', undefined, undefined);
      expect(result).toBe('');
    });
  });
});
