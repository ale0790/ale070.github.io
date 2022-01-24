import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { CalculatorComponent } from './calculator.component';
import { CalculationCardComponent } from './calculation-card/calculation-card.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CalculatorComponent,
    CalculationCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomMaterialModule,
    NgxSkeletonLoaderModule,
  ]
})
export class CalculatorModule { }
