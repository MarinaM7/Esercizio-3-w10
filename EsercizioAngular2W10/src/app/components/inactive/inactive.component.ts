import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/models/posts.interface';
import { get, updatePost } from 'src/app/service/posts.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.scss']
})
export class InactiveComponent implements OnInit {

  posts!: Posts[];

  constructor() {

  }

  async ngOnInit() {
    const posts = await get()
      this.posts = posts;
      console.log(this.posts);

  }

  onActivepost(id:number, i:number) {
    updatePost({active:true},id)
    this.posts.splice(i,1)
  }
}
