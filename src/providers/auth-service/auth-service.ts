import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Base64 } from '@ionic-native/base64';

let forteCustomers = "https://sandbox.forte.net/api/v3/organizations/org_334316/locations/loc_192642/customers/?filter=last_name+eq+Test_last_name";
let forteTransactions = "https://sandbox.forte.net/api/v3/organizations/org_334316/locations/loc_192642/transactions/?filter=bill_to_last_name+eq+Test_last_name";

let apiUrltrans = "https://sandbox.forte.net/api/v3/organization/org_334316/transactions";

let tokenex = "https://test-api.tokenex.com/TokenServices.svc/REST/";

let transactioApi = "http://173.212.238.108/api/freedomchoice.php";

let freedomApi = "http://cashlessexchange-sb.com/marketplace/webservices/";

let googleMapsApi = "https://maps.googleapis.com/maps/api/geocode/json?address=";

@Injectable()
export class AuthServiceProvider {



  constructor(public http: Http, private base64: Base64) {
    console.log('Hello AuthServiceProvider Provider');
  }


  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('X-Forte-Auth-Organization-Id', 'org_334316');
      headers.append('Authorization', 'Basic ' + this.base64.encodeFile("4fefaf5f77d944ce10bdd3d88f7a2da9:51302217c0fbb534f81457adb369930c"));
      let options = new RequestOptions({ headers: headers });
      this.http.post(forteCustomers, JSON.stringify(credentials), options).subscribe(res => {
        resolve(res.json())
      }), (err) => {
        reject(err);
      }
    })
  }

  getCustomerInformation(credentials, type) {
    console.log("in service" + type);
    let response: { id: string, value: string };
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('X-Forte-Auth-Organization-Id', 'org_334316');
      headers.append('Authorization', 'Basic NGZlZmFmNWY3N2Q5NDRjZTEwYmRkM2Q4OGY3YTJkYTk6NTEzMDIyMTdjMGZiYjUzNGY4MTQ1N2FkYjM2OTkzMGM=');
      let options = new RequestOptions({ headers: headers });
      this.http.get(forteCustomers, options)
        .map(res => res.json()).subscribe(data => {
          data;
          console.log(response);
          resolve(data);
        })
    });

  }

  getTransactionInformation(credentials, type) {
    console.log("in service" + type);
    let response: { id: string, value: string };
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('X-Forte-Auth-Organization-Id', 'org_334316');
      headers.append('Authorization', 'Basic NGZlZmFmNWY3N2Q5NDRjZTEwYmRkM2Q4OGY3YTJkYTk6NTEzMDIyMTdjMGZiYjUzNGY4MTQ1N2FkYjM2OTkzMGM=');
      let options = new RequestOptions({ headers: headers });
      this.http.get(forteTransactions, options)
        .map(res => res.json()).subscribe(data => {
          data;
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
      this.http.get(googleMapsApi + credentials + type)
        .map(res => res.json()).subscribe(data => {
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
      this.http.post(transactioApi + type, JSON.stringify(credentials))
        .map(res => res.json()).subscribe(data => {
          data;
          console.log(response);
          resolve(data);
        })
    });

  }

  tokenize(credentials, type) {
    let response: { Error: string, ReferenceNumber: string, Success: boolean, Token: string };

    //type = Tokenize
    return new Promise(resolve => {
      this.http.post(tokenex + type, credentials)
        .map(res => res.json()).subscribe(data => {
          response = data;
          console.log(response);
          resolve(data);
        })
    });

  }

  serviceFreedom(credentials, type) {
    let response: { success: number, message: string };

    return new Promise(resolve => {
      this.http.post(freedomApi + type, "")
        .map(res => res.json()).subscribe(data => {
          data;
          console.log(response);
          resolve(data);
        })
    });

  }

  getTransactions(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('X-Forte-Auth-Organization-Id', 'org_334316');
      headers.append('Authorization', 'Basic ' + this.base64.encodeFile("4fefaf5f77d944ce10bdd3d88f7a2da9:51302217c0fbb534f81457adb369930c"));
      let options = new RequestOptions({ headers: headers });

      this.http.get(apiUrltrans, options).subscribe(res => {
        resolve(res.json())
      }), (err) => {
        reject(err);
      }
    })
  }


}
