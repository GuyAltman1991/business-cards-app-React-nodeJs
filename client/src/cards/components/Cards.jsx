import React from "react";
import CardComponent from "./card/CardComponent";
import { Grid, Typography } from "@mui/material";

const Cards = () => {
  const cards = [
    {
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
    },
    {
      _id: "efsdf5651651sdf651s3",
      title: "card title ishu",
      subtitle: "card sub ishu",
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
      bizNumber: "11112",
      user_id: "615615151216fwsdfsdfsdf1231sdf",
    },
    {
      _id: "efsdf5651651sdf651s4",
      title: "card title guy",
      subtitle: "card sub guy",
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
      bizNumber: "11113",
      user_id: "615615151216fwsdfsdfsdf1231sdf",
    },
  ];

  if (!cards.length)
    return (
      <Typography>
        {" "}
        Oops.. it seems there are no business card to display{" "}
      </Typography>
    );

  const handleCardDelete = (cards) => {
    console.log("you deleted card no: " + cards.bizNumber);
  };

  return (
    <Grid container spacing={2} pb={2}>
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={card._id}>
          {" "}
          <CardComponent
            card={card}
            handleCardDelete={() => handleCardDelete(card)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
