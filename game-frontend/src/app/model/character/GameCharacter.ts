import { CharacterInventory } from "../inventory/CharacterInventory";
import { User } from "../user/User";

export interface GameCharacter{
	id: number; 
	characterName: string; 
	characterLevel: number; 
	user: User; 
	inventory: CharacterInventory; 
}

