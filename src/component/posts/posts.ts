import { Component, OnInit } from '@angular/core';
import { Post } from '../../core/model/post';
import { PostsData } from '../../core/constant/DummyData/posts';
import { LazyRender } from '../../shared/directive/lazy-render';
import { CommonModule } from '@angular/common';
import { TextTrimmerPipe } from '../../shared/pipe/text-trimmer-pipe';

@Component({
  selector: 'app-posts',
  imports: [ LazyRender, CommonModule, TextTrimmerPipe ],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit {

  allPosts: Post[] = [];
  visiblePosts: Post[] = [];
  pageSize = 10;
  currentIndex = 0;
  noMoreData = false;

  ngOnInit() {
    this.allPosts = PostsData;
    this.loadMore();
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
