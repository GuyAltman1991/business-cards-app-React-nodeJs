import React from "react";
import PageHeader from "../../components/PageHeader";
import {
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useUser } from "../providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

const UserProfilePage = () => {
  const { user } = useUser();

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;
  return (
    <Container>
      <PageHeader
        title="User Info"
        subtitle="here you can find more details about the user"
      />

      <List component="nav" aria-label="mailbox folders">
        <ListItem>
          <ListItemText primary={user._id} />
        </ListItem>
        <Divider />
        <ListItem divider>
          <ListItemText primary={user.isAdmin ? "Admin" : "not admin"} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={user.isBusiness ? "Business user" : "not Business user"}
          />
        </ListItem>
        <Divider light />
      </List>
    </Container>
  );
};

export default UserProfilePage;
