import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Article } from '../shared/article';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-detail',
  templateUrl: 'article-detail.component.html',
  styleUrls: ['article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  public articles = this.blogService.getArticles();
  public article = {title: "", caption:"", isPublish:"", content:"", id:this.articles.length};

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {

    this.route.params.forEach((params) => {
      if (params['id'] !== undefined && params['id'] !== 'new') {
        let id = +params['id'];
        this.article = this.blogService.getArticle(id);

        /*.then(article => this.article = article);*/
      } else {
        console.log('new art');

       }
    });
  }

  public saveArticle() {
      console.log(this.article);
      this.articles = this.blogService.save(this.article);
      console.log(this.articles);

      return this.articles;
  }

  public goBack() {
    this.location.back();
  }

}
