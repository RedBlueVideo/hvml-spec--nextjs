// import typography from './typography';

export default function Home() {
  return (
    <article>
      {/* <section dangerouslySetInnerHTML={ { __html: intro.html } }></section> */}
      {/* <section dangerouslySetInnerHTML={ { __html: useCases.html } }></section> */}
      {/* <section dangerouslySetInnerHTML={ { __html: cheatSheet.html } }></section> */}
      <section>
        <h2>Specification</h2>
        <ol start={0}>
          <li><a href="/hvml">Single-page version</a></li>
        </ol>
      </section>
    </article>
  );
}
