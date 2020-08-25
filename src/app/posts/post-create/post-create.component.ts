import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  enteredTitle: '';
  enteredContent: '';
  @Output() postCreate = new EventEmitter<Post>();

  onAddPost(form: NgForm) {
    const post: Post = {
      title: form.value.title,
      content: form.value.content,
    };
    this.postCreate.emit();
  }
}
