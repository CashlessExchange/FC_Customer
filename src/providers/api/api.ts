import { HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';
import { Http, Headers, RequestOptions  } from '@angular/http';
import { Base64 } from '@ionic-native/base64';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string = 'https://example.com/api/v1';

  tokenex = "https://test-api.tokenex.com/TokenServices.svc/REST/";
  marketplacepointsApi = "http://173.212.238.108/api/marketplace.php";

  transactioApi = "http://173.212.238.108/api/freedomchoice.php";
  //transactioApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/freedomchoiceforte/freedomchoice.php";
  
  cardServiceApi = "http://173.212.238.108/api/card_service.php";
  //cardServiceApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/freedomchoiceforte/card_service.php";
  
  //certServiceApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/freedomchoiceforte/cert_service.php";
  certServiceApi = "http://173.212.238.108/api/cert_service.php";
  
  merchantServiceApi = "http://173.212.238.108/api/merchant_fees.php";
  //merchantServiceApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/freedomchoiceforte/merchant_fees.php";
  //affiliateApi= "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/affiliate_freedomchoice_commission.php";
  affiliateApi= "http://173.212.238.108/api/affiliate_freedomchoice_commission.php";

  //refermailApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/affiliate_freedomchoice_referralmail.php";
  refermailApi = "http://173.212.238.108/api/affiliate_freedomchoice_referralmail.php";
  
  registerAffiliateApi = "https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/affiliate_freedomchoice_registercustomerasaffiliate.php";
  //registerAffiliateApi = "http://173.212.238.108/api/affiliate_freedomchoice_registercustomerasaffiliate.php";
  
  freedomApi: string = "http://cashlessexchange-sb.com/marketplace/webservices/";
  freedomTemp = "http://173.212.238.108/api/";
  
  googleMapsApi = "https://maps.googleapis.com/maps/api/geocode/json?address=";

  marketPlaceApi ="http://www.cashlessexchange-sb.com/cashlessmerchant/api/marketplace/";
  marketPlaceMerchantApi = "http://www.cashlessexchange-sb.com/cashlessmerchant/api/merchant/";

  constructor(public http: HttpClient,
    private httpclient: Http, 
    private base64: Base64) {
  }


  serviceFreedom(credentials, type) {
    let response: { success: number, message: string };

    return new Promise(resolve => {
      this.http.post(this.freedomTemp + type, "")
      .map(res => res).subscribe(data => {
          data;
          console.log(response);
          resolve(data);
        })
    });

  }


  marketplacepointservice(credentials, type) {
    console.log("in service" + type);
    let response: { id: string, value: string };
    return new Promise(resolve => {
      this.http.post(this.marketplacepointsApi + type, JSON.stringify(credentials))
        .map(res  => res).subscribe(data => {
          data;
          console.log(response);
          resolve(data);
        })
    });
  }

  marketPlaceMerchantService(credentials, type) {
    console.log("in service" + type);
    let response: { id: string, value: string };
    return new Promise(resolve => {
      this.http.post(this.marketPlaceMerchantApi + type, JSON.stringify(credentials))
        .map(res  => res).subscribe(data => {
          data;
          console.log(response);
          resolve(data);
        })
    });
  }


  marketPlaceService(credentials, type) {
    console.log("in service" + type);
    let response: { id: string, value: string };
    return new Promise(resolve => {
      this.http.post(this.marketPlaceApi + type, JSON.stringify(credentials))
        .map(res  => res).subscribe(data => {
          data;
          console.log(response);
          resolve(data);
        })
    });
  }

  serviceTransaction(credentials, type) {
    console.log("in service" + type);
    let response: { id: string, value: string };
    return new Promise(resolve => {
      this.http.post(this.transactioApi + type, JSON.stringify(credentials))
        .map(res  => res).subscribe(data => {
          data;
          console.log(response);
          resolve(data);
        })
    });
  }

  cardService(credentials, type) {
    console.log("in service" + type);
    let response: { id: string, value: string };
    return new Promise(resolve => {
      this.http.post(this.cardServiceApi + type, JSON.stringify(credentials))
        .map(res  => res).subscribe(data => {
          data;
          console.log(response);
          resolve(data);
        })
    });
  }

  certificateService(credentials, type) {
    console.log("in service" + type);
    let response: { id: string, value: string };
    return new Promise(resolve => {
      this.http.post(this.certServiceApi + type, JSON.stringify(credentials))
        .map(res  => res).subscribe(data => {
          data;
          console.log(response);
          resolve(data);
        })
    });
  }

  commissionService(credentials, type) {
    console.log("in service" + type);
    let response: { id: string, value: string };
    return new Promise(resolve => {
      this.http.post(this.affiliateApi + type, "")
        .subscribe(data => {
          data;
          console.log(response);
          resolve(data);
        })
    });
  }

  referralMailAlt(credentials, type) {
    console.log("in service" + type);
    let response: { id: string, value: string };
    return new Promise(resolve => {
      this.http.post(this.refermailApi + type, "")
      .map(res  => res).subscribe(data => {
        data;
        resolve(data);
      })
    });
  }

  referralMail(credentials, type) {
    return this.http.post(this.refermailApi + type, "")
  }
  registerAffiliate(credentials, type) {
    return this.http.post(this.registerAffiliateApi + type, "")
  }

  registerAffiliateAlt(credentials, type) {
    console.log("in service" + type);
    let response: { id: string, value: string };
    return new Promise(resolve => {
      this.http.post(this.registerAffiliateApi + type, "")
      .map(res  => res).subscribe(data => {
        data;
        resolve(data);
      })
    });
  }

  registrate(credentials, type) {
    return this.http.post(this.freedomTemp + type, "")
  }

  merchantService(credentials, type) {
    console.log("in service" + type);
    let response: { id: string, value: string };
    return new Promise(resolve => {
      this.http.post(this.merchantServiceApi + type, JSON.stringify(credentials))
        .map(res  => res).subscribe(data => {
          data;
          console.log(response);
          resolve(data);
        })
    });
  }

  tokenize(credentials, type) {
    let response: any;

    //type = Tokenize
    return new Promise(resolve => {
      this.http.post(this.tokenex + type, credentials)
        .map(res => res).subscribe(data => {
          response = data;
          console.log(response);
          resolve(data);
        })
    });

  }


  tokenizeTrans(credentials, type) {
    let response: any;

    //type = Tokenize
    return new Promise(resolve => {
        this.http.post("https://cashlessexchange-sb.com/cashlessexchangeaffiliate/api/freedomchoiceforte/tokenexForte.php?merchantid="+type, credentials)
        .map(res => res).subscribe(data => {
          response = data;
          console.log(response);
          resolve(data);
        })
    });

  }

  googleAPI(credentials) {
    let type = "&key=AIzaSyBgHHxQ2g5AWCI6jKqPPMHr_ob8RuLSTbI";
    console.log("in service" + credentials);
    let response: { id: string, value: string };
    return new Promise(resolve => {
      this.http.get(this.googleMapsApi + credentials + type)
        .map(res => res).subscribe(data => {
          data;
          console.log(response);
          resolve(data);
        })
    });

  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.freedomApi + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }
}
