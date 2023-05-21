"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("../config");
const user_entity_1 = require("../user/entities/user.entity");
const team_entity_1 = require("../team/entities/team.entity");
const event_teams_entity_1 = require("../event-teams/entities/event-teams.entity");
const bet_entity_1 = require("../bet/entities/bet.entity");
const transaction_entity_1 = require("../user/entities/transaction.entity");
const user_bet_entity_1 = require("../user/entities/user-bet.entity");
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: (configService) => {
            const { host, name, password, port, user } = configService.mysql;
            const dataSource = new typeorm_1.DataSource({
                type: 'mysql',
                host: host,
                port: port,
                username: user,
                password: password,
                database: name,
                entities: [user_entity_1.User, transaction_entity_1.UserTransaction, user_bet_entity_1.UserBet, bet_entity_1.Bet, team_entity_1.Team, event_teams_entity_1.Events],
                synchronize: false,
            });
            return dataSource.initialize();
        },
        inject: [config_1.default.KEY],
    },
];
//# sourceMappingURL=database.providers.js.map