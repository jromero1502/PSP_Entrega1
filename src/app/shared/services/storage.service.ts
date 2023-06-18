import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  sessionStorage = sessionStorage

  localStorage = localStorage

  constructor() { }

  setSession(key: string, object: any) {
    let obfuscatedObject = btoa(JSON.stringify(object))
    this.sessionStorage.setItem(key, obfuscatedObject)
  }

  getSession(key: string): any {
    let sessionStorageItem = this.sessionStorage.getItem(key)
    return JSON.parse(atob(sessionStorageItem ?? ''))
  }
}
