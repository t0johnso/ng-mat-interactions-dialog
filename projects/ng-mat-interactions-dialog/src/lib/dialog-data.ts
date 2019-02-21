import { ElementRef } from '@angular/core';
export interface DialogData {
  title?: string;
  message?: string;
  template?: ElementRef
  cancelButton?: string; //default 'Cancel' used for confirm and prompt cancel button
  alertButton?: string; //default 'OK' used for alert 'OK' button
  confirmButton?: string; // default 'OK' used for confirm true button
  promptButton?: string; //default 'OK' used for prompt send button
}
