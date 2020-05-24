import { Component, OnInit } from '@angular/core';
import { Skills } from '../data/skills';
import { ObservablesService } from '../services/observables.service';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  frontend: Skill[] = [this.skills.angular, this.skills.bootstrap, this.skills.material, this.skills.javascript,
    this.skills.typescript, this.skills.css, this.skills.html];
  backend: Skill[] = [this.skills.sharp, this.skills.net, this.skills.entity, this.skills.firebase,
    this.skills.mysql, this.skills.nosql];
  other: Skill[] = [this.skills.git, this.skills.postman, this.skills.xd, this.skills.code];

  selectedSkill: Skill;

  constructor(private skills: Skills, private observablesService: ObservablesService) { }

  ngOnInit() {
    this.observablesService.activeSkill.subscribe(skill => this.selectedSkill = skill);
  }

  activateSkill(skill: Skill) {
    this.observablesService.selectSkill(skill);
    console.log(skill);
  }

}
