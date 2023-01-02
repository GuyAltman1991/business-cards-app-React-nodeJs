import { CardContent, CardHeader, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import cardType from "../../models/types/cardType";

const CardBody = ({ card }) => {
  const { title, subtitle, phone, address } = card;
  const { street, houseNumber, city } = address;
  return (
    <CardContent>
      <CardHeader
        sx={{ p: 2 }}
        title={title}
        subheader={subtitle}
        component="h2"
      >
        forth
        <Typography sx={{ color: "gray" }}> Subtitle</Typography>
      </CardHeader>
      <Divider />

      <Box mt={1}>
        <Typography variant="body2" color="text.secondary">
          <Typography variant="subtitle" component="strong">
            {" "}
            Phone:{" "}
          </Typography>
          {phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Typography variant="subtitle" component="strong">
            {" "}
            Address:
          </Typography>
          {street} {houseNumber} {city}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          <Typography variant="subtitle" component="strong">
            Card Number:
          </Typography>{" "}
          50000000
        </Typography>{" "}
      </Box>
    </CardContent>
  );
};

CardBody.prototype = {
  card: cardType.isRequired,
};

export default CardBody;
