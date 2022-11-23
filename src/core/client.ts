import { State } from "./state";
import { Request } from "./request";
import { HelperService, SignerService } from "../services";

import { UserRepository } from "../repositories";

export class TikTokClient {
  proxy: string | null;
  session: any;
  constructor(proxy: string | null = null, session: string | any) {
    this.proxy = proxy;
    this.session = session;
  }

  public state = new State();
  public helper = new HelperService();
  public signer = new SignerService(this);
  public request = new Request(this);
  public user = new UserRepository(this);
}
