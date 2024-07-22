import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  post: any;
  error: string | null = null;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).subscribe({
      next: (data) => {
        this.post = data;
      },
      error: (err) => {
        this.error = 'Failed to load post details';
        console.error(err);
      }
    });
  }
}
