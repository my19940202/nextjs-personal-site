'use client';
import { useEffect } from 'react';
export default function ClickTracking() {
 useEffect(()=>{
  const click=(event:MouseEvent)=>{
   const target=event.target instanceof Element?event.target.closest<HTMLElement>('[data-track-kind]'):null;
   if(!target) return;
   const kind=target.dataset.trackKind;
   if(!kind || !['service','project','contact'].includes(kind)) return;
   const gtag=(window as Window & {gtag?:(...args:unknown[])=>void}).gtag;
   gtag?.('event',kind==='contact'?'contact_click':'detail_click',{entry_type:kind,page_path:window.location.pathname,content_slug:target.dataset.trackSlug || 'home'});
  };
  document.addEventListener('click',click);
  return ()=>document.removeEventListener('click',click);
 },[]);
 return null;
}
