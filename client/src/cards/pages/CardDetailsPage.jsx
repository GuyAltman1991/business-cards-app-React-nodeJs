import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import { useParams } from "react-router-dom";

import useCards from "../hooks/useCards";
import mapCardToModel from "../helpers/normalization/mapToModel";
import { Box, Card, Typography } from "@mui/material";

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
  console.log(cardData);
  return (
    <Container>
      <PageHeader
        title="Business Card Details"
        subtitle="Here you can find more details about the business"
      />

      <Card sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <Typography
            component="img"
            sx={{
              height: 233,
              width: 400,
              maxHeight: { xs: 233, md: 550 },
              maxWidth: { xs: 350, md: 450 },
            }}
            alt={cardData.imageAlt}
            src={cardData.imageUrl}
          />
          <Typography
            variant="h3"
            color="initial"
            sx={{ borderColor: "GrayText", borderStyle: "solid" }}
          >
            {cardData.title}
            <Typography> {cardData.subtitle}</Typography>{" "}
          </Typography>{" "}
          <Box sx={{ borderColor: "GrayText", borderStyle: "solid" }}>
            <Typography> email: {cardData.email}</Typography>
            <Typography> phone: {cardData.phone}</Typography>
            <Typography>
              {" "}
              address: {cardData.city} {cardData.street} {cardData.houseNumber}{" "}
            </Typography>
            <Typography> webUrl: {cardData.webUrl}</Typography>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default CardDetailsPage;
