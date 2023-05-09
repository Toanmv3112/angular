import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { CategoryServiceService } from 'src/app/_services/category-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  list: any;
  token:any;
  pagingData:any;
  activeUrlPage:any = null;
  currentPage:any = null;

  constructor(
    private router:Router,
    private activeRoute:ActivatedRoute,
    private categoryService: CategoryServiceService) {
      //lắng nghe khi có sự thay đổi url
     this.activeRoute.queryParams.subscribe(p=>{
        this.currentPage = p['page'];
        this._list();
      });
    }

  private _list() {
    // this.token= localStorage.getItem("TOKEN");
    this.categoryService
      .list(this.currentPage)
      .pipe(map((res) => (res = res.data)))
      .subscribe((res) => {
        this.list = res.data;
        this.pagingData= res.links;
        // console.log(res);
      });
  }
  del(id: number) {
    if (confirm('Delete?')) {
      this.categoryService.del(id).subscribe((res) => {
        this._list();
      },(error)=>{
        alert("Loi xay ra, vui long thu lai")
      });
    }
  }

  getActiveUrlPage(pageNumber:any){
      //this.activeUrlPage= url;
      //this._list();
      this.router.navigate(['categories'],{queryParams:{page:pageNumber}});
  }

  ngOnInit(): void {
    this._list();
    
  }
}
