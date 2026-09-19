(function () {
  const e = React.createElement;
  const { useState, useRef, useCallback } = React;

  function BeforeAfter() {
    const [pos, setPos] = useState(52);
    const frameRef = useRef(null);
    const dragging = useRef(false);

    const setFromClientX = useCallback(function (clientX) {
      const el = frameRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const next = ((clientX - rect.left) / rect.width) * 100;
      setPos(Math.min(100, Math.max(0, next)));
    }, []);

    const onPointerDown = useCallback(
      function (event) {
        dragging.current = true;
        if (event.currentTarget.setPointerCapture) {
          event.currentTarget.setPointerCapture(event.pointerId);
        }
        setFromClientX(event.clientX);
      },
      [setFromClientX]
    );

    const onPointerMove = useCallback(
      function (event) {
        if (!dragging.current) return;
        setFromClientX(event.clientX);
      },
      [setFromClientX]
    );

    const endDrag = useCallback(function () {
      dragging.current = false;
    }, []);

    return e(
      "div",
      { className: "stage" },
      e(
        "div",
        {
          className: "compare",
          ref: frameRef,
          onPointerDown: onPointerDown,
          onPointerMove: onPointerMove,
          onPointerUp: endDrag,
          onPointerCancel: endDrag,
        },
        e(
          "div",
          { className: "after-layer" },
          e("img", {
            src: "./after.svg",
            alt: "Abstract warmer sample frame with gold highlights",
            width: 960,
            height: 600,
            draggable: false,
          }),
          e("span", { className: "tag tag-after" }, "After")
        ),
        e(
          "div",
          { className: "before-layer", style: { width: pos + "%" } },
          e("img", {
            src: "./before.svg",
            alt: "Abstract cooler sample frame",
            width: 960,
            height: 600,
            draggable: false,
          }),
          e("span", { className: "tag tag-before" }, "Before")
        ),
        e(
          "div",
          { className: "handle", style: { left: pos + "%" }, "aria-hidden": "true" },
          e("div", { className: "handle-knob" }, "⟨⟩")
        )
      ),
      e(
        "div",
        { className: "controls" },
        e("label", { htmlFor: "compare-range" }, "Reveal position"),
        e("input", {
          id: "compare-range",
          type: "range",
          min: 0,
          max: 100,
          value: Math.round(pos),
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": Math.round(pos),
          "aria-valuetext": Math.round(pos) + " percent before frame",
          onChange: function (event) {
            setPos(Number(event.target.value));
          },
        }),
        e(
          "p",
          { className: "note" },
          "Abstract sample frames — not patient photos and not a clinical result. Drag the image or move the range with arrow keys."
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
          e("a", { href: "../card-flip/" }, "Card flip"),
          e("a", { href: "./", "aria-current": "page" }, "Before / after"),
          e("a", { href: "../../packs/" }, "Packs")
        )
      ),
      e("p", { className: "eyebrow" }, "React · range + pointer · GitHub Pages"),
      e("h1", null, "Before / after slider"),
      e(
        "p",
        { className: "sub" },
        "Interactive comparison slider in the same midnight navy and brushed-gold palette. Drag the divider or use the keyboard-focusable range. Crom portfolio unlocker, not a clinic result."
      ),
      e("hr", { className: "gold-rule" }),
      e(BeforeAfter),
      e(
        "footer",
        null,
        "Crom Services · interaction sample · React 18 on static GitHub Pages"
      )
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(e(App));
})();
