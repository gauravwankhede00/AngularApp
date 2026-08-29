import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from '../core/model/user';
import { UserType } from '../shared/directive/user-type';
import { HasPermission } from '../shared/directive/has-permission';
import { LazyRender } from '../shared/directive/lazy-render';
import { CommonModule } from '@angular/common';
import { Post, Posts } from '../core/model/post';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserType, HasPermission, LazyRender, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('AngularApp New');

  currentUser: User = {
    email: '',
    id: 0,
    name: 'John Doe',
    role: 'owner',
    userType: 'Gold'
  };


  //posts : Post[] = Posts;
  allPosts: Post[] = [];       // full 100 items — already available
  visiblePosts: Post[] = [];   // currently rendered slice
  pageSize = 10;
  currentIndex = 0;            // how many items shown so far
  noMoreData = false;

  ngOnInit() {
    this.allPosts = Posts; // your ready data goes here
    this.loadMore(); // load first 10 immediately
  }

  trackByPostId(index: number, post: Post): string {
    return post.name;
  }

  loadMore() {
    if (this.noMoreData) return;

    const next = this.allPosts.slice(this.currentIndex, this.currentIndex + this.pageSize);

    if (next.length === 0) {
      this.noMoreData = true;
      return;
    }

    this.visiblePosts = [...this.visiblePosts, ...next];
    this.currentIndex += this.pageSize;

    if (this.currentIndex >= this.allPosts.length) {
      this.noMoreData = true;
    }
  }

}
