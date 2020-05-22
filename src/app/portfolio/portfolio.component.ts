import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {
  lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\ \n\ Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  starWars: Project = {
    id: 'starWars',
    nameLong: 'Simple Star Wars App',
    nameShort: 'Star Wars App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\ \n\ Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    thumbnailUrl: '/assets/projects/starWars/thumbnail.jpg',
    github: true,
    live: true,
    pictures: [1, 2, 3, 'thumbnail']
  };

  datingapp: Project = {
    id: 'datingApp',
    nameLong: 'Social / Dating App',
    nameShort: 'Social App',
    description: this.lorem,
    thumbnailUrl: '/assets/projects/datingApp/thumbnail.jpg',
    github: true,
    live: true,
    pictures: [1, 2, 3, 4, 5]
  };

  iron: Project = {
    id: 'iron',
    nameLong: 'Workout Planner App "Iron"\n(work in progress)',
    nameShort: 'Workout App',
    description: this.lorem,
    thumbnailUrl: '/assets/projects/iron/thumbnail.jpg',
    github: false,
    live: false,
    pictures: [1, 2, 3, 4]
  };

  keks: Project = {
    id: 'keks',
    nameLong: 'Ke-KS.sk o.z.\n(work in progress)',
    nameShort: 'KE-KS.sk',
    description: this.lorem,
    thumbnailUrl: '/assets/projects/keks/thumbnail.jpg',
    github: true,
    live: false,
    pictures: [1, 2, 3, 4, 5, 6, 7]
  };

  silver: Project = {
    id: 'silver',
    nameLong: 'Roleplaying Fantasy Game\n(work in progress)',
    nameShort: 'Fantasy Game',
    description: this.lorem,
    thumbnailUrl: '/assets/projects/silver/thumbnail.jpg',
    github: true,
    live: false,
    pictures: [1, 2, 3, 4, 5, 6, 7]
  };

  projects: Project[] = [this.keks, this.silver, this.datingapp, this.iron, this.starWars];
  pictures: any[];
  selectedProject: Project;

  activeProjectSource = new BehaviorSubject<Project>(this.keks);
  activeProject = this.activeProjectSource.asObservable();


  constructor() {}

  ngOnInit() {
    this.activeProject.subscribe(project => this.selectedProject = project);
    this.pictures = this.selectedProject.pictures.map((n) => `/assets/projects/${this.selectedProject.id}/${n}.jpg`);
  }

  activateProject(project: Project) {
    this.activeProjectSource.next(project);
    this.pictures = project.pictures.map((n) => `/assets/projects/${project.id}/${n}.jpg`);
  }



}
