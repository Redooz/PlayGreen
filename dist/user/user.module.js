"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const users_controller_1 = require("./controllers/users.controller");
const users_service_1 = require("./services/users.service");
const user_providers_1 = require("./entities/user.providers");
const database_module_1 = require("../database/database.module");
const profile_controller_1 = require("./controllers/profile.controller");
const user_bets_controller_1 = require("./controllers/user-bets.controller");
const transaction_providers_1 = require("./entities/transaction.providers");
const transaction_service_1 = require("./services/transaction.service");
const sport_bet_providers_1 = require("../bet/entities/sport-bet.providers");
const bet_service_1 = require("../bet/services/bet.service");
const user_bet_providers_1 = require("./entities/user-bet.providers");
const userBet_service_1 = require("./services/userBet.service");
const bet_module_1 = require("../bet/bet.module");
const transactions_controller_1 = require("./controllers/transactions.controller");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, bet_module_1.BetModule],
        controllers: [
            users_controller_1.UsersController,
            profile_controller_1.ProfileController,
            user_bets_controller_1.UserBetsController,
            transactions_controller_1.TransactionsController,
        ],
        providers: [
            ...user_providers_1.userProviders,
            users_service_1.UserService,
            ...transaction_providers_1.transactionProviders,
            transaction_service_1.TransactionService,
            ...sport_bet_providers_1.betProviders,
            bet_service_1.BetService,
            ...user_bet_providers_1.userBetProviders,
            userBet_service_1.UserBetService,
        ],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map