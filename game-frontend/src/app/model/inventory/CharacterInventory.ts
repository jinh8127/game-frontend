import { EquipItem } from "../item/EquipItem";

export interface CharacterInventory{
	id: number; 
	equipItems: EquipItem[]; 
	cashOwned: number; 
}

