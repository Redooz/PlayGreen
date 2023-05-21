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
exports.TeamController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const team_service_1 = require("../services/team.service");
const swagger_1 = require("@nestjs/swagger");
const roles_guard_1 = require("../../auth/guards/roles.guard");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const team_entity_1 = require("../entities/team.entity");
const team_dto_1 = require("../dtos/team.dto");
const user_enums_1 = require("../../user/constants/user.enums");
let TeamController = class TeamController {
    constructor(teamService) {
        this.teamService = teamService;
    }
    async getTeams() {
        return this.teamService.findAll();
    }
    async createTeam(teamDto) {
        return this.teamService.createTeam(teamDto);
    }
    async getTeamById(id) {
        return this.teamService.getTeamById(id);
    }
    async updateTeam(id, teamDto) {
        return this.teamService.updateTeam(id, teamDto);
    }
    async deleteTeam(id) {
        return this.teamService.deleteTeam(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all teams' }),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        description: 'Returns an array of all teams',
        type: team_entity_1.Team,
        isArray: true,
    }),
    openapi.ApiResponse({ status: 200, type: [require("../entities/team.entity").Team] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "getTeams", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(user_enums_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new team' }),
    (0, swagger_1.ApiBody)({ type: team_dto_1.CreateTeamDto }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Team successfully created',
        type: team_entity_1.Team,
    }),
    openapi.ApiResponse({ status: 201, type: require("../entities/team.entity").Team }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [team_dto_1.CreateTeamDto]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "createTeam", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get team by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Team ID' }),
    (0, swagger_1.ApiOkResponse)({ status: 200, description: 'The found team', type: team_entity_1.Team }),
    openapi.ApiResponse({ status: 200, type: require("../entities/team.entity").Team }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "getTeamById", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Roles)(user_enums_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Update team by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Team ID' }),
    (0, swagger_1.ApiBody)({ type: team_dto_1.UpdateTeamDto }),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        description: 'Team successfully updated',
        type: team_entity_1.Team,
    }),
    openapi.ApiResponse({ status: 200, type: require("../entities/team.entity").Team }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, team_dto_1.UpdateTeamDto]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "updateTeam", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(user_enums_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Delete team by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Team ID' }),
    (0, swagger_1.ApiNoContentResponse)({
        status: 204,
        description: 'Team successfully deleted',
    }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "deleteTeam", null);
TeamController = __decorate([
    (0, common_1.Controller)('team'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiTags)('Teams'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [team_service_1.TeamService])
], TeamController);
exports.TeamController = TeamController;
//# sourceMappingURL=team.controller.js.map