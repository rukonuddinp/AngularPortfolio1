import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'MVC',
    'MVC Core',
    'NodeJs',
    'Angular',
    'API',
    'RESTful Service',
    'MS SQL',
    'Oracle',
    'Microsoft Word',
    'Microsoft Excel',
    'Microsoft PowerPoint',
    'Adobe Photoshop',
    'Adobe Illustration'
  ];

}
