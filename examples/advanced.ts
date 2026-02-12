/**
 * Example demonstrating all new features:
 * - vCard QR codes
 * - WiFi QR codes
 * - Email, SMS, Geo QR codes
 * - SVG export
 * - Eye customization
 * - Margin support
 */

import { QRGenerator } from '../src/index.js';
import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = path.join(process.cwd(), 'examples', 'output');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function generateExamples() {
  console.log('🚀 Generating QR codes with new features...\n');

  // 1. vCard Contact QR
  console.log('📇 Generating vCard contact QR...');
  const vCardQR = new QRGenerator({
    type: 'vcard',
    data: {
      firstName: 'Jane',
      lastName: 'Smith',
      organization: 'Tech Innovations Inc.',
      title: 'Senior Developer',
      phone: '+1-555-0123',
      email: 'jane.smith@techinnovations.com',
      url: 'https://techinnovations.com',
      address: '123 Innovation Drive',
      city: 'San Francisco',
      state: 'CA',
      zip: '94102',
      country: 'USA'
    },
    size: 600,
    foregroundColor: '#1976D2',
    backgroundColor: '#E3F2FD',
    rounded: true,
    moduleRadius: 0.4
  });

  await vCardQR.generateToFile(path.join(OUTPUT_DIR, 'vcard-contact.png'));
  console.log('✅ vCard QR generated: examples/output/vcard-contact.png\n');

  // 2. WiFi Network QR
  console.log('📶 Generating WiFi network QR...');
  const wifiQR = new QRGenerator({
    type: 'wifi',
    data: {
      ssid: 'TechInnovations-Guest',
      password: 'Welcome2024!',
      encryption: 'WPA'
    },
    size: 600,
    foregroundColor: '#388E3C',
    backgroundColor: '#E8F5E9',
    eyeColor: '#1B5E20',
    eyeRadius: 0.5
  });

  await wifiQR.generateToFile(path.join(OUTPUT_DIR, 'wifi-network.png'));
  console.log('✅ WiFi QR generated: examples/output/wifi-network.png\n');

  // 3. Email QR
  console.log('📧 Generating email QR...');
  const emailQR = new QRGenerator({
    type: 'email',
    data: {
      email: 'support@example.com',
      subject: 'Product Inquiry',
      body: 'Hello, I would like to know more about your products.'
    },
    size: 600,
    foregroundColor: '#D32F2F',
    backgroundColor: '#FFEBEE',
    gradient: true,
    gradientColors: '#D32F2F,#F44336,#EF5350'
  });

  await emailQR.generateToFile(path.join(OUTPUT_DIR, 'email-contact.png'));
  console.log('✅ Email QR generated: examples/output/email-contact.png\n');

  // 4. SMS QR
  console.log('💬 Generating SMS QR...');
  const smsQR = new QRGenerator({
    type: 'sms',
    data: {
      phone: '+1-555-0199',
      message: 'Hello! I scanned your QR code.'
    },
    size: 600,
    foregroundColor: '#7B1FA2',
    backgroundColor: '#F3E5F5'
  });

  await smsQR.generateToFile(path.join(OUTPUT_DIR, 'sms-message.png'));
  console.log('✅ SMS QR generated: examples/output/sms-message.png\n');

  // 5. Geo Location QR
  console.log('📍 Generating geo location QR...');
  const geoQR = new QRGenerator({
    type: 'geo',
    data: {
      latitude: 37.7749, // San Francisco
      longitude: -122.4194
    },
    size: 600,
    foregroundColor: '#F57C00',
    backgroundColor: '#FFF3E0',
    eyeColor: '#E65100',
    eyeRadius: 0.3
  });

  await geoQR.generateToFile(path.join(OUTPUT_DIR, 'geo-location.png'));
  console.log('✅ Geo QR generated: examples/output/geo-location.png\n');

  // 6. SVG Export (Scalable Vector Graphics)
  console.log('🎨 Generating SVG QR code...');
  const svgQR = new QRGenerator({
    url: 'https://github.com',
    size: 800,
    foregroundColor: '#24292F',
    backgroundColor: '#FFFFFF',
    eyeColor: '#0969DA',
    eyeRadius: 0.4,
    margin: 4
  });

  await svgQR.generateToSVGFile(path.join(OUTPUT_DIR, 'github-vector.svg'));
  console.log('✅ SVG QR generated: examples/output/github-vector.svg\n');

  // 7. QR with Custom Eye Styling
  console.log('👁️ Generating QR with custom eyes...');
  const customEyeQR = new QRGenerator({
    url: 'https://example.com',
    size: 600,
    foregroundColor: '#000000',
    backgroundColor: '#FFFFFF',
    eyeColor: '#FF6B6B',
    eyeRadius: 0.5,
    moduleRadius: 0.2,
    margin: 4
  });

  await customEyeQR.generateToFile(path.join(OUTPUT_DIR, 'custom-eyes.png'));
  console.log('✅ Custom eyes QR generated: examples/output/custom-eyes.png\n');

  // 8. QR with Proper Margin
  console.log('📏 Generating QR with custom margin...');
  const marginQR = new QRGenerator({
    url: 'https://example.com/products',
    size: 600,
    margin: 8, // Large margin for better scanning
    foregroundColor: '#2E7D32',
    backgroundColor: '#FFFFFF'
  });

  await marginQR.generateToFile(path.join(OUTPUT_DIR, 'large-margin.png'));
  console.log('✅ Margin QR generated: examples/output/large-margin.png\n');

  // 9. Open WiFi Network (no password)
  console.log('🔓 Generating open WiFi QR...');
  const openWifiQR = new QRGenerator({
    type: 'wifi',
    data: {
      ssid: 'Public-Library-WiFi',
      encryption: 'nopass'
    },
    size: 600,
    foregroundColor: '#0288D1',
    backgroundColor: '#E1F5FE'
  });

  await openWifiQR.generateToFile(path.join(OUTPUT_DIR, 'open-wifi.png'));
  console.log('✅ Open WiFi QR generated: examples/output/open-wifi.png\n');

  // 10. Gradient with Eye Customization
  console.log('🌈 Generating gradient QR with custom eyes...');
  const gradientEyeQR = new QRGenerator({
    url: 'https://colorful.example.com',
    size: 600,
    gradient: true,
    gradientColors: '#667eea,#764ba2',
    gradientAngle: 135,
    eyeColor: '#ff0844',
    eyeRadius: 0.4,
    backgroundColor: '#f0f0f0',
    margin: 4
  });

  await gradientEyeQR.generateToFile(
    path.join(OUTPUT_DIR, 'gradient-eyes.png')
  );
  console.log(
    '✅ Gradient + eyes QR generated: examples/output/gradient-eyes.png\n'
  );

  console.log('🎉 All examples generated successfully!');
  console.log('📁 Check the examples/output directory for all QR codes.');
}

// Run examples
generateExamples().catch(console.error);
