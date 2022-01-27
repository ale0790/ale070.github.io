import { Component, OnInit } from '@angular/core';
import { CalculationCard } from '../model/model';
import { CalculatorStorageService } from '../service/calculator-storage.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {




  card: CalculationCard;

  newCard: CalculationCard;

  constructor(private _calculatorService: CalculatorStorageService) { }


  ngOnInit(): void {
    this.card = this.createCalculationCard();
  }


  private createCalculationCard() {

    let item = new CalculationCard();


    item.oddTeamOne = 0;
    item.oddTeamTwo = 0;
    item.valueBetTeamOne = 0;
    item.valueBetTeamTwo = 0;

    item.teamOne = "Team one";
    item.teamTwo = "Team two";


    return item;
  }



}
