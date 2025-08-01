'use client'

import Link from "next/link"
import CopyButton from "./CopyButton"
import { env as config } from "@/config/env";

export const PostSuccess = ({id}: {id: string}) => {
  return (
    <div className="bg-green-700 p-4 rounded-md text-white">
      <p className="text-lg font-bold mb-4">Your message has been posted succesfully!</p>
      <div className="flex items-center gap-2 bg-white text-black p-2 rounded-md">
          <Link className="flex-1 text-sm hover:underline break-all" href={`${config.APP_URL}/details/${id}`}>{`${config.APP_URL}/details/${id}`}</Link>
          <CopyButton text={`${config.APP_URL}/details/${id}`} />
      </div>
    </div>
  )
}

