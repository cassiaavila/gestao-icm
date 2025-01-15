//import { API } from '@/app/shared/service/client-api.service';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Subject } from "rxjs";



export interface FilterList {
  data: any
  count: number
  limit: number
  offset: number
}

export interface FilterSelect {
  label: string
  value: string
}

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public showModal = new Subject<string>();


  resultList: BehaviorSubject<any> = new BehaviorSubject<any>({})
  constructor(
    //private request: API,
  ) { }

  setService(newValue: FilterList) {
    this.resultList.next(newValue)
  }

  getService() {
    return this.resultList.asObservable()
  }

  async find_service(first: any, rows: any, name = '', search = '') {
    try {
     // const result = await this.request.API().get<FilterList>(`/${name}?offset=${first}&limit=${rows}&search=${search}`);
      //if (result.status === HttpStatusCode.Ok) {
     //   this.setService(result?.data?.data)
     // } else {
        throw new Error()
      //}
    } catch (e) {
      console.error('Error:', e);
      throw e
    }
  }
}
