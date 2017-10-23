import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Storage } from '@ionic/Storage';

@Injectable()
export class CertificateService {
    private certificate: string[] = [];
    constructor(public storage: Storage) {
    }

    async addCert(certificate: string) {
        this.certificate.push(certificate);
        console.log(this.certificate);
        return true;
    }
    getCertis() {
        return this.storage.get('certis1').then((certificate) => {
            console.log(certificate);
            this.certificate = certificate;
            console.log(this.certificate);
            return this.certificate;
        });
        //return this.cards;
    }
}