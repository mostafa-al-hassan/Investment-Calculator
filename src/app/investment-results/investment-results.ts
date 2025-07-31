import { Component, Input } from '@angular/core';
import { annualResults } from '../../shared/sharedTypes';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {
  @Input({ required: true }) results?: annualResults[];


}
