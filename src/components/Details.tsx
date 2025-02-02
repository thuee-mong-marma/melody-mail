import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  {
    title: "Share your message",
    description:
      "Select a meaningful song and compose a touching message for someone you care about, or create a special note just for yourself.",
  },
  {
    title: "Browse messages",
    description:
      "Search for messages addressed to you by entering your name and discover touching notes left especially for you.",
  },
  {
    title: "Details messages",
    description:
      "Click on any message to read its complete story and experience the song that brings its emotions to life!",
  },
];
export const Details = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 py-10">
      {data.map((item) => (
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
