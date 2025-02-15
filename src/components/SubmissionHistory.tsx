import { getCookie, COOKIE_NAME } from "@/lib/cookies";
import Link from "next/link";

const SubmissionHistory = () => {
  const historyData = getCookie(COOKIE_NAME);

  if (!historyData.length)
    return <p>Looks like there&apos;s no history yet.</p>;

  return (
    <div className="bg-gray-200 p-4 rounded-lg space-y-4">
      {historyData.map((postId: string) => (
        <Link href={`/details/${postId}`} key={postId} className="inline-block break-all text-md sm:text-base underline">
          <p>{`${process.env.NEXT_PUBLIC_URL}/details/${postId}`}</p>
        </Link>
      ))}
    </div>
  );
};

export default SubmissionHistory;
