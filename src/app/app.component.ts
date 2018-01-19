import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, ToastController } from 'ionic-angular';
import { EntercodePage } from '../pages/entercode/entercode';
import { NativeStorage } from '@ionic-native/native-storage';

import { FirstRunPage ,MainPage} from '../pages/pages';
import { Settings } from '../providers/providers';

@Component({
  template: '  <ion-nav #content [root]="rootPage"></ion-nav>'})

export class MyApp {
  rootPage:any =  FirstRunPage;

  @ViewChild(Nav) nav: Nav;




  constructor(private translate: TranslateService, 
    platform: Platform, 
    settings: Settings, 
    private nativeStorage: NativeStorage,    
    private config: Config, 
    private statusBar: StatusBar, 
    public toastCtrl: ToastController,    
    private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      this.nativeStorage.getItem('tutorialDone1').then((data) => {
        if (data != null && data != undefined) {
          this.rootPage=MainPage;
        }
      });
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.d
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }
}
