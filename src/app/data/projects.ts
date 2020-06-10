import { Project } from '../models/project';

export class Projects {

lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\ \n\ Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  starWars: Project = {
    id: 'starWars',
    nameLong: 'Simple Star Wars App',
    nameShort: 'Star Wars App',
    frontEnd: 'Angular',
    description: `Simple application that served as practice of Angular Routing, Services, Forms and Observables.\n
    During the development of the "Social App" I realized that I needed more hands on experience with Angular, so over the course of few days this lightweight practice app came to light.`,
    githubUrl: 'https://github.com/Hawke922/star-wars-project',
    liveUrl: 'https://hawke922.github.io/star-wars-project/',
    thumbnailUrl: '/assets/projects/starWars/thumbnail.jpg',
    github: true,
    live: true,
    wip: false,
    pictures: [1, 2]
  };

  datingapp: Project = {
    id: 'datingApp',
    nameLong: 'Social / Dating App',
    nameShort: 'Social App',
    frontEnd: 'Angular, Bootstrap',
    backEnd: 'ASP .Net Core, Entity Framework, SQL Server, Published on Azure',
    description: `My first major project created with intetion to focus on learning. Instead of UI/UX, effort was placed on implementing wide range of .Net Core and Angular features. \n
    App Features: Authentication, Reactive Register and Login forms, SQL Database (seeding data from API), Gallery + Photo Upload, Private Messaging System, "Like" Functionality, Pagination and much more. \n
    If you want to preview live version, please give it a moment to load up as it is hosted on a trial version of Microsoft Azure.`,
    githubUrl: 'https://github.com/Hawke922/DemoApp',
    liveUrl: 'https://demosocialapp.azurewebsites.net/',
    thumbnailUrl: '/assets/projects/datingApp/thumbnail.jpg',
    github: true,
    live: true,
    wip: false,
    pictures: [1, 2, 3, 4, 5]
  };

  iron: Project = {
    id: 'iron',
    nameLong: 'Workout Planner App "Iron"',
    nameShort: 'Workout App',
    frontEnd: 'Angular, Material design',
    backEnd: 'Firebase + Firestore',
    description: 'Fledgling personal project. Got postponed since I started working on "KE-KS.sk" project for client.',
    thumbnailUrl: '/assets/projects/iron/thumbnail.jpg',
    github: false,
    live: false,
    wip: true,
    pictures: [1, 2, 3, 4]
  };

  keks: Project = {
    id: 'keks',
    nameLong: 'Ke-KS.sk o.z.',
    nameShort: 'KE-KS.sk',
    frontEnd: 'Angular, Material Design',
    backEnd: 'Firebase + Firestore',
    description: 'Project I\'m actively working on for "Občianske združenie Košických kaktusárov". App is planned to contain three main parts - blog, gallery and event planner.  \n \n As design was alredy approved by client, project is being worked on right now, see code in github repo.',
    thumbnailUrl: '/assets/projects/keks/thumbnail.jpg',
    githubUrl: 'https://github.com/Hawke922/ke-ks',
    github: true,
    live: false,
    wip: true,
    pictures: [1, 2, 3, 4, 5]
  };

  silver: Project = {
    id: 'silver',
    nameLong: 'Roleplaying Fantasy Game',
    nameShort: 'Fantasy Game',
    frontEnd: 'Angular, Bootstrap',
    backEnd: 'ASP .Net Core, Entity Framework, SQL Server',
    description: 'Personal project I\'ve been working on bit by bit for a few months now. \n \n Lacking just few features and a bit of polish, live version will be published as soon as my schedule wont be occupied by "KE-KS.sk" project.',
    thumbnailUrl: '/assets/projects/silver/thumbnail.jpg',
    githubUrl: 'https://github.com/Hawke922/SilverApp',
    github: true,
    live: false,
    wip: true,
    pictures: [1, 2, 3, 4, 5, 6, 7]
  };
}
