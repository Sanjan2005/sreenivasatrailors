import { createFileRoute } from '@tanstack/react-router';
import { Reviews, PageHeading } from '@/components/site/sections';
export const Route = createFileRoute('/reviews')({
 head:()=>({meta:[{title:'Customer reviews | Sreenivasa Tailors'},{name:'description',content:'Read genuine customer review excerpts for Sreenivasa Tailors, rated 4.8 from 369 reviews in the supplied Google Maps listing.'},{property:'og:title',content:'Customer reviews | Sreenivasa Tailors'},{property:'og:description',content:'Read genuine customer review excerpts for Sreenivasa Tailors, rated 4.8 from 369 reviews in the supplied Google Maps listing.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:Page,
});
function Page(){return <><PageHeading eyebrow="Our community" title="Trusted with their favourite clothes." description="Read customer experiences from the supplied Google Maps listing." /><Reviews /></>;}
