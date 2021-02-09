import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  //{ path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
    { path: 'events/:id/:name', loadChildren: './events/events.module#EventsPageModule' },
    { path: 'favorites', loadChildren: './favorites/favorites.module#FavoritesPageModule' },
    { path: 'details/:id/:name', loadChildren: './details/details.module#DetailsPageModule'},
    { path: 'gallery/:id', loadChildren: './gallery/gallery.module#GalleryPageModule'},
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'privacy', loadChildren: './privacy/privacy.module#PrivacyPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' }
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
