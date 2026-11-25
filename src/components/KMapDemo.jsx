import { Fragment, useState } from "react";

const GRAY = [0, 1, 3, 2];            // Gray-code order: neighbours differ by one bit
const LABELS = ["00", "01", "11", "10"];

export default function KMapDemo() {
  // 16 cells, one per minterm. useState holds which ones are 1.
  const [on, setOn] = useState(() => Array(16).fill(false));
  const toggle = (m) => setOn((prev) => prev.map((v, i) => (i === m ? !v : v)));
  const minterms = on.flatMap((v, i) => (v ? [i] : [])); // derived data, no extra state

  return (
    <figure className="kmap">
      <div className="kmap-grid" role="group" aria-label="Interactive Karnaugh map">
        <span className="axis">AB / CD</span>
        {LABELS.map((l) => <span key={l} className="axis">{l}</span>)}
        {GRAY.map((ab, r) => (
          <Fragment key={r}>
            <span className="axis">{LABELS[r]}</span>
            {GRAY.map((cd, c) => {
              const m = ab * 4 + cd; // minterm number for this cell
              return (
                <button
                  key={c}
                  className={on[m] ? "cell on" : "cell"}
                  aria-pressed={on[m]}
                  aria-label={`Minterm ${m}`}
                  onClick={() => toggle(m)}
                >
                  {on[m] ? 1 : 0}
                </button>
              );
            })}
          </Fragment>
        ))}
      </div>
      <figcaption>
        Click cells to set minterms. <code>F = {minterms.length ? `\u03A3m(${minterms.join(", ")})` : "0"}</code>
      </figcaption>
    </figure>
  );
}
