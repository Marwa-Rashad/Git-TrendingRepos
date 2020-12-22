import { Component, OnInit, Output, ɵɵgetCurrentView } from '@angular/core';
import { GitReposService } from 'src/app/core/services/git-repos.service';
import { Repo } from 'src/app/types/repo'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _GitReposService: GitReposService) { }

  public repos: Repo[] = [];
  public repo: Repo;


  private dt = new Date();
  private dateString: string = "";

  //As per github api documents, the api returns up to 1,000 results for each search,
  // with 30 results per page
  public totalPages: number = 34;
  public totalNumber: number = 0;
  public pageNum: number = 1;

  ngOnInit(): void {

  //Date 30 days ago

    this.dt.setDate(this.dt.getDate() - 30);
    this.dateString = this.dt.getFullYear() + '-' + this.dt.getMonth() + '-' + this.dt.getDate();

    //Get repos
    this.fetchrepos(this.dateString, this.pageNum);

  }


  fetchrepos(date: string, pageNum: number) {
    this._GitReposService.getRepos(date, pageNum).subscribe((data) => {
      this.totalNumber = data.total_count;

      for (let i = 0; i < data.items.length; i++) {
        this.repo = {
          name: data.items[i].name,
          description: data.items[i].description,
          stargazers_count: data.items[i].stargazers_count,
          open_issues_count: data.items[i].open_issues_coun,
          created_at: data.items[i].created_at,
          owner_login: data.items[i].owner.login,
          owner_avatar: data.items[i].owner.avatar_url
        }

        this.repos.push(this.repo);
      }

      //If result total count is less than 1000, update total pages count
      if ((this.totalNumber) < 1000) {
        this.totalPages = Math.ceil(this.totalNumber / 30);
      }
    }),
      (err: Error) => {

        console.log(err);
      }
  }
  //Lazy Loading page results

  onScrollDown() {
    this.pageNum++;
    this.fetchrepos(this.dateString, this.pageNum);
    if (this.pageNum > this.totalPages) {
      return;
    }
  }

}
