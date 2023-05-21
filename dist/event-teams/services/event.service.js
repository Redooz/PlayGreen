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
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const team_service_1 = require("../../team/services/team.service");
const bet_entity_1 = require("../../bet/entities/bet.entity");
const bet_service_1 = require("../../bet/services/bet.service");
let EventService = class EventService {
    constructor(eventRepository, teamService, betService) {
        this.eventRepository = eventRepository;
        this.teamService = teamService;
        this.betService = betService;
    }
    async getAll() {
        const events = await this.eventRepository.find();
        return events;
    }
    async createEvent(event, teamOption) {
        const team = await this.teamService.findById(teamOption);
        const newBet = new bet_entity_1.Bet();
        this.betService.create(newBet);
        const newEvent = await this.eventRepository.save({
            odd: event.odd,
            team: team,
            bet: newBet,
        });
        return newEvent;
    }
    async getEventById(id) {
        const event = await this.eventRepository.findOne({
            where: {
                id: id,
            },
        });
        if (!event) {
            throw new common_1.NotFoundException('Event not found');
        }
        return event;
    }
    async updateEvent(id, event) {
        const existingEvent = await this.getEventById(id);
        const updatedEvent = Object.assign(existingEvent, event);
        return this.eventRepository.save(updatedEvent);
    }
    async deleteEvent(id) {
        const event = await this.getEventById(id);
        await this.eventRepository.remove(event);
    }
};
EventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('EVENT_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        team_service_1.TeamService,
        bet_service_1.BetService])
], EventService);
exports.EventService = EventService;
//# sourceMappingURL=event.service.js.map