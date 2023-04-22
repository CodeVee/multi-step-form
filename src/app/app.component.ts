import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  activeStep = 1

  get formCompleted(): boolean {
    return this.activeStep > 4
  }

  advanceStep() {
    this.activeStep++
  }
  reverseStep() {
    this.activeStep--
  }
}
