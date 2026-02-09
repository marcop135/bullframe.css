/**
 * Client-side module to ensure system preference is respected
 * This runs on every page load to ensure dark mode users get dark mode
 * Docusaurus uses 'theme' key in localStorage
 */

export default function colorMode() {
  // Check for system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const systemTheme = prefersDark ? 'dark' : 'light';
  
  // Check if user has manually set a preference
  const savedTheme = localStorage.getItem('theme');
  
  // If no saved preference, use system preference
  // If saved preference exists but doesn't match system, respect system preference
  // (This ensures users with dark system get dark mode by default)
  if (!savedTheme || savedTheme !== systemTheme) {
    // Set theme immediately to avoid flash
    document.documentElement.setAttribute('data-theme', systemTheme);
    
    // If no saved preference, let Docusaurus handle localStorage
    // If saved preference exists but doesn't match, update it to match system
    if (savedTheme && savedTheme !== systemTheme) {
      // User had a different preference, but we're respecting system preference
      // Update localStorage to match system preference
      localStorage.setItem('theme', systemTheme);
    }
  }
  
  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const newSystemTheme = e.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newSystemTheme);
    localStorage.setItem('theme', newSystemTheme);
  });
}
