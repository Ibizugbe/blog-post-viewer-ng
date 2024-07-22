import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Post {
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  posts: Post[] = [];
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: (data) => {
        this.posts = data;
      },
      error: (err) => {
        this.error = 'Failed to load posts';
        console.error(err);
      }
    });
  }
}
