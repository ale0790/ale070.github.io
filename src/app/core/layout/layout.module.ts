import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from 'src/app/custom-material/custom-material.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxSkeletonLoaderModule,
    CustomMaterialModule
  ]
})
export class LayoutModule { }
