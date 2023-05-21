import { Gender } from '../constants/user.enums';
export declare class UpdateUserDto {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    username: string;
    password: string;
    address: string;
    gender: Gender;
    birth_date: Date;
    country_id: string;
    city: string;
    document_id: string;
}
