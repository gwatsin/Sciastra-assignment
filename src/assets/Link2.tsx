import "./Link2.css";
export default function Link2(props: Link2Props) {
  return <div className={`${props.className} link-2-link-2`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_290)">
          <path d="M 8.02 0.6 C 6.527 0.6 5.416 0.618 4.687 0.653 C 3.958 0.689 3.327 0.813 2.793 1.027 C 2.26 1.24 1.789 1.551 1.38 1.96 C 0.971 2.369 0.66 2.84 0.447 3.373 C 0.233 3.907 0.109 4.538 0.073 5.267 C 0.038 5.996 0.02 7.107 0.02 8.6 C 0.02 10.093 0.038 11.205 0.073 11.933 C 0.109 12.662 0.233 13.293 0.447 13.827 C 0.66 14.36 0.971 14.831 1.38 15.24 C 1.789 15.649 2.26 15.96 2.793 16.173 C 3.327 16.387 3.958 16.511 4.687 16.547 C 5.416 16.582 6.527 16.6 8.02 16.6 C 9.513 16.6 10.625 16.582 11.353 16.547 C 12.082 16.511 12.713 16.387 13.247 16.173 C 13.78 15.96 14.251 15.649 14.66 15.24 C 15.069 14.831 15.38 14.36 15.593 13.827 C 15.807 13.293 15.931 12.662 15.967 11.933 C 16.002 11.205 16.02 10.093 16.02 8.6 C 16.02 7.107 16.002 5.996 15.967 5.267 C 15.931 4.538 15.807 3.907 15.593 3.373 C 15.38 2.84 15.069 2.369 14.66 1.96 C 14.251 1.551 13.78 1.24 13.247 1.027 C 12.713 0.813 12.082 0.689 11.353 0.653 C 10.625 0.618 9.513 0.6 8.02 0.6 Z M 7.327 2.04 H 8.02 C 9.513 2.04 10.598 2.058 11.273 2.093 C 11.842 2.129 12.313 2.218 12.687 2.36 C 13.06 2.502 13.38 2.707 13.647 2.973 C 13.913 3.24 14.118 3.56 14.26 3.933 C 14.402 4.307 14.491 4.778 14.527 5.347 C 14.562 6.022 14.58 7.107 14.58 8.6 C 14.58 10.093 14.562 11.178 14.527 11.853 C 14.491 12.422 14.402 12.893 14.26 13.267 C 14.118 13.64 13.913 13.96 13.647 14.227 C 13.38 14.493 13.06 14.698 12.687 14.84 C 12.313 14.982 11.842 15.071 11.273 15.107 C 10.562 15.142 9.478 15.16 8.02 15.16 C 6.562 15.16 5.478 15.142 4.767 15.107 C 4.198 15.071 3.727 14.982 3.353 14.84 C 2.98 14.698 2.66 14.493 2.393 14.227 C 2.127 13.96 1.922 13.64 1.78 13.267 C 1.638 12.893 1.549 12.422 1.513 11.853 C 1.478 11.142 1.46 10.049 1.46 8.573 C 1.46 7.098 1.478 6.022 1.513 5.347 C 1.549 4.778 1.638 4.307 1.78 3.933 C 1.922 3.56 2.127 3.24 2.393 2.973 C 2.66 2.707 2.98 2.502 3.353 2.36 C 3.727 2.218 4.216 2.129 4.82 2.093 C 5.424 2.058 6.26 2.04 7.327 2.04 Z M 12.287 3.373 C 12.038 3.373 11.816 3.462 11.62 3.64 C 11.425 3.818 11.327 4.04 11.327 4.307 C 11.327 4.573 11.425 4.805 11.62 5 C 11.816 5.196 12.047 5.293 12.313 5.293 C 12.58 5.293 12.802 5.196 12.98 5 C 13.158 4.805 13.247 4.573 13.247 4.307 C 13.247 4.04 13.158 3.818 12.98 3.64 C 12.802 3.462 12.571 3.373 12.287 3.373 Z M 8.02 4.493 C 7.273 4.493 6.58 4.671 5.94 5.027 C 5.3 5.382 4.793 5.88 4.42 6.52 C 4.047 7.16 3.86 7.853 3.86 8.6 C 3.86 9.347 4.047 10.04 4.42 10.68 C 4.793 11.32 5.3 11.818 5.94 12.173 C 6.58 12.529 7.273 12.707 8.02 12.707 C 8.767 12.707 9.451 12.52 10.073 12.147 C 10.696 11.773 11.185 11.276 11.54 10.653 C 11.896 10.031 12.073 9.347 12.073 8.6 C 12.073 7.853 11.896 7.169 11.54 6.547 C 11.185 5.925 10.696 5.427 10.073 5.053 C 9.451 4.68 8.767 4.493 8.02 4.493 Z M 8.02 5.933 C 8.482 5.933 8.927 6.049 9.353 6.28 C 9.78 6.511 10.109 6.84 10.34 7.267 C 10.571 7.693 10.687 8.138 10.687 8.6 C 10.687 9.062 10.571 9.507 10.34 9.933 C 10.109 10.36 9.78 10.689 9.353 10.92 C 8.927 11.151 8.482 11.267 8.02 11.267 C 7.273 11.267 6.642 11.009 6.127 10.493 C 5.611 9.978 5.353 9.347 5.353 8.6 C 5.353 7.853 5.611 7.222 6.127 6.707 C 6.642 6.191 7.273 5.933 8.02 5.933 Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_1_290">
            <rect width="16" height="16" fill="white" transform="matrix(1 0 0 -1 0.0200195 16.6001)" />
          </clipPath>
        </defs>
      </svg>
    </div>;
}
Link2.defaultProps = {
  className: ""
};
interface Link2Props {
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