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
exports.TransactionsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const user_entity_1 = require("../entities/user.entity");
const transactions_dto_1 = require("../dtos/transactions.dto");
const users_service_1 = require("../services/users.service");
const transaction_entity_1 = require("../entities/transaction.entity");
const transactions_enums_1 = require("../constants/transactions.enums");
const balance_response_1 = require("../responses/balance.response");
const user_enums_1 = require("../constants/user.enums");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const roles_guard_1 = require("../../auth/guards/roles.guard");
let TransactionsController = class TransactionsController {
    constructor(userService) {
        this.userService = userService;
    }
    depositMoney(req, deposit) {
        const user = req.user;
        return this.userService.depositMoney(user.sub, deposit.amount);
    }
    withdrawMoney(req, deposit) {
        const user = req.user;
        return this.userService.withdrawMoney(user.sub, deposit.amount);
    }
    getBalance(req) {
        const user = req.user;
        return this.userService.getBalanceById(user.sub);
    }
    getTransactions(req) {
        const user = req.user;
        return this.userService.getAllTransactions(user.sub);
    }
    getTransactionsByType(req, type) {
        const user = req.user;
        return this.userService.getTransactionsById(user.sub, type);
    }
    getBalanceById(id) {
        return this.userService.getBalanceById(id);
    }
    getTransactionsByUser(id) {
        return this.userService.getAllTransactions(id);
    }
    getTransactionsByUserAndType(userId, type) {
        return this.userService.getTransactionsById(userId, type);
    }
};
__decorate([
    (0, common_1.Post)('deposit'),
    (0, swagger_1.ApiOperation)({ summary: 'Deposit money into user account' }),
    (0, swagger_1.ApiBody)({ type: transactions_dto_1.TransactionMoneyDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success', type: user_entity_1.User }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }),
    openapi.ApiResponse({ status: 201, type: require("../entities/transaction.entity").UserTransaction }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, transactions_dto_1.TransactionMoneyDto]),
    __metadata("design:returntype", void 0)
], TransactionsController.prototype, "depositMoney", null);
__decorate([
    (0, common_1.Post)('withdraw'),
    (0, swagger_1.ApiOperation)({ summary: 'Withdraw money from user account' }),
    (0, swagger_1.ApiBody)({ type: transactions_dto_1.TransactionMoneyDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success', type: user_entity_1.User }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }),
    (0, swagger_1.ApiUnprocessableEntityResponse)({ description: 'Insufficient balance' }),
    openapi.ApiResponse({ status: 201, type: require("../entities/transaction.entity").UserTransaction }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, transactions_dto_1.TransactionMoneyDto]),
    __metadata("design:returntype", void 0)
], TransactionsController.prototype, "withdrawMoney", null);
__decorate([
    (0, common_1.Get)('balance'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user balance' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success', type: balance_response_1.BalanceResponse }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }),
    openapi.ApiResponse({ status: 200, type: require("../responses/balance.response").BalanceResponse }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TransactionsController.prototype, "getBalance", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all user transactions' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Success',
        type: transaction_entity_1.UserTransaction,
        isArray: true,
    }),
    openapi.ApiResponse({ status: 200, type: [require("../entities/transaction.entity").UserTransaction] }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "getTransactions", null);
__decorate([
    (0, common_1.Get)(':type'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user transactions by type' }),
    (0, swagger_1.ApiParam)({ name: 'type', enum: transactions_enums_1.TransactionCategory }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Success',
        type: transaction_entity_1.UserTransaction,
        isArray: true,
    }),
    openapi.ApiResponse({ status: 200, type: [require("../entities/transaction.entity").UserTransaction] }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "getTransactionsByType", null);
__decorate([
    (0, common_1.Get)('balance/:id'),
    (0, roles_decorator_1.Roles)(user_enums_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Get the balance of a specific user' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success', type: balance_response_1.BalanceResponse }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden, Only admins are authorized',
    }),
    openapi.ApiResponse({ status: 200, type: require("../responses/balance.response").BalanceResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TransactionsController.prototype, "getBalanceById", null);
__decorate([
    (0, common_1.Get)('transactions/:id'),
    (0, roles_decorator_1.Roles)(user_enums_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Get all user transactions by user ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Success',
        type: transaction_entity_1.UserTransaction,
        isArray: true,
    }),
    openapi.ApiResponse({ status: 200, type: [require("../entities/transaction.entity").UserTransaction] }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "getTransactionsByUser", null);
__decorate([
    (0, common_1.Get)(':id/:type'),
    (0, roles_decorator_1.Roles)(user_enums_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Get user transactions by type and user ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiParam)({ name: 'type', enum: transactions_enums_1.TransactionCategory }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Success',
        type: transaction_entity_1.UserTransaction,
        isArray: true,
    }),
    openapi.ApiResponse({ status: 200, type: [require("../entities/transaction.entity").UserTransaction] }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "getTransactionsByUserAndType", null);
TransactionsController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Transactions'),
    (0, common_1.Controller)('transaction'),
    __metadata("design:paramtypes", [users_service_1.UserService])
], TransactionsController);
exports.TransactionsController = TransactionsController;
//# sourceMappingURL=transactions.controller.js.map