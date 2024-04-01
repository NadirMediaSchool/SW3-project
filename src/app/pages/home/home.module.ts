import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import {CdkMenuItemRadio, CdkMenuItemCheckbox, CdkMenuGroup, CdkMenu, CdkMenuTrigger, CdkMenuItem, CdkMenuBar,} from '@angular/cdk/menu';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelMenuModule } from 'primeng/panelmenu';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MegaMenuModule,PanelMenuModule,
    CdkMenuBar, CdkMenuItem, CdkMenuTrigger, CdkMenu, CdkMenuGroup, CdkMenuItemCheckbox, CdkMenuItemRadio,
  ]
})
export class HomeModule { }
