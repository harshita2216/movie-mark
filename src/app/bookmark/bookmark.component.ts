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
      console.log("Bookmarked!");

    }

  }
  removeBookmarks(title){
    for(let i=0;i<this.bookmarks.length;i++){
      if(this.bookmarks[i] === title){
        this.bookmarks.splice(i,1);
        localStorage.setItem('bookmarks',JSON.stringify(this.bookmarks));
        return;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.getBookmarks();
  }
}
