import "./Link4.css";
export default function Link4(props: Link4Props) {
  return <div className={`${props.className} link-4-link`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_294)">
          <path d="M 0.82 1.72 C 0.82 1.436 0.936 1.178 1.167 0.947 C 1.398 0.716 1.673 0.6 1.993 0.6 H 15.647 C 15.967 0.6 16.242 0.716 16.473 0.947 C 16.705 1.178 16.82 1.436 16.82 1.72 V 15.48 C 16.82 15.765 16.705 16.022 16.473 16.253 C 16.242 16.485 15.967 16.6 15.647 16.6 H 1.993 C 1.673 16.6 1.398 16.485 1.167 16.253 C 0.936 16.022 0.82 15.765 0.82 15.48 V 1.72 Z M 5.78 13.987 V 6.787 H 3.38 V 13.987 H 5.78 Z M 4.553 5.773 C 4.98 5.773 5.318 5.658 5.567 5.427 C 5.816 5.196 5.931 4.902 5.913 4.547 C 5.896 4.191 5.771 3.889 5.54 3.64 C 5.309 3.391 4.989 3.267 4.58 3.267 C 4.171 3.267 3.842 3.391 3.593 3.64 C 3.344 3.889 3.22 4.191 3.22 4.547 C 3.22 4.902 3.344 5.196 3.593 5.427 C 3.842 5.658 4.162 5.773 4.553 5.773 Z M 9.46 13.987 V 9.933 C 9.46 9.685 9.496 9.489 9.567 9.347 C 9.638 9.133 9.78 8.938 9.993 8.76 C 10.207 8.582 10.473 8.493 10.793 8.493 C 11.22 8.493 11.531 8.636 11.727 8.92 C 11.922 9.205 12.02 9.613 12.02 10.147 V 13.987 H 14.42 V 9.827 C 14.42 8.76 14.162 7.951 13.647 7.4 C 13.131 6.849 12.465 6.573 11.647 6.573 C 11.078 6.573 10.598 6.716 10.207 7 C 9.922 7.178 9.673 7.445 9.46 7.8 V 6.787 H 7.06 C 7.096 7.071 7.096 8.351 7.06 10.627 V 13.987 H 9.46 Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_1_294">
            <rect width="16" height="16" fill="white" transform="matrix(1 0 0 -1 0.820007 16.6001)" />
          </clipPath>
        </defs>
      </svg>
    </div>;
}
Link4.defaultProps = {
  className: ""
};
interface Link4Props {
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