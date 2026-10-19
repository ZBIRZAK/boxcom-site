'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!measurementId) return;

    const enable = () => setEnabled(true);
    const events = ['pointerdown', 'touchstart', 'keydown', 'scroll'];
    events.forEach((event) =>
      window.addEventListener(event, enable, { once: true, passive: true })
    );
    const fallbackTimer = setTimeout(enable, 12000);

    return () => {
      clearTimeout(fallbackTimer);
      events.forEach((event) => window.removeEventListener(event, enable));
    };
  }, [measurementId]);

  useEffect(() => {
    if (!measurementId || !enabled) return;

    const query = searchParams.toString();
    const url = query ? `${pathname}?${query}` : pathname;

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', measurementId, {
        page_path: url,
      });
    }
  }, [enabled, measurementId, pathname, searchParams]);

  if (process.env.NODE_ENV !== 'production' || !measurementId || !enabled) {
    return null;
  }

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="gtag-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
