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
exports.UsersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const register_user_dto_1 = require("../../auth/dto/register-user.dto");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../auth/guards/roles.guard");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../entities/user.entity");
const users_service_1 = require("../services/users.service");
const block_user_dto_1 = require("../dtos/block-user.dto");
const user_enums_1 = require("../constants/user.enums");
let UsersController = class UsersController {
    constructor(service) {
        this.service = service;
    }
    getUsers() {
        return this.service.findAll();
    }
    createUser(newUser) {
        return this.service.create(newUser);
    }
    getUserById(id) {
        return this.service.findById(id);
    }
    updateUserById(id, updatedUser) {
        return this.service.update(id, updatedUser);
    }
    deleteUserById(id) {
        return this.service.delete(id);
    }
    updateState(id, userStateDto) {
        return this.service.updateState(id, userStateDto);
    }
};
__decorate([
    (0, roles_decorator_1.Roles)(user_enums_1.Role.ADMIN),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all users' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Success',
        type: user_entity_1.User,
        isArray: true,
    }),
    openapi.ApiResponse({ status: 200, type: [require("../entities/user.entity").User] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(user_enums_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new user' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'User created', type: user_entity_1.User }),
    openapi.ApiResponse({ status: 201, type: require("../entities/user.entity").User }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_user_dto_1.RegisterAuthDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(user_enums_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Get a user by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success', type: user_entity_1.User }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden, Only admins are authorized',
    }),
    openapi.ApiResponse({ status: 200, type: require("../entities/user.entity").User }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(user_enums_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Update a user by ID' }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden, Only admins are authorized',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success', type: user_entity_1.User }),
    openapi.ApiResponse({ status: 200, type: require("../entities/user.entity").User }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateUserById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(user_enums_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a user by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success' }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden, Only admins are authorized',
    }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteUserById", null);
__decorate([
    (0, common_1.Patch)(':id/state'),
    (0, roles_decorator_1.Roles)(user_enums_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Change state of a specific user' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User updated', type: user_entity_1.User }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden, Only admins are authorized',
    }),
    openapi.ApiResponse({ status: 200, type: require("../entities/user.entity").User }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, block_user_dto_1.UserStateDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateState", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Users'),
    __metadata("design:paramtypes", [users_service_1.UserService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map