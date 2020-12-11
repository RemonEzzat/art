import { Component, OnInit } from '@angular/core';;
import {FormBuilder, FormsModule, ReactiveFormsModule,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AddArtical} from 'src/app/Model/artical.model';
import { ArticalService } from 'src/app/services/Artical.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-add-new-artical',
  templateUrl: './add-new-artical.component.html',
  styleUrls: ['./add-new-artical.component.css']
})
export class AddNewArticalComponent implements OnInit {
  articalModel
  msg
  constructor( private fb: FormBuilder, 
    private _artical:ArticalService,
    private router: Router) { this.articalModel= this.fb.group({
      title: ['',[ Validators.required],],
      content: [,[ Validators.required],]
    })
   }

  ngOnInit(): void {
  }
  addArtical(){
    let articalData:AddArtical = this.articalModel.value
    console.log("gh"+articalData)
    this._artical.addArtical(articalData).subscribe(res=>{
      console.log(res)
      this.router.navigate([''])
    
  })}  
}
