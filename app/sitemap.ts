import fs from 'fs';
import path from 'path';
import { MetadataRoute } from 'next';

type RouteConfig = {
  changeFrequency: 'yearly' | 'monthly' | 'weekly' | 'daily' | 'hourly' | 'always';
  priority: number;
};

type RouteConfigMap = {
  [key: string]: RouteConfig;
};

// Default configuration for routes
const DEFAULT_ROUTE_CONFIG: RouteConfig = {
  changeFrequency: 'weekly',
  priority: 0.5,
};

// Custom configurations for specific routes
const ROUTE_CONFIGS: RouteConfigMap = {
  '/': {
    changeFrequency: 'yearly',
    priority: 1.0,
  },
  '/about': {
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  '/contact': {
    changeFrequency: 'weekly',
    priority: 0.7,
  },
  '/services': {
    changeFrequency: 'weekly',
    priority: 0.7,
  },
  '/join-us': {
    changeFrequency: 'weekly',
    priority: 0.6,
  },
  '/application-form': {
    changeFrequency: 'weekly',
    priority: 0.6,
  },
};

/**
 * Discovers all valid routes in the Next.js app directory
 * @param appDir Path to the app directory
 * @param baseUrl Base URL for the sitemap
 * @returns Array of route objects for the sitemap
 */
function discoverRoutes(appDir: string, baseUrl: string): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];
  
  // Set of directories to ignore during route discovery
  const ignoreDirs = new Set([
    'api',        // API routes
    'components', // UI components
    'utils',      // Utility functions
    'styles',     // Style files
    'lib',        // Library code
    'hooks',      // React hooks
    'context',    // React context
    'assets',     // Static assets
  ]);
  
  // Set of files to ignore
  const ignoreFiles = new Set([
    'layout.tsx',
    'loading.tsx',
    'error.tsx',
    'not-found.tsx',
    'global-error.tsx',
    'sitemap.ts',
    'robots.ts',
    'manifest.ts',
    'globals.css',
  ]);

  /**
   * Recursively scans directories to find page components
   */
  function scanDirectory(currentDir: string, routePath: string = '') {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const itemPath = path.join(currentDir, item);
      const stats = fs.statSync(itemPath);
      
      // Skip ignored directories
      if (stats.isDirectory()) {
        const dirName = path.basename(item);
        
        // Skip directories that start with underscore or dot
        if (dirName.startsWith('_') || dirName.startsWith('.') || ignoreDirs.has(dirName)) {
          continue;
        }
        
        // Handle route groups (directories in parentheses)
        if (dirName.startsWith('(') && dirName.endsWith(')')) {
          // Route groups don't affect the URL path
          scanDirectory(itemPath, routePath);
        } else {
          // Regular directory - add to route path
          scanDirectory(itemPath, `${routePath}/${dirName}`);
        }
      } else if (stats.isFile()) {
        const fileName = path.basename(item);
        
        // Skip ignored files and non-page files
        if (ignoreFiles.has(fileName) || !fileName.startsWith('page.')) {
          continue;
        }
        
        // Found a page file, add route to the list
        const route = routePath || '/';
        const config = ROUTE_CONFIGS[route] || DEFAULT_ROUTE_CONFIG;
        
        routes.push({
          url: `${baseUrl}${route}`,
          lastModified: new Date(),
          changeFrequency: config.changeFrequency,
          priority: config.priority,
        });
      }
    }
  }
  
  // Start scanning from the app directory
  scanDirectory(appDir);
  
  return routes;
}

// This is the required export for Next.js sitemap generation
export default function sitemap(): MetadataRoute.Sitemap {
  // Your site's base URL
  const baseUrl = process.env.URL || 'https://pureway-logistics.vercel.app/';
  
  // Path to the app directory
  const appDir = path.join(process.cwd(), 'app');
  
  // Discover routes and return as sitemap
  return discoverRoutes(appDir, baseUrl);
}