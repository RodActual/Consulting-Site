import { MetadataRoute } from 'next'

const BASE_URL = 'https://rodriguezdigitalops.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date('2026-05-18'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/services/website-design-and-seo`,
      lastModified: new Date('2026-05-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/ads-management`,
      lastModified: new Date('2026-05-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/email-marketing`,
      lastModified: new Date('2026-05-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/full-digital-management`,
      lastModified: new Date('2026-05-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/dayton-ohio-web-design`,
      lastModified: new Date('2026-05-18'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
