import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient ,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcomService {
adduserurl:any
verifyurl:any
addproduct:any
disprod:any
  constructor(private httpclient:HttpClient) { 
    this.adduserurl="http://localhost:2000/user";
    this.verifyurl="http://localhost:2000/login";
    this.addproduct="http://localhost:2000/upload";
    this.disprod="http://localhost:2000/dispprod";
  }
 adduser(user:any):Observable<any>
 {
   console.log(user);
  return this.httpclient.post(this.adduserurl,user);
 }
 verify(user:any):Observable<any>{
   console.log(user);
   return this.httpclient.post(this.verifyurl,user);
 }
 addproducts(product:any):Observable<any>{
  
   console.log(product);
   return this.httpclient.post(this.addproduct,product);
 }
 displayproducts(prod:any):Observable<any>{
   console.log(prod);
 return this.httpclient.post(this.disprod,prod);
 }
 bookproducts(id:any,name:any,cost:any,uemail:any):Observable<any>{
  console.log(name);
  // let params = new HttpParams()
  //     .set('email', email)
  //     .set('name', name)
  //     .set('id', id)
  //     .set('cost', cost)

return this.httpclient.post("http://localhost:2000/addprod",{id,name,cost,uemail});
}
cancelbooking(id:any,uemail:any):Observable<any>{
  return this.httpclient.post("http://localhost:2000/cancelprod",{id,uemail})
}
allbooking(uemail:any):Observable<any>{
  return this.httpclient.post("http://localhost:2000/allbookings",{uemail})
}
updatestatus(user:any,cod:any):Observable<any>{
  console.log(user);
  console.log(cod);
  return this.httpclient.post("http://localhost:2000/updatepayment",{user,cod});
}

}
