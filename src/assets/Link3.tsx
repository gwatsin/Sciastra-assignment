import "./Link3.css";
export default function Link3(props: Link3Props) {
  return <div className={`${props.className} link-3-link-1`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_292)">
          <path d="M 13.974 3.534 C 12.943 3.036 11.859 2.698 10.721 2.52 C 10.685 2.485 10.668 2.485 10.668 2.52 C 10.525 2.769 10.383 3.054 10.241 3.374 C 9.032 3.16 7.823 3.16 6.614 3.374 C 6.472 3.089 6.33 2.805 6.188 2.52 C 6.188 2.485 6.17 2.485 6.134 2.52 C 4.997 2.698 3.912 3.036 2.881 3.534 C 1.885 5.027 1.192 6.556 0.801 8.12 C 0.445 9.542 0.339 11.054 0.481 12.654 H 0.534 C 1.743 13.578 3.077 14.254 4.534 14.68 C 4.534 14.68 4.552 14.68 4.588 14.68 C 4.872 14.254 5.139 13.809 5.388 13.347 C 5.388 13.311 5.388 13.294 5.388 13.294 H 5.334 C 4.908 13.116 4.499 12.902 4.108 12.654 C 4.072 12.654 4.072 12.636 4.108 12.6 L 4.374 12.387 H 4.428 C 5.708 12.991 7.041 13.294 8.428 13.294 C 9.814 13.294 11.148 12.991 12.428 12.387 C 12.463 12.387 12.481 12.387 12.481 12.387 L 12.748 12.6 V 12.654 C 12.357 12.902 11.93 13.116 11.468 13.294 V 13.347 C 11.717 13.809 11.983 14.254 12.268 14.68 C 12.303 14.68 12.321 14.68 12.321 14.68 C 13.779 14.254 15.112 13.578 16.321 12.654 H 16.374 C 16.694 9.347 15.894 6.307 13.974 3.534 Z M 5.761 10.84 C 5.37 10.84 5.032 10.68 4.748 10.36 C 4.463 10.04 4.321 9.658 4.321 9.214 C 4.321 8.769 4.463 8.387 4.748 8.067 C 5.032 7.747 5.379 7.587 5.788 7.587 C 6.197 7.587 6.534 7.747 6.801 8.067 C 7.068 8.387 7.201 8.769 7.201 9.214 C 7.201 9.658 7.059 10.04 6.774 10.36 C 6.49 10.68 6.152 10.84 5.761 10.84 Z M 11.094 10.84 C 10.703 10.84 10.365 10.68 10.081 10.36 C 9.797 10.04 9.654 9.658 9.654 9.214 C 9.654 8.769 9.797 8.387 10.081 8.067 C 10.365 7.747 10.703 7.587 11.094 7.587 C 11.485 7.587 11.823 7.747 12.108 8.067 C 12.392 8.387 12.534 8.769 12.534 9.214 C 12.534 9.658 12.392 10.04 12.108 10.36 C 11.823 10.68 11.485 10.84 11.094 10.84 Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_1_292">
            <rect width="16" height="16" fill="white" transform="matrix(1 0 0 -1 0.420044 16.6001)" />
          </clipPath>
        </defs>
      </svg>
    </div>;
}
Link3.defaultProps = {
  className: ""
};
interface Link3Props {
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