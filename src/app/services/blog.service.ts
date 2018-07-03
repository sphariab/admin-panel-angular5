import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../shared/article';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BlogService {
  public article: Article;

  private subject = new Subject<any>();

  constructor(private http: HttpClient) { }

  public articles: Article[] = [
    {
      title: "IT IS JUST THE BEST TIME TO MEET ZODIACU’",
      caption: "Welcome to Zodiacu",
      content: `When we started our work on Zodiacu we wanted it to become a new Supernova star among the numerous online casinos. Challenge accepted, we said to ourselves, now it’s time to get things done.
          Our casino breaks the wall between player’s real life and his in-game role. To make it about any player in the world we decided that every user gets a zodiac sign character based on his real date of birth. Even more - all the way through player will get horoscopes, predictions, gaming hints, even unique sign bonuses and challenges.
          We made a huge study (science, baby!) and casino concept is based on unique custom psychological research of modern online player behavior. All the features of the product are created in order for the player to meet his gaming expectations, keep the gambling process responsible and satisfy player’s core emotional needs.
          Of course, we needed a super-hero to help us with all our ambitions. That was the time when he came to our lives ­– like a thunder from the blue sky – the Prophet of our Universe, the true Oracle of Zodiacu. He told us that all his life he watched the stars and on the 135th year of watching they opened to him and told him the past - about the wars of antiquity, about victories and defeats, about the rise of kings and empires and about their overthrow into dust.
          He told us how the stars taught him about himself and about the world around him so he could became the Oracle and soothsayer. Of course he became famous and that was the time when disciples began to follow him.
          By the age of 200 (now he is a bit older, we are not getting younger, you know) he began to understand the future tense in star’s language, their predictions, and he was able to look into what was yet to happen. Only 12 students did not leave the Oracle. At the end of his earthly journey, the Oracle gathered all the disciples and shared his knowledge. Everyone was able to take away only a part of it, and therefore these 12 disciples, as well as their disciples, are still doomed to gather together in the oracle circle to see what was to come.
          Could we believe that such a wise powerful cosmic creature would become the part of our project?! No! But he did. And he did not just become the beginning of our story – he is looking forward to become the trusted companion of your Zodiacu experience.
          See you soon in our blog, guys!
          More is coming. Welcome to Zodiacu Universe.`,
      isPublish: "No",
      id: 0
    },
    {
      title: "another  title",
      caption:"another cation",
      content: "another content",
      isPublish: "Yes",
      id: 1
    }

  ];

  public getArticles(){
      /*return this.http.get()
      .map( (res: any) => {
        return res.json();
      })
      .catch((err: Error) => {
        return Observable.of(err || 'Cannot get user profile');
      });*/

      return  this.articles;
  }

  public getArticle(id: number) :any{
      this.articles =  this.getArticles();
      console.log(this.articles);
      this.articles.forEach(function(item: Article) {
         if(item.id === id){
           this.article = item;
         }
      }.bind(this));
      return this.article;
  }

  public deleteArticle(article: Article) :any{
      this.articles = this.articles.filter((item)=>{
        return item.id !== article.id;
      });

      return this.articles;
  }

  public save(article) :any {
    this.articles.push(article);

    this.articles = this.articles.map((item, index)=> {
      if (item.id === article.id) {
        this.articles = this.articles.splice(index, 1, item);
      }

      return item;
    });


    console.log(this.articles);
    return this.articles;

  }
  public editArticle(article) :any{

    console.log(this.articles);
   /* this.updateArticles(this.articles);*/
  }

  public addArticle(article: any){

/*    console.log(this.articles);
    this.updateArticles(this.articles);*/
  }

}
