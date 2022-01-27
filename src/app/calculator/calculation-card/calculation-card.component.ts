import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, of, Subject, fromEvent, Subscription } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CalculationCard, SimulacaoOdd } from 'src/app/model/model';

@Component({
  selector: 'app-calculation-card',
  templateUrl: './calculation-card.component.html',
  styleUrls: ['./calculation-card.component.css']
})
export class CalculationCardComponent implements AfterViewInit, OnInit {



  @Input() calculation: CalculationCard

  @ViewChild('teamOne') teamOneElRef: ElementRef;

  @ViewChild('teamTwo') teamTwoElRef: ElementRef;

  @ViewChild('oddTeamOne') oddTeamOneElRef: ElementRef;

  @ViewChild('oddTeamTwo') oddTeamTwoElRef: ElementRef;

  @ViewChild('betTeamOne') valueBetTeamOneElRef: ElementRef;

  @ViewChild('betTeamTwo') valueBetTeamTwoElRef: ElementRef;


  teamOne: Subscription;

  teamTwo: Subscription;

  oddTeamOne: Subscription;

  oddTeamTwo: Subscription;

  valueBetTeamTwo: Subscription;

  valueBetTeamOne: Subscription;


  oddMinimaTimeDois: number = 0;
  valorMinimoApostaTimeDois: number = 0;
  ganhoIndividualTimeUm: number = 0;
  ganhoIndividualTimeDois: number = 0;
  ganhoSeTimeUmVencer: number = 0;
  ganhoSeTimeDoisVencer: number = 0;
  totalAposta: number = 0;


  multiplicadorOdd: number = 0.25;

  rowsOdd: number = 7;


  listOddSimulacao: SimulacaoOdd[];


  constructor(private titleService: Title) {



  }
  ngOnInit(): void {
    this.buildSimulacaoOdd();
  }

  ngAfterViewInit(): void {

    this.calculate();

    this.teamOne = fromEvent(this.teamOneElRef.nativeElement, 'keyup').pipe(debounceTime(300)).subscribe(value => {
      this.calculate()
      this.buildTitle();
    }
    );

    this.teamTwo = fromEvent(this.teamTwoElRef.nativeElement, 'keyup').pipe(debounceTime(300)).subscribe(value => {

      this.calculate()
      this.buildTitle()


    }
    );

    this.oddTeamOne = fromEvent(this.oddTeamOneElRef.nativeElement, 'keyup').pipe(debounceTime(300)).subscribe(value =>


      this.calculate()
    );

    this.oddTeamTwo = fromEvent(this.oddTeamTwoElRef.nativeElement, 'keyup').pipe(debounceTime(300)).subscribe(value => {
      this.calculate()

    }
    );

    this.valueBetTeamTwo = fromEvent(this.valueBetTeamTwoElRef.nativeElement, 'keyup').pipe(debounceTime(300)).subscribe(value => {
      this.calculate()

    }
    );

    this.valueBetTeamOne = fromEvent(this.valueBetTeamOneElRef.nativeElement, 'keyup').pipe(debounceTime(300)).subscribe(value =>
      this.calculate()
    );

    this.buildTitle();
  }


  buildTitle() {
    this.titleService.setTitle(this.calculation?.teamOne.toLocaleUpperCase() + ' vs ' + this.calculation?.teamTwo.toLocaleUpperCase())
  }


  buildSimulacaoOdd() {


    this.listOddSimulacao = [];

    let item = null;

    var odd = 1;


    for (var i = 0; i < this.rowsOdd; i++) {

      odd = odd + this.multiplicadorOdd;

      item = new SimulacaoOdd();

      item.oddTeamTwo = odd;

      item.teamOneWin = this.calculation.valueBetTeamOne + ((odd * this.calculation.valueBetTeamOne) - this.calculation.valueBetTeamOne) - this.totalAposta;

      item.teamTwoWin = this.calculation.valueBetTeamTwo + ((odd * this.calculation.valueBetTeamTwo) - this.calculation.valueBetTeamOne) - this.totalAposta;


      this.listOddSimulacao.push(item);
    }


  }


  pipe(value: number) {
    return value > 999 ? '1.0-0' : '1.0-2';
  }


  private calculate() {


    this.ganhoIndividualTimeUm = (this.calculation.oddTeamOne * this.calculation?.valueBetTeamOne) - this.calculation?.valueBetTeamOne;

    this.oddMinimaTimeDois = parseFloat((1 / (this.calculation.oddTeamOne - 1) + 1).toFixed(4));

    this.valorMinimoApostaTimeDois = parseFloat((this.calculation.valueBetTeamOne / (this.oddMinimaTimeDois - 1)).toFixed(2))

    this.ganhoIndividualTimeDois = (this.calculation.oddTeamTwo * this.calculation.valueBetTeamTwo) - this.calculation?.valueBetTeamTwo;

    this.totalAposta = this.calculation.valueBetTeamOne + this.calculation.valueBetTeamTwo;

    this.ganhoSeTimeUmVencer = this.calculation.valueBetTeamOne + this.ganhoIndividualTimeUm - this.totalAposta;

    this.ganhoSeTimeDoisVencer = this.calculation.valueBetTeamTwo + this.ganhoIndividualTimeDois - this.totalAposta;

    this.buildSimulacaoOdd();

  }


  ngOnDestroy() {
    this.teamOne.unsubscribe();
    this.teamTwo.unsubscribe();

    this.oddTeamOne.unsubscribe();
    this.oddTeamTwo.unsubscribe();

    this.valueBetTeamOne.unsubscribe();
    this.valueBetTeamTwo.unsubscribe();
  }


  getValueClass(value: number) {


    if (value > 0) {
      return "greenvalue"
    }
    if (value == 0) {
      return "bluevalue"
    }
    if (value < 0) {
      return "redvalue"
    }

  }

}
