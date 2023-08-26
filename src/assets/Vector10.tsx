import "./Vector10.css";
export default function Vector10(props: Vector10Props) {
  return <div className={`${props.className} vector-10-vector-2`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 177 177" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 39.598 148.126 C 39.598 121.23 61.35 99.478 88.245 99.478 C 115.141 99.478 136.893 121.23 136.893 148.126 M 175.491 88.679 C 175.491 136.863 136.43 175.924 88.245 175.924 C 40.061 175.924 1 136.863 1 88.679 C 1 40.495 40.061 1.434 88.245 1.434 C 136.43 1.434 175.491 40.495 175.491 88.679 Z M 88.245 78.629 C 101.679 78.629 112.569 67.739 112.569 54.305 C 112.569 40.871 101.679 29.981 88.245 29.981 C 74.812 29.981 63.921 40.871 63.921 54.305 C 63.921 67.739 74.812 78.629 88.245 78.629 Z" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
      </svg>
    </div>;
}
Vector10.defaultProps = {
  className: ""
};
interface Vector10Props {
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