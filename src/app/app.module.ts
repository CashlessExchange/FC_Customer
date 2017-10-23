import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';
import { MyApp } from './app.component';
import {SumbitService} from '../services/submit.services';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { Base64 } from '@ionic-native/base64';
import {AddpaymethodPage} from '../pages/addpaymethod/addpaymethod';
import {CardsPage} from '../pages/cards/cards';
import {CertificatePage} from '../pages/certificate/certificate';
import {EntercodePage} from '../pages/entercode/entercode';
import {EditcardPage} from '../pages/editcard/editcard';

import {IonicStorageModule} from '@ionic/Storage';
import {CheckoutPage} from '../pages/checkout/checkout';

import {CardService} from '../services/card.service';
import {CertificateService} from '../services/certificate.service';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import {NFC,Ndef} from '@ionic-native/nfc';
import {SQLite}from '@ionic-native/sqlite';
import {CardnumberPipe} from '../pipes/cardnumber/cardnumber'
import { Geolocation } from '@ionic-native/geolocation';
import {FingerprintAIO} from '@ionic-native/fingerprint-aio';

//AIzaSyBSvLiaLr6tX6VIoJt-wcD4EceovawHf8Q
@NgModule({
  declarations: [
    MyApp,
    AddpaymethodPage,
    CheckoutPage,
    CardsPage,
    CardnumberPipe,
    CertificatePage,
    EntercodePage,
    EditcardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddpaymethodPage,
    CheckoutPage,
    CardsPage,
    CertificatePage,
    EntercodePage,
    EditcardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    SumbitService,
    AuthServiceProvider, 
    Base64,
    NFC,
    Ndef,
    CardService,
    CertificateService,
    SQLite,
    Geolocation,
    FingerprintAIO,
    AndroidPermissions
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {}
