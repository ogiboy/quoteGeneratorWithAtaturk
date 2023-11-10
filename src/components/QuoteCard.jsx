const QuoteCard = ({ quote, author, title, func }) => {
  const paragraphStyle = {
    backgroundColor: "#eee",
    borderRadius: "5px",
    padding: "15px"
  };

  return (
    <blockquote>
      {func && <button onClick={func}>{title}</button>}
      <p style={paragraphStyle}>{quote}</p>
      <footer>{author}</footer>
    </blockquote>
  );
};

export default QuoteCard;
