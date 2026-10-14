import { createFileRoute } from '@tanstack/react-router';
import { About, PageHeading } from '@/components/site/sections';
export const Route = createFileRoute('/about')({
 head:()=>({meta:[{title:'Our story | Sreenivasa Tailors'},{name:'description',content:'Discover the personal approach to tailoring and careful finishing at Sreenivasa Tailors, Bengaluru.'},{property:'og:title',content:'Our story | Sreenivasa Tailors'},{property:'og:description',content:'Discover the personal approach to tailoring and careful finishing at Sreenivasa Tailors, Bengaluru.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:Page,
});
function Page(){return <><PageHeading eyebrow="Our story" title="It’s all in the details." description="Meet your neighbourhood tailoring destination in HSR Layout." /><About full /></>;}
