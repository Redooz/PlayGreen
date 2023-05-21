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
exports.TeamService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let TeamService = class TeamService {
    constructor(teamRepository) {
        this.teamRepository = teamRepository;
    }
    async findAll() {
        return this.teamRepository.find();
    }
    async findById(id) {
        const team = await this.teamRepository.findOne({
            where: {
                id,
            },
        });
        if (!team) {
            throw new common_1.NotFoundException('Team not found');
        }
        return team;
    }
    async createTeam(teamDto) {
        const team = this.teamRepository.create(teamDto);
        return this.teamRepository.save(team);
    }
    async getTeamById(id) {
        const team = await this.teamRepository.findOne({
            where: {
                id: id,
            },
        });
        if (!team) {
            throw new common_1.NotFoundException('Team not found');
        }
        return team;
    }
    async updateTeam(id, teamDto) {
        const team = await this.getTeamById(id);
        Object.assign(team, teamDto);
        return this.teamRepository.save(team);
    }
    async deleteTeam(id) {
        const team = await this.getTeamById(id);
        await this.teamRepository.remove(team);
    }
};
TeamService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('TEAM_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TeamService);
exports.TeamService = TeamService;
//# sourceMappingURL=team.service.js.map