"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamProviders = void 0;
const team_entity_1 = require("./team.entity");
exports.teamProviders = [
    {
        provide: 'TEAM_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(team_entity_1.Team),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=team.providers.js.map