import { createFileRoute } from '@tanstack/react-router';
import { Services, PageHeading } from '@/components/site/sections';
export const Route = createFileRoute('/services')({
 head:()=>({meta:[{title:'Our services | Sreenivasa Tailors'},{name:'description',content:'Explore custom tailoring, alterations, and everyday and occasion wear at Sreenivasa Tailors in HSR Layout, Bengaluru.'},{property:'og:title',content:'Our services | Sreenivasa Tailors'},{property:'og:description',content:'Explore custom tailoring, alterations, and everyday and occasion wear at Sreenivasa Tailors in HSR Layout, Bengaluru.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:Page,
});
function Page(){return <><PageHeading eyebrow="Our expertise" title="Tailoring, made personal." description="Custom stitching, thoughtful alterations, and a fit that feels like you." /><Services full /></>;}
