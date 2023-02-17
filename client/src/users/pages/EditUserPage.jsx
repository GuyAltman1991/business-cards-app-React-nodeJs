import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import UserForm from "../components/UserForm";
import useForm from "../../forms/hooks/useForm";
import useUsers from "../hooks/useUsers";
import initialSignupForm from "../../users/helpers/initialForms/initialSignupForm";
import signupSchema from "../models/joi-schema/signupSchema";
import { Container } from "@mui/material";
import normalizeUser from "../helpers/normalization/normalizeUser";
import mapUserToModel from "../helpers/normalization/mapUserToModel";

const EditUserPage = () => {
  const { userId } = useParams();
  const {
    handleGetUser,
    handleUpdateUser,
    value: { user },
  } = useUsers();

  const { value, ...rest } = useForm(initialSignupForm, signupSchema, () => {
    handleUpdateUser(user._id, {
      ...mapUserToModel({ ...value.data }),
      bizNumber: user.bizNumber,
      user_id: user._id,
    });
  });

  useEffect(() => {
    handleGetUser(userId).then((data) => {
      if (user._id !== data._id) return Navigate(ROUTES.CARDS);
      const modeledUser = mapUserToModel(data);
      rest.setData(modeledUser);
    });
  }, []);

  return (
    <Container>
      <UserForm
        title="Edit user info"
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
