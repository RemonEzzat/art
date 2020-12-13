import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticalService } from 'src/app/services/Artical.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allArtical =[]
  isload:boolean = true
  err=null
  constructor(private _artical:ArticalService) { 
       this.getAllArticals()
     }

  ngOnInit(): void {
  }
  
  getAllArticals(){
    this._artical.getArtical().subscribe(data=>{
      console.log(data)
      this.allArtical=data.result.articalData
    },
    (err)=>{
      this.err="an error accured"
    },
    ()=>{
      this.isload=false
    }
    
    )
  }


}
