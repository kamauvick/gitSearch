import {Component, OnInit} from '@angular/core';
import {MyServiceService} from '../my-service.service';
import {GitUser} from '../git-user';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  user: GitUser[];
  kaname: any;
  constructor(private service: MyServiceService) {
  }

  getSearchedUser(searchTerm) {
     this.service.searchMyUser(searchTerm).then(
      (success) => {
        console.log(this.kaname);
      },
      (error) => {
        console.log(this.kaname);
      }
    );
  }

  ngOnInit() {
    this.getSearchedUser('kamauvick');
  }

}
