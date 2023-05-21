"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTeamsModule = void 0;
const common_1 = require("@nestjs/common");
const event_teams_providers_1 = require("./entities/event-teams.providers");
const event_controller_1 = require("./controllers/event.controller");
const event_service_1 = require("./services/event.service");
const team_providers_1 = require("../team/entities/team.providers");
const team_service_1 = require("../team/services/team.service");
const team_module_1 = require("../team/team.module");
const bet_module_1 = require("../bet/bet.module");
const sport_bet_providers_1 = require("../bet/entities/sport-bet.providers");
const bet_service_1 = require("../bet/services/bet.service");
let EventTeamsModule = class EventTeamsModule {
};
EventTeamsModule = __decorate([
    (0, common_1.Module)({
        imports: [team_module_1.TeamModule, bet_module_1.BetModule],
        providers: [
            ...event_teams_providers_1.eventProviders,
            event_service_1.EventService,
            ...team_providers_1.teamProviders,
            team_service_1.TeamService,
            ...sport_bet_providers_1.betProviders,
            bet_service_1.BetService,
        ],
        controllers: [event_controller_1.EventController],
    })
], EventTeamsModule);
exports.EventTeamsModule = EventTeamsModule;
//# sourceMappingURL=event-teams.module.js.map