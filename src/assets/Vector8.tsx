import "./Vector8.css";
export default function Vector8(props: Vector8Props) {
  return <div className={`${props.className} vector-8-vector-1`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 177 177" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 39.598 147.692 C 39.598 120.797 61.35 99.044 88.245 99.044 C 115.141 99.044 136.893 120.797 136.893 147.692 M 175.491 88.245 C 175.491 136.43 136.43 175.491 88.245 175.491 C 40.061 175.491 1 136.43 1 88.245 C 1 40.061 40.061 1 88.245 1 C 136.43 1 175.491 40.061 175.491 88.245 Z M 88.245 78.195 C 101.679 78.195 112.569 67.305 112.569 53.871 C 112.569 40.437 101.679 29.547 88.245 29.547 C 74.812 29.547 63.921 40.437 63.921 53.871 C 63.921 67.305 74.812 78.195 88.245 78.195 Z" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
      </svg>
    </div>;
}
Vector8.defaultProps = {
  className: ""
};
interface Vector8Props {
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