import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import { useParams } from "react-router-dom";

import useCards from "../hooks/useCards";
import mapCardToModel from "../helpers/normalization/mapToModel";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

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

      <Card sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <CardMedia
            component="img"
            sx={{
              mt: 3,
              height: 300,
              width: 400,
              maxHeight: { xs: 233, md: 550 },
              maxWidth: { xs: 350, md: 450 },
            }}
            alt={cardData.imageAlt}
            src={cardData.imageUrl}
          />

          <CardContent>
            <CardHeader
              title={cardData.title}
              subheader={cardData.subtitle}
              sx={{ p: 0, mb: 1 }}
            />
            <Divider />
            <Box mt={1}>
              <Typography variant="body2" color="text.secondary">
                <Typography variant="subtitle1" component="strong">
                  Phone:{" "}
                </Typography>
                {cardData.phone}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Address: </strong>
                {cardData.street} {cardData.houseNumber} {cardData.city}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Card Number: </strong> {cardData.bizNumber}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Email: </strong> {cardData.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>webUrl: </strong> {cardData.webUrl}
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
};

export default CardDetailsPage;
