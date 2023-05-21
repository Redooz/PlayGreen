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
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const transaction_entity_1 = require("../entities/transaction.entity");
const transactions_enums_1 = require("../constants/transactions.enums");
let TransactionService = class TransactionService {
    constructor(transactionRepository) {
        this.transactionRepository = transactionRepository;
    }
    async getBalanceByUser(user) {
        const totalDepositsValue = await this.getTransactionValueByUser(user, transactions_enums_1.TransactionCategory.DEPOSIT);
        const totalWithdrawsValue = await this.getTransactionValueByUser(user, transactions_enums_1.TransactionCategory.WITHDRAW);
        const totalWinningsValue = await this.getTransactionValueByUser(user, transactions_enums_1.TransactionCategory.WINNING);
        const totalBetsValue = await this.getTransactionValueByUser(user, transactions_enums_1.TransactionCategory.BET);
        const balance = totalDepositsValue -
            totalWithdrawsValue +
            totalWinningsValue -
            totalBetsValue;
        return balance;
    }
    async getAllTransactions(user) {
        const transactions = await this.transactionRepository.find({
            where: {
                user: {
                    id: user.id,
                },
            },
        });
        return transactions;
    }
    async getTransactionByUserAndCategory(user, category) {
        const transactions = await this.transactionRepository.find({
            where: {
                category: category,
                user: {
                    id: user.id,
                },
            },
        });
        return transactions;
    }
    async getTransactionValueByUser(user, category) {
        const transactions = await this.transactionRepository.find({
            where: {
                user: {
                    id: user.id,
                },
                category: category,
            },
        });
        let totalValue = 0;
        transactions.forEach((deposit) => {
            totalValue += deposit.amount;
        });
        return totalValue;
    }
    async createTransactionByUser(user, type, value) {
        const transaction = new transaction_entity_1.UserTransaction();
        transaction.user = user;
        transaction.category = type;
        transaction.amount = value;
        return await this.transactionRepository.save(transaction);
    }
};
TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('TRANSACTION_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TransactionService);
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map