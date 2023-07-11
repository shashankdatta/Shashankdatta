import "./globals.css";

import { myNTR } from "@/fonts/fonts";
import { Providers } from "./Providers";

export const metadata = {
  title: "Shashank",
  description:
    "Welcome to Shashank Datta's Portfolio! Explore my projects showcasing web development, software engineering, and data analysis skills. Experience innovative solutions, attention to detail, and exceptional value. Let's connect and explore possibilities together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>

      <body className={myNTR.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
