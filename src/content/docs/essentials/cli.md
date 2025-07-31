---
title: CLI
description: GamanJS provides a powerful CLI tool to help you develop, build, and manage your applications efficiently. All commands are prefixed with `npx gaman` and can be run from your project directory.
---

## Overview

The GamanJS CLI streamlines your development workflow with commands for development, production builds, and project management:

```bash
npx gaman dev     # Start development server
npx gaman build   # Build for production
npx gaman start   # Run production server
```

---

## Available Commands

### `npx gaman dev`

Starts the development server with hot reload and debugging features enabled.

```bash
npx gaman dev
```

**Features:**

- Hot reload on file changes
- Detailed error messages and stack traces
- Development-optimized performance
- Automatic server restart on configuration changes
- Enhanced logging for debugging

**Usage:**

```bash
# Start development server
npx gaman dev

# Development server will typically run on http://localhost:3000
# Check console output for the exact URL and port
```

---

### `npx gaman build`

Builds your application for production deployment with optimizations.

```bash
npx gaman build
```

**Features:**

- Code optimization and minification
- Static asset processing
- Production environment configuration
- Bundle analysis and optimization
- Dependency tree optimization

**Usage:**

```bash
# Build for production
npx gaman build

# Creates optimized build artifacts
# Ready for deployment to production servers
```

---

### `npx gaman start`

Starts the production server using the built application files.

```bash
npx gaman start
```

**Requirements:**

- Must run `npx gaman build` first
- Requires built production files

**Features:**

- Production-optimized performance
- Minimal resource usage
- Production logging
- Error handling for production environment

**Usage:**

```bash
# Build first
npx gaman build

# Then start production server
npx gaman start
```

---

### `npx gaman make:block <name>`

Generates a new route block to group related routes.

```bash
npx gaman make:block user
```

**Features:**

- Creates a new block file in the designated `blocks/` directory
- Designed to organize routes in logical modules
- Prepares reusable block structure

---

### `npx gaman make:routes <name>`

Scaffolds a full route tree file for organizing nested or grouped routes.

```bash
npx gaman make:routes user
```

**Features:**

- Automatically generates boilerplate for a route tree
- Ideal for defining structured API endpoints
- Works well with blocks and children routes

---

### `npx gaman make:service <name>`

Creates a new service class for reusable business logic.

```bash
npx gaman make:service user
```

**Features:**

- Centralizes reusable operations or logic
- Great for abstracting database, API, or external logic
- Generates file in `services/` directory

---

### `npx gaman make:integration <name>`

Sets up a new custom integration module (e.g., for third-party services).

```bash
npx gaman make:integration stripe
```

**Features:**

- Ideal for integrating external APIs or tools
- Generated in the `integrations/` directory
- Comes with basic structure for config and methods

---

### `npx gaman make:middleware <name>`

Generates a new middleware to intercept requests.

```bash
npx gaman make:middleware auth
```

**Features:**

- Creates a middleware in the `middleware/` folder
- Supports asynchronous logic
- Can be used in block or global context

---

## Development Workflow

### Typical Development Process

```bash
# 1. Generate application key (first time setup)
npx gaman key:generate

# 2. Start development server
npx gaman dev

# 3. Make changes to your code (hot reload automatically applied)

# 4. When ready for production
npx gaman build

# 5. Test production build locally
npx gaman start

# 6. Deploy to production server
```

### Environment Setup

```bash
# Create .env file with generated key
echo "GAMAN_KEY=your_generated_key_here" > .env

# Start development
npx gaman dev
```

---

## Troubleshooting

### Common Issues

**Command not found:**

```bash
# Make sure you're in a GamanJS project directory
# Verify package.json includes GamanJS as dependency
npm install gaman
```

**Development server won't start:**

```bash
# Check if port is already in use
# Verify your main application file exists
# Check for syntax errors in your code
npx gaman dev --verbose
```

**Build fails:**

```bash
# Check for TypeScript errors
# Verify all dependencies are installed
# Review error messages for specific issues
npm install
npx gaman build
```

**Production server issues:**

```bash
# Ensure build was completed successfully
# Check environment variables are set
# Verify production dependencies are installed
npx gaman build
npx gaman start
```

---

## Tips and Best Practices

- Always generate and set your application key before development
- Use `dev` command during development for better debugging experience
- Run `build` before deploying to production
- Keep your generated keys secure and never commit them to version control
- Use environment variables for different deployment environments
- Test your production build locally with `start` before deploying

---

## Getting Help

```bash
# Get help for specific commands (coming soon)
npx gaman dev --help
npx gaman build --help
npx gaman --help
```

The CLI tool is actively being developed with more commands and options coming in future releases. Stay tuned for code generation, database management, and advanced deployment tools!
