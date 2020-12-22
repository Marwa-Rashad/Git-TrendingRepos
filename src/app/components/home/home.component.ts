import { Component, OnInit } from '@angular/core';
import { GitReposService } from 'src/app/core/services/git-repos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

public repos = [];

  constructor(private _GitReposService: GitReposService ) { }

  ngOnInit(): void {
    this._GitReposService.getRepos().subscribe((data) => {

      this.repos = data.items;
      console.log(this.repos);
      this.repos.forEach(repo => {
        console.log(repo);
      });

    })
  }

}
