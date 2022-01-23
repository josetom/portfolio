import Script from 'next/script';

export default function GTag({}) {
  if (process.env.NODE_ENV === 'production') {
    return (
      <>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG_ID}`}
        />
        <Script strategy="lazyOnload" id="gtag-script">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GTAG_ID}');
        `}
        </Script>
      </>
    );
  } else {
    return null;
  }
}
