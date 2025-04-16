import Footer from "./Components/H&F/Footer";
import Navbar from "./Components/H&F/Navbar";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Script from "next/script";

export const metadata = {
  title: "Expert Legal & Notary Services for Every Need ",
  description:
    "Need fast, reliable legal & notary services? Get expert assistance now—hassle-free, accurate, and tailored to your needs. Book your consultation today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Page Metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        {/* Google Tag manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KBWJ9WJT');
  `}
        </Script>

        {/* MS Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "qqh32ng5ft");
  `}
        </Script>

        {/* Tawk.to Live Chat */}
        {process.env.NEXT_PUBLIC_TAWK_SRC && (
          <Script
            id="tawk-to-script"
            src={process.env.NEXT_PUBLIC_TAWK_SRC}
            strategy="lazyOnload"
          />
        )}
        {/* Page Layout */}
        <Navbar />
        <ToastContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
