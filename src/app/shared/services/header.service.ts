
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  headers: { [url: string]: { [key: string]: string } } = {};
  /**
   * Method which is used to set the headers for the given url.
   * @param url {string} To define the url.
   * @param key {string} To define the key.
   * @param valu {string} To define the value.
   */
  public setHeaders(url: string, key: string, value: string) {
    // To check the header have given url as properly
    if (this.headers && this.headers.hasOwnProperty(url)) {
      this.headers[url][key] = value;
      console.log('setHeaders: ', this.headers);
    } else {
      this.headers[url] = { [key]: value };
      console.log('setHeaders Else: ', this.headers);
    }
  }
  /**
   * Method which is used to clear the headers for the given url.
   * @param url {string} T0 define the url
   * @param key {string} To define the key
   * @return {string}
   */

  public clearHeaders(url: string, key: string) {
    // To check the headers have given url as properly and key
    if (this.headers && this.headers.hasOwnProperty(url) && this.headers[url].hasOwnProperty(key)) {
      const val = this.headers[url][key];
      delete this.headers[url][key];
      return val;
    }
    return Token;
  }
  /**
   * Method which is used to get the headers for the given url.
   * @param url {string} To define the url of the request. 
   */
  public getHeaders(url: string) {
    if (this.headers && this.headers.hasOwnProperty(url)) {
      console.log('getHeaders If: ', this.headers[url]);
      return this.headers[url];
    } else {
      console.log('getHeaders else: ', this.headers['default']);
      return this.headers['default'];
    }
  }
}