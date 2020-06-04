import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// import { DetailsPageRoutingModule } from './details-routing.module';
import { DetailsPage } from './details.page';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

// const routes: Routes = [
//   {
//     path: '',
//     component: DetailsPage
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: '',
        component: DetailsPage
      }
    ])
  ],
  declarations: [DetailsPage]
})
export class DetailsPageModule {}
