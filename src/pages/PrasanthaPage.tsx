// src/pages/PrasanthaPage.tsx
import { Helmet } from "react-helmet-async";

export default function PrasanthaPage() {
  const url = "https://prasantha.netlify.app/prasantha";
  return (
    <>
      <Helmet>
        <title>Raman Prasantha — Portfolio</title>
        <meta name="description" content="Official portfolio page of Raman Prasantha. Full-stack developer (React, Laravel, PHP, MySQL)." />
        <link rel="canonical" href={url} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://prasantha.netlify.app/#raman-prasantha",
            "name": "Raman Prasantha",
            "alternateName": ["Prasantha", "Prasantha Raman", "Raman P."],
            "url": "https://prasantha.netlify.app",
            "sameAs": [
              "https://github.com/Prasantha123123",
              "https://www.linkedin.com/in/prasantha-raman-8788aa262"
            ]
          })}
        </script>
      </Helmet>

      <main className="max-w-3xl mx-auto px-6 py-10 prose">
        <h1>Raman Prasantha</h1>
        <p>
          I’m <strong>Raman Prasantha</strong>, a full-stack developer working with React, Laravel, PHP and MySQL.
          This page exists so people searching “<strong>Raman Prasantha</strong>” find my portfolio.
        </p>
        <p>See my <a href="/">home</a>, <a href="/projects">projects</a>, and <a href="/contact">contact</a>.</p>
      </main>
    </>
  );
}
