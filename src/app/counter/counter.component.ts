import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset, setValue } from '../store/counter.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.counter$ = store.select('counter');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  setValue(value: any) {
    this.store.dispatch(setValue({ value }));
  }
}
