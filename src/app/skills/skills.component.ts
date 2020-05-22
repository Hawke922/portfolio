import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  angular = {
    id: 'angular',
    name: 'Angular',
    color: 'linear-gradient(225deg, #B52E31, #010615, #E23237)'
  };

  bootstrap = {
    id: 'bootstrap',
    name: 'Bootstrap',
    color: 'linear-gradient(225deg, #563D7C, #010615, #563D7C)'
  };

  code = {
    id: 'code',
    name: 'VS Code',
    color: 'linear-gradient(225deg, #B52E31, #010615, #E23237)'
  };

  css = {
    id: 'css',
    name: 'CSS3',
    color: 'linear-gradient(225deg, #B52E31, #010615, #E23237)'
  };
  
  firebase = {
    id: 'firebase',
    name: 'Google Firebase',
    color: 'linear-gradient(225deg, #B52E31, #010615, #E23237)'
  };

  nosql = {
    id: 'firebase',
    name: 'NoSQL (Firebase)',
    color: 'linear-gradient(225deg, #B52E31, #010615, #E23237)'
  };
  
  git = {
    id: 'git',
    name: 'Git',
    color: 'linear-gradient(225deg, #B52E31, #010615, #E23237)'
  };

  html = {
    id: 'html',
    name: 'HTML5',
    color: 'linear-gradient(225deg, #B52E31, #010615, #E23237)'
  };
  
  javascript = {
    id: 'javascript',
    name: 'JavaScript',
    color: 'linear-gradient(225deg, #B52E31, #010615, #E23237)'
  };
  
  material = {
    id: 'material',
    name: 'Material Design',
    color: 'linear-gradient(225deg, #B52E31, #010615, #E23237)'
  };
  
  mysql = {
    id: 'mysql',
    name: 'SQL Databse (MySQL)',
    color: 'linear-gradient(225deg, #B52E31, #010615, #E23237)'
  };
  
  net = {
    id: 'net',
    name: '.Net Core',
    color: 'linear-gradient(225deg, #B52E31, #010615, #E23237)'
  };

  entity = {
    id: 'net',
    name: 'Entity Framework Core',
    color: 'linear-gradient(225deg, #B52E31, #010615, #E23237)'
  };

  postman = {
    id: 'postman',
    name: 'Postman',
    color: 'linear-gradient(225deg, #B52E31, #010615, #E23237)'
  };
  
  sharp = {
    id: 'sharp',
    name: 'C#',
    color: 'linear-gradient(225deg, #B52E31, #010615, #E23237)'
  };
  
  typescript = {
    id: 'typescript',
    name: 'Typescript',
    color: 'linear-gradient(225deg, #B52E31, #010615, #E23237)'
  };
  
  xd = {
    id: 'xd',
    name: 'Adobe XD',
    color: 'linear-gradient(225deg, #B52E31, #010615, #E23237)'
  };

  frontend = [this.angular, this.bootstrap, this.material, this.javascript, this.typescript, this.css, this.html];
  backend = [this.sharp, this.net, this.entity, this.firebase, this.mysql, this.nosql];
  other = [this.git, this.postman, this.xd, this.code];

  constructor() { }

  ngOnInit(): void {
  }

}
