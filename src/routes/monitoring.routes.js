const { getAvailable } = require("../views/order.views");

const monitoringRoutes = function (instance, opts, next) {
  instance.get('/', getAvailable);
  next();
};

module.exports = monitoringRoutes;