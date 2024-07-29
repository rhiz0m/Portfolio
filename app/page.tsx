"use client"
import { useState } from "react"
import About from "../app/about/page"
import Contact from "../app/contact/page"
import Projects from "../app/projects/page"

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
    <main className="flex min-h-screen flex-col items-start justify-start p-2">
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left bg-white">
        <button
          onClick={() => setContent("about")}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-emerald-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            About{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </button>

        <button
          onClick={() => setContent("contact")}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-emerald-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Contact{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </button>

        <button
          onClick={() => setContent("projects")}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-emerald-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Projects{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </button>
      </div>
      <div>{renderContent()}</div>
    </main>
  )
}
