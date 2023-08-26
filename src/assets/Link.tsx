import "./Link.css";
export default function Link(props: LinkProps) {
  return <div className={`${props.className} link-link-4`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_286)">
          <path d="M 8.273 2.573 H 8.38 C 9.411 2.609 10.389 2.644 11.313 2.68 C 12.949 2.716 13.998 2.804 14.46 2.947 C 14.816 3.018 15.118 3.187 15.367 3.453 C 15.616 3.72 15.784 4.022 15.873 4.36 C 15.962 4.698 16.042 5.169 16.113 5.773 L 16.167 6.2 C 16.202 6.876 16.22 7.533 16.22 8.173 V 8.28 C 16.22 8.956 16.184 9.631 16.113 10.307 V 10.52 C 16.042 11.196 15.962 11.711 15.873 12.067 C 15.784 12.422 15.616 12.724 15.367 12.973 C 15.118 13.222 14.816 13.4 14.46 13.507 C 13.962 13.649 12.86 13.738 11.153 13.773 C 10.193 13.809 9.233 13.827 8.273 13.827 H 8.167 C 7.207 13.827 6.229 13.809 5.233 13.773 H 4.647 C 3.296 13.702 2.424 13.613 2.033 13.507 C 1.642 13.4 1.322 13.222 1.073 12.973 C 0.824 12.724 0.647 12.422 0.54 12.067 C 0.433 11.711 0.362 11.196 0.327 10.52 V 10.307 C 0.256 9.631 0.22 8.956 0.22 8.28 V 8.173 C 0.22 7.533 0.238 6.929 0.273 6.36 L 0.327 5.773 C 0.398 5.169 0.478 4.698 0.567 4.36 C 0.656 4.022 0.824 3.72 1.073 3.453 C 1.322 3.187 1.624 3.018 1.98 2.947 C 2.407 2.84 3.296 2.751 4.647 2.68 L 5.233 2.627 C 6.193 2.627 7.136 2.609 8.06 2.573 H 8.273 Z M 6.62 5.827 V 10.627 L 10.78 8.227 L 6.62 5.827 Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_1_286">
            <rect width="16" height="16" fill="white" transform="matrix(1 0 0 -1 0.220001 16.6001)" />
          </clipPath>
        </defs>
      </svg>
    </div>;
}
Link.defaultProps = {
  className: ""
};
interface LinkProps {
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