import CreateJoke from "../components/custom/CreateJoke"
import Image from "next/image"

export default function HomePage() {
  return (
    <>
      <Image 
        src="/logo.png"
        alt="Logo"
        width={300}
        height={200}
      />
      <CreateJoke />
    </>
  )
}