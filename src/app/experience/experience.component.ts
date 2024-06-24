import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = [
    {
      title: '.Net Developer',
      company: 'Naas Solution Ltd',
      duration: '15 Jun 2022 - Continuing',
      responsibilities: [
        'Hospital Management (Project -1)',
        '.NET Core-6, Entity Framework, JavaScript, Jquery, HTML, CSS, RDLC Report, MSSQL DB',
        'Car Parking (Project -2)',
        '.NET Core-6, Entity Framework, JavaScript, Jquery, HTML, CSS, DataTable Report, MSSQL DB',
        'SQMS (Project -3)',
        '.NET Core-8, Entity Framework, JavaScript, Jquery, HTML, CSS, CloseXML and .NetCorePDF Report, MySQL Db'
      ]
    },
    {
      title: 'Data Entry Operator',
      company: 'NASSA GROUP',
      duration: '23 Oct 2019 - 8 Jun 2021',
      responsibilities: [
        'Create spreadsheets to track important customer information and orders.',
        'Transfer data from hard copy to a digital database.',
        'Update customer information in a database.',
        'Organize existing data in a spreadsheet.',
        'Verify outdated data and make any necessary changes to records.'
      ]
    }
  ];
}
