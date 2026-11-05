import Link from 'next/link';
import Image from 'next/image';
import { cases, services, questions, type Section } from '@/config/content';
import { jsonLd, origin } from '@/lib/seo';
import ThemeToggle from './ThemeToggle';
export default function ContentPage({item,kind}:{item:{slug:string;title:string;summary:string;sections:Section[];related:string[];images?:string[]};kind:'services'|'projects'}) {
 const path=`/${kind}/${item.slug}`;
 const related=kind==='services'?cases:services;
 const data={'@context':'https://schema.org','@graph':[
 {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'首页',item:origin},{'@type':'ListItem',position:2,name:item.title,item:origin+path}]},
 ...(kind==='services'?[{'@type':'Service',name:item.title,description:item.summary,url:origin+path,provider:{'@type':'Person','@id':origin+'/#person',name:'渣渣奚',alternateName:'xibobo',url:origin}}]:[])]};
 return <article className="mx-auto max-w-4xl px-5 py-10 sm:px-8">
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:jsonLd(data)}} />
 <header className="mb-10 flex items-center justify-between gap-4"><nav aria-label="面包屑"><Link href="/">渣渣奚 xibobo</Link><span className="ps-text-muted"> / {item.title}</span></nav><ThemeToggle /></header>
 <h1 className="ps-text-title text-3xl font-bold sm:text-4xl">{item.title}</h1><p className="ps-text-body my-6 leading-relaxed">{item.summary}</p>
 {item.sections.map(s=><section key={s.title} className="ps-card my-6"><h2 className="ps-text-heading mb-3 text-xl font-semibold">{s.title}</h2><p className="ps-text-body leading-relaxed">{s.text}</p></section>)}
 {item.images && <section><h2 className="ps-text-heading my-6 text-xl font-semibold">项目界面</h2><div className="grid grid-cols-1 gap-6 sm:grid-cols-2">{item.images.map((src,i)=><figure key={src}><Image src={src} alt={`${item.title}界面 ${i+1}`} width={600} height={1000} className="h-auto w-full rounded-lg"/><figcaption className="ps-text-muted mt-2 text-sm">{item.title} · 界面 {i+1}</figcaption></figure>)}</div></section>}
 {kind==='services' && <section><h2 className="ps-text-heading my-6 text-xl font-semibold">咨询前常见问题</h2>{questions.map(q=><details key={q.title} className="ps-card my-3"><summary className="cursor-pointer font-semibold">{q.title}</summary><p className="ps-text-body mt-3">{q.text}</p></details>)}</section>}
 <section className="my-10"><h2 className="ps-text-heading mb-4 text-xl font-semibold">{kind==='services'?'相关项目':'相关服务'}</h2>{related.filter(r=>item.related.includes(r.slug)).map(r=><p key={r.slug} className="my-3"><Link data-track-kind={kind==='services'?'project':'service'} data-track-slug={r.slug} className="underline underline-offset-4" href={`/${kind==='services'?'projects':'services'}/${r.slug}`}>{r.title}</Link></p>)}</section>
 <section className="ps-card my-10"><h2 className="ps-text-heading mb-3 text-xl font-semibold">聊聊你的业务需求</h2><p className="ps-text-body mb-4">说明当前流程、遇到的问题和期望结果，我们再一起确定适合的首版范围。</p><a data-track-kind="contact" data-track-slug={item.slug} href="mailto:xishengbo@gmail.com" className="underline underline-offset-4">邮件咨询</a><Link href="/#social" className="ml-6 underline">其他联系方式</Link></section>
 </article>;
}
