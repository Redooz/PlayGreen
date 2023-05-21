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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_enums_1 = require("../constants/user.enums");
const transaction_service_1 = require("./transaction.service");
const transactions_enums_1 = require("../constants/transactions.enums");
const user_bet_entity_1 = require("../entities/user-bet.entity");
const bet_service_1 = require("../../bet/services/bet.service");
const userBet_service_1 = require("./userBet.service");
let UserService = class UserService {
    constructor(userRepository, transactionService, betService, userBetService) {
        this.userRepository = userRepository;
        this.transactionService = transactionService;
        this.betService = betService;
        this.userBetService = userBetService;
    }
    async findAll() {
        return await this.userRepository.find();
    }
    async findById(id) {
        const user = await this.userRepository.findOne({
            where: {
                id: id,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async findByEmail(email) {
        const user = await this.userRepository.findOne({
            where: {
                email: email,
            },
        });
        return user;
    }
    async create(user) {
        const newUser = this.userRepository.create(user);
        return await this.userRepository.save(newUser);
    }
    async update(id, updatedUser) {
        const user = await this.findById(id);
        Object.assign(user, updatedUser);
        return await this.userRepository.save(user);
    }
    async delete(id) {
        const user = await this.findById(id);
        user.deleted = true;
        await this.userRepository.softDelete(user);
    }
    async updateState(id, blockUserDto) {
        const user = await this.findById(id);
        if (user.role === user_enums_1.Role.ADMIN) {
            throw new common_1.BadRequestException('Blocking admins is not allowed');
        }
        user.user_state = blockUserDto.state;
        return await this.userRepository.save(user);
    }
    async getAllTransactions(id) {
        const user = await this.findById(id);
        const transactions = await this.transactionService.getAllTransactions(user);
        return transactions;
    }
    async getTransactionsById(id, category) {
        const user = await this.findById(id);
        const transactions = await this.transactionService.getTransactionByUserAndCategory(user, category);
        return transactions;
    }
    async depositMoney(id, amount) {
        const user = await this.findById(id);
        return await this.transactionService.createTransactionByUser(user, transactions_enums_1.TransactionCategory.DEPOSIT, amount);
    }
    async createUserBet(id, amount, betOption) {
        const user = await this.findById(id);
        const balance = await this.getBalanceById(id);
        if (balance.balance < amount) {
            throw new common_1.UnprocessableEntityException('Insufficient balance');
        }
        const transaction = await this.transactionService.createTransactionByUser(user, transactions_enums_1.TransactionCategory.BET, amount);
        const bet = await this.betService.findOne(betOption);
        const userBet = new user_bet_entity_1.UserBet();
        userBet.transaction = transaction;
        userBet.betOption = bet;
        return await this.userBetService.save(userBet);
    }
    async withdrawMoney(id, amount) {
        const user = await this.findById(id);
        const balance = await this.getBalanceById(id);
        if (balance.balance < amount) {
            throw new common_1.UnprocessableEntityException('Insufficient balance');
        }
        return this.transactionService.createTransactionByUser(user, transactions_enums_1.TransactionCategory.WITHDRAW, amount);
    }
    async getBalanceById(id) {
        const user = await this.findById(id);
        const balance = await this.transactionService.getBalanceByUser(user);
        const data = {
            user_id: user.id,
            balance: balance,
        };
        return data;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        transaction_service_1.TransactionService,
        bet_service_1.BetService,
        userBet_service_1.UserBetService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=users.service.js.map