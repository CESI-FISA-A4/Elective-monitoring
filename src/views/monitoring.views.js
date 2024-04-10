const HOST = process.env.HOST;
const { pingAuthentification, pingCompte, pingMenu, pingProduct, pingRestaurant, pingStatistique, pingCommande, pingGit } = require("../utils/axios")

module.exports = {
  getAvailable: async (req, res) => {
    const rep = await Promise.all([
      pingAuthentification(),
      pingCommande(),
      pingCompte(),
      pingGit(),
      pingMenu(),
      pingProduct(),
      pingRestaurant(),
      pingStatistique()
    ]);
    return rep;
  }
}