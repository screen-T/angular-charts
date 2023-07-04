import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  constructor(private http:HttpClient) { }
  private url ="http://127.0.0.1:3000/"
  findall(){
    return this.http.get(this.url+"data1/all")
  }
  delete(id:any){
    return this.http.delete(this.url+"data1/delete/"+id)
  }
}
