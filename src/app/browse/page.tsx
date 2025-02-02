import Link from "next/link";
import { browseAlert } from "@/data/alert";
import CustomAlert from "@/components/CustomAlert";
import SearchInput from "@/components/Searchinput";
import { Messages } from "@/components/Messages";
import { getPosts } from "@/app/actions/posts";

const BrowsePage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const data = await getPosts({ query: searchParams?.query as string });

  return (
    <div className="space-y-6">
      <div className="w-full sm:max-w-[70%] mx-auto space-y-4">
        <CustomAlert
          title={browseAlert.title}
          description={browseAlert.description}
        />
        <p className="text-center">
          I would love to hear your feedback and suggestions to help me improve{" "}
          <span className="font-handwritten text-2xl">MelodyMail</span>, Click{" "}
          <Link
            href="https://forms.gle/3y32138346234"
            className="underline"
          >
            here
          </Link>{" "}
          to share your thoughts.
        </p>
        <SearchInput />
      </div>
      {data.length && <Messages initialData={data} searchQuery={searchParams?.query as string} />}
    </div>
  );
};

export default BrowsePage;
