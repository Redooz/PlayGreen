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
exports.UpdateUserDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const user_enums_1 = require("../constants/user.enums");
class UpdateUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { first_name: { required: true, type: () => String, minLength: 2 }, last_name: { required: true, type: () => String, minLength: 2 }, phone: { required: true, type: () => String, minLength: 9 }, email: { required: true, type: () => String }, username: { required: true, type: () => String, minLength: 4 }, password: { required: true, type: () => String, minLength: 8 }, address: { required: true, type: () => String, minLength: 4 }, gender: { required: true, enum: require("../constants/user.enums").Gender }, birth_date: { required: true, type: () => Date }, country_id: { required: true, type: () => String, minLength: 2 }, city: { required: true, type: () => String }, document_id: { required: true, type: () => String } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'First name of the user', example: 'John' }),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last name of the user', example: 'Doe' }),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Phone number of the user',
        example: '123456789',
    }),
    (0, class_validator_1.MinLength)(9),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email of the user',
        example: 'test@example.com',
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Username of the user', example: 'johndoe' }),
    (0, class_validator_1.MinLength)(4),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Password of the user', example: 'password123' }),
    (0, class_validator_1.MinLength)(8),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Address of the user',
        example: '123 Main Street',
    }),
    (0, class_validator_1.MinLength)(4),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: user_enums_1.Gender,
        description: 'Gender of the user',
        example: user_enums_1.Gender.MALE,
    }),
    (0, class_validator_1.IsEnum)(user_enums_1.Gender),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Birth date of the user', example: '1990-01-01' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], UpdateUserDto.prototype, "birth_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Country ID of the user', example: 'US' }),
    (0, class_validator_1.Length)(2),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "country_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'City of the user', example: 'New York' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Document ID of the user',
        example: '1234567890',
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "document_id", void 0);
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update-user.dto.js.map