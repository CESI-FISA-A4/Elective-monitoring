const { getAvailable } = require("../views/monitoring.views");

const monitoringRoutes = function (instance, opts, next) {
  instance.get('/', getAvailable);
  next();
};

module.exports = monitoringRoutes;