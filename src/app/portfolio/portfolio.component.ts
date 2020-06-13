import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { Projects } from '../data/projects';
import { ObservablesService } from '../services/observables.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {

  projectsArray: Project[] = [this.projects.keks, this.projects.datingapp, this.projects.starWars, this.projects.silver,
    this.projects.iron];

  pictures: any[];

  selectedProject: Project;

  constructor(private projects: Projects, private observablesService: ObservablesService) {}

  ngOnInit() {
    this.observablesService.activeProject.subscribe(project => this.selectedProject = project);
    this.pictures = this.selectedProject.pictures.map((n) => `/portfolio/assets/${n}.jpg`);
  }

  activateProject(project: Project) {
    this.observablesService.selectProject(project);
    this.pictures = project.pictures.map((n) => `/portfolio/assets/${n}.jpg`);
  }

}
