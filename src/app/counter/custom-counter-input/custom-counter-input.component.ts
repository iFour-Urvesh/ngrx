import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeName, customincrement } from '../state/counter.actions';
import { getName } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

  value !: number;
  name$ !: Observable<string>;

  constructor( private store : Store<{ counter : CounterState}>) { }

  ngOnInit(): void {
    this.name$ = this.store.select(getName)
  }

  onAdd(){
    this.store.dispatch(customincrement({value : +this.value}))
  }

  onChangeNme(){
    this.store.dispatch(changeName())
  }

}
