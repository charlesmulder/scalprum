# Project Instructions

## Environment Requirements

This project requires:
- **Node.js:** 24+ (managed via `.nvmrc`)
- **npm:** 11.14.1+ (bundled with Node.js 24)

## Setup for Development

Before running any npm commands:

1. **Use correct Node version:**
   ```bash
   nvm use
   ```

## Why npm 11.14.1?

npm 11.5.1+ required for **npm OIDC trusted publishing** (see RHCLOUD-47582). The `engine-strict=true` setting in `.npmrc` enforces this requirement. Node.js 24 bundles npm 11.x, which satisfies this without a separate pin.

## CI/CD

All CI jobs use `.github/actions/setup-environment` which:
- Installs Node 24 from `.nvmrc`
- Runs `npm ci`

Release job additionally sets `registry-url` for npm publishing with OIDC.
