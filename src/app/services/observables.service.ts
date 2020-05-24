import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../models/project';
import { Projects } from '../data/projects';
import { Skills } from '../data/skills';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {

  constructor(private projects: Projects, private skills: Skills) { }

  activeProjectSource = new BehaviorSubject<Project>(this.projects.keks);
  activeProject = this.activeProjectSource.asObservable();

  activeSkillSource = new BehaviorSubject<Skill>(this.skills.angular);
  activeSkill = this.activeSkillSource.asObservable();

  selectProject(project: Project) {
    this.activeProjectSource.next(project);
  }

  selectSkill(skill: Skill) {
    this.activeSkillSource.next(skill);
  }
}
