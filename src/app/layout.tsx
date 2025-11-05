  import type { Metadata } from "next";
  // import { Geist, Geist_Mono } from "next/font/google";
  import { Quicksand } from 'next/font/google'
  import "./globals.css";
  import { Toaster } from "sonner";
  import { EditProvider } from "@/providers/edit";
  import { AuthProvider } from "@/providers/auth";
  import Script from "next/script";

  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;


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
              {/* Google Analytics (gtag.js) */}
              {GA_ID && (
                <>
                  <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                    strategy="afterInteractive"
                  />
                  <Script id="ga-init" strategy="afterInteractive">
                    {`
            console.log("GA script carregado");
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
                  </Script>
                </>
              )}

              {children}

              <Toaster
                position="bottom-right"
                toastOptions={{
                  style: {
                    backgroundColor: "#FFB64CAD",
                    color: "#f1f1f1",
                    borderColor: "rgba(255, 255, 255, 0.5)"
                  }
                }}
              />

              {/* Chatling scripts */}
              {/* <Script
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
              /> */}
              <Script
                id="chatling-config"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                  __html: `window.chtlConfig = { chatbotId: "1185137682" };`,
                }}
              />
              <Script
                id="chatling-script"
                strategy="lazyOnload"
                async
                src="https://chatling.ai/js/embed.js"
              />

            </body>


{/* <script> window.chtlConfig = { chatbotId: "1185137682" } </script>
<script async data-id="1185137682" id="chtl-script" type="text/javascript" src="https://chatling.ai/js/embed.js"></script> */}

          </EditProvider>
        </AuthProvider>
      </html>
    );
  }
