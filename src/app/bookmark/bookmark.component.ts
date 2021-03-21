import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  
  bookmarks = [];

  getBookmarks() { 
    const data = JSON.parse(localStorage.getItem('bookmarks'));
    if(data !== null) {
      this.bookmarks = data;

    }

  }

  constructor() { }

  ngOnInit(): void {
    this.getBookmarks();
  }
}
