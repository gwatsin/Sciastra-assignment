import "./AirplanePaper1.css";
export default function AirplanePaper1(props: AirplanePaper1Props) {
  return <div className={`${props.className} airplane-paper-1-airplane-paper`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 11 17 L 7 19 L 7.58 13.59" stroke="url(#paint0_linear_12_820)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M 7.58 13.59 L 2.98 8.99 L 21.02 2.98 L 15.01 21.02 L 11 17 L 7.58 13.59 Z" stroke="url(#paint1_linear_12_820)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M 21.02 2.98 L 8 14" stroke="url(#paint2_linear_12_820)" strokeWidth="2" strokeLinejoin="round" />
        <defs>
          <linearGradient id="paint0_linear_12_820" x1="9" y1="13.5901" x2="9" y2="19.0001" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5804A6" />
            <stop offset="1" stopColor="#B656E2" />
          </linearGradient>
          <linearGradient id="paint1_linear_12_820" x1="12" y1="2.97998" x2="12" y2="21.02" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5804A6" />
            <stop offset="1" stopColor="#B656E2" />
          </linearGradient>
          <linearGradient id="paint2_linear_12_820" x1="14.51" y1="2.97998" x2="14.51" y2="14" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5804A6" />
            <stop offset="1" stopColor="#B656E2" />
          </linearGradient>
        </defs>
      </svg>
    </div>;
}
AirplanePaper1.defaultProps = {
  className: ""
};
interface AirplanePaper1Props {
  className: string;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */