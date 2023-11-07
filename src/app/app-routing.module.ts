import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CubeComponent } from './pages/cube/cube.component';
import { ImportedModelComponent } from './pages/imported-model/imported-model.component';

const routes: Routes = [
  {path: "", component: ImportedModelComponent},
  {
    path: "cube",
    component: CubeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
