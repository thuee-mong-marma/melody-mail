import { Skeleton } from "@/components/ui/skeleton";

export default function BrowsePageLoader() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Array.from({ length: 9 }).map((_,index) => (
        <div  key={index} className="flex flex-col justify-between max-w-sm w-full h-full border rounded-xl overflow-hidden bg-card shadow-md">
          <div className="flex flex-col gap-4 w-full h-full p-4">
            <Skeleton className="h-5 w-10" />
            <div className="pb-1.5 justify-self-start space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-1/2" />
            </div>
          </div>
          <div className="flex items-center justify-between gap-2 p-4 border-t bg-gray-100">
            <div className="flex items-center gap-2 w-full">
              <Skeleton className="h-10 w-10 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
