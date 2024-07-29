import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <div className="bg-black">
        <Image
          src="/andreas_profil.jpg"
          alt="Profile picture of Andreas A"
          width={400}
          height={400}
          className="rounded-full p-3"
        />
        <div className="p-3 bg-indigo-400 drop-shadow-xl">
          <h2 className="text-center text-2xl font-semibold m-3">
            Andreas Antonsson
          </h2>
          <h3 className="mb-4 tracking-widest text-center font-light">
            App & Webb Development
          </h3>
          <div className="mb-4 flex justify-between">
            <Link
              href="https://www.linkedin.com/in/andreas-antonsson-12209024b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin_icon.png"
                alt="LinkedIn Icon"
                width={40}
                height={40}
                className="rounded-md bg-slate-50 drop-shadow-lg"
              />
            </Link>
            <p className="text-center mb-2">________________________</p>
            <Link
              href="https://github.com/rhiz0m"
              target="blank"
              rel="noopener noreferrner"
            >
              <Image
                src="/github_icon.png"
                alt="Github Icon"
                width={40}
                height={40}
                className="rounded-full bg-white drop-shadow-lg"
              />
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <p className="font-extralight text-sm mr-2">created with: </p>
            <Image
              src="/next.svg"
              alt="A Next Icon"
              width={50}
              height={20}
              className="mr-4"
            />
            <Image
              src="/vercel.svg"
              alt="A Vercel Icon"
              width={50}
              height={20}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
