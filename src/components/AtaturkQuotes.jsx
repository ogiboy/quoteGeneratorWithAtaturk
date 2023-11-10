import { useEffect, useState } from "react";
import QuoteCard from "./QuoteCard";

const AtaturkQuotes = () => {
  const author = "Mustafa Kemal Atatürk";
  const title = "Random Ataturk Quote";
  const [quote, setQuote] = useState("");
  const [lang, setLang] = useState("en");
  const [toggle, setToggle] = useState(false);
  const url = `https://ataturk.now.sh/${lang}`;

  const getQuotes = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Connection Error");
      const quote = await response.json();
      setQuote(quote.quote);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuotes();
  }, [lang]);

  const handleButton = () => {
    getQuotes();
  };

  const handleToggle = () => {
    setToggle((prev) => !prev);
    setLang((prev) => (prev === "en" ? "tr" : "en"));
  };

  return (
    <div className="quoteArea ataturk">
      <div className="lang">
        EN
        <details onToggle={handleToggle}>
          <summary></summary>
        </details>
        TR
      </div>
      {quote && (
        <QuoteCard
          quote={quote}
          author={author}
          title={title}
          func={handleButton}
        />
      )}
    </div>
  );
};

export default AtaturkQuotes;
