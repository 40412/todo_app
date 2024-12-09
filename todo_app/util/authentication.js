import axios from "axios";

export const createNewUser = async (email, password) => {
    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
        {
            email: email,
            password: password,
            returnSecureToken: true
        });
        return response.data;
};

export const login = async (email, password) => {
    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API_KEY, 
        {
            email: email,
            password: password,
            returnSecureToken: true
        });
        return response.data;
};