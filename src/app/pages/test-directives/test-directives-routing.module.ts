import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestDirectivesComponent } from './test-directives.component';

const routes: Routes = [{ path: '', component: TestDirectivesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestDirectivesRoutingModule { }
