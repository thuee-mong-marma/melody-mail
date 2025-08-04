import { Messages } from "@/components/Messages";
import { getPosts } from "@/actions/posts";

const BrowsePage = async ({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const query = (await searchParams)?.query as string;

  const data = await getPosts({ query });

  if (!data.length) {
    return (
      <p className="text-center">No posts found</p>
    );
  }

  return <Messages initialData={data} searchQuery={query as string} />;
};

export default BrowsePage;
