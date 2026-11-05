import { services } from '@/config/content';
import { pageMetadata } from '@/lib/seo';
import ContentPage from '@/components/personal/ContentPage';
import { notFound } from 'next/navigation';
export function generateStaticParams() { return services.map(item=>({slug:item.slug})); }
export function generateMetadata({params}:{params:{slug:string}}) {
 const item=services.find(item=>item.slug===params.slug);
 if(!item) notFound();
 return pageMetadata(item.title+'｜渣渣奚 xibobo',item.summary,'/services/'+item.slug);
}
export default function Page({params}:{params:{slug:string}}) {
 const item=services.find(item=>item.slug===params.slug);
 if(!item) notFound();
 return <ContentPage item={item} kind="services" />;
}
