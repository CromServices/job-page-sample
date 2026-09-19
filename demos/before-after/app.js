(function () {
  const e = React.createElement;
  const { useState, useRef, useCallback } = React;

  const TEETH = [
    { x: 292, y: 318, w: 28, h: 40 },
    { x: 324, y: 300, w: 32, h: 50 },
    { x: 360, y: 286, w: 34, h: 58 },
    { x: 398, y: 276, w: 38, h: 66 },
    { x: 440, y: 270, w: 40, h: 70 },
    { x: 484, y: 270, w: 40, h: 70 },
    { x: 528, y: 276, w: 38, h: 66 },
    { x: 570, y: 286, w: 34, h: 58 },
    { x: 608, y: 300, w: 32, h: 50 },
    { x: 644, y: 318, w: 28, h: 40 },
  ];

  function SmileFrame({ variant }) {
    const after = variant === "after";
    const tooth = after ? "#f6f1e4" : "#8e97a4";
    const toothEdge = after ? "#d2c094" : "#6f7886";
    const bg = after ? "#122033" : "#101826";
    const lip = after ? "#c9a46c" : "#7a8492";

    return e(
      "svg",
      {
        viewBox: "0 0 960 600",
        role: "img",
        "aria-hidden": "true",
        preserveAspectRatio: "xMidYMid slice",
      },
      e("rect", { width: 960, height: 600, fill: bg }),
      e("path", {
        d: "M270 356 C360 428 600 428 690 356",
        fill: "none",
        stroke: lip,
        strokeWidth: after ? 11 : 8,
        strokeLinecap: "round",
      }),
      e(
        "g",
        { fill: tooth, stroke: toothEdge, strokeWidth: 1.2 },
        TEETH.map(function (t, i) {
          return e("rect", {
            key: "t" + i,
            x: t.x,
            y: t.y,
            width: t.w,
            height: t.h,
            rx: 9,
          });
        })
      ),
      e("path", {
        d: "M278 348 C370 292 590 292 682 348",
        fill: "none",
        stroke: lip,
        strokeWidth: after ? 4 : 3,
        strokeLinecap: "round",
        opacity: 0.85,
      }),
      e(
        "text",
        {
          x: 48,
          y: 556,
          fill: after ? "#e8d19a" : "#8b96a6",
          fontFamily: "Georgia, serif",
          fontSize: 20,
        },
        after ? "Sample frame · warmer pass" : "Sample frame · cooler pass"
      )
    );
  }

  function BeforeAfter() {
    const [pos, setPos] = useState(50);
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
          style: { "--pos": pos + "%" },
          onPointerDown: onPointerDown,
          onPointerMove: onPointerMove,
          onPointerUp: endDrag,
          onPointerCancel: endDrag,
        },
        e("div", { className: "layer after-layer" }, e(SmileFrame, { variant: "after" })),
        e("div", { className: "layer before-layer" }, e(SmileFrame, { variant: "before" })),
        e("span", { className: "tag tag-before" }, "Before"),
        e("span", { className: "tag tag-after" }, "After"),
        e(
          "div",
          { className: "handle", "aria-hidden": "true" },
          e(
            "div",
            { className: "handle-knob" },
            e(
              "svg",
              { width: 18, height: 18, viewBox: "0 0 18 18", fill: "none" },
              e("path", {
                d: "M6 4L2 9l4 5M12 4l4 5-4 5",
                stroke: "currentColor",
                strokeWidth: 1.6,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              })
            )
          )
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
          "Tasteful placeholder smiles — not patient photos and not a clinical result. Drag the image or move the range with arrow keys."
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
        "A smile-style comparison slider in midnight navy and brushed gold. Drag the divider or use the keyboard-focusable range. Placeholder frames only — not a clinic result."
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
