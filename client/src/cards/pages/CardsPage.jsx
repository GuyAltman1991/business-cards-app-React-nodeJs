import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import { getCards } from "../services/cardApiService";
import CardsFeedback from "../components/CardsFeedback";

const CardsPage = () => {
  const [cards, setCards] = useState(null);
  const [ispending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setPending(true);
    getCards()
      .then((data) => {
        setPending(false);
        setError(null);
        setCards(data);
      })
      .catch((error) => {
        setPending(false);
        setError(error);
      });
  }, []);

  return (
    <Container>
      <PageHeader
        title="Cards"
        subtitle="here you can find business cards from all categories"
      />

      <CardsFeedback ispending={ispending} error={error} cards={cards} />
    </Container>
  );
};

export default CardsPage;
