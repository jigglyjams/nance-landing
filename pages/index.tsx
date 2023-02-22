import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-16 justify-center">
      <h1 className="font-bold text-4xl">
        nance
      </h1>
      <h2 className="mt-5">an automated governance platform</h2>
      <Image
        className="rounded mt-10"
        src="/logo_square.png" alt="logo" width={100} height={100}
      />
      <Link href="https://jbdao.org">
        <button type="button" className="mt-10 bg-grayish rounded border border-transparent px-2.5 py-1.5 text-sm font-medium text-white shadow-sm"
          onClick= {()=>"location.href='https://www.jbdao.org'"}>
          go to app
          </button>
      </Link>
      <Footer/>
    </div>
  )
}