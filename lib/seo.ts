import type { Metadata } from 'next';
export const origin = 'https://www.aizeten.me';
export const homeTitle = '渣渣奚 xibobo｜企业流程自动化、小程序与 AI 应用开发';
export const description = '渣渣奚 xibobo 为中小企业提供流程自动化、网站、微信小程序与 AI 应用开发，从需求梳理到部署上线，展示教育、装修与文旅项目交付经验。';
export function pageMetadata(title: string, summary: string, path: string): Metadata {
 return {title,description:summary,metadataBase:new URL(origin),alternates:{canonical:path},openGraph:{type:'website',locale:'zh_CN',url:origin+path,title,description:summary,siteName:'渣渣奚 xibobo',images:[{url:origin+'/og.png'}]},twitter:{card:'summary_large_image',title,description:summary,images:[origin+'/og.png']}};
}
export const person = {'@type':'Person','@id':origin+'/#person',name:'渣渣奚',alternateName:'xibobo',url:origin,sameAs:['https://github.com/my19940202/','https://twitter.com/xishengbo']};
export function jsonLd(data: unknown) { return JSON.stringify(data).replace(/</g,'\\u003c'); }
