import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

import { TranslateService } from '@ngx-translate/core';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';

  constructor(public navCtrl: NavController,
    private nativeStorage: NativeStorage,
    public menu: MenuController,
    translate: TranslateService,
    public platform: Platform) {
    this.dir = platform.dir();
    translate.get(["TUTORIAL_SLIDE1_TITLE",
      "TUTORIAL_SLIDE1_DESCRIPTION",
      "TUTORIAL_SLIDE2_TITLE",
      "TUTORIAL_SLIDE2_DESCRIPTION",
      "TUTORIAL_SLIDE3_TITLE",
      "TUTORIAL_SLIDE3_DESCRIPTION",
    ]).subscribe(
      (values) => {
        console.log('Loaded values', values);
        this.slides = [
          {
            title: "Welcome to the Freedom Choice Customer App",
            description: "The Freedom Choice Customer App brings you the ability to get rewarded simply by paying for the goods and services you use everyday. ",
            image: 'assets/img/slide2.png',
          },
          {
            title: "What Is Freedom Choice? ",
            description: "Freedom Choice is a payment and rewards system that allows customers and merchants to interact in a new and exciting way. ",
            image: 'assets/img/slide1.png',
          },
          {
            title: "How the Freedom Choice Concept Works? ",
            description: "Freedom Choice works by giving customers the choice to either pay a merchant’s processing fees or to pay them in another form of payment such as cash or check. ",
            image: 'assets/img/slide3.png',
          },
          {
            title: "The Benefit? ",
            description: "When you, the customer either pay the merchant’s processing fees or pay in another form of payment, you are rewarded with up to double the amount of stored credits that you can redeem on future purchases. ",
            image: 'assets/img/slide4.png',
          },
          {
            title: "The Payoff",
            description: "When you use Freedom Choice as your method of payment both you and the merchant benefit from this amazing pay-it-forward approach to business. ",
            image: 'assets/img/slide5.png',
          },
          {
            title: "Sign Up Now ",
            description: "By signing up now, you will earn multiple opportunities to increase your savings by shopping with locally-owned businesses. Furthermore, you will be awarded 100 points just for signing up. ",
            image: 'assets/img/slide6.png',
          },
          {
            title: "Earn Real Cash Rewards  ",
            description: "Upon enrollment, if you elect to become an Affiliate, you will earn real cash rewards and incentives each time your referral uses the app to make a payment. It’s totally off the chain.",
            image: 'assets/img/slide7.png',
          }
        ];
      });
  }


  async startApp() {
    if (!this.platform.is('core')) {
      await this.nativeStorage.setItem('tutorialDone1', "fetig");
    }
    this.navCtrl.setRoot('LoginPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }


  skip() {

    this.navCtrl.setRoot('LoginPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
