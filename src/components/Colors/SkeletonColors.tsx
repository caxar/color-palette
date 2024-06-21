import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonColors = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={160}
    viewBox="0 0 300 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="-1" y="3" rx="11" ry="11" width="300" height="160" />
  </ContentLoader>
);

export default SkeletonColors;
