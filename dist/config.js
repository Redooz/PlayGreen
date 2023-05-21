"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('config', () => {
    return {
        jwtSecret: process.env.JWT_SECRET,
        mysql: {
            host: process.env.MYSQL_HOST,
            port: parseInt(process.env.MYSQL_PORT, 10),
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            name: process.env.MYSQL_DB,
        },
    };
});
//# sourceMappingURL=config.js.map