"use client";

import React, { useState, useRef, useEffect } from "react";

interface Joke {
  name: string;
  imgURL: string;
}

const JokeCards = () => {
  const [jokes, setJokes] = useState<Joke[]>([
    {
      name: "What do you call fake spaghetti?",
      imgURL: "https://via.placeholder.com/400x300.png?text=It's+an+Impasta",
    },
    {
      name: "Why don't skeletons fight each other?",
      imgURL: "https://via.placeholder.com/400x300.png?text=They+don't+have+the+guts",
    },
    {
      name: "How does a penguin build its house?",
      imgURL: "https://via.placeholder.com/400x300.png?text=Igloos+it+together",
    },
    {
      name: "What do you call cheese that isn't yours?",
      imgURL: "https://via.placeholder.com/400x300.png?text=Nacho+cheese!",
    },
  ]);

  const [randomJoke, setRandomJoke] = useState<Joke>(jokes[0]);

  useEffect(() => {
    const getRandomJoke = () => {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        setRandomJoke(jokes[randomIndex]);
    };

    getRandomJoke();
  }, [jokes]);

  const [swipeState, setSwipeState] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex justify-center align-center ">
        <div
          ref={cardRef}
          className="w-[300px] lg:w-[500px] h-[500px] lg:h-[700px] flex justify-center items-center bg-white rounded-lg"
        >
          <p style={{ color: "black", fontSize: "1.5rem", textAlign: "center" }}>{randomJoke.name}</p>
        </div>
    </div>
  );
};

export default JokeCards;
