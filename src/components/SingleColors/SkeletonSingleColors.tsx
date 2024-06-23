import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonSingleColors = () => (
  <ContentLoader
    speed={2}
    width={500}
    height={160}
    viewBox="0 0 500 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="11" y="15" rx="11" ry="11" width="119" height="22" />
  </ContentLoader>
);

export default SkeletonSingleColors;
