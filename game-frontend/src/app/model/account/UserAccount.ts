import { Account } from "./Account";
import { User } from "./user";

export interface UserAccount extends Account{
    user: User;
    ACCOUNT_TYPE: string;
    isSuspended: boolean;
}