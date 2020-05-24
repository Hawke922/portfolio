import { Project } from '../models/project';

export class Projects {
lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\ \n\ Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  starWars: Project = {
    id: 'starWars',
    nameLong: 'Simple Star Wars App',
    nameShort: 'Star Wars App',
    description: this.lorem,
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
}
