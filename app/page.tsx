import PersonalHome from "@/components/personal/PersonalHome";

import { jsonLd, person, origin } from "@/lib/seo";

export default function LangHome() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:jsonLd({'@context':'https://schema.org','@graph':[person,{'@type':'WebSite','@id':origin+'/#website',url:origin,name:'渣渣奚 xibobo',inLanguage:'zh-CN',publisher:{'@id':origin+'/#person'}}]})}} /><PersonalHome /></>;
}
