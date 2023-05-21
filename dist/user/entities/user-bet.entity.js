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
exports.UserBet = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const bet_entity_1 = require("../../bet/entities/bet.entity");
const transaction_entity_1 = require("./transaction.entity");
const typeorm_1 = require("typeorm");
let UserBet = class UserBet {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, betOption: { required: true, type: () => require("../../bet/entities/bet.entity").Bet }, state: { required: true, type: () => String }, transaction: { required: true, type: () => require("./transaction.entity").UserTransaction }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date }, deleted: { required: true, type: () => Boolean }, deleted_at: { required: true, type: () => Date } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserBet.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bet_entity_1.Bet),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", bet_entity_1.Bet)
], UserBet.prototype, "betOption", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserBet.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => transaction_entity_1.UserTransaction, (userTransaction) => userTransaction.user_bets),
    __metadata("design:type", transaction_entity_1.UserTransaction)
], UserBet.prototype, "transaction", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], UserBet.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], UserBet.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], UserBet.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], UserBet.prototype, "deleted_at", void 0);
UserBet = __decorate([
    (0, typeorm_1.Entity)()
], UserBet);
exports.UserBet = UserBet;
//# sourceMappingURL=user-bet.entity.js.map