import "./Vector16.css";
export default function Vector16(props: Vector16Props) {
  return <div className={`${props.className} vector-16-vector`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 177 177" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 39.598 147.993 C 39.598 121.098 61.35 99.346 88.245 99.346 C 115.141 99.346 136.893 121.098 136.893 147.993 M 175.491 88.547 C 175.491 136.731 136.43 175.792 88.245 175.792 C 40.061 175.792 1 136.731 1 88.547 C 1 40.363 40.061 1.302 88.245 1.302 C 136.43 1.302 175.491 40.363 175.491 88.547 Z M 88.245 78.497 C 101.679 78.497 112.569 67.607 112.569 54.173 C 112.569 40.739 101.679 29.849 88.245 29.849 C 74.812 29.849 63.921 40.739 63.921 54.173 C 63.921 67.607 74.812 78.497 88.245 78.497 Z" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
      </svg>
    </div>;
}
Vector16.defaultProps = {
  className: ""
};
interface Vector16Props {
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