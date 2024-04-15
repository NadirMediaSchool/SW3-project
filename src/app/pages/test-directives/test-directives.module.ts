import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TestDirectivesRoutingModule } from './test-directives-routing.module';
import { TestDirectivesComponent } from './test-directives.component';


@NgModule({
  declarations: [
    TestDirectivesComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    TestDirectivesRoutingModule
  ]
})
export class TestDirectivesModule { }
