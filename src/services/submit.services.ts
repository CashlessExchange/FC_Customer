export class SumbitService {
    private sending: {lastname:string, firstname:string, companyname:string};

    addSubmit(data:{lastname:string, firstname:string, companyname:string}){
        console.log(data.firstname);
        console.log(data.lastname);
        console.log(data.companyname);

    }
}