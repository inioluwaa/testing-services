export class LoggingService {
 // logToConsole
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}