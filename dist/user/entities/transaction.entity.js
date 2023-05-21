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
exports.UserTransaction = void 0;
const openapi = require("@nestjs/swagger");
const user_entity_1 = require("./user.entity");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const user_bet_entity_1 = require("./user-bet.entity");
let UserTransaction = class UserTransaction {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, user: { required: true, type: () => require("./user.entity").User }, amount: { required: true, type: () => Number }, category: { required: true, type: () => String }, user_bets: { required: true, type: () => [require("./user-bet.entity").UserBet] }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date }, deleted: { required: true, type: () => Boolean }, deleted_at: { required: true, type: () => Date } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The unique identifier of the user transaction',
    }),
    __metadata("design:type", Number)
], UserTransaction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.transactions),
    (0, swagger_1.ApiProperty)({
        type: () => user_entity_1.User,
        description: 'The user associated with the transaction',
    }),
    __metadata("design:type", user_entity_1.User)
], UserTransaction.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: 100, description: 'The amount of the transaction' }),
    __metadata("design:type", Number)
], UserTransaction.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        example: 'deposit',
        description: 'The category of the transaction (deposit, withdraw, bet, winning)',
    }),
    __metadata("design:type", String)
], UserTransaction.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_bet_entity_1.UserBet, (userBet) => userBet.transaction),
    __metadata("design:type", Array)
], UserTransaction.prototype, "user_bets", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    (0, swagger_1.ApiProperty)({
        type: Date,
        description: 'The timestamp when the transaction was created',
    }),
    __metadata("design:type", Date)
], UserTransaction.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    (0, swagger_1.ApiProperty)({
        type: Date,
        description: 'The timestamp when the transaction was last updated',
    }),
    __metadata("design:type", Date)
], UserTransaction.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    (0, swagger_1.ApiProperty)({
        example: false,
        description: 'Indicates if the transaction has been deleted',
    }),
    __metadata("design:type", Boolean)
], UserTransaction.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp' }),
    (0, swagger_1.ApiProperty)({
        type: Date,
        description: 'The timestamp when the transaction was soft deleted',
    }),
    __metadata("design:type", Date)
], UserTransaction.prototype, "deleted_at", void 0);
UserTransaction = __decorate([
    (0, typeorm_1.Entity)()
], UserTransaction);
exports.UserTransaction = UserTransaction;
//# sourceMappingURL=transaction.entity.js.map