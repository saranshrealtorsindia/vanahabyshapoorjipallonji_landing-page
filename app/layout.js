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
  title: "Shapoorji Pallonji - Vanaha | Luxury Homes in Bavdhan, Pune",
  description:
    "Vanaha by Shapoorji Pallonji is located near Bavdhan, Pune, within one of India's largest townships. It offers spacious 1, 2, and 3 BHK garden residences designed for modern living.",
  openGraph: {
    title: "Shapoorji Pallonji - Vanaha | Luxury Homes in Bavdhan, Pune",
    description:
      "Vanaha by Shapoorji Pallonji is located near Bavdhan, Pune, within one of India's largest townships. Explore spacious 1, 2, and 3 BHK garden residences with world-class amenities.",
    url: "https://vanahabyshapoorjipallonji.saranshrealtorsindia.com/",
    siteName: "Shapoorji Pallonji - Vanaha",
    images: [
      {
        url: "https://vanahabyshapoorjipallonji.saranshrealtorsindia.com/og-image.jpg", // add an OG image here
        width: 1200,
        height: 630,
        alt: "Shapoorji Pallonji Vanaha in Bavdhan Pune",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shapoorji Pallonji - Vanaha | Luxury Homes in Bavdhan, Pune",
    description:
      "Vanaha by Shapoorji Pallonji offers premium 1, 2 & 3 BHK garden residences near Bavdhan, Pune, at one of India’s largest townships.",
    images: [
      "https://vanahabyshapoorjipallonji.saranshrealtorsindia.com/og-image.jpg",
    ],
  },
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
