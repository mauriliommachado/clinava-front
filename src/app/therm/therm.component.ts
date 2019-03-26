import { Component, OnInit } from '@angular/core';
import { UserService, AuthenticationService } from '../_services';
import { User } from '../_models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-therm',
  templateUrl: './therm.component.html',
  styleUrls: ['./therm.component.css']
})
export class ThermComponent implements OnInit {

  constructor(private userService: UserService,
     private authenticationService: AuthenticationService,
     private router: Router) { }

  ngOnInit() {
  }


  accept() {
    this.userService.getById(JSON.parse(localStorage.getItem("currentUser")).userId).subscribe(resp => {
      resp.acceptedTerm = true;
      resp.password=null;
      this.userService.update(resp).subscribe(r => r);
      var item = JSON.parse(localStorage.getItem("currentUser"));
      item.acceptedTerm= true;
      localStorage.setItem("currentUser", JSON.stringify(item));
      this.router.navigate(['home']);
    })
  }

  decline() {
    this.authenticationService.logout();
    localStorage.clear();
    localStorage.removeItem('currentUser');
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
