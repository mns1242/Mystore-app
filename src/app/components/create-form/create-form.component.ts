import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {


  @Output() SuccessForm: EventEmitter<string> = new EventEmitter();

  constructor() { }
  FirstName: string='';
  Address: string='';
  creditCardNumber: number | string = '';
  ngOnInit(): void {
  }
  
  onSubmit():void{
    this.SuccessForm.emit(this.FirstName);
  }
  FnameChanged(fname:string){
    if(fname.length >=5 ){
      this.FirstName=fname

    }
  }

}
