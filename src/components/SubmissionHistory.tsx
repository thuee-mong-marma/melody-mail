"use client";

import { getCookieData, COOKIE_NAME } from "@/lib/utils";
import CustomAlert from "./CustomAlert";
import Link from "next/link";

const SubmissionHistory = () => {
  const history = getCookieData(COOKIE_NAME);

  if (!history)
    return <CustomAlert description="Looks like there's no history yet."/>;

  return (
    <div className="bg-gray-200 p-4 rounded-lg space-y-4">
      {history.map((postId: string) => (
        <Link href={`/details/${postId}`} key={postId} className="inline-block break-all text-md sm:text-base underline">
          <p>{`${process.env.NEXT_PUBLIC_URL}/details/${postId}`}</p>
        </Link>
      ))}
    </div>
  );
};

export default SubmissionHistory;
