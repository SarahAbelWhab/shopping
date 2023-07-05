import { Component, ViewChild, ElementRef, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnChanges{

  @ViewChild('name') name:ElementRef;
  amount:number;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientEdited = new EventEmitter<Ingredient>();
  @Input() ingredientToEdit:Ingredient;

  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
    if(this.ingredientToEdit){
      this.name.nativeElement.value = this.ingredientToEdit.name;
      this.amount = this.ingredientToEdit.amount
    }
  }
  onAdd(){ 
    this.ingredientAdded.emit({name:this.name.nativeElement.value,amount:this.amount});
  }

  onDelete(){

  }

  onClear(){
    this.name.nativeElement.value = '';
    this.amount = undefined;

  }
  onEdit(){
    this.ingredientEdited.emit({name:this.name.nativeElement.value,amount:this.amount});
  }
}
