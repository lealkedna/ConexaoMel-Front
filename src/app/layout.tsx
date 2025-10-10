import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Quicksand } from 'next/font/google'
import "./globals.css";
import { Toaster } from "sonner";
import { EditProvider } from "@/providers/edit";
import { AuthProvider } from "@/providers/auth";
import Script from "next/script";
import GAListener from "./ga-listener";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const isProd = process.env.NODE_ENV === "production";

const quicksand = Quicksand({
  variable: "--font-quicksand-sans",
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Conexão Mel",
  description: "Mel direto do produtor para sua mesa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <AuthProvider>
        <EditProvider>
          <body className={quicksand.className}>
            {/* GA4 */}
            {isProd && GA_ID ? (
              <>
                <Script
                  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                  strategy="afterInteractive"
                />
                <Script id="ga-init" strategy="afterInteractive">
                  {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          // Evita pageview duplicado; GAListener dispara nas trocas de rota
          gtag('config', '${GA_ID}', { send_page_view: false });
        `}
                </Script>
                {/* Dispara pageviews nas mudanças de rota (App Router) */}
                <GAListener />
              </>
            ) : null}

            {children}

            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  backgroundColor: "#FFB64CAD",
                  color: "#f1f1f1",
                  borderColor: "rgba(255, 255, 255, 0.5)"
                }
              }
              }
            />

            {/* Chatling scripts */}
            <Script
              id="chatling-config"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.chtlConfig = { chatbotId: "1892961315" };`,
              }}
            />
            <Script
              id="chatling-script"
              strategy="lazyOnload"
              async
              src="https://chatling.ai/js/embed.js"
            />
          </body>
        </EditProvider>
      </AuthProvider>
    </html>
  );
}
