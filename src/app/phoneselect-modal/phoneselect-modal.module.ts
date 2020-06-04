import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PhoneselectModalPageRoutingModule } from './phoneselect-modal-routing.module';
import { PhoneselectModalPage } from './phoneselect-modal.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PhoneselectModalPageRoutingModule
  ],
  declarations: [PhoneselectModalPage]
})
export class PhoneselectModalPageModule {}
