declare const _default: (() => {
    jwtSecret: string;
    mysql: {
        host: string;
        port: number;
        user: string;
        password: string;
        name: string;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    jwtSecret: string;
    mysql: {
        host: string;
        port: number;
        user: string;
        password: string;
        name: string;
    };
}>;
export default _default;
