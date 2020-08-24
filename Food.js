class Food {
  constructor(){
  this.foodStock=0;
  this.lastFed;
  this.image=loadImage('Milk.png');
  }

 updateFoodStock(foodStock){
  this.foodStock=foodStock;
 }

 getFedTime(lastFed){
   this.lastFed=lastFed;
 }

 deductFood(){
   if(this.foodStock>0){
    this.foodStock=this.foodStock-1;
   }
  }

  getFoodStock(){
    return this.foodStock;
  }

  display(){
    var x=1000,y=100;
    
    imageMode(CENTER);
    image(this.image,100,450,70,70);
    
    if(this.foodStock!=0){
      for(var i=0;i<this.foodStock;i++){
        if(i%10==0){
          x=500;
          y=y+50;
        }
        image(this.image,x,y,50,50);
        x=x+30;
      }
    }
  }
}