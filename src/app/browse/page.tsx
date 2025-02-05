import { Messages } from "@/components/Messages";
import { getPosts } from "@/actions/posts";

const BrowsePage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const data = await getPosts({ query: searchParams?.query as string });

  return <Messages initialData={data} searchQuery={searchParams?.query as string} />;
};

export default BrowsePage;
