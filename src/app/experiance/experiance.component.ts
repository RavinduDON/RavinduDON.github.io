import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-experiance',
  templateUrl: './experiance.component.html',
  styleUrls: ['./experiance.component.css']
})
export class ExperianceComponent implements OnInit {

  sub: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.snapshot.paramMap.get('sub');
    this.router.navigate(['languages'], {relativeTo: this.activatedRoute});
  }



}
