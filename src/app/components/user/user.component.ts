import {Component, Input, OnInit} from '@angular/core';
import {IPost, IUser} from '../../models';
import {PostService} from '../../services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;

  postsOfUser: IPost[] = [];

  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
    this.postService.getPostsOfUser(this.user.id).subscribe(value => this.postsOfUser = value);
  }

}
