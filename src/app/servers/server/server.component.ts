import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  idSubscription: Subscription;
  serverId: number;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const startingId = this.getServerIdFromRoute();
    this.server = this.serversService.getServer(startingId);
    console.log("server ", this.server);
    this.idSubscription = this.subscribeToIdChange();
  }

  getServerIdFromRoute(): number {
    return +this.route.snapshot.params["id"];
  }

  subscribeToIdChange(): Subscription {
    return this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(parseInt(params["id"] || 1));
      console.log("server updated ", this.server);
    });
  }
}
