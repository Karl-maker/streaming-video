const SkeletonLoader = ({
    className
}: {
    className?: string;
}) => {
  return (
    <div className={"relative w-full h-full bg-gray-300 dark:bg-gray-700 overflow-hidden rounded-md" + className}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer"></div>
    </div>
  );
};

export default SkeletonLoader;
