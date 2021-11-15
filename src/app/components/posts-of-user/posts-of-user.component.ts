import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../models';

@Component({
  selector: 'app-posts-of-user',
  templateUrl: './posts-of-user.component.html',
  styleUrls: ['./posts-of-user.component.css']
})
export class PostsOfUserComponent implements OnInit {

  @Input()
  postsOfUser: IPost[];

  constructor() {

  }

  ngOnInit(): void {

  }

}
