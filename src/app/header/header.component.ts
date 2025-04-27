import { Component, Input } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [RouterLink, RouterLinkActive, FormsModule, CommonModule],
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
	@Input() selectedCoffee = "";
	searchTerm = "";

	search() {
		console.log("Searching for:", this.searchTerm);
	}
}
