import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/Card";
import { CardContent, CardMedia, Divider, Typography } from "@mui/material";

const CardComponent = () => {
  return (
    <Card sx={{ width: 250, m: 2 }} square raised variant="outlined">
      <CardMedia
        component="img"
        height="140"
        image="https://cdn.pixabay.com/photo/2021/12/29/19/08/christmas-6902574_640.jpg"
      />

      <CardHeader
        sx={{ p: 2 }}
        title="Card Header"
        subheader="subtitle"
        component="h2"
      >
        forth
        <Typography sx={{ color: "gray" }}> Subtitle</Typography>
      </CardHeader>
      <Divider />
      <CardContent>
        <Typography sx={{ color: "gray" }}>
          <span style={{ fontWeight: "bold" }}> Phone:</span> 050-0000000
          <span style={{ fontWeight: "bold" }}> Address:</span> sirkin 3
          Givataim
          <span style={{ fontWeight: "bold" }}> Card Number:</span> 50000000
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
