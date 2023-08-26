import "./AirplanePaper.css";
export default function AirplanePaper(props: AirplanePaperProps) {
  return <div className={`${props.className} airplane-paper-airplane-paper-1`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 11.977 17 L 7.977 19 L 8.557 13.59" stroke="url(#paint0_linear_3_568)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M 8.557 13.59 L 3.957 8.99 L 21.997 2.98 L 15.987 21.02 L 11.977 17 L 8.557 13.59 Z" stroke="url(#paint1_linear_3_568)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M 21.997 2.98 L 8.977 14" stroke="url(#paint2_linear_3_568)" strokeWidth="2" strokeLinejoin="round" />
        <defs>
          <linearGradient id="paint0_linear_3_568" x1="9.97699" y1="13.5901" x2="9.97699" y2="19.0001" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5804A6" />
            <stop offset="1" stopColor="#B656E2" />
          </linearGradient>
          <linearGradient id="paint1_linear_3_568" x1="12.977" y1="2.97998" x2="12.977" y2="21.02" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5804A6" />
            <stop offset="1" stopColor="#B656E2" />
          </linearGradient>
          <linearGradient id="paint2_linear_3_568" x1="15.487" y1="2.97998" x2="15.487" y2="14" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5804A6" />
            <stop offset="1" stopColor="#B656E2" />
          </linearGradient>
        </defs>
      </svg>
    </div>;
}
AirplanePaper.defaultProps = {
  className: ""
};
interface AirplanePaperProps {
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