import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShareModalPageRoutingModule } from './share-modal-routing.module';
import { ShareModalPage } from './share-modal.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ShareModalPageRoutingModule
  ],
  declarations: [ShareModalPage]
})
export class ShareModalPageModule {}
