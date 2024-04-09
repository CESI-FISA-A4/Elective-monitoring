const axios = require('axios');
const HOST = process.env.HOST;
const axiosInstances = {};
async function pingService(host, port, url) {
  try {
    if (!(`${host}:${port}` in axiosInstances)) {
      axiosInstances[`${host}:${port}`] = axios.create({
        baseURL: `http://${host}:${port}`,
      });
    }
    const axiosInstance = axiosInstances[`${host}:${port}`]
    const response = await axiosInstance({
      // method: "TRACE",
      url: url
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
    try {
      isAvailable = await pingService(HOST, 3000, `/api/auth`);
    } catch (error) {
      isAvailable = false;
    }
    return { name: "authentification", host: HOST, port: 3000, isAvailable, endpoint: `/api/auth` }
  },
  pingCompte: async (req, res) => {
    let isAvailable;
    try {
      isAvailable = await pingService(HOST, 3001, `/api/accounts`);
    } catch (error) {
      isAvailable = false;
    }
    return { name: "compte", host: HOST, port: 3001, isAvailable, endpoint: `/api/accounts` }
  },
  pingCommande: async (req, res) => {
    let isAvailable;
    try {
      isAvailable = await pingService(HOST, 3002, `/api/orders`);
    } catch (error) {
      isAvailable = false;
    }
    return { name: "commande", host: HOST, port: 3002, isAvailable, endpoint: `/api/orders` }
  },
  pingMenu: async (req, res) => {
    let isAvailable;
    try {
      isAvailable = await pingService(HOST, 3003, `/api/articles/menus`);
    } catch (error) {
      isAvailable = false;
    }
    return { name: "menu", host: HOST, port: 3003, isAvailable, endpoint: `/api/articles/menus` }
  },
  pingProduct: async (req, res) => {
    let isAvailable;
    try {
      isAvailable = await pingService(HOST, 3003, `/api/articles/products`);
    } catch (error) {
      isAvailable = false;
    }
    return { name: "products", host: HOST, port: 3003, isAvailable, endpoint: `/api/articles/products` }
  },
  pingRestaurant: async (req, res) => {
    let isAvailable;
    try {
      isAvailable = await pingService(HOST, 3005, `/api/restaurants`);
    } catch (error) {
      isAvailable = false;
    }
    return { name: "restaurant", host: HOST, port: 3005, isAvailable, endpoint: `/api/restaurants` }
  },
  pingStatistique: async (req, res) => {
    let isAvailable;
    try {
      isAvailable = await pingService(HOST, 3006, `/api/statistics`);
    } catch (error) {
      isAvailable = false;
    }
    return { name: "statistique", host: HOST, port: 3006, isAvailable, endpoint: `/api/statistics` }
  },
  pingCommande: async (req, res) => {
    let isAvailable;
    try {
      isAvailable = await pingService(HOST, 3007, `/api/orders`);
    } catch (error) {
      isAvailable = false;
    }
    return { name: "monitoring", host: HOST, port: 3007, isAvailable, endpoint: `/api/orders` }
  },
  pingGit: async (req, res) => {
    let isAvailable;
    try {
      isAvailable = await pingService(HOST, 3008, `/api/git`);
    } catch (error) {
      isAvailable = false;
    }
    return { name: "git", host: HOST, port: 3008, isAvailable, endpoint: `/api/git` }
  }
}
