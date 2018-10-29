import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { WelcomeComponent } from '../app/welcome/welcome.component'
import { MarketplaceComponent } from '../app/marketplace/marketplace.component';
import { AlbumComponent } from '../app/album/album.component';
import { AboutComponent } from '../app/about/about.component';


const appRoutes: Routes = [
{ path: '', component: WelcomeComponent },
{ path: 'marketplace', component: MarketplaceComponent },
{ path: 'album/:id', component: AlbumComponent },
{ path: 'about', component: AboutComponent } 

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
