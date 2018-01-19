import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Items } from '../mocks/providers/items';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Settings } from '../providers/providers';
import { User } from '../providers/providers';
import { Api } from '../providers/providers';
import { Base64 } from '@ionic-native/base64';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser } from '@ionic-native/in-app-browser';


//Pages
import { MenuPage } from '../pages/menu/menu';
import { EditcardPage } from '../pages/editcard/editcard';
import { CardsPage } from '../pages/cards/cards';
import { SpecialPage } from '../pages/special/special';
import { CertificatePage} from '../pages/certificate/certificate';
import { EntercodePage} from '../pages/entercode/entercode';
import { CheckoutPage} from '../pages/checkout/checkout';
import { AddpaymethodPage} from '../pages/addpaymethod/addpaymethod';
import { PricevaluePage } from '../pages/pricevalue/pricevalue';
import { Tutorial2Page } from '../pages/tutorial2/tutorial2';
import { ChoosepaymethodPage } from '../pages/choosepaymethod/choosepaymethod';
import { MarketplacePage } from '../pages/marketplace/marketplace';
import { ChoosepaymentcardformarketplacePage } from '../pages/choosepaymentcardformarketplace/choosepaymentcardformarketplace';
import { MarketplacetransactionPage } from '../pages/marketplacetransaction/marketplacetransaction';
import { PointsPage } from '../pages/points/points';
import { CouponsPage } from '../pages/coupons/coupons';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    EditcardPage,
    CardsPage,
    CertificatePage,
    EntercodePage,
    CheckoutPage,
    AddpaymethodPage,
    PricevaluePage,
    Tutorial2Page,
    ChoosepaymethodPage,
    MarketplacePage,
    CouponsPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    EditcardPage,
    CardsPage,
    CertificatePage,
    EntercodePage,
    CheckoutPage,
    AddpaymethodPage,
    PricevaluePage,
    Tutorial2Page,
    ChoosepaymethodPage,
    MarketplacePage,
    CouponsPage
  ],
  providers: [
    Api,
    Items,
    User,
    Camera,
    SplashScreen,
    StatusBar,
    NativeStorage,
    FingerprintAIO,
    AndroidPermissions,
    BarcodeScanner,
    InAppBrowser,
    Geolocation,
    Base64,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
