import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import { useParams } from "react-router-dom";

import useCards from "../hooks/useCards";
import mapCardToModel from "../helpers/normalization/mapToModel";
import { Box, Typography } from "@mui/material";

const CardDetailsPage = () => {
  const [cardData, setCardData] = useState("");
  const { cardId } = useParams();
  const { value, ...rest } = useCards();
  const { handleGetCard } = rest;

  useEffect(() => {
    handleGetCard(cardId).then((data) => {
      const modeledCard = mapCardToModel(data);
      setCardData(modeledCard);
    });
  }, []);

  return (
    <Container>
      <PageHeader
        title="Business Card Details"
        subtitle="Here you can find more details about the business"
      />
      <p>Details of business: {cardId}</p>

      <Box>
        <Typography variant="h3" color="initial">
          {cardData.title}
        </Typography>{" "}
        <Typography variant="h4"> {cardData.subtitle}</Typography>
        <Typography> {cardData.email}</Typography>
      </Box>
    </Container>
  );
};

export default CardDetailsPage;
