import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FlagPageRoutingModule } from './flag-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { FlagPage } from './flag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    FlagPageRoutingModule
  ],
  declarations: [FlagPage]
})
export class FlagPageModule {}
