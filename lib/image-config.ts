// Image URL configuration
// Replace YOUR_GITHUB_USERNAME and YOUR_REPO_NAME with your actual values

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// Use GitHub raw URLs in production, local paths in development
export const IMAGE_BASE_URL = IS_PRODUCTION 
  ? 'https://raw.githubusercontent.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME/main/public'
  : '';

export function getImageUrl(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${IMAGE_BASE_URL}/${cleanPath}`;
}

// Example usage:
// Instead of: src="/images/products/sc1.png"
// Use: src={getImageUrl('images/products/sc1.png')}