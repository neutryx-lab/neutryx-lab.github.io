/**
 * Neutryx Core Configuration
 * Environment-aware configuration for API endpoints and runtime settings
 */

const CONFIG = {
  /**
   * API Base URL - automatically detects environment
   * - localhost: http://localhost:8000 (for local development)
   * - production: https://neutryx-api.onrender.com
   */
  API_BASE_URL: (function() {
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:8000';
    }
    return 'https://neutryx-api.onrender.com';
  })(),

  /**
   * API request timeout in milliseconds
   * Default: 30 seconds
   */
  API_TIMEOUT: 30000,

  /**
   * Debug mode - enables console logging and detailed error messages
   * Can be overridden in browser console: CONFIG.ENABLE_DEBUG = true
   */
  ENABLE_DEBUG: false,

  /**
   * Retry configuration for failed API requests
   */
  MAX_RETRIES: 2,
  RETRY_DELAY: 1000, // milliseconds

  /**
   * Chart configuration defaults
   */
  CHART_COLORS: {
    primary: 'rgba(66, 133, 244, 1)',
    secondary: 'rgba(219, 68, 55, 1)',
    grid: 'rgba(200, 200, 200, 0.3)'
  }
};

// Freeze configuration to prevent accidental modifications
// (except ENABLE_DEBUG which can be toggled for debugging)
Object.defineProperty(CONFIG, 'ENABLE_DEBUG', {
  writable: true,
  configurable: false
});

// Make CONFIG available globally
window.CONFIG = CONFIG;

// Log configuration in debug mode
if (CONFIG.ENABLE_DEBUG) {
  console.log('[Neutryx Config] Initialized with:', {
    API_BASE_URL: CONFIG.API_BASE_URL,
    API_TIMEOUT: CONFIG.API_TIMEOUT,
    MAX_RETRIES: CONFIG.MAX_RETRIES
  });
}
