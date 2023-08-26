import "./Link1.css";
export default function Link1(props: Link1Props) {
  return <div className={`${props.className} link-1-link-3`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_288)">
          <path d="M 16.62 8.653 C 16.62 7.196 16.264 5.853 15.553 4.627 C 14.842 3.4 13.873 2.422 12.647 1.693 C 11.42 0.965 10.078 0.6 8.62 0.6 C 7.162 0.6 5.82 0.965 4.593 1.693 C 3.367 2.422 2.398 3.4 1.687 4.627 C 0.976 5.853 0.62 7.196 0.62 8.653 C 0.62 9.969 0.913 11.196 1.5 12.333 C 2.087 13.471 2.896 14.413 3.927 15.16 C 4.958 15.907 6.113 16.387 7.393 16.6 V 11 H 5.313 V 8.653 H 7.393 V 6.893 C 7.393 5.898 7.66 5.125 8.193 4.573 C 8.727 4.022 9.456 3.747 10.38 3.747 C 10.736 3.747 11.144 3.765 11.607 3.8 L 12.193 3.907 V 5.88 H 11.18 C 10.718 5.88 10.38 5.996 10.167 6.227 C 9.953 6.458 9.847 6.769 9.847 7.16 V 8.653 H 12.087 L 11.713 11 H 9.847 V 16.6 C 11.127 16.387 12.282 15.907 13.313 15.16 C 14.344 14.413 15.153 13.471 15.74 12.333 C 16.327 11.196 16.62 9.969 16.62 8.653 Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_1_288">
            <rect width="16" height="16" fill="white" transform="matrix(1 0 0 -1 0.619995 16.6001)" />
          </clipPath>
        </defs>
      </svg>
    </div>;
}
Link1.defaultProps = {
  className: ""
};
interface Link1Props {
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