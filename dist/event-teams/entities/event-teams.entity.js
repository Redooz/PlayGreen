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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const bet_entity_1 = require("../../bet/entities/bet.entity");
const team_entity_1 = require("../../team/entities/team.entity");
const typeorm_1 = require("typeorm");
let Events = class Events {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, bet: { required: true, type: () => require("../../bet/entities/bet.entity").Bet }, team: { required: true, type: () => require("../../team/entities/team.entity").Team }, odd: { required: true, type: () => Number }, result: { required: true, type: () => String }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date }, deleted: { required: true, type: () => Boolean }, deleted_at: { required: true, type: () => Date } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Events.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bet_entity_1.Bet, (bet) => bet.events),
    __metadata("design:type", bet_entity_1.Bet)
], Events.prototype, "bet", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => team_entity_1.Team, (team) => team.eventsTeams),
    __metadata("design:type", team_entity_1.Team)
], Events.prototype, "team", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Events.prototype, "odd", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Events.prototype, "result", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Events.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Events.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], Events.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Events.prototype, "deleted_at", void 0);
Events = __decorate([
    (0, typeorm_1.Entity)()
], Events);
exports.Events = Events;
//# sourceMappingURL=event-teams.entity.js.map