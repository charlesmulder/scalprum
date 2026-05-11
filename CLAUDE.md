# Project Instructions

## Environment Requirements

This project requires:
- **Node.js:** 20+ (managed via `.nvmrc`)
- **npm:** 11.14.1+ (managed via `packageManager` field in `package.json`)

## Setup for Development

Before running any npm commands:

1. **Use correct Node version:**
   ```bash
   nvm use
   ```

2. **Enable corepack** (one-time):
   ```bash
   corepack enable
   ```
   
   This allows npm 11.14.1 to be used automatically via the `packageManager` field without affecting global npm.

## Why npm 11.14.1?

npm 11.5.1+ required for **npm OIDC trusted publishing** (see RHCLOUD-47582). The `engine-strict=true` setting in `.npmrc` enforces this requirement.

## CI/CD

All CI jobs use `.github/actions/setup-environment` which:
- Installs Node 20 from `.nvmrc`
- Upgrades npm to 11.14.1
- Runs `npm ci`

Release job additionally sets `registry-url` for npm publishing with OIDC.
