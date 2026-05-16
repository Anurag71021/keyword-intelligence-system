import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingSkeleton() {

  return (

    <div className="space-y-4">

      {[1, 2, 3, 4, 5].map((item) => (

        <Skeleton
          key={item}
          className="h-14 w-full"
        />

      ))}

    </div>
  );
}