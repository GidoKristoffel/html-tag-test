import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainManuComponent } from "./components/main-manu/main-manu.component";
import { ResultComponent } from "./components/result/result.component";
import { TestComponent } from "./components/test/test.component";
import { DictionaryComponent } from "./components/dictionary/dictionary.component";

const routes: Routes = [
  {
    path: 'main-menu',
    component: MainManuComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'result',
    component: ResultComponent,
  },
  {
    path: 'dictionary',
    component: DictionaryComponent,
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
