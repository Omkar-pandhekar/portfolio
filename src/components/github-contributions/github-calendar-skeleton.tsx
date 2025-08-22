import Skeleton from "../layouts/skeleton";

export default function GithubCalendarSkeleton() {
  return (
    <div className="h-[200px] flex flex-col justify-between w-[calc(100%-53px)] md:w-[800px] lg:w-[1000px]">
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-[140px] w-full" />
      <Skeleton className="h-5 w-40" />
    </div>
  );
}
