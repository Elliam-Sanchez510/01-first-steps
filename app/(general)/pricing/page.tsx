import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'SEO Title',
    keywords: ['Pagina de precio de mis servicios'],
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}