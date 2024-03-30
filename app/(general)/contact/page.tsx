import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Contact Page',
    keywords: ['Pagina de contacto de mis servicios'],
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact</span>
        </>
    )
}