import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | SafeLove"
        defaultTitle="SafeLove — ความรู้เรื่องเพศสัมพันธ์ & รีวิวถุงยาง/เจลหล่อลื่น"
        description="เว็บให้ความรู้เรื่องเพศสัมพันธ์ปลอดภัย รีวิวถุงยาง เจลหล่อลื่น พร้อมลิงก์ Shopee Affiliate"
        openGraph={{ type: 'website', site_name: 'SafeLove' }}
        additionalLinkTags={[{ rel: 'icon', href: '/favicon.ico' }]}
        additionalMetaTags={[{ name: 'theme-color', content: '#ff6f3d' }]}
      />
      <Component {...pageProps} />
    </>
  );
}
