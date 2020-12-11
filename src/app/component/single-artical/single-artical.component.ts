import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticalService } from 'src/app/services/Artical.service';

@Component({
  selector: 'app-single-artical',
  templateUrl: './single-artical.component.html',
  styleUrls: ['./single-artical.component.css']
})
export class SingleArticalComponent implements OnInit {
  artical:any
  constructor(private route:ActivatedRoute, 
    public _art:ArticalService) { 
      this.getSingle(this.route.snapshot.params['id'])
    }

  ngOnInit(): void {
  }
  getSingle(id){
    //this.route.paramMap.subscribe(params=> {let i = params.get('id')})
    this._art.getSingle(id).subscribe(data=>{
      this.artical= data.result.artical_data
      console.log(data.result.artical_data)
    })
  }
}
