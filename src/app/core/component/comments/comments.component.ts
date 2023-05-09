import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  date = new Date();
  comment: string = "";
  reply_val!: any
  name = 'Ashwini Prem';
  isreply = false;
  len: number = 0;
  posts: any[] = [
    // { name: this.name, date: this.date, comment: this.comment, reply: [], isreply: false },
    // { name: this.name, date: this.date, comment: this.comment, reply: [], isreply: false }
  ];
  AddPost() {
    if (this.comment.length > 1) {
      this.posts = [...this.posts, ({ name: this.name, date: this.date, comment: this.comment, reply: [], isreply: false })];
      this.comment = "";
      this.len = this.posts.length;
    }
    console.log("len", this.len);
  }

  AddReply(i: number) {
    if (this.reply_val.length > 1) {
      this.posts[i].reply.push({ name: this.name, date: this.date, comment: this.reply_val });
      this.reply_val = "";
      this.posts[i].isreply = false;
    }

  }
  isreplyFun(i: number) {
    this.posts[i].isreply = true;
  }

  reset(i: any) {
    this.posts[i].isreply = false;
    this.reply_val = "";
  }
}


