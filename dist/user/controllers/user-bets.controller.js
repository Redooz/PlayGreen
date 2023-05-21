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
exports.UserBetsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const users_service_1 = require("../services/users.service");
const transactions_dto_1 = require("../dtos/transactions.dto");
let UserBetsController = class UserBetsController {
    constructor(userService) {
        this.userService = userService;
    }
    async createBet(req, transaction, betOption) {
        const user = req.user;
        return await this.userService.createUserBet(user.sub, transaction.amount, betOption);
    }
};
__decorate([
    (0, common_1.Post)(':bet_option'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a User Bet for an specific ber' }),
    (0, swagger_1.ApiParam)({ name: 'bet_option', description: 'Bet option number' }),
    (0, swagger_1.ApiBody)({ type: transactions_dto_1.TransactionMoneyDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Bet created' }),
    openapi.ApiResponse({ status: 201, type: require("../entities/user-bet.entity").UserBet }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('bet_option')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, transactions_dto_1.TransactionMoneyDto, Number]),
    __metadata("design:returntype", Promise)
], UserBetsController.prototype, "createBet", null);
UserBetsController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('User Bets'),
    (0, common_1.Controller)('user-bets'),
    __metadata("design:paramtypes", [users_service_1.UserService])
], UserBetsController);
exports.UserBetsController = UserBetsController;
//# sourceMappingURL=user-bets.controller.js.map