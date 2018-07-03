import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Article } from '../shared/article'
import {Observable} from "rxjs";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public article: Article;
  public articles;
  public subscription: Subscription;

  constructor(private blogService: BlogService) {
/*    this.articles = this.blogService.getNewArticles().subscribe(articles => {
      this.updateArticles(articles);
    });*/
  }

  ngOnInit() {
    this.articles = this.getArticles();
  }

  public getArticles():any  {
    this.articles = this.blogService.getArticles();

    return this.articles;

      /*.subscribe(
        res => {
          this.articles = res.results;
        },
      );*/
  }



  public editArticle(article) :any {
    this.articles = this.blogService.editArticle(article);
  }

  public deleteArticle(article): void  {
    this.articles = this.blogService.deleteArticle(article);

    return this.articles;

    /*.subscribe(
     res => {
     this.articles = res.results;
     },
     );*/
  }

/*  public updateArticles(articles) :any {
    console.log('articles', articles);
    return this.articles = articles;
  }*/
}
