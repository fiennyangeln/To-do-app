import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TasksService {
  taskUrl = '/api/tasks';
  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.taskUrl).pipe(
      catchError(this.handleError<Task[]>('getTasks',[]))
    );
  }

  getTask(_id : string) : Observable<Task>{
    const url = `${this.taskUrl}/${_id}`;
    return this.http.get<Task>(url).pipe(
      catchError(this.handleError<Task>('getTask'))
    );
  }

  deleteTask(task:Task) : Observable<Task>{
    const _id = task._id;
    const url = `${this.taskUrl}/${_id}`;
    console
    return this.http.delete<Task>(url,httpOptions).pipe(
      catchError(this.handleError<Task>('deleteTask'))
    );
  }

  updateTask(task: Task) : Observable<any>{
    const _id = task._id;
    const url = `${this.taskUrl}/${_id}`;
    //TODO: DOES  THIS HAVE TO BE ANY?
    return this.http.put<any>(url, task, httpOptions).pipe(
      catchError(this.handleError<any>('updateError'))
    );
  }

  addTask(task: Task) : Observable<Task>{
    return this.http.post<Task>(this.taskUrl,task,httpOptions).pipe(
      catchError(this.handleError<Task>('addTask'))
    );
  }
}
