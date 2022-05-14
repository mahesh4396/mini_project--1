import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 

  showName: any;
  display: any;
  menuName: any;
  items: any;
  checked: any;
  i:any;
  // args:any;
  listviewInstance:any;
  
  
  headerSection: boolean = true;
  middleSection: boolean = true;
  footerSection: boolean = true;
  // fruitImage:boolean=false;

  ListOfItems: string[] = [];
  array = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  fruits() {
    this.router.navigate(['/fruits'])
    // this.headerSection = false;
    // this.middleSection = false;
    // this.footerSection = false;
  }
  vegetables() {
    this.router.navigate(['/vegetables'])
    // this.headerSection = false;
    // this.middleSection = false;
    // this.footerSection = false;
  }
  Juices() {
    this.router.navigate(['/juices'])
    // this.headerSection = false;
    // this.middleSection = false;
    // this.footerSection = false;

  }
  icecream() {
    this.router.navigate(['/icecrem'])
    // this.headerSection = false;
    // this.middleSection = false;
    // this.footerSection = false;

  }
  displayName() {
    this.display = true;

  }
  MenuList() {
    
    this.display = true;
    this.array = this.menuName;
    console.log(this.array);
    this.ListOfItems.push(this.menuName)
    console.log(this.ListOfItems)

    this.menuName = '';

  }

  RemoveList(index:number) {
   
     this.ListOfItems.splice(index, 1)
    
    
  }

}
