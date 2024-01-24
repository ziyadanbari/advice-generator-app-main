import Advice from "./Advice";
import Quote from "./Quote";
import Divider from "./Divider";
import Dicer from "./Dicer";
import { useEffect, useState } from "react";
import axios from "axios";
const Card = () => {
  const [quote, setQuote] = useState("");
  const [advice, setAdvice] = useState(0);
  const [isDiceButtonDisabled, setIsDiceButtonDisabled] = useState(false);
  const fetchRandomQuote = async () => {
    setIsDiceButtonDisabled(true);
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdvice((prev) => prev + 1);
      setQuote(response.data.slip.advice);
    } catch (err) {
      console.log(err);
    } finally {
      setIsDiceButtonDisabled(false);
    }
  };
  useEffect(() => {
    fetchRandomQuote();
  }, []);
  return (
    <div className="px-10 py-6 bg-darkGrayishBlue rounded-md shadow-md xs:w-[450px] w-full mx-5 relative pb-14">
      <div className="flex flex-col items-center gap-4 text-center">
        <Advice advice={advice} />
        <Quote quote={quote} />
        <Divider />
        <Dicer disabled={isDiceButtonDisabled} onClick={fetchRandomQuote} />
      </div>
    </div>
  );
};

export default Card;
