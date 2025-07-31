import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

type data = {
  initialInvestment: number;
  duration: number;
  expectedReturn: number;
  annualInvestment: number;
};

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  @Output() calculate = new EventEmitter<data>();

  investmentData = {
    initialInvestment: +this.enteredInitialInvestment,
    duration: +this.enteredDuration,
    expectedReturn: +this.enteredExpectedReturn,
    annualInvestment: +this.enteredAnnualInvestment,
  };

  onSubmit() {
    this.calculate.emit(this.investmentData);
  }
}
