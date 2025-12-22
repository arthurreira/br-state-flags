# GitHub Actions Setup for Automated Publishing

This guide explains how to set up automated npm publishing using GitHub Actions.

## 📋 Prerequisites

1. npm account with 2FA enabled
2. GitHub repository with admin access
3. Package already published manually at least once

## 🔑 Step 1: Create npm Access Token

1. Go to https://www.npmjs.com/settings/YOUR_USERNAME/tokens
2. Click **"Generate New Token"** → **"Granular Access Token"**
3. Configure the token:
   - **Token name:** `github-actions-br-state-flags`
   - **Expiration:** 90 days (or as needed)
   - **Packages and scopes:**
     - Select "Read and write"
     - Choose `br-state-flags` package
   - **Organizations:** Leave default
   - **IP ranges:** Leave empty (optional: restrict to GitHub IPs)
4. Click **"Generate Token"**
5. **Copy the token immediately** (you won't see it again!)

## 🔒 Step 2: Add Token to GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Add secret:
   - **Name:** `NPM_TOKEN`
   - **Value:** Paste the token from Step 1
5. Click **"Add secret"**

## 🚀 Step 3: How to Use the Workflow

The workflow automatically publishes to npm when you create a version tag:

```bash
# Make your changes
git add .
git commit -m "feat: new awesome feature"

# Create and push a version tag
git tag v0.0.2
git push origin v0.0.2
```

Or use npm version commands:

```bash
# Patch version (0.0.1 → 0.0.2)
npm version patch

# Minor version (0.0.2 → 0.1.0)
npm version minor

# Major version (0.1.0 → 1.0.0)
npm version major

# Push the tag
git push --follow-tags
```

## 🔄 What Happens Automatically

When you push a tag starting with `v`:

1. ✅ GitHub Actions checks out the code
2. ✅ Installs Node.js 20
3. ✅ Installs dependencies (`npm ci`)
4. ✅ Builds the package (`npm run build`)
5. ✅ Publishes to npm with provenance
6. ✅ Creates a GitHub Release with auto-generated notes

## 📊 Monitoring

- View workflow runs: https://github.com/arthurreira/br-state-flags/actions
- Check published versions: https://www.npmjs.com/package/br-state-flags

## ⚠️ Troubleshooting

### Error: Invalid npm token
- Token may have expired (90-day limit)
- Create a new token and update the GitHub secret

### Error: Package version already exists
- You tried to publish the same version twice
- Increment the version number first

### Error: Two-factor authentication required
- The token needs "Automation" or bypass 2FA enabled
- Or use granular access tokens (recommended)

## 🔄 Token Renewal (Every 90 Days)

1. Create new token (follow Step 1)
2. Update GitHub secret (follow Step 2)
3. No other changes needed!

## 📝 Publishing Checklist

Before creating a new version:

- [ ] All tests pass
- [ ] README is updated
- [ ] CHANGELOG is updated (if you maintain one)
- [ ] Version bump is appropriate (patch/minor/major)
- [ ] Build succeeds locally (`npm run build`)

## 🎯 Best Practices

1. **Use semantic versioning:**
   - Patch (0.0.x): Bug fixes
   - Minor (0.x.0): New features (backward compatible)
   - Major (x.0.0): Breaking changes

2. **Test before tagging:**
   ```bash
   npm run build
   npm pack --dry-run
   ```

3. **Write meaningful commit messages** (they appear in GitHub Releases)

4. **Review the GitHub Actions logs** after each publish to ensure success
