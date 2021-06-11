import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarreiraComponent } from "./pages/carreira/carreira.component";
import { ContatoComponent } from "./pages/contato/contato.component";
import { HomeComponent } from "./pages/home/home.component";
import { PortifolioComponent } from "./pages/portifolio/portifolio.component";
import { SobreMimComponent } from "./pages/sobre-mim/sobre-mim.component";

const appRoutes: Routes = [
	{
		path: "",
		component: HomeComponent,
	},
	{
		path: "sobre-mim",
		component: SobreMimComponent,
	},
	{
		path: "carreira",
		component: CarreiraComponent,
	},
	{
		path: "portifolio",
		component: PortifolioComponent,
	},
	{
		path: "contato",
		component: ContatoComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
