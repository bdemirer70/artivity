import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { Router} from '@angular/router'
import{ AlertController } from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mail: string = ""
	password: string = ""
  user: any;
  alertController: any;

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router
  ) { }

  ngOnInit() {
  }

  async login() {
		const { mail, password } = this
		try {
      const res = await this.afAuth.signInWithEmailAndPassword(mail, password)
      console.log(res)
   
      this.router.navigate(['folder/Inbox'])
			} catch(err) {
			console.dir(err)
			if(err.code === "auth/user-not-found") {
        this.showAlert("Error!", "User not found")
      }
      if(err.code === "auth/invalid-email") {
        this.showAlert("Error!", "Invalid username")
      }
      if(err.code === "auth/wrong-password") {
        this.showAlert("Error!", "Wrong password")
			}
		}
  }
  async showAlert( header:string, message:string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["Ok"]
    })
    await alert.present()
  

  }
}






