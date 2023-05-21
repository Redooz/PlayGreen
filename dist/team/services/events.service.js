"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let EventsService = class EventsService {
    constructor(eventRepository) {
        this.eventRepository = eventRepository;
    }
    async findAll() {
        return await this.eventRepository.find();
    }
    async findAllByTeam(teamId) {
        const events = await this.eventRepository.find({
            where: {
                team: {
                    id: teamId,
                },
            },
        });
        return events;
    }
    async findAllByBet(betId) {
        const events = await this.eventRepository.find({
            where: {
                bet: {
                    id: betId,
                },
            },
        });
        return events;
    }
};
EventsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('EVENT_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], EventsService);
exports.EventsService = EventsService;
//# sourceMappingURL=events.service.js.map