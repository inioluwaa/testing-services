import { Component, EventEmitter } from '@angular/core';

import { LoggingService } from "../logging.service";
import { AccountsService } from 'app/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService,
    private accountsSerrvice: AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsSerrvice.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
