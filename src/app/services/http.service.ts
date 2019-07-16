import { Injectable , PLATFORM_ID, Inject, Injector} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public baseURL : any;
  injector: Injector;

  constructor(public _http : HttpClient, injector: Injector) { 
   this.baseURL = environment.baseURL;
  }


  /*****************************************************************************************/
	httpRequest(url:any, data:any, method:any): Promise<any> {	
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=UTF-8'
      })
    };

		return new Promise((resolve, reject) => {
			if(method == 'post'){
				this._http.post(this.baseURL + url, data, httpOptions).subscribe(data => { 
          resolve(data) 
        }, error => { 
          this.showServerError(error)
        })
			}else if(method == 'get'){
				this._http.get(this.baseURL + url, httpOptions).subscribe(data => { 
          resolve(data) 
        }, error => { 
          this.showServerError(error)
        })
			}
		})
  }

  showServerError(error){
    console.group("API Error")
    console.log(error);
    console.groupEnd();
  }
  
}
