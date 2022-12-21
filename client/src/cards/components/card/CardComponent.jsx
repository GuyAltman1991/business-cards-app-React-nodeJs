import React from "react";
import Card from "@mui/material/Card";

import { CardActionArea } from "@mui/material";

import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";

const CardComponent = () => {
  const card = {
    _id: "efsdf5651651sdf651sd",
    title: "card title sari",
    subtitle: "card sub sari",
    description: "descrip",
    phone: "0501154458",
    email: "sari@gmail.com",
    web: "https://www.sari.com",
    image: {
      url: "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg",
      alt: "card image",
    },
    address: {
      state: "",
      country: "israel",
      city: "ramat gan",
      street: "pinchas",
      houseNumber: "25",
      zip: "528487",
    },
    bizNumber: "11111",
    user_id: "615615151216fwsdfsdfsdf1231sdf",
  };

  return (
    <Card
      sx={{ minWidth: 280, maxWidth: 350, m: 2 }}
      square
      raised
      variant="outlined"
    >
      <CardActionArea>
        <CardHead image={card.image} />
        <CardBody card={card} />
      </CardActionArea>

      <CardActionBar />
    </Card>
  );
};

export default CardComponent;
