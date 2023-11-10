import { useEffect, useState } from "react";
import QuoteCard from "./QuoteCard";
const url = "https://type.fit/api/quotes";
const title = "Get Random Quote";

const RandomQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [showQuote, setShowQuote] = useState([]);

  const showRandomQuote = () => {
    const randomNumber = Math.floor(Math.random() * 15);
    setShowQuote(quotes[randomNumber]);
  };

  useEffect(() => {
    const getQuotes = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Something is wrong!");
        const data = await response.json();
        if (!data) throw new Error("Data Error");
        setQuotes(data);
        showRandomQuote();
      } catch (err) {
        console.log(err);
      }
    };

    getQuotes();
  }, []);

  return (
    <div className="quoteArea random">
      <button onClick={showRandomQuote}>{title}</button>
      {showQuote && (
        <QuoteCard
          quote={showQuote.text}
          author={showQuote.author}
          // title={title}
          // func={showRandomQuote}
        />
      )}
    </div>
  );
};

export default RandomQuotes;
