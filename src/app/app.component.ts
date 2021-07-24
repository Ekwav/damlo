import { Component } from "@angular/core";

import { AccountService } from "./_services";
import { Account, Role } from "./_models";
import { ChatAdapter } from 'ng-chat';
import { DemoAdapter } from './chat/chat-adapter';

@Component({ selector: "app", templateUrl: "app.component.html" })
export class AppComponent {
  Role = Role;
  account: Account;

  title = "app";
  userId = 999;

  public adapter: ChatAdapter = new DemoAdapter();

  constructor(private accountService: AccountService) {
    this.accountService.account.subscribe((x) => (this.account = x));
  }

  logout() {
    this.accountService.logout();
  }
}
