import { CharacterInventory } from "../inventory/CharacterInventory";
import { GameItem } from "./GameItem";

export interface EquipItem extends GameItem{
	ownerInventory: CharacterInventory; 
	levelReq: number; 
	strReq: number; 
	dexReq: number; 
	lukReq: number; 
	intReq: number; 
	strength: number; 
	dexterity: number; 
	luck: number; 
	intelligence: number; 
	physicalArmor: number; 
	magicArmor: number; 
}

