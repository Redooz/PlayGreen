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
exports.Bet = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const event_teams_entity_1 = require("../../event-teams/entities/event-teams.entity");
const typeorm_1 = require("typeorm");
const bet_enums_1 = require("../constants/bet.enums");
const user_bet_entity_1 = require("../../user/entities/user-bet.entity");
let Bet = class Bet {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, userBets: { required: true, type: () => [require("../../user/entities/user-bet.entity").UserBet] }, events: { required: true, type: () => [require("../../event-teams/entities/event-teams.entity").Events] }, bet_status: { required: true, type: () => String }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date }, deleted: { required: true, type: () => Boolean }, deleted_at: { required: true, type: () => Date } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Bet.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_bet_entity_1.UserBet, (bet) => bet.betOption),
    __metadata("design:type", Array)
], Bet.prototype, "userBets", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => event_teams_entity_1.Events, (event) => event.bet),
    __metadata("design:type", Array)
], Bet.prototype, "events", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: bet_enums_1.BetStatus.ACTIVE }),
    __metadata("design:type", String)
], Bet.prototype, "bet_status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Bet.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Bet.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], Bet.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Bet.prototype, "deleted_at", void 0);
Bet = __decorate([
    (0, typeorm_1.Entity)()
], Bet);
exports.Bet = Bet;
//# sourceMappingURL=bet.entity.js.map