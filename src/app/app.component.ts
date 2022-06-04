import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true,
  imports:[RouterModule]
})
export class AppComponent implements OnInit {
  title = 'Angular-Weather-App';

  constructor(){}

  ngOnInit(): void
  {

  }



}
