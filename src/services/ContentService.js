import abtsData from '../data/abts_content_clean.json';

// Metadata dictionary representing the taxonomy/routing of the site
const METADATA = {
  '/online-application-form-for-admission': { title: 'Apply Online', category: 'Admissions' },
  '/online-enquiry': { title: 'Online Enquiry', category: 'Admissions' },
  '/frequently-asked-questions': { title: 'Frequently Asked Questions', category: 'Admissions' },
  '/academic': { title: 'Academic Programs', category: 'Academics' },
  '/list-of-graduation': { title: 'List of Graduation', category: 'Academics' },
  '/prominent-doctorate-recipients-of-abts': { title: 'Prominent Doctorate Recipients', category: 'Academics' },
  '/objectives': { title: 'Our Objectives', category: 'About Us' },
  '/doctrinal-statement-of-faith': { title: 'Statement of Faith', category: 'About Us' },
  '/abts-ministries': { title: 'Our Ministries', category: 'About Us' },
  '/news': { title: 'Latest News', category: 'About Us' },
  '/contact-us': { title: 'Contact Us', category: 'Contact' },
  '/prayer-request': { title: 'Prayer Request', category: 'Contact' },
  '/testimonials': { title: 'Testimonials', category: 'Contact' }
};

/**
 * Retrieves the page content and metadata for a given path.
 * @param {string} slug The slug of the page (e.g. 'academic')
 * @returns {Object} An object containing { path, content, meta }
 */
export function getPage(slug) {
  const path = `/${slug}`;
  const content = abtsData[path] || "Content not found or coming soon.";
  const meta = METADATA[path] || { title: slug.replace(/-/g, ' '), category: 'General' };
  
  return { path, content, meta };
}

/**
 * Retrieves all sibling links for a specific category to populate a sidebar.
 * @param {string} category The category to filter by (e.g. 'Academics')
 * @returns {Array} An array of objects { path, title }
 */
export function getSiblingLinks(category) {
  return Object.entries(METADATA)
    .filter(([_, m]) => m.category === category)
    .map(([path, m]) => ({ path, title: m.title }));
}
