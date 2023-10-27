import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../modules/auth-profile/_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  user: any;
  token: string;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.user = this.authService.user;
  }

  logout(){
    this.authService.logout();
  }

}
