import type { MetadataRoute } from 'next';
import { services, cases } from '@/config/content';
import { origin } from '@/lib/seo';
export default function sitemap(): MetadataRoute.Sitemap {
 return [{url:origin+'/'},...services.map(s=>({url:`${origin}/services/${s.slug}`,...(s.updated?{lastModified:s.updated}:{})})),...cases.map(p=>({url:`${origin}/projects/${p.slug}`}))];
}
