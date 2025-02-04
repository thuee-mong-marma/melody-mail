"use client";

import { getCookie, COOKIE_NAME } from "@/lib/cookies";
import CustomAlert from "./CustomAlert";
import Link from "next/link";

const SubmissionHistory = () => {
  const historyData = getCookie(COOKIE_NAME);

  if (!historyData.length)
    return <CustomAlert description="Looks like there's no history yet."/>;

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
