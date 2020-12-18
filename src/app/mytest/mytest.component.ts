import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mytest',
  templateUrl: './mytest.component.html',
  styleUrls: ['./mytest.component.css']
})
export class MytestComponent implements OnInit {

  constructor() { }
  counter:number=0;
  incrementCount(){
    this.counter++;
  }
  count():number{
    this.counter++;
    return this.counter;
  }
  /*liked:number=100;
  disliked:number=25;
  flagLiked:boolean=true;
  flagDisliked:boolean=true;
  Like()
  {
    if(this.flagLiked){
      this.liked+=1;
      this.flagLiked=false;
      if(!this.flagDisliked){
        this.Dislike();
        this.flagLiked=true;
      }
    }
    else{
      this.liked-=1;
      this.flagLiked=true;
    }
  }
  Dislike()
  {
    if(this.flagDisliked){
      this.disliked+=1;
      this.flagDisliked=false;
      if(!this.flagLiked){
        this.Like();
        this.flagDisliked=true;
      }
    }
    else{
      this.disliked-=1;
      this.flagDisliked=true;
    }
  }*/
  selectedOption="";
  months = ["January", "February", "March", "April",
  "May", "June", "July", "August", "September",
  "October", "November", "December"];
  ngOnInit(): void {
  }

}
