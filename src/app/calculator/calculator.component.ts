import { Component, OnInit } from '@angular/core';
import { CalculationCard } from '../model/model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {




  cards: CalculationCard[] = [];

  newCard: CalculationCard;

  constructor() { }


  ngOnInit(): void {

    this.newCalculationCard();

  }


  newCalculationCard() {
    this.cards.push(this.createCalculationCard());
  }



  private createCalculationCard() {

    let item = new CalculationCard();


    item.oddTeamOne = 2.37;
    item.oddTeamTwo = 3.9;
    item.valueBetTeamOne = 2500;
    item.valueBetTeamTwo = 2100;


    return item;
  }



}
