import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'store';
  today = new Date();
  month3;
  year3;
  month2;
  year2;
  year = new Date().getFullYear();
  month1 = this.today.getMonth();
  year1 = this.today.getFullYear();
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December']
  
ngOnInit(){
  const menu = document.querySelector('.hambuger');
  const close = document.querySelector('.close');
  const mobile = document.querySelector('.mobile-menu')
  menu.addEventListener('click', (e)=>{
    mobile.classList.add('open');
  })
  close.addEventListener('click', (e)=>{
    mobile.classList.remove('open');
  })
  this.calculateDate();
  const tbl = document.querySelector('.calendarBody');
  const tbl1 = document.querySelector('.calendarBody1');
  const tbl2 = document.querySelector('.calendarBody2');
  const button = document.querySelector('.buttons');


  button.firstElementChild.nextElementSibling.nextElementSibling.addEventListener('click', (e)=>{

    if(this.month1 == 11){
      this.year1 = this.year1 +1;
      this.month1 =0;
      this.month2 = this.month1 + 1;
      this.month3 = this.month2 + 1;
      this.year3 = this.year1;
      this.year2 = this.year1;  
    }
    else if(this.month2 == 11){
      this.month2 =0;
      
      this.month1 = 11;
      this.month3 = this.month2 + 1;
      this.year2 = this.year1 + 1;
      this.year3 = this.year2; 
    }
    else if(this.month3 == 11){
      this.month3 =0;
      
      this.month2 = 11;
      this.month1 = 10;
      this.year2 = this.year1;
      this.year3 = this.year1 + 1;
      
    }else{
      ++this.month1;
      ++this.month2;
      ++this.month3
    }
    // ++this.month1
    // ++this.month2
    // ++this.month3
    
    // this.calculateDate()
    this.showCalendar(this.month1, this.year1, tbl)
    this.showCalendar(this.month2, this.year2, tbl1)
    this.showCalendar(this.month3, this.year3, tbl2)
  })
  button.firstElementChild.addEventListener('click', (e)=>{

    if(this.month1 == 0){
      this.year1 = this.year1 -1;
      this.month1 = 11;
      this.month2 = 0;
      this.month3 = this.month2 + 1;
      this.year2 = this.year1 +1;
      this.year3 = this.year2;  
    }
    else if(this.month2 == 0){
      this.year2 = this.year2 - 1;
      this.month2 =11;
      
      this.month1 = this.month2-1;
      this.month3 = 0;
      this.year1 = this.year2;
      this.year3 = this.year2+ 1;
    }
    else if(this.month3 == 0){
      this.year3 = this.year3 - 1;
      this.month3 =11;
      
      this.month2 =this.month3-1 ;
      this.month1 = this.month2 -1;
      this.year2 = this.year3;
      this.year1 = this.year3;
      
    }else{
      --this.month1;
      --this.month2;
      --this.month3
    }
    // ++this.month1
    // ++this.month2
    // ++this.month3
    
    // this.calculateDate()
    this.showCalendar(this.month1, this.year1, tbl)
    this.showCalendar(this.month2, this.year2, tbl1)
    this.showCalendar(this.month3, this.year3, tbl2)
  })

  this.showCalendar(this.month1, this.year1, tbl)
  this.showCalendar(this.month2, this.year2, tbl1)
  this.showCalendar(this.month3, this.year3, tbl2)
}
daysInMonth(iMonth, iYear){
  return 32 - new Date(iYear, iMonth, 32).getDate();
}
showCalendar(month, year, tbl){
  let firstDay = (new Date(year, month)).getDay();
  tbl.innerHTML = "";
  //console.log(tbl.previousElementSibling.children[0].firstElementChild.)
  tbl.previousElementSibling.children[0].firstElementChild.innerHTML = this.months[Number(month)]

  let date = 1;
  for(let i = 0; i<6; i++){
    let row = document.createElement('tr');
    for(let j = 0; j < 7; j++){
      if(i === 0 && j < firstDay){
        let cell = document.createElement('td');
        let cellText = document.createTextNode('');
        cell.appendChild(cellText);
        cell.style.fontSize = '10px';
        row.appendChild(cell);
      }
      else if(date > this.daysInMonth(month,year)){
        break
      }
      else{
        let cell = document.createElement('td');
        let cellText = document.createTextNode(date.toString());
        if(date === this.today.getDate() && year === this.today.getFullYear() && month === this.today.getMonth()){
          cell.style.background = '#F6990A';
          cell.style.borderRadius = '50%';
          cell.style.textAlign = 'center';
          cell.style.width = '20px';
          cell.style.height = '20px';
          cell.style.color = '#fff';
          cell.style.fontSize = '10px';
          cell.style.padding = '6px';
        }
        
        cell.appendChild(cellText);
        row.appendChild(cell);
        date++;
      }
      
    }
    tbl.appendChild(row);
  }
}
calculateDate(){
  if(this.month1== 11){
    this.month2 = 0;
    this.month3 = this.month2 + 1;
    this.year2 = this.year1+1;
    this.year3 = this.year2;
  }
  else
 {
  this.month2 = this.month1+1;
  this.year2 = this.today.getFullYear();
    if(this.month2 == 11){
      this.month3 = 0;
      this.year3 = this.year2 + 1;
    }else{
      this.month3 = this.month2 + 1;
      this.year3 =this.year2;
    }
 }
}
}
