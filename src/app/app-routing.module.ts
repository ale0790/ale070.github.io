import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [


  {
    path: '',
    component: LayoutComponent,
    children: [

      {
        path: '', component: CalculatorComponent,
        children: [
        ]
      },
    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
