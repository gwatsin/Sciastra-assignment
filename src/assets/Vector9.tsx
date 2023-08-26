import "./Vector9.css";
export default function Vector9(props: Vector9Props) {
  return <div className={`${props.className} vector-9-vector-3`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 177 177" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 39.598 147.824 C 39.598 120.929 61.35 99.176 88.245 99.176 C 115.141 99.176 136.893 120.929 136.893 147.824 M 175.491 88.377 C 175.491 136.562 136.43 175.623 88.245 175.623 C 40.061 175.623 1 136.562 1 88.377 C 1 40.193 40.061 1.132 88.245 1.132 C 136.43 1.132 175.491 40.193 175.491 88.377 Z M 88.245 78.327 C 101.679 78.327 112.569 67.437 112.569 54.003 C 112.569 40.569 101.679 29.679 88.245 29.679 C 74.812 29.679 63.921 40.569 63.921 54.003 C 63.921 67.437 74.812 78.327 88.245 78.327 Z" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
      </svg>
    </div>;
}
Vector9.defaultProps = {
  className: ""
};
interface Vector9Props {
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