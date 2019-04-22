import { Component, OnInit, HostBinding } from '@angular/core';
import { Shinobi } from './models/shinobi';
import { ShinobisService } from '../app/shinobis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  shinobiArray: any = [];
  selectedShinobi: Shinobi = new Shinobi();

  constructor(private shinobisService: ShinobisService) { }
  
  ngOnInit() {
    
    this.shinobisService.getShinobis()
      .subscribe(
        res => {
          console.log(res);
          this.shinobiArray = res;
        },
        err => console.log(err)
      );
    
  }
  
  openForEdit(shinobi: Shinobi) {
    this.selectedShinobi = shinobi;
  }

  addOrEdit() {
    //create
    if(this.selectedShinobi.Id === 0) {
      this.selectedShinobi.Id = this.shinobiArray[this.shinobiArray.length - 1].Id + 1;
      this.shinobiArray.push(this.selectedShinobi);
      console.log(this.selectedShinobi);
      //add to database
      this.shinobisService.saveShinobi(this.selectedShinobi)
       .subscribe(
         res => {
           console.log(res)
         },
         err => console.log(err)
       );
    }
    //edit
    else {
      //update in database
      this.shinobisService.updateShinobi(this.selectedShinobi)
        .subscribe(
          res => console.log(res),
          err => console.log(err)
      );
    }
    this.selectedShinobi = new Shinobi();
  }

  delete() {
    if(confirm('Estas seguro de que quieres eliminar este elemento?')) {
      this.shinobiArray = this.shinobiArray.filter(x => x != this.selectedShinobi);
      //delete in database
      this.shinobisService.deleteShinobi(this.selectedShinobi.Id)
        .subscribe(
          res => console.log(res),
          err => console.log(err)
        );
      this.selectedShinobi = new Shinobi();
    }
  }
}
