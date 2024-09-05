import CreateJoke from "../components/custom/CreateJoke"
import JokeCards from "../components/custom/JokeCards"
import Header from "../components/custom/Header"

export default function HomePage() {
  return (
    <>
      <div className="bg-[#fcefc7] flex justify-center items-center flex-col">
        <Header/>
        <CreateJoke />
        <br />
        <JokeCards />
      </div>
    </>
  )
}