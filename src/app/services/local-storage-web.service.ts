import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageWebService {
  constructor() {}

  public saveValue(key: string, value: any) {
    localStorage.setItem(this.key(key), JSON.stringify(value));
    // this.storage.store();
  }

  public getValue(key: string) {
    return JSON.parse(localStorage.getItem(this.key(key))!);
  }

  public clearValue(key: string) {
    localStorage.removeItem(this.key(key));
  }

  public key(key: string) {
    return key;
  }

  public hasValue(key: string): boolean {
    const value = this.getValue(key);
    if (value && value !== '') {
      return true;
    }

    if (value) {
      // value is empty - remove it
      this.clearValue(key);
    }
    return false;
  }
}
