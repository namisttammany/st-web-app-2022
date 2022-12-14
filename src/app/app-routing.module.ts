import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RequestPageModule } from './request/request.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'documents',
    loadChildren: () => import('./documents/documents.module').then( m => m.DocumentsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'details/:key',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'resetpassword',
    loadChildren: () => import('./resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'share-modal',
    loadChildren: () => import('./share-modal/share-modal.module').then( m => m.ShareModalPageModule)
  },
  {
    path: 'phoneselect-modal',
    loadChildren: () => import('./phoneselect-modal/phoneselect-modal.module').then( m => m.PhoneselectModalPageModule)
  },
  {
    path: 'flag',
    loadChildren: () => import('./flag/flag.module').then( m => m.FlagPageModule)
  },
  {
    path: 'language-modal',
    loadChildren: () => import('./language-modal/language-modal.module').then( m => m.LanguageModalPageModule)
  },
  {
    path: 'sponsors',
    loadChildren: () => import('./sponsors/sponsors.module').then( m => m.SponsorsPageModule)
  },
  {
    path: 'request',
    // loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
    // **** Use Below for apps that use external URL for the ABOUT page ****
    component: RequestPageModule,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'https://imcalresourceupdate.resourceapp.org/'
    },
  },
  {
    path: 'signout',
    loadChildren: () => import('./signout/signout.module').then( m => m.SignoutPageModule)
  },
  {
    path: 'request',
    loadChildren: () => import('./request/request.module').then( m => m.RequestPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: "reload" })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
