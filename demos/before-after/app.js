(function () {
  const e = React.createElement;
  const { useState, useRef, useCallback } = React;

  const UPPER = [
    [338, 332],
    [372, 320],
    [408, 312],
    [444, 308],
    [480, 306],
    [516, 308],
    [552, 312],
    [588, 320],
    [622, 332],
  ];

  const LOWER = [
    [356, 392],
    [390, 404],
    [426, 410],
    [462, 414],
    [498, 414],
    [534, 410],
    [570, 404],
    [604, 392],
  ];

  function SmileFrame({ variant }) {
    const after = variant === "after";
    const tooth = after ? "#f6f1e6" : "#8d97a6";
    const toothEdge = after ? "#d7c7a0" : "#6f7a8a";
    const well = after ? "#1a1212" : "#151920";
    const face = after ? "#2c4158" : "#2a3140";
    const bg = after ? "#16324a" : "#1a2230";
    const lip = after ? "#c9a46c" : "#6d7888";

    return e(
      "svg",
      {
        viewBox: "0 0 960 600",
        role: "img",
        "aria-hidden": "true",
        preserveAspectRatio: "xMidYMid slice",
      },
      e("rect", { width: 960, height: 600, fill: bg }),
      after
        ? e("ellipse", { cx: 480, cy: 300, rx: 320, ry: 210, fill: "#c9a46c", opacity: 0.14 })
        : e("ellipse", { cx: 220, cy: 80, rx: 180, ry: 80, fill: "#2c3a4e", opacity: 0.5 }),
      e("ellipse", { cx: 480, cy: 308, rx: 228, ry: 268, fill: face }),
      e("ellipse", { cx: 400, cy: 250, rx: 18, ry: 10, fill: after ? "#3d536b" : "#3a4250" }),
      e("ellipse", { cx: 560, cy: 250, rx: 18, ry: 10, fill: after ? "#3d536b" : "#3a4250" }),
      e("ellipse", { cx: 480, cy: 368, rx: 168, ry: 78, fill: well }),
      e(
        "g",
        { fill: tooth, stroke: toothEdge, strokeWidth: 1.5 },
        UPPER.map(function (pt, i) {
          return e("rect", {
            key: "u" + i,
            x: pt[0] - 14,
            y: pt[1] - 22,
            width: 28,
            height: 42,
            rx: 8,
          });
        }),
        LOWER.map(function (pt, i) {
          return e("rect", {
            key: "l" + i,
            x: pt[0] - 13,
            y: pt[1] - 12,
            width: 26,
            height: 34,
            rx: 8,
          });
        })
      ),
      e("path", {
        d: "M318 348 C390 300 570 300 642 348",
        fill: "none",
        stroke: lip,
        strokeWidth: after ? 10 : 8,
        strokeLinecap: "round",
      }),
      e("path", {
        d: "M330 400 C400 458 560 458 630 400",
        fill: "none",
        stroke: lip,
        strokeWidth: after ? 9 : 7,
        strokeLinecap: "round",
      }),
      e(
        "text",
        {
          x: 48,
          y: 556,
          fill: after ? "#e8d19a" : "#8b96a6",
          fontFamily: "Georgia, serif",
          fontSize: 22,
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
        "A smile-style comparison slider in midnight navy and brushed gold. Drag the divider or use the keyboard-focusable range. Crom portfolio unlocker, not a clinic result."
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
