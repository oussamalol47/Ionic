import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public utilisateurs: any[]
  user = {
    email: '',
    password: '',
  };


  constructor(
   
    private navCtrl: NavController, public ngFireAuth: AngularFireAuth,private data:DataService
  ) { this.utilisateurs=this.data.users;
  console.log(this.utilisateurs);}

  ngOnInit() {
  }

  
  async login() {
    const user = await this.ngFireAuth.signInWithEmailAndPassword(
      this.user.email,
      this.user.password
    );
    if (user.user.email) {
      
    this.navCtrl.navigateRoot('/formations', { animationDirection: 'forward' });
    } else {
      alert('login failed');
    }
  }
  login2(){

  }
}
