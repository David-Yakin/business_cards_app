import { useState, useCallback, useMemo } from "react";
import { deleteCard, getCards, getMyCards } from "../services/cardApiService";
import useAxios from "../../hooks/useAxios";
import { useSnackbar } from "../../providers/SnackbarProvider";

const useCards = () => {
  const [cards, setCards] = useState(null);
  const [card, setCard] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const snack = useSnackbar();
  useAxios();

  const requestStatus = (loading, errorMessage, cards, card = null) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

  const handleGetCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleGetMyCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getMyCards();
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleDeleteCard = useCallback(async (cardId) => {
    try {
      setLoading(true);
      await deleteCard(cardId);
      snack("success", "The business card has been successfully deleted");
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const value = useMemo(() => {
    return { isLoading, cards, card, error };
  }, [isLoading, cards, card, error]);

  return {
    value,
    handleGetCards,
    handleGetMyCards,
    handleDeleteCard,
  };
};

export default useCards;
