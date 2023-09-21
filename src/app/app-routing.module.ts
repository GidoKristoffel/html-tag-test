import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainManuComponent } from "./components/pages/main-manu/main-manu.component";
import { ResultComponent } from "./components/pages/result/result.component";
import { TestComponent } from "./components/pages/test/test.component";
import { DictionaryComponent } from "./components/pages/dictionary/dictionary.component";
import { GoToAddressGuard } from "./guards/go-to-address.guard";

const routes: Routes = [
  {
    path: 'main-menu',
    component: MainManuComponent,
    canActivate: [GoToAddressGuard],
  },
  {
    path: 'test',
    component: TestComponent,
    canActivate: [GoToAddressGuard],
  },
  {
    path: 'result',
    component: ResultComponent,
    canActivate: [GoToAddressGuard],
  },
  {
    path: 'dictionary',
    component: DictionaryComponent,
    canActivate: [GoToAddressGuard],
  },
  {
    path: '',
    redirectTo: 'main-menu',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/main-menu',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
