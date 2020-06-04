import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhoneselectModalPage } from './phoneselect-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PhoneselectModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhoneselectModalPageRoutingModule {}
