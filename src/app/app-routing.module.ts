import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '/cars',
    loadChildren: () => import('./cars/cars.module').then((m) => m.CarsModule),
  },

  // TODO components
  // {
  //   path: '/cars',
  //   loadChildren: () => import('./cars/cars.module').then((m) => m.CarsModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
