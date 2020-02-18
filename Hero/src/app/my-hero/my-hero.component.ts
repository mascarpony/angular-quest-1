import { Component, OnInit } from '@angular/core';

import { skillsInterface } from "./my-hero-interface";

@Component({
  selector: 'app-hero',
  templateUrl: './my-hero.component.html',
  styleUrls: ['./my-hero.component.scss']
})
export class MyHeroComponent implements OnInit {

  constructor() { }

  name = 'Ilia Kaminskii';
  spec = 'Fontend developer';
  edu = 'SPbGU faculty of journalism and mass communications'
  mySkills:skillsInterface[] = [
    {id: 1, name: 'JavaScript', time: '2 years exp'},
    {id: 2, name: 'HTML', time: '3 years exp'},
    {id: 3, name: 'CSS', time: '4 years exp'},
    {id: 4, name: 'Python', time: '2 years exp'},
    {id: 5, name: 'React', time: '2 month exp'},
    {id: 5, name: 'Angular', time: '2 weeks exp'}
  ]

  show = true;

  ngOnInit(): void {
  }

}
