"use client";

export default function LoginBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#040B16] pointer-events-none select-none">

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Top Blue Spotlight */}
      <div
        className="
        absolute
        left-1/2
        top-[-280px]
        h-[750px]
        w-[750px]
        -translate-x-1/2
        rounded-full
        bg-cyan-500/30
        blur-[180px]
      "
      />

      {/* Center Glow */}
      <div
        className="
        absolute
        left-1/2
        top-[100px]
        h-[650px]
        w-[650px]
        -translate-x-1/2
        rounded-full
        bg-blue-500/10
        blur-[150px]
      "
      />

      {/* Left Rings (Adjusted position for wider layout) */}
      <div className="absolute left-[-200px] top-[170px] h-[480px] w-[480px] rounded-full border border-cyan-400/10" />
      <div className="absolute left-[-150px] top-[210px] h-[380px] w-[380px] rounded-full border border-cyan-400/10" />
      <div className="absolute left-[-100px] top-[250px] h-[280px] w-[280px] rounded-full border border-cyan-400/10" />

      {/* Right Rings (Adjusted position for wider layout) */}
      <div className="absolute right-[-210px] top-[110px] h-[520px] w-[520px] rounded-full border border-cyan-400/10" />
      <div className="absolute right-[-150px] top-[160px] h-[410px] w-[410px] rounded-full border border-cyan-400/10" />
      <div className="absolute right-[-90px] top-[210px] h-[310px] w-[310px] rounded-full border border-cyan-400/10" />

      {/* Stars */}
      {[
        [18, 22], [30, 70], [12, 55], [60, 20],
        [82, 28], [76, 72], [92, 62], [48, 14],
        [55, 82], [88, 15], [7, 80],  [40, 55],
        [67, 45], [25, 35], [93, 42], [13, 18],
      ].map(([x, y], index) => (
        <span
          key={index}
          className="absolute h-[2px] w-[2px] rounded-full bg-cyan-300 opacity-70"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            boxShadow: "0 0 10px #38bdf8",
          }}
        />
      ))}

      {/* Bottom Glow */}
      <div
        className="
        absolute
        bottom-[-300px]
        left-1/2
        h-[650px]
        w-[650px]
        -translate-x-1/2
        rounded-full
        bg-blue-500/10
        blur-[200px]
      "
      />
    </div>
  );
}