import "./Vector3.css";
export default function Vector3(props: Vector3Props) {
  return <div className={`${props.className} vector-3-vector-5`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 232 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0.977 27 C 0.977 12.088 13.065 2.587e-07 27.977 2.385e-07 L 204.367 0 C 219.279 -2.016e-08 231.367 12.088 231.367 27 C 231.367 41.912 219.279 54 204.367 54 H 27.977 C 13.065 54 0.977 41.912 0.977 27 Z" fill="url(#paint0_linear_12_816)" />
        <path d="M 2.977 26.295 C 2.977 12.877 13.854 2 27.272 2 L 205.232 2 C 218.65 2 229.527 12.877 229.527 26.295 C 229.527 39.713 218.65 50.59 205.232 50.59 H 27.272 C 13.854 50.59 2.977 39.713 2.977 26.295 Z" fill="white" />
        <defs>
          <linearGradient id="paint0_linear_12_816" x1="0.870458" y1="26.5371" x2="231.474" y2="27.4629" gradientUnits="userSpaceOnUse">
            <stop offset="0.0275" stopColor="#234EB0" />
            <stop offset="1" stopColor="#B656E2" />
          </linearGradient>
        </defs>
      </svg>
    </div>;
}
Vector3.defaultProps = {
  className: ""
};
interface Vector3Props {
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