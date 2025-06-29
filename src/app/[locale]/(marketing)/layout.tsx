import type { ReactNode } from 'react';
import { setRequestLocale } from 'next-intl/server';

type IMarketingLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IMarketingLayoutProps) {
  const { locale } = await props.params;

  return {
    title: {
      default: 'Websites With Toni - Custom Web Development for Small Businesses',
      template: '%s | Websites With Toni',
    },
    description: 'Professional web development services for small businesses. Custom websites starting at $999. Get your free quote today and transform your online presence.',
    keywords: 'web development, small business websites, custom websites, web design, e-commerce, landing pages, SEO optimization, website maintenance',
    authors: [{ name: 'Toni' }],
    creator: 'Toni',
    publisher: 'Websites With Toni',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://websiteswithtoni.com'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en',
        'fr-FR': '/fr',
      },
    },
    openGraph: {
      title: 'Websites With Toni - Custom Web Development for Small Businesses',
      description: 'Professional web development services for small businesses. Custom websites starting at $999. Get your free quote today.',
      url: 'https://websiteswithtoni.com',
      siteName: 'Websites With Toni',
      images: [
        {
          url: '/assets/images/nextjs-starter-banner.png',
          width: 1200,
          height: 630,
          alt: 'Websites With Toni - Professional Web Development',
        },
      ],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Websites With Toni - Custom Web Development for Small Businesses',
      description: 'Professional web development services for small businesses. Custom websites starting at $999.',
      images: ['/assets/images/nextjs-starter-banner.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        'index': true,
        'follow': true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
  };
}

export default async function MarketingLayout(props: IMarketingLayoutProps) {
  const { children, params } = props;
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="bg-black min-h-screen w-full text-white">
      {children}
    </div>
  );
}
