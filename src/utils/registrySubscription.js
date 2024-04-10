const axios = require("axios");
require('dotenv').config();

module.exports = {
    subscribeToApiGateway: async () => {
        // Order
        try {
            const response = await axios({
                method: "POST",
                baseURL: `http://${process.env.GATEWAY_HOST}:${process.env.GATEWAY_PORT}`,
                url: `/registry/services`,
                data: {
                    serviceIdentifier: "monitoring-service",
                    serviceLabel: "Service monitoring",
                    host: process.env.HOST,
                    port: process.env.PORT,
                    entrypointUrl: "/api/monitoring",
                    redirectUrl: "/api/monitoring",
                    routeProtections: [
                        // Orders
                        { methods: ["GET"], route: "/", roles: ["admin", "technician"] },
                    ]
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
}