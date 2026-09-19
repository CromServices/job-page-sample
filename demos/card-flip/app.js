(function () {
  const e = React.createElement;
  const { useState } = React;

  const CARDS = [
    {
      id: "whitening",
      kicker: "Service",
      title: "Whitening",
      front: "A sample services tile. Flip for the reverse-face layout.",
      back: "Marketing label only. This reverse face is UI filler so reviewers can judge the motion — not a treatment claim.",
      icon: "spark",
    },
    {
      id: "implants",
      kicker: "Service",
      title: "Implants",
      front: "Generic category label for the 3D flip pattern.",
      back: "Crom interaction sample. Short follow-up copy on the reverse. Not a clinic offering and not patient information.",
      icon: "arc",
    },
    {
      id: "checkup",
      kicker: "Service",
      title: "Check-up",
      front: "Tap, click, or use the keyboard to rotate this card.",
      back: "Focus stays on the control. Enter or Space flips. Not a live practice site.",
      icon: "node",
    },
  ];

  function Icon({ name }) {
    if (name === "spark") {
      return e(
        "svg",
        { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true" },
        e("path", {
          d: "M12 3l1.2 6.3L19 12l-5.8 2.7L12 21l-1.2-6.3L5 12l5.8-2.7L12 3z",
          stroke: "currentColor",
          strokeWidth: 1.5,
        })
      );
    }
    if (name === "arc") {
      return e(
        "svg",
        { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true" },
        e("path", {
          d: "M5 16c2.2-4 5.2-6 7-6s4.8 2 7 6",
          stroke: "currentColor",
          strokeWidth: 1.5,
          strokeLinecap: "round",
        }),
        e("circle", { cx: 12, cy: 9, r: 1.4, fill: "currentColor" })
      );
    }
    return e(
      "svg",
      { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true" },
      e("circle", { cx: 12, cy: 12, r: 7, stroke: "currentColor", strokeWidth: 1.5 }),
      e("circle", { cx: 12, cy: 12, r: 2, fill: "currentColor" })
    );
  }

  function FlipCard({ card }) {
    const [flipped, setFlipped] = useState(false);

    return e(
      "div",
      { className: "scene" },
      e(
        "button",
        {
          type: "button",
          className: "flip-btn",
          "aria-pressed": flipped,
          "aria-label": flipped
            ? card.title + ", showing details. Activate to flip back."
            : card.title + ", showing summary. Activate to flip.",
          onClick: function () {
            setFlipped(function (v) {
              return !v;
            });
          },
        },
        e(
          "div",
          { className: flipped ? "card is-flipped" : "card" },
          e(
            "div",
            { className: "face front", "aria-hidden": flipped },
            e(
              "div",
              null,
              e("div", { className: "icon" }, e(Icon, { name: card.icon })),
              e("p", { className: "kicker", style: { marginTop: 22 } }, card.kicker),
              e("h2", null, card.title),
              e("p", null, card.front)
            ),
            e("p", { className: "hint" }, "Flip card")
          ),
          e(
            "div",
            { className: "face back", "aria-hidden": !flipped },
            e(
              "div",
              null,
              e("p", { className: "kicker" }, "Reverse face"),
              e("h2", null, card.title),
              e("p", null, card.back)
            ),
            e("p", { className: "hint" }, "Flip back")
          )
        )
      )
    );
  }

  function App() {
    return e(
      "div",
      { className: "wrap" },
      e(
        "header",
        { className: "topbar" },
        e(
          "a",
          { className: "brand", href: "../" },
          e("span", { className: "brand-mark" }, "Crom Services"),
          e("span", { className: "sample-banner" }, "Interaction sample · not a client site")
        ),
        e(
          "nav",
          { className: "nav-links", "aria-label": "Demo pages" },
          e("a", { href: "../" }, "All demos"),
          e("a", { href: "./", "aria-current": "page" }, "Card flip"),
          e("a", { href: "../before-after/" }, "Before / after"),
          e("a", { href: "../../packs/" }, "Packs")
        )
      ),
      e("p", { className: "eyebrow" }, "React · 3D CSS · GitHub Pages"),
      e("h1", null, "Services card flip"),
      e(
        "p",
        { className: "sub" },
        "Midnight navy and brushed gold. Three sample service cards — click, tap, or keyboard-activate to rotate. Crom portfolio unlocker, not a clinic website."
      ),
      e("hr", { className: "gold-rule" }),
      e(
        "div",
        { className: "grid" },
        CARDS.map(function (card) {
          return e(FlipCard, { key: card.id, card: card });
        })
      ),
      e(
        "p",
        { className: "help" },
        "Each card is a button with visible focus. Enter or Space flips. Labels are marketing-only. No clinical claims, no patient data."
      ),
      e(
        "footer",
        null,
        "Crom Services · interaction sample · React 18 on static GitHub Pages"
      )
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(e(App));
})();
