"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userBetProviders = void 0;
const user_bet_entity_1 = require("./user-bet.entity");
exports.userBetProviders = [
    {
        provide: 'USER_BET_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(user_bet_entity_1.UserBet),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=user-bet.providers.js.map