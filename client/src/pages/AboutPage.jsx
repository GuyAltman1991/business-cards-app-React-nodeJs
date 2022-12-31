import { Container } from "@mui/system";
import React from "react";
import PageHeader from "../components/PageHeader";
import { Grid } from "@mui/material";

const AboutPage = () => {
  return (
    <Container>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application
"
      />

      <Grid container spacing={2}>
        <Grid item xs={12} md={8} alignSelf="center">
          repudiandae saepe animi ipsum amet, quisquam quae, cupiditate, nobis
          itaque quo. Nulla dignissimos corporis quas veritatis, ducimus natus.
          Rerum ducimus fuga sapiente dolorum voluptate perspiciatis temporibus.
          Odio facere fugiat voluptatum tempora repellat nesciunt corporis
          architecto, molestias earum sit quibusdam excepturi blanditiis aliquid
          alias dicta. Necessitatibus exercitationem eaque facilis! Et provident
          voluptas dignissimos nesciunt numquam neque illum quo consequatur quam
          accusamus magnam totam autem aliquid sed laudantium similique, dolores
          distinctio debitis ipsum pariatur quae nemo? Blanditiis sunt nostrum
          ipsam? Molestias soluta recusandae assumenda adipisci, possimus
          veritatis placeat eius doloremque sed odit animi, dicta aliquid quasi.
          Magnam deleniti impedit explicabo accusamus molestiae, ad optio, ex
          tenetur dolorum pariatur similique rerum. Sint itaque amet fugiat quo,
          provident consectetur voluptate nemo quis voluptatibus ipsum aliquid
          ex aperiam debitis expedita. Eos. Tenetur nostrum dignissimos iure
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <img src="/assets/images/card.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
