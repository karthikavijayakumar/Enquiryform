import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  enquiries: { name: string, email: string, phonenumber: string, message: string }[] = [];



  getEnquiries = () => {

    return this.enquiries
  }
  //name: string, phonenumber: string, email: string, message: string

  submit = (name: string, phonenumber: string, email: string, message: string) => {

    this.enquiries.push({

      name, phonenumber, email, message

    })


  }

  constructor() { }
}


