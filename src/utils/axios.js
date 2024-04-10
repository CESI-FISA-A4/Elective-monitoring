const axios = require('axios');
async function pingService(host, port, url) {
  try {
    const axiosInstance = axios.create({
      baseURL: `http://${host}:${port}`,
    });
    const response = await axiosInstance({
      // method: "TRACE",
      url: `${url}/ping`
    });
    return true;
  } catch (error) {
    // console.error(error);
    return false;
  }
}

module.exports = {
  pingAuthentification: async (req, res) => {
    let isAvailable;
    const HOST = process.env.AUTHENTIFICATION_HOST;
    const PORT = process.env.AUTHENTIFICATION_PORT;
    const ENDPOINT = `/api/auth`;
    try {
      isAvailable = await pingService(HOST, PORT, ENDPOINT);
    } catch (error) {
      isAvailable = false;
    }
    return { name: "authentification", host: HOST, port: PORT, isAvailable, endpoint: ENDPOINT }
  },
  pingCompte: async (req, res) => {
    let isAvailable;
    const HOST = process.env.ACCOUNT_HOST;
    const PORT = process.env.ACCOUNT_PORT;
    const ENDPOINT = `/api/accounts`;
    try {
      isAvailable = await pingService(HOST, PORT, ENDPOINT);
    } catch (error) {
      isAvailable = false;
    }
    return { name: "compte", host: HOST, port: PORT, isAvailable, endpoint: ENDPOINT }
  },
  pingCommande: async (req, res) => {
    let isAvailable;
    const HOST = process.env.ORDER_HOST;
    const PORT = process.env.ORDER_PORT;
    const ENDPOINT = `/api/orders`;
    try {
      isAvailable = await pingService(HOST, PORT, ENDPOINT);
    } catch (error) {
      isAvailable = false;
    }
    return { name: "commande", host: HOST, port: PORT, isAvailable, endpoint: ENDPOINT }
  },
  pingMenu: async (req, res) => {
    let isAvailable;
    const HOST = process.env.ARTICLE_HOST;
    const PORT = process.env.ARTICLE_PORT;
    const ENDPOINT = `/api/articles/menus`;
    try {
      isAvailable = await pingService(HOST, PORT, ENDPOINT);
    } catch (error) {
      isAvailable = false;
    }
    return { name: "menu", host: HOST, port: PORT, isAvailable, endpoint: ENDPOINT }
  },
  pingProduct: async (req, res) => {
    let isAvailable;
    const HOST = process.env.ARTICLE_HOST;
    const PORT = process.env.ARTICLE_PORT;
    const ENDPOINT = `/api/articles/products`;
    try {
      isAvailable = await pingService(HOST, PORT, ENDPOINT);
    } catch (error) {
      isAvailable = false;
    }
    return { name: "products", host: HOST, port: PORT, isAvailable, endpoint: ENDPOINT }
  },
  pingRestaurant: async (req, res) => {
    let isAvailable;
    const HOST = process.env.RESTAURANTS_HOST;
    const PORT = process.env.RESTAURANTS_PORT;
    const ENDPOINT = `/api/restaurants`;
    try {
      isAvailable = await pingService(HOST, PORT, ENDPOINT);
    } catch (error) {
      isAvailable = false;
    }
    return { name: "restaurant", host: HOST, port: PORT, isAvailable, endpoint: ENDPOINT }
  },
  pingStatistique: async (req, res) => {
    let isAvailable;
    const HOST = process.env.STATISTICS_HOST;
    const PORT = process.env.STATISTICS_PORT;
    const ENDPOINT =`/api/statistics`;
    try {
      isAvailable = await pingService(HOST, PORT, ENDPOINT);
    } catch (error) {
      isAvailable = false;
    }
    return { name: "statistique", host: HOST, port: PORT, isAvailable, endpoint: ENDPOINT }
  },
  pingGit: async (req, res) => {
    let isAvailable;
    const HOST = process.env.GIT_HOST;
    const PORT = process.env.GIT_PORT;
    const ENDPOINT = `/api/git`;
    try {
      isAvailable = await pingService(HOST, PORT, ENDPOINT);
    } catch (error) {
      isAvailable = false;
    }
    return { name: "git", host: HOST, port: PORT, isAvailable, endpoint: ENDPOINT }
  }
}
