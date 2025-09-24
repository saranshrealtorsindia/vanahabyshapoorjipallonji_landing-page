import "./globals.css";
import { Poppins } from "next/font/google";
import dynamicImport from "next/dynamic";
import { GoogleTagManager } from "@next/third-parties/google";
import ModelContextProvider from "@/contextApis/ModelContextProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Shapoorji Pallonji- Event",
  description:
    "Register now for the Shapoorji Pallonji Event on 30 & 31 August 2025. Don’t miss this exclusive opportunity—secure your spot and be part of the experience!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${poppins.variable}`}>
        <ModelContextProvider>{children}</ModelContextProvider>
      </body>
    </html>
  );
}
