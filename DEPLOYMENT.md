# GitHub Pages Deployment Guide

## Quick Setup Checklist

### 1. Enable GitHub Pages (One-time Setup)

1. Go to your repository on GitHub: `https://github.com/dsjohns85/cuddly-computing-machine`
2. Click **Settings** (top navigation)
3. Click **Pages** (left sidebar under "Code and automation")
4. Under **"Build and deployment"**:
   - **Source**: Select **"GitHub Actions"** from the dropdown
   - ⚠️ Do NOT select "Deploy from a branch"
5. No need to create a workflow - it will detect the existing `.github/workflows/deploy.yml`

### 2. Push Your Changes

```bash
git push origin main
```

### 3. Monitor Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow run named "Deploy to GitHub Pages"
3. Click on it to see the build and deploy progress
4. Wait for both jobs to complete (build → deploy)

### 4. Access Your Site

Once deployment completes, your site will be available at:

**🌐 https://dsjohns85.github.io/cuddly-computing-machine/**

## Troubleshooting

### "GitHub Actions" option not showing?

- Make sure you're in **Settings → Pages**
- The dropdown should show both "Deploy from a branch" and "GitHub Actions"
- If you only see "Deploy from a branch", try refreshing the page

### Workflow failing?

Check these common issues:
1. **Permissions**: Go to Settings → Actions → General → Workflow permissions
   - Enable "Read and write permissions"
   - Enable "Allow GitHub Actions to create and approve pull requests"
2. **Pages not enabled**: Make sure Pages is enabled in Settings → Pages
3. **Build errors**: Check the Actions tab for detailed error logs

### Site shows 404 or blank page?

- Check that the base URL is correct in `vite.config.ts`:
  ```typescript
  base: process.env.NODE_ENV === 'production' ? '/cuddly-computing-machine/' : '/',
  ```
- Clear your browser cache and try again
- Check browser console for any errors

## Testing Locally Before Deployment

Always test your production build locally first:

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

Then open `http://localhost:4173` to test the site exactly as it will appear on GitHub Pages.

## Workflow Details

The deployment workflow (`.github/workflows/deploy.yml`) runs automatically when:
- You push commits to the `main` branch
- You manually trigger it from the Actions tab (using "Run workflow")

**What the workflow does:**
1. **Build job**: Checks out code, installs dependencies, builds the site
2. **Deploy job**: Uploads the `dist/` folder to GitHub Pages

**Key features:**
- ✅ Uses official GitHub Pages actions (most reliable method)
- ✅ Proper permissions and concurrency controls
- ✅ Node.js 20 LTS for latest features
- ✅ Separate build and deploy jobs for better debugging
- ✅ Automatic cleanup of old deployments

## Making Changes

1. **Develop locally**: `npm run dev`
2. **Test changes**: Make sure everything works
3. **Build test**: `npm run build && npm run preview`
4. **Commit**: `git add . && git commit -m "your message"`
5. **Deploy**: `git push origin main`

The site will update automatically within 1-2 minutes!

## CI/CD Status Badge (Optional)

Add this to your README to show deployment status:

```markdown
[![Deploy to GitHub Pages](https://github.com/dsjohns85/cuddly-computing-machine/actions/workflows/deploy.yml/badge.svg)](https://github.com/dsjohns85/cuddly-computing-machine/actions/workflows/deploy.yml)
```

---

**Need help?** Check the [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)
