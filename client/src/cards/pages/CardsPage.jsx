import { useEffect } from "react";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

const CardsPage = () => {
  const { cards, error, isPending, handleGetCards } = useCards();

  useEffect(() => {
    handleGetCards();
  }, []);

  return (
    <Container>
      <PageHeader
        title="Cards"
        subtitle="Here you can find business cards from all categories"
      />

      <CardsFeedback isPanding={isPending} error={error} cards={cards} />
    </Container>
  );
};

export default CardsPage;
