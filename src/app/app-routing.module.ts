import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrichmentMatComponent } from './enrichment-mat/enrichment-mat.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'homepage',
    component: EnrichmentMatComponent,
    canActivate: [AuthGuard],
  },
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: 'homepage',
  //       component: HomepageComponent,
  //     },
  //     {
  //       path: 'wishList',
  //       component: WishListComponent,
  //     },
  //   ],
  // },
  {
    path: '**',
    redirectTo: '/homepage',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
