import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HomeBoxComponent } from './home-box/home-box.component';
import { MatIconModule } from '@angular/material/icon';
import { SvgComponent } from './svg/svg.component';


@NgModule({
  declarations: [
		HeaderComponent,
  	FooterComponent,
		HomeBoxComponent,
		SvgComponent,
	],
  imports: [
    CommonModule,
		AppRoutingModule,
		MatIconModule,
  ],
	exports: [
		HeaderComponent,
		FooterComponent,
		HomeBoxComponent,
	]
})

export class ComponentsModule {}
