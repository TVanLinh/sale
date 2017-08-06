import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class TaskService {
  constructor(private  http: Http) {
  }

  public getTask(url: string) {
    // let header = new Headers({'Access-Control-Allow-Origin': '*'});
    // let options = new RequestOptions({headers: header});
    return this.http.get(url).map((data: Response) => {
      // data.headers = header;
      return data.json();
    });
  }
}
