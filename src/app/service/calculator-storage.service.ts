import { Injectable } from "@angular/core";
import { CalculationCard } from "../model/model";



const KEY_LIST = 'calculatorList';

@Injectable({ providedIn: 'root' })
export class CalculatorStorageService {

  constructor() {

  }

  setList(list: CalculationCard[]) {
    window.sessionStorage.setItem(KEY_LIST, JSON.stringify(list));
  }


  getList() {
    const list: CalculationCard[] = JSON.parse(window.sessionStorage.getItem(KEY_LIST) || '{[]}');

    if (!list) {
      return []
    }

    return list;
  }


}
