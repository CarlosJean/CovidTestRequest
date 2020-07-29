import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
                        { path: 'result', loadChildren: () => import('./result/result.module').then(m => m.ResultModule) },
                        { path: 'help', loadChildren: () => import('./help/help.module').then(m => m.HelpModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
