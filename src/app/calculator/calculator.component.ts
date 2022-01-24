import { Component, OnInit } from '@angular/core';
import { CalculationCard } from '../model/model';
import { CalculatorStorageService } from '../service/calculator-storage.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {




  cards: CalculationCard[] = [];

  newCard: CalculationCard;

  constructor(private _calculatorService: CalculatorStorageService) { }


  ngOnInit(): void {
    this.cards = this._calculatorService.getList();
  }


  newCalculationCard() {

    this.cards.push(this.createCalculationCard());

    this.addListToStorage();

  }



  addListToStorage = () => {

    this._calculatorService.setList(this.cards);

  }



  removeCard = (item: CalculationCard) => {

    var index = this.cards.indexOf(item);

    this.cards.splice(index, 1);

    this.addListToStorage();

  }

  private createCalculationCard() {

    let item = new CalculationCard();


    item.oddTeamOne = 2.37;
    item.oddTeamTwo = 3.9;
    item.valueBetTeamOne = 2500;
    item.valueBetTeamTwo = 2100;

    item.teamOne = "Team one";
    item.teamTwo = "Team two";


    return item;
  }



}