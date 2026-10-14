import { createFileRoute } from '@tanstack/react-router';
import { Visit, PageHeading } from '@/components/site/sections';
export const Route = createFileRoute('/visit')({
 head:()=>({meta:[{title:'Visit & contact | Sreenivasa Tailors'},{name:'description',content:'Find Sreenivasa Tailors in HSR Layout, Bengaluru. Get directions, call 098444 11898, and confirm your fitting or opening hours.'},{property:'og:title',content:'Visit & contact | Sreenivasa Tailors'},{property:'og:description',content:'Find Sreenivasa Tailors in HSR Layout, Bengaluru. Get directions, call 098444 11898, and confirm your fitting or opening hours.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:Page,
});
function Page(){return <><PageHeading eyebrow="HSR Layout, Bengaluru" title="Let’s find your perfect fit." description="Call to arrange a fitting, discuss your garment, or confirm today’s opening hours." /><Visit full /></>;}
