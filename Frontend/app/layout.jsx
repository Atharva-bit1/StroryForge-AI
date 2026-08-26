import "./globals.css";

export const metadata = {
  title: "StoryForge AI — A Memory-Augmented Multimodal AI Storytelling System",
  description:
    "Generate immersive multi-scene stories while maintaining character, plot, and world consistency using intelligent story memory. Transform your generated stories into rich visual and audio experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
