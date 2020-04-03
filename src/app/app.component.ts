import { Component, OnInit} from '@angular/core';
import { getHashCashLink } from './shared/src/lib/touchpoint';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ie-syntax-error-build-repro';

  ngOnInit() {
    getHashCashLink();
  }
}
