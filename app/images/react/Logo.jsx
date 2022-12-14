const SvgLogo = (props) => (
  <svg fill="none" viewBox="0 0 24 24" {...props}>
    <path fill="url(#logo_svg__a)" d="M17.12 9.56H4.52v11.88h12.6V9.56z" />
    <path
      fill="url(#logo_svg__b)"
      d="M4.52 9.56h12.6l2.16-3.96H6.68L4.52 9.56z"
    />
    <path
      fill="url(#logo_svg__c)"
      d="M17.12 21.44h4.32V9.56L19.28 5.6v11.88l-2.16 3.96z"
    />
    <path
      fill="url(#logo_svg__d)"
      d="M6.68 3.08c0-.6.48-1.08 1.08-1.08H18.2c.6 0 1.08.48 1.08 1.08V5.6H6.68V3.08z"
    />
    <path
      fill="#4BD37B"
      fillRule="evenodd"
      d="M2 11.72h8.82a3.78 3.78 0 1 1-3.56 5.04H4.88v-1.8h2.2c.07-.52.25-1 .52-1.44H2v-1.8z"
      clipRule="evenodd"
    />
    <path
      stroke="#385170"
      strokeLinecap="square"
      strokeWidth={1.44}
      d="m9.04 15.88 1.15 1.15 2.29-2.3"
    />
    <path fill="#4BD37B" d="M2 11.72h1.08v1.8H2zm1.44 3.24h1.8v1.8h-1.8z" />
    <path
      stroke="url(#logo_svg__e)"
      strokeLinejoin="round"
      strokeWidth={0.72}
      d="M7.76 2.36h11.52"
    />
    <defs>
      <linearGradient
        id="logo_svg__a"
        x1={13.34}
        x2={13.34}
        y1={5.6}
        y2={21.44}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5479A7" stopOpacity={0.98} />
        <stop offset={1} stopColor="#385170" />
      </linearGradient>
      <linearGradient
        id="logo_svg__b"
        x1={13.34}
        x2={15.68}
        y1={5.6}
        y2={13.52}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6A93C5" stopOpacity={0.98} />
        <stop offset={1} stopColor="#385170" />
      </linearGradient>
      <linearGradient
        id="logo_svg__c"
        x1={21.08}
        x2={18.92}
        y1={21.44}
        y2={14.42}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5479A7" stopOpacity={0.98} />
        <stop offset={1} stopColor="#385170" />
      </linearGradient>
      <linearGradient
        id="logo_svg__d"
        x1={13.34}
        x2={13.34}
        y1={2}
        y2={5.6}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#425E82" />
        <stop offset={1} stopColor="#385170" />
      </linearGradient>
      <radialGradient
        id="logo_svg__e"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(5.04 0 0 39.5652 12.8 3.36)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5378A5" />
        <stop offset={1} stopColor="#5378A5" stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
)

export default SvgLogo
