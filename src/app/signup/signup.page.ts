import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  user = {name:'',
    email: '',
    password: '',
    Uid:'',
    nbAchat:Number(0)
  };

  constructor(
    private navCtrl: NavController,public ngFireAuth: AngularFireAuth,public data:DataService) { }

  ngOnInit() {
  }
  async regi() {
    const utilisateur = await this.ngFireAuth.createUserWithEmailAndPassword(
      this.user.email,
      this.user.password
    );
   
     
    console.log(utilisateur.user.uid)
    this.user.Uid=utilisateur.user.uid;
    this.data.adduser(this.user)
    

    if (this.user) {
      
      this.navCtrl.navigateRoot('/home', { animationDirection: 'forward' });
      
    } else {
      alert('regi failed');
    }
  }

}
