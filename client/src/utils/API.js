import axios from "axios";

export default {
  getRecipes: function() {
    return axios.get("/pizza/specialties");
  },

  getUserData: function() {
    return axios.get("/api/userData");
  },

  logout: function() {
    return axios.get("/api/logout");
  },

  getOrders: function() {
    return axios.get("/pizza/orders");
  }
};
