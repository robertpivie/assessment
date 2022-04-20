import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BracketTesterService } from 'src/app/services/bracket-tester.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  bracketFormControl = new FormControl('', []);

  constructor(
    private bracketTester: BracketTesterService,
  ) { }

  ngOnInit(): void {
  }

  check($event: any) {
    const isValid = this.bracketTester.test(this.getValueFromEvent($event));
    if (isValid) {
      this.setBalancedMessage();
    } else {
      this.setUnbalancedMessage();
    }
  }

  getValueFromEvent($event: any): string {
    return $event?.target?.value || "";
  }

  setUnbalancedMessage(): void {
    this.bracketFormControl.setErrors({'unbalanced': true});
  }

  setBalancedMessage() {
    this.bracketFormControl.setErrors(null);
  }

}
