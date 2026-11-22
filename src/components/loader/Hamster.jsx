const FUR = "#f4b266";
const FUR_DARK = "#e0954a";
const CREAM = "#fff7ed";
const PINK = "#f9a8d4";

/** A chubby hamster running in its wheel, working hard to load the page. */
export default function Hamster() {
  return (
    <>
      {/* ground shadow and stand (behind the wheel) */}
      <ellipse cx="100" cy="130" rx="40" ry="3" fill="#e7e5e4" />
      <path d="M100 66 L72 130 M100 66 L128 130" stroke="#d6d3d1" strokeWidth="5" strokeLinecap="round" />

      {/* the wheel spins clockwise, as if pushed by the hamster's feet */}
      <g className="hamster-wheel">
        <circle cx="100" cy="66" r="56" fill="#fdf2f8" stroke={PINK} strokeWidth="4" />
        <circle cx="100" cy="66" r="50" fill="none" stroke="#fbcfe8" strokeWidth="1.5" strokeDasharray="4 6" />
        <path
          d="M100 16 V116 M50 66 H150 M64.6 30.6 L135.4 101.4 M135.4 30.6 L64.6 101.4"
          stroke="#fbcfe8"
          strokeWidth="1.5"
        />
      </g>
      <circle cx="100" cy="66" r="4" fill="#d63384" />

      {/* hamster body bobs while running */}
      <g className="hamster-body">
        <circle cx="77" cy="103" r="2.5" fill={FUR_DARK} />
        <ellipse cx="98" cy="102" rx="22" ry="14" fill={FUR} />
        <ellipse cx="102" cy="108" rx="13" ry="7" fill={CREAM} />

        {/* head with puffy cheeks */}
        <circle cx="104" cy="86" r="4" fill={FUR_DARK} />
        <circle cx="114" cy="96" r="12" fill={FUR} />
        <circle cx="110" cy="84" r="4.5" fill={FUR} />
        <circle cx="110" cy="84" r="2.5" fill={PINK} />
        <ellipse cx="117" cy="101" rx="7" ry="5.5" fill={CREAM} />
        <circle cx="119.5" cy="101" r="2.6" fill="#f472b6" opacity="0.55" />
        <g className="blink">
          <circle cx="119" cy="93" r="2.2" fill="#1c1917" />
          <circle cx="119.8" cy="92.2" r="0.7" fill="#fff" />
        </g>
        <circle cx="126" cy="97" r="1.6" fill="#d63384" />
      </g>

      {/* little pink feet, two at a time (diagonal pairs) */}
      <g className="hamster-feet">
        <ellipse cx="111" cy="116.5" rx="3.5" ry="3" fill={PINK} />
        <ellipse cx="85" cy="116.5" rx="3.5" ry="3" fill={PINK} />
      </g>
      <g className="hamster-feet hamster-feet-alt">
        <ellipse cx="105" cy="116.5" rx="3.5" ry="3" fill={PINK} />
        <ellipse cx="91" cy="116.5" rx="3.5" ry="3" fill={PINK} />
      </g>

      {/* sweat drop — it's working hard! */}
      <path
        className="hamster-sweat"
        d="M103 72 C 103 72, 100 76.5, 100 78.5 A 3 3 0 0 0 106 78.5 C 106 76.5, 103 72, 103 72 Z"
        fill="#7dd3fc"
      />
    </>
  );
}
