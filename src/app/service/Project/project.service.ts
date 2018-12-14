import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Project } from '../../model/Project';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const projectsUrl = "http://localhost:9191/project-manager-api/projects";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }

  getProjects(): Observable<any> {
    let observables = this.httpClient.get(projectsUrl)
    return observables
  }

  addProject(project: Project): Observable<any> {
    //console.log('insert method>>>');
    //console.log(JSON.stringify(project));
    return this.httpClient.post(projectsUrl, JSON.stringify(project), httpOptions);
  }

  suspendProject(projectId: number): Observable<any> {
    return this.httpClient.delete(projectsUrl + '?projectId='+ projectId);
  }

  editProject(projectId: number, project: Project): Observable<any> {
    //console.log(JSON.stringify(project));
    return this.httpClient.put(projectsUrl,
      project, httpOptions);
  }

  getProjectByName(projectName: String): Observable<any> {
    //console.log("projectName" + projectName);
    return this.httpClient.get(projectsUrl+'?projectName=' + projectName);
  }

  sortProjects(sortType: number): Observable<any> {
    return this.httpClient.get(projectsUrl+'?sorttype=' + sortType);
  }

}
