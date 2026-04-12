# Contributing to @qr-styled

Thank you for your interest in contributing to @qr-styled! 🎉

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:

- Clear description of the problem
- Steps to reproduce
- Expected vs. actual behavior
- Node.js and package versions
- Sample code that reproduces the issue

### Suggesting Enhancements

To suggest new features:

1. Check that a similar issue doesn't already exist
2. Clearly describe the proposed functionality
3. Explain why it would be useful
4. Provide usage examples

### Pull Requests

1. Fork the repository
2. Create a branch from `main`: `git checkout -b feature/new-feature`
3. Make your changes
4. Ensure code follows the project's style
5. Update documentation if necessary
6. Commit with descriptive messages
7. Push to your fork: `git push origin feature/new-feature`
8. Open a Pull Request

## Style Guidelines

### TypeScript Code

- Use ES modules (import/export)
- Follow existing naming conventions
- Document public functions with JSDoc
- Keep functions small and focused
- Use descriptive names for variables and functions
- Leverage TypeScript types - avoid `any`

### Commits

Use clear and descriptive commit messages:

```
feat: add JPEG format support
fix: correct logo rendering error
docs: update examples in README
refactor: reorganize rendering modules
test: add tests for option validation
```

## Project Structure

```
src/
├── index.ts                    # Entry point
├── lib/
│   ├── QRGenerator.ts         # Main class
│   ├── renderers/             # Specialized modules
│   └── utils/                 # Utilities and helpers
├── cli/
│   └── index.ts               # CLI
└── index.d.ts                 # TypeScript types
```

## Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Build project: `npm run build`
4. Run examples: `npm run example:basic`
5. Test CLI: `npm run dev -- --url "test"`

## Development Workflow

### Building

```bash
npm run build
```

This compiles TypeScript files from `src/` to `dist/` (ESM + types) and `dist/cjs/` (CommonJS).

### Testing Changes

```bash
# Test CLI in development mode
npm run dev -- --url "https://example.com" --gradient

# Test programmatic usage
npm run example:programmatic
```

### Code Quality

- Write clean, readable code
- Add TypeScript types for all parameters and return values
- Document complex logic with comments
- Follow existing patterns in the codebase

## Questions

If you have questions, don't hesitate to open an issue or contact the maintainer.

Thank you for contributing! 🙌
