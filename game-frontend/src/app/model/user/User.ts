import { UserAccount } from "../account/UserAccount";
import { GameCharacter } from "../character/GameCharacter";


export interface User{
	id: number; 
	userAccount: UserAccount; 
	userFirstName: string; 
	userLastName: string; 
	userEmail: string; 
	dateOfBirth: string; 
	characters: GameCharacter[]; 
}
