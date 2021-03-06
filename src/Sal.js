var Sal = function(top, left, timeBetweenSteps){
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,


  this.$node.addClass('sal');
};

Sal.prototype = Object.create(Dancer.prototype);
Sal.prototype.constructor = Sal;


Sal.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggleClass("sal2");
  this.$node.animate({'left': '+=200px'}, 'slow').toggleClass('sal2').addClass('animated infinite');

};


