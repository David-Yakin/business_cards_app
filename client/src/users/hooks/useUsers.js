import { useState, useCallback } from "react";
import useAxios from "../../hooks/useAxios";
import { login } from "../services/usersApiService";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import { useUser } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

const useUsers = () => {
  const [users, setUsers] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return {
    isLoading,
    error,
    user,
    users,
    handleLogin,
  };
};

export default useUsers;
