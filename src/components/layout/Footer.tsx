import Link from "next/link";

// const Links = [
//   {
//     title: 'Author',
//     url: 'https://mong-dev.vercel.app/'
//   },
//   {
//     title: 'Hire Me!',
//     url: 'https://mong-dev.vercel.app/#contact'
//   }
// ]

export const Footer = () => {
  return (
    <footer className="border-t p-4 space-y-4">
      {/* <div className="flex gap-4 justify-center items-center">
        {Links.map((link) => (
          <Link key={link.title} href={link.url} className="text-gray-500 hover:text-gray-700" target="_blank">
            {link.title}
          </Link>
        ))}
      </div> */}
      <div className="text-center text-gray-500 text-md">
        Made with ❤️ by <Link href="https://mong-dev.netlify.app/" target="_blank" className='font-bold hover:underline'>Mong</Link>
      </div>
      <p className="text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} All rights reserved.

      </p>
    </footer>

  );
};


