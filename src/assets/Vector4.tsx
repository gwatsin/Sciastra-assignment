import "./Vector4.css";
export default function Vector4(props: Vector4Props) {
  return <div className={`${props.className} vector-4-vector-4`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 231 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 27 C-2.016e-08 12.088 12.088 2.587e-07 27 2.385e-07 L 203.39 0 C 218.302 -2.016e-08 230.39 12.088 230.39 27 C 230.39 41.912 218.302 54 203.39 54 H 27 C 12.088 54 2.016e-08 41.912 0 27 Z" fill="url(#paint0_linear_12_818)" />
        <path d="M 2 26.295 C 2 12.877 12.877 2 26.295 2 L 204.255 2 C 217.673 2 228.55 12.877 228.55 26.295 C 228.55 39.713 217.673 50.59 204.255 50.59 H 26.295 C 12.877 50.59 2 39.713 2 26.295 Z" fill="white" />
        <defs>
          <linearGradient id="paint0_linear_12_818" x1="-0.106528" y1="26.5371" x2="230.497" y2="27.4629" gradientUnits="userSpaceOnUse">
            <stop offset="0.0275" stopColor="#234EB0" />
            <stop offset="1" stopColor="#B656E2" />
          </linearGradient>
        </defs>
      </svg>
    </div>;
}
Vector4.defaultProps = {
  className: ""
};
interface Vector4Props {
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