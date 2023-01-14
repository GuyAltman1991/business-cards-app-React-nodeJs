import { useState } from "react";
import {
  changeLikeStatus,
  creactCard,
  deleteCard,
  editCard,
  getCard,
  getCards,
  getMyCards,
} from "../services/cardApiService";
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

  const handleGetCard = async (cardId) => {
    try {
      setPending(false);
      const card = getCard(cardId);
      requestStatus(false, null, null, card);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleGetMyCards = async () => {
    try {
      setPending(false);
      const cards = await getMyCards();

      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleCreateCard = async (cardFromClient) => {
    try {
      setPending(false);
      const card = await creactCard(cardFromClient);
      requestStatus(false, null, null, card);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleUpdateCard = async (cardFromClient) => {
    try {
      setPending(false);
      const card = await editCard(cardFromClient);
      requestStatus(false, null, null, card);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleDeleteCard = async (cardId) => {
    try {
      setPending(false);
      const card = await deleteCard(cardId);
      return card;
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleLikeCard = async (cardId) => {
    try {
      setPending(false);
      const card = await changeLikeStatus(cardId);
      const cards = await getCards();
      requestStatus(false, null, cards, card);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  return {
    cards,
    card,
    isPending,
    error,
    handleGetCards,
    handleGetMyCards,
    handleCreateCard,
    handleUpdateCard,
    handleDeleteCard,
    handleLikeCard,
    handleGetCard,
  };
};

export default useCards;
