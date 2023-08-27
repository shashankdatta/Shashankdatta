import { myNTR } from "@/fonts/fonts";
import { Providers } from "@/components/Providers";

export const metadata = {
  title: "Shashank datta Bezgam",
  description:
    "Welcome to Shashank's Portfolio! Take a journey through my projects, where I demonstrate my expertise in web development, software engineering, and AI & ML. Immerse yourself in innovative solutions, as I combine creativity, technical prowess, and a passion for excellence. Let's connect and explore the possibilities together.",
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
