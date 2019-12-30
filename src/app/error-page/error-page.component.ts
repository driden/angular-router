import { Component, OnInit } from "@angular/core";
import { Data, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-error-page",
  templateUrl: "./error-page.component.html",
  styleUrls: ["./error-page.component.css"]
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // If its a static error message
    // this.errorMessage = this.route.data["message"];

    // If the error could be changed in real time
    this.route.data.subscribe((data: Data) => {
      console.log(data);
      this.errorMessage = data["message"];
    });
  }
}
