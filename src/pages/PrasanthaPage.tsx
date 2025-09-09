import { Helmet } from "react-helmet-async";

export default function PrasanthaPage() {
  const url = "https://prasantha.netlify.app/prasantha";
  return (
    <>
      <Helmet>
        <title>Prasantha — Portfolio</title>
        <meta
          name="description"
          content="Official portfolio page of Prasantha (Raman). Full-stack developer specializing in React, Laravel, PHP and MySQL."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Prasantha — Portfolio" />
        <meta property="og:description" content="Full-stack developer in Sri Lanka (React, Laravel, PHP, MySQL)." />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://prasantha.netlify.app/og-image.jpg" />
        <meta name="twitter:image" content="https://prasantha.netlify.app/og-image.jpg" />
      </Helmet>

      <main className="max-w-3xl mx-auto px-6 py-10 prose">
        <h1>Prasantha</h1>
        <p>
          I’m <strong>Prasantha</strong> (Raman), a full-stack developer working with React, Laravel, PHP, and MySQL. I
          build clean, fast web apps and APIs.
        </p>
        <p>
          Explore my <a href="/">home</a>, <a href="/projects">projects</a>, <a href="/services">services</a>, and{" "}
          <a href="/contact">contact</a>.
        </p>
      </main>
    </>
  );
}
