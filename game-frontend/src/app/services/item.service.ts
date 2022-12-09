import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url:string="http://localhost:8080/api/v1/items"
  constructor() { }
}
