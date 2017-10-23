import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Storage } from '@ionic/Storage';

@Injectable()
export class CardService {
    //private cards:{cardname:string,cardowner:string,cardnumber:string,month:string,year:string,checkdigit:string,icon:string}[] =[];
    cards: string[] = [];
    constructor(public storage: Storage) {
    }

    async addCard(card: { cardname: string, cardowner: string, cardnumber: string, month: string, year: string, checkdigit: string, icon: string }) {
        //this.cards.push(card);
        console.log(this.cards);

        alert("after save");
        return true;


    }
    getCards() {
        return this.storage.get('card7').then((cards) => {
            console.log(cards);
            this.cards = cards;
            console.log(this.cards);
            return this.cards;
        });
        //return this.cards;
    }
}