import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy{
  public isProductVisible : boolean = false;
  public changePrice : number = 10;

  public increasePrice(){
    this.changePrice++;
  }

  constructor(){
    console.log('Constructor');
    
  }
  ngOnInit(): void {
    console.log('ngOnInit');
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');  
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
    
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
    
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    
  }

}
