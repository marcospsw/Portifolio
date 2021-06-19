import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { CarreiraComponent } from './carreira/carreira.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { ContatoComponent } from './contato/contato.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [
		HomeComponent,
		SobreMimComponent,
		CarreiraComponent,
		PortifolioComponent,
		ContatoComponent,
		AppComponent,
	],
  imports: [
    CommonModule,
		ComponentsModule,
		AppRoutingModule,
  ],
	exports: []
})
export class PagesModule { }
