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
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("../services/auth.service");
const register_user_dto_1 = require("../dto/register-user.dto");
const passport_1 = require("@nestjs/passport");
const login_auth_dto_1 = require("../dto/login-auth.dto");
let AuthController = class AuthController {
    constructor(service) {
        this.service = service;
    }
    registerUser(userObject) {
        return this.service.register(userObject);
    }
    loginUser(req) {
        return this.service.generateJWT(req.user);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Register a new user' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'User registered successfully' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request' }),
    (0, swagger_1.ApiBody)({ type: register_user_dto_1.RegisterAuthDto }),
    (0, common_1.Post)('register'),
    openapi.ApiResponse({ status: 201, type: require("../../user/entities/user.entity").User }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_user_dto_1.RegisterAuthDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "registerUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Authenticate and log in a user' }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local')),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User logged in successfully' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }),
    (0, swagger_1.ApiBody)({ type: login_auth_dto_1.LoginAuthDto }),
    (0, common_1.Post)('login'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "loginUser", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map