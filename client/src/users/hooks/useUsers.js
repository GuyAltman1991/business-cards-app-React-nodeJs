import { useState, useCallback, useMemo, useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import {
  getUsers,
  login,
  signup,
  getUserFromServer,
  editUser,
} from "../services/usersApiService";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import { useUser } from "../providers/UserProvider";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useSnackbar } from "../../providers/SnackbarProvider";

const useUsers = () => {
  const [users, setUsers] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [filteredUser, setFilter] = useState(null);
  const [searchParams] = useSearchParams();
  const snack = useSnackbar();

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    if (users) {
      setFilter(
        users.filter(
          (user) =>
            user.name.first.includes(query) ||
            user.name.last.includes(query) ||
            user.email.includes(query) ||
            String(user.isBusiness).includes(query)
        )
      );
    }
  }, [users, query]);

  const navigate = useNavigate();
  const { user, setUser, setToken } = useUser();

  useAxios();

  const requestStatus = useCallback(
    (loading, errorMessage, users, user = null) => {
      setLoading(loading);
      setUsers(users);
      setUser(user);
      setError(errorMessage);
    },
    [setUser]
  );

  const handleLogin = useCallback(async (user) => {
    try {
      const token = await login(user);
      setTokenInLocalStorage(token);
      setToken(token);
      const userFromLocalStorage = getUser();
      requestStatus(false, null, null, userFromLocalStorage);
      navigate(ROUTES.CARDS);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
  }, [setUser]);

  const handleSignup = useCallback(
    async (userFromClient) => {
      try {
        const normalizedUser = normalizeUser(userFromClient);
        await signup(normalizedUser);
        await handleLogin({
          email: userFromClient.email,
          password: userFromClient.password,
        });
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [requestStatus, handleLogin]
  );

  const handleUpdateUser = useCallback(async (userId, userFromClient) => {
    try {
      setLoading(true);
      const user = await editUser(userId, userFromClient);
      requestStatus(false, null, null, user);
      Navigate(ROUTES.MY_CARDS);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleGetUser = useCallback(async (userId) => {
    try {
      setLoading(true);
      const user = await getUserFromServer(userId);
      requestStatus(false, null, null, user);

      return user;
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const value = useMemo(
    () => ({ isLoading, error, user, users, filteredUser }),
    [isLoading, error, user, users, filteredUser]
  );
  return {
    value,
    handleLogin,
    handleLogout,
    handleSignup,
    handleGetUser,
    handleUpdateUser,
  };
};

export default useUsers;
