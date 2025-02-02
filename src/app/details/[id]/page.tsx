import SpotifyWebPlayer from "@/components/WebPlayer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getPostById } from "@/app/actions/posts";

const MessageDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const data = await getPostById(id);

  if (!data) return <div>Loading...</div>;

  const date = new Date(data.createdAt);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="space-y-8">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <h1 className="text-xl">
          Hello,{" "}
          <span className="font-handwritten text-3xl">{data.recipient}</span>
        </h1>
        <p className="text-md sm:text-lg text-slate-500">
          There&apos;s someone sending you a song, they want you to hear this
          song that maybe you will love! &#128522;
        </p>
        <SpotifyWebPlayer trackId={data?.song_id} />
      </div>
      <div className="text-center space-y-6">
        <p className="text-md sm:text-lg">Also here&apos;s a message from the sender:</p>
        <p className="text-3xl sm:text-4xl text-slate-500 font-handwritten p-4 border rounded-md">{data.message}</p>
        <p className="text-slate-500">Sent on {formattedDate}</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <p>Want to send a song to someone?</p>
        <Link href="/submit">
          <Button>Send a song</Button>
        </Link>
      </div>
    </div>




  );
};

export default MessageDetailPage;
