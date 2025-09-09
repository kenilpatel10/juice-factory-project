# Deploying to Vercel - Free Deployment Guide

Your Next.js app is ready for deployment! Follow these steps to deploy for free on Vercel.

## Prerequisites ✅
- [x] Build successful (verified)
- [x] `.gitignore` file created
- [x] No environment variables required

## Option 1: Deploy via GitHub (Recommended)

### Step 1: Push to GitHub
```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit your code
git commit -m "Initial commit - Juice Factory website"

# Create a new repository on GitHub (github.com/new)
# Then add the remote and push:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy with Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" (use GitHub for easy integration)
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Wait 1-2 minutes for deployment

## Option 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Deploy
```bash
# Run in project directory
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (Select your account)
# - Link to existing project? No
# - Project name? juice-factory (or your preferred name)
# - Directory? ./ (current directory)
# - Override settings? No
```

## Option 3: Deploy via Git (without GitHub)

```bash
# Install Vercel CLI if not installed
npm i -g vercel

# Login to Vercel
vercel login

# Deploy directly
vercel --prod
```

## After Deployment

### Your Free URLs
- **Preview URL**: `https://YOUR-PROJECT-NAME.vercel.app`
- **Production URL**: Same as preview on free tier

### Custom Domain (Optional)
1. Go to your Vercel dashboard
2. Select your project
3. Go to "Settings" → "Domains"
4. Add your custom domain
5. Update DNS records as instructed

### Free Tier Limits
- ✅ **100GB Bandwidth** per month
- ✅ **Unlimited deployments**
- ✅ **Automatic HTTPS**
- ✅ **Global CDN**
- ✅ **Serverless Functions** (12 second timeout)

## Important Files for Deployment

1. **`.gitignore`** - Already created ✅
2. **`package.json`** - Has correct scripts ✅
3. **`next.config.js`** - Not required (using defaults)

## Troubleshooting

### Build Errors
- Run `npm run build` locally first
- Check for TypeScript errors: `npx tsc --noEmit`
- Ensure all dependencies are in `package.json`

### 404 on Routes
- Vercel handles Next.js routing automatically
- No additional configuration needed

### Image Issues
- Images in `/public` folder work automatically
- Use Next.js `Image` component for optimization

## Environment Variables (if needed later)
1. Go to Project Settings → Environment Variables
2. Add variables
3. Redeploy for changes to take effect

## Support Resources
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Vercel Support](https://vercel.com/support)

---

**Ready to deploy!** Choose Option 1 (GitHub) for easiest continuous deployment.