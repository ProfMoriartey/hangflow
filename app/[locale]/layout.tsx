import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { Poppins } from "next/font/google";
import { useTranslations } from "next-intl";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
});

export const metadata = {
  title: "Hangflow",
  description: "Fun group full of lovely people",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const t = useTranslations("Index");
  return (
    <html lang={locale} className="!scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${poppins.className} max-sm:px-6 bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[5rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[8rem] -z-10 left-[-35rem] h-[50rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        
        <div className="bg-[#fbe2e3] absolute top-[68rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#5d633f]"></div>
        <div className="bg-[#dbd7fb] absolute top-[70rem] -z-10 left-[-35rem] h-[50rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#946387]"></div>
        
        <div className="bg-[#fbe2e3] absolute top-[125rem] -z-10 right-[17rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#646030]"></div>
{/* 
        <div className="bg-[#fbe2e3] absolute top-[150rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#4b6d80]"></div>
        <div className="bg-[#fbe2e3] absolute top-[150rem] -z-10 right-[30rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#639469]"></div> */}

        
        <ThemeContextProvider>
          <ChakraProvider>
            <ActiveSectionContextProvider>
              <Header headerHome={t("headerHome")} headerAbout={t("headerAbout")} headerEvents={t("headerEvents")} headerBoard={t("headerBoard")} headerContact={t("headerContact")} headerLanguage={t("headerLanguage")} />
              {children}
              <Footer />
              <Toaster position="top-right" />
              <ThemeSwitch />
            </ActiveSectionContextProvider>
          </ChakraProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
