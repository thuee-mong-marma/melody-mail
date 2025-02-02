import Link from "next/link"
import CopyButton from "./CopyButton"


export const PostSuccess = ({id}: {id: string}) => {
  const fullUrl = `${process.env.NEXT_PUBLIC_URL}/details/${id}`

  return (
    <div className="bg-green-700 p-4 rounded-md text-white">
      <p className="text-lg font-bold mb-4">Your message has been posted succesfully!</p>
      <div className="flex items-center gap-2 bg-white text-black p-2 rounded-md">
          <Link className="flex-1 text-sm hover:underline" href={fullUrl}>{fullUrl}</Link>
          <CopyButton text={fullUrl} />
      </div>
    </div>




  )
}

