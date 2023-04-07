import "./styles.css";

export default function App() {
  const surpriseOption = [
    "A blue ostrich eating melon",
    "A matisse style shark on telephone",
    "A pineapple sunbathing on island"
  ];
  return (
    <div className="App">
      <>
        <section className="search-section">
          <p>
            Start with a Detail Description <span>Surprise </span>
          </p>
          <div className="input-container">
            <input placeholder="Explain strom theory of Quantum computing" />
            <button>Generate </button>
          </div>
        </section>

        <section className="img-section"></section>
      </>
    </div>
  );
}
