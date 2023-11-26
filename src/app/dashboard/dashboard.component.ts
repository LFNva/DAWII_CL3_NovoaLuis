import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private route:ActivatedRoute, private router:Router){

  }

  onNavigateToHomePage():void{
    this.router.navigate(['home'], {relativeTo: this.route})
  }
  onNavigateToPregunta01Page():void{
    this.router.navigate(['pregunta01'], {relativeTo: this.route})
  }
  onNavigateToPregunta02Page():void{
    this.router.navigate(['pregunta02'], {relativeTo: this.route})
  }
  onNavigateToPregunta03Page():void{
    this.router.navigate(['pregunta03'], {relativeTo: this.route})
  }
}
