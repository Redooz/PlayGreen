"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventProviders = void 0;
const event_teams_entity_1 = require("./event-teams.entity");
exports.eventProviders = [
    {
        provide: 'EVENT_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(event_teams_entity_1.Events),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=event-teams.providers.js.map