import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { Router} from '@angular/router'
import{ AlertController } from '@ionic/angular'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  mail: string = ""
	password: string = ""
	cpassword: string = ""
  alertController: any;


  constructor(

    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router

  ) { }

  ngOnInit() {
  }

  async register() {
		const { mail, password, cpassword } = this
		if(password !== cpassword) {
      this.showAlert("Error!", "Passwords don't match")
			return console.error("Passwords don't match")
		}

		try {
	  const res = await this.afAuth.createUserWithEmailAndPassword(mail, password) 
    console.log(res)
    this.router.navigate(['folder/Inbox'])
    }catch(error) {
      console.dir(error)
      this.showAlert("Error", error.message)
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



