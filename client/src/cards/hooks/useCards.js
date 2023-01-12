import { useState } from "react";
import { getCards } from "../services/cardApiService";
import useAxios from "../../hooks/useAxios";

const useCards = () => {
  const [cards, setCards] = useState(null);
  const [card, setCard] = useState(null);
  const [isPending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useAxios();

  const requestStatus = (pending, errorMessage, cards, card = null) => {
    setPending(pending);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

  const handleGetCards = async () => {
    try {
      setPending(true);
      const cards = await getCards();
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  return {
    cards,
    isPending,
    error,
    handleGetCards,
  };
};

export default useCards;
