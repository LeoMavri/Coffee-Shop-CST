import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, HeaderComponent, CommonModule],
	template: `
    <app-header [selectedCoffee]="selectedCoffee"></app-header>
    <router-outlet></router-outlet>
  `,
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	selectedCoffee = "";

	updateSelectedCoffee(coffeeName: string) {
		this.selectedCoffee = coffeeName;
	}
}
