import "./globals.css";
import { Poppins } from "next/font/google";
import dynamicImport from "next/dynamic";
import { GoogleTagManager } from "@next/third-parties/google";
import ModelContextProvider from "@/contextApis/ModelContextProvider";

const EnquireModel = dynamicImport(
  () => import("@/compoannets/model/EnquireModel"),
  {
    ssr: false,
  }
);

const ThanksModel = dynamicImport(
  () => import("@/compoannets/model/ThanksModel"),
  { ssr: false }
);

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Shapoorji Pallonji",
  description: "Shapoorji Pallonji.!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${poppins.variable}`}>
        <ModelContextProvider>
          <EnquireModel />
          <ThanksModel />
          {children}
        </ModelContextProvider>
      </body>
    </html>
  );
}
