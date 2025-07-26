import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { data as detailsData } from "@/data/details";

export const Details = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 py-10">
      {detailsData.map((item) => (
        <Card key={item.title} className="flex-1 hover:border-gray-400">
          <CardHeader>
            <CardTitle className="font-handwritten text-3xl">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
