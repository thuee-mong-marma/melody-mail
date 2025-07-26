import { COOKIE_NAME } from "@/lib/cookies";
import Link from "next/link";
import { cookies } from "next/headers";
import { env as config } from "@/config/env";

const SubmissionHistory = async () => {
  const cookieStore = await cookies()

  const submissions = cookieStore.get(COOKIE_NAME)
  const historyData = submissions?.value ? JSON.parse(submissions.value) : []

  // console.log('historyData', historyData)

  if (!historyData.length)
    return <p>Looks like there&apos;s no history yet.</p>;

  return (
    <div className="bg-gray-200 p-4 rounded-lg space-y-4">
      {historyData.map((postId: string) => (
        <Link href={`/details/${postId}`} key={postId} className="inline-block break-all text-md sm:text-base underline">
          <p>{`${config.APP_URL}/details/${postId}`}</p>
        </Link>
      ))}
    </div>
  );
};

export default SubmissionHistory;
