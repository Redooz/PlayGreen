import { UserTransaction } from './transaction.entity';
export declare class User {
    id: number;
    role: string;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    username: string;
    password: string;
    address: string;
    gender: string;
    birth_date: Date;
    country_id: string;
    city: string;
    document_id: string;
    user_state: string;
    transactions: UserTransaction[];
    created_at: Date;
    updated_at: Date;
    deleted: boolean;
    deleted_at: Date;
}
