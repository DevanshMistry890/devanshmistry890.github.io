import "../styles/index.scss";
import ThemeProvider from "@/components/provider/ThemeProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://devanshmistry.com"), // Update with your actual domain
  title: {
    default: "Devansh Mistry | Engineering Scalable AI & ML Solutions",
    template: "%s | Devansh Mistry",
  },
  description: "Devansh Mistry is an Azure Certified AI Engineer & Data Scientist specializing in building scalable Machine Learning, Deep Learning, and Generative AI solutions.",
  keywords: [
    "Devansh Mistry", "AI Engineer", "Data Scientist", "Machine Learning",
    "Azure AI", "Generative AI", "Deep Learning", "Computer Vision",
    "NLP", "MLOps", "Python", "Next.js"
  ],
  authors: [{ name: "Devansh Mistry" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devanshmistry.com",
    siteName: "Devansh Mistry Portfolio",
    images: [
      {
        url: "/assets/img/hero/hero-img.png",
        width: 1200,
        height: 630,
        alt: "Devansh Mistry - AI Engineer & Data Scientist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devansh Mistry | Engineering Scalable AI & ML Solutions",
    description: "Azure Certified AI Engineer & Data Scientist specializing in scalable ML & GenAI.",
    images: ["/assets/img/hero/hero-img.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=DM+Sans:wght@400;500;700&family=EB+Garamond:wght@400;500;600;700;800&family=Kufam:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;900&display=swap"
        />
      </head>
      <body suppressHydrationWarning={true} className="scroll-smooth">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
