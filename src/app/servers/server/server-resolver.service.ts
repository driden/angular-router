import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

import { ServersService } from "../servers.service";

export interface IResolvedServer {
  id: number;
  status: string;
  name: string;
}

@Injectable()
export class ServerResolver implements Resolve<IResolvedServer> {
  constructor(private serversService: ServersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): IResolvedServer | Observable<IResolvedServer> | Promise<IResolvedServer> {
    return this.serversService.getServer(+route.params["id"]);
  }
}
