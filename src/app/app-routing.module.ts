import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainManuComponent } from "./components/pages/main-manu/main-manu.component";
import { ResultComponent } from "./components/pages/result/result.component";
import { TestComponent } from "./components/pages/test/test.component";
import { DictionaryComponent } from "./components/pages/dictionary/dictionary.component";
import { GoToAddressGuard } from "./guards/go-to-address.guard";
import { EPages } from "./interfaces/tags.interface";
import { LanguageComponent } from "./components/language/language.component";

const routes: Routes = [
  {
    path: EPages.MainMenu,
    component: MainManuComponent,
    canActivate: [GoToAddressGuard],
  },
  {
    path: EPages.Test,
    component: TestComponent,
    canActivate: [GoToAddressGuard],
  },
  {
    path: EPages.Result,
    component: ResultComponent,
    canActivate: [GoToAddressGuard],
  },
  {
    path: EPages.Dictionary,
    component: DictionaryComponent,
    canActivate: [GoToAddressGuard],
  },
  {
    path: '',
    redirectTo: EPages.MainMenu,
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/' + EPages.MainMenu,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
