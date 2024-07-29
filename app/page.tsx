"use client"
import { useState } from "react"
import About from "../app/about/page"
import Contact from "../app/contact/page"
import Projects from "../app/projects/page"
import Image from "next/image"


export default function Home() {
  const [content, setContent] = useState("")

  const renderContent = () => {
    switch (content) {
      case "about":
        return <About />
      case "contact":
        return <Contact />
      case "projects":
        return <Projects />
      default:
        return <About />
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-stretch justify-start">
      <div className="mb-32 grid w-full lg:mb-0 lg:w-full lg:grid-cols-6 bg-indig p-1">
        <button
          onClick={() => setContent("about")}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-indigo-500 hover:bg-indigo-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-2 text-2xl font-semibold">
            About{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <Image
                src="/about_icon.png"
                alt="Arrow Icon"
                width={20}
                height={20}
              />
            </span>
          </h2>
        </button>

        <button
          onClick={() => setContent("contact")}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-indigo-500 hover:bg-indigo-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-2 text-2xl font-semibold">
            Contact{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <Image
                src="/contact_icon.png"
                alt="Contact Icon"
                width={20}
                height={20}
              />
            </span>
          </h2>
        </button>

        <button
          onClick={() => setContent("projects")}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-indigo-500 hover:bg-indigo-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-2 text-2xl font-semibold">
            Projects{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <Image
                src="/projects_icon.png"
                alt="Projects Icon"
                width={20}
                height={20}
              />
            </span>
          </h2>
        </button>
      </div>
      <div>{renderContent()}</div>
    </main>
  )
}
