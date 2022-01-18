import { Component, Input, OnInit } from '@angular/core';
import { CalculationCard } from 'src/app/model/model';

@Component({
  selector: 'app-calculation-card',
  templateUrl: './calculation-card.component.html',
  styleUrls: ['./calculation-card.component.css']
})
export class CalculationCardComponent implements OnInit {



  @Input() calculation: CalculationCard

  @Input() index: number

  @Input() title: string = "Team one x Team two"

  edit: boolean;




  oddMinimaTimeDois: number;
  valorMinimoApostaTimeDois: number;
  ganhoIndividualTimeUm: number;
  ganhoIndividualTimeDois: number;
  ganhoSeTimeUmVencer: number;
  ganhoSeTimeDoisVencer: number;
  totalAposta: number;

  constructor() {

  }

  ngOnInit(): void {

    this.calculate();

  }




  pipe(value: number) {

    return value > 999 ?  '1.0-0' : '1.0-2';
  }


  calculate() {


    this.ganhoIndividualTimeUm = (this.calculation.oddTeamOne * this.calculation?.valueBetTeamOne) - this.calculation?.valueBetTeamOne;

    this.oddMinimaTimeDois = parseFloat((1 / (this.calculation.oddTeamOne - 1) + 1).toFixed(4));

    this.valorMinimoApostaTimeDois = parseFloat((this.calculation.valueBetTeamOne / (this.oddMinimaTimeDois - 1)).toFixed(2))

    this.ganhoIndividualTimeDois = (this.calculation.oddTeamTwo * this.calculation.valueBetTeamTwo) - this.calculation?.valueBetTeamTwo;

    this.totalAposta = this.calculation.valueBetTeamOne + this.calculation.valueBetTeamTwo;

    this.ganhoSeTimeUmVencer = this.calculation.valueBetTeamOne + this.ganhoIndividualTimeUm - this.totalAposta;

    this.ganhoSeTimeDoisVencer = this.calculation.valueBetTeamTwo + this.ganhoIndividualTimeDois - this.totalAposta;

  }



  saveCard(){
    console.log("a");

    this.edit = false;

  }

  editCard(){

    console.log("b");

    this.edit = true;
  }


}
