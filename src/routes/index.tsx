import { createFileRoute } from '@tanstack/react-router';
import { Hero, TrustStrip, Services, About, Reviews, Visit } from '@/components/site/sections';
export const Route = createFileRoute('/')({
 head:()=>({meta:[{title:'Sreenivasa Tailors | Your perfect fit in HSR Layout'},{name:'description',content:'Thoughtful custom tailoring and precision alterations at Sreenivasa Tailors, HSR Layout, Bengaluru. Rated 4.8 by 369 Google reviewers. Call to arrange your fitting.'},{property:'og:title',content:'Sreenivasa Tailors | A perfect fit. A lasting impression.'},{property:'og:description',content:'Personal tailoring and alterations in HSR Layout, Bengaluru. Discover our services and arrange a fitting.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:Index,
});
function Index(){return <><Hero /><TrustStrip /><Services /><About /><Reviews /><Visit /></>;}
