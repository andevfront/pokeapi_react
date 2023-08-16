import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonLoader = ({ count }) => {
  return (
    <>
      {[...Array(count)].map((item, index) => (
        <div
          className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
          key={index}
        >
          <Skeleton
            className="h-[360px] overflow-hidden rounded-lg"
            baseColor="#1E273D"
            highlightColor="#0f172a"
          />
        </div>
      ))}
    </>
  );
};
