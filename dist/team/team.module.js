"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamModule = void 0;
const common_1 = require("@nestjs/common");
const team_service_1 = require("./services/team.service");
const team_providers_1 = require("./entities/team.providers");
const team_controller_1 = require("./controllers/team.controller");
const event_teams_providers_1 = require("../event-teams/entities/event-teams.providers");
const event_service_1 = require("../event-teams/services/event.service");
const events_service_1 = require("./services/events.service");
const sport_bet_providers_1 = require("../bet/entities/sport-bet.providers");
const bet_service_1 = require("../bet/services/bet.service");
let TeamModule = class TeamModule {
};
TeamModule = __decorate([
    (0, common_1.Module)({
        providers: [
            ...team_providers_1.teamProviders,
            team_service_1.TeamService,
            ...event_teams_providers_1.eventProviders,
            event_service_1.EventService,
            events_service_1.EventsService,
            ...sport_bet_providers_1.betProviders,
            bet_service_1.BetService,
        ],
        controllers: [team_controller_1.TeamController],
    })
], TeamModule);
exports.TeamModule = TeamModule;
//# sourceMappingURL=team.module.js.map