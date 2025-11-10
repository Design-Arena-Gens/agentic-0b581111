import PersonalGreeter from "./components/PersonalGreeter";
import TimeIndicator from "./components/TimeIndicator";

const highlights = [
  {
    title: "Instant hello",
    body: "Get a warm greeting the moment you land on the page. No awkward pauses, just instant friendliness."
  },
  {
    title: "Make it yours",
    body: "Tell us your name and the greeting adapts on the spot. Because every hello is better when it is personal."
  },
  {
    title: "Feel-good vibes",
    body: "A soft gradient, playful animations, and a dash of delight keep things bright without getting in the way."
  }
];

export default function HomePage() {
  return (
    <main className="page">
      <div className="hero">
        <span className="badge">always-on welcome</span>
        <h1>
          Hi there,
          <br />
          glad you made it.
        </h1>
        <p className="lead">
          This tiny experience is built to say hi with intention. Check the live
          clock, add your name, and enjoy a moment of friendly energy.
        </p>
        <TimeIndicator />
        <PersonalGreeter />
      </div>

      <section className="highlight-grid">
        {highlights.map((highlight) => (
          <article key={highlight.title} className="highlight-card">
            <h2>{highlight.title}</h2>
            <p>{highlight.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
