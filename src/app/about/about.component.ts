import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
 
  name = 'Rukon Uddin';
  position = '(C# .Net Developer)';
  
  contact = {
    phone1: '01952043521',
    phone2: '01301838864',
    email: 'rukon2280@gmail.com'
  };
  careerObjective = `Experienced Software Engineer with a demonstrated history of working
   in the information technology and services industry. 
   I have practical knowledge of custom software design, development, 
   and coding, as well as to hone my talents and improve the company.`;
  
}
