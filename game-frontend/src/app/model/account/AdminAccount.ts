import { Account } from "./Account";

export interface AdminAccount extends Account{
    ACCOUNT_TYPE: string;
}