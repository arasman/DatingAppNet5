import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  user: any = {};

  constructor() { }

  ngOnInit(): void {
  }
  registerToggle(): void{
    this.registerMode = !this.registerMode;
  }
  cancelRegisterMode(event: boolean): void{
    this.registerMode = event;
  }
}
