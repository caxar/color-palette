import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonPalette = () => (
  <ContentLoader
    speed={2}
    width={500}
    height={160}
    viewBox="0 0 500 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="3" y="38" rx="11" ry="11" width="100" height="80" />
  </ContentLoader>
);

export default SkeletonPalette;
