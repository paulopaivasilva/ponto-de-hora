import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {

  constructor() {}

  private date: Date = new Date()
  day: string = this.date.getDay().toString()
  month: String = this.date.getMonth().toString()
  year: String = this.date.getFullYear().toString()
  hour: String
  minutes: String
  daily = { date: '', horarios: []}
  
  ngOnInit(){
    this.daily.date = `${this.day}/${this.month}/${this.year}`
    this.getTime()
  }

  setTime(){
    this.hour = this.date.getHours().toString()
    this.minutes = this.date.getMinutes().toString()
    this.daily.horarios.push(this.hour + ":" + this.minutes)
    localStorage.setItem('daily', JSON.stringify(this.daily))
  }

  getTime(){
    
  }

}
