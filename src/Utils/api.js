import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api"; 

// Fetch all books
export const fetchBook = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/book`);
    return response.data;
  } catch (error) {
    console.error("Error fetching book:", error);
    return [];
  }
};

// Fetch book details by ID
export const fetchBookDetails = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/book/${id}`);
    return response.data.book;
  } catch (error) {
    console.error("Error fetching books:", error);
    return null;
  }
};

// Fetch books by city
export const fetchBookByCity = async (city) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cityResponse/${city}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching books in city:", error);
    return [];
  }
};

// User Signup
export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error("Signup failed:", error?.response?.data || error.message);
    return { error: error?.response?.data?.message || "Signup failed" };
  }
};

// User Login
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error?.response?.data || error.message);
    return { error: error?.response?.data?.message || "Login failed" };
  }
};
