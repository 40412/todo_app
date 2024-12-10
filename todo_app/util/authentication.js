import axios from "axios";
import * as SecureStore from "expo-secure-store";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const createNewUser = async (email, password) => {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  console.log(response.data);
  return response.data;
};

export const login = async (email, password) => {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const idToken = response.data.idToken;
  await storeToken(idToken);
  await SecureStore.setItemAsync("email", response.data.email);
  return response;
};

export const storeToken = async (token) => {
  try {
    await SecureStore.setItemAsync("authToken", token);
  } catch (error) {
    console.error("Error storing token:", error);
  }
};

export const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync("authToken");
    return token;
  } catch (error) {
    console.error("Error retrieving token:", error);
    return null;
  }
};

export const logout = async () => {
  try {
    await SecureStore.deleteItemAsync("token");
    await SecureStore.deleteItemAsync("email");
  } catch (error) {
    console.error("Error removing token", error);
  }
};
