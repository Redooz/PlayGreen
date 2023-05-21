"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.betProviders = void 0;
const bet_entity_1 = require("./bet.entity");
exports.betProviders = [
    {
        provide: 'BET_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(bet_entity_1.Bet),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=sport-bet.providers.js.map