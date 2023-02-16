import React from "react";
import { useUser } from "../providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import UserForm from "../components/UserForm";
import useForm from "../../forms/hooks/useForm";
import useUsers from "../hooks/useUsers";
import initialSignupForm from "../../users/helpers/initialForms/initialSignupForm";
import signupSchema from "../models/joi-schema/signupSchema";
import { Container } from "@mui/material";

const EditUserPage = () => {
  const { handleSignup } = useUsers();
  const { value, ...rest } = useForm(
    initialSignupForm,
    signupSchema,
    handleSignup
  );
  const { user } = useUser();
  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container>
      <UserForm
        title="register form"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        setData={rest.setData}
        errors={value.errors}
        data={value.data}
      />
    </Container>
  );
};

export default EditUserPage;
