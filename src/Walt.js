var Walt = function(top, left, timeBetweenSteps){
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,


  this.$node.addClass('walt');
};

Walt.prototype = Object.create(Dancer.prototype);
Walt.prototype.constructor = Walt;


Walt.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate({'left': '+=50px'}, 'medium').toggleClass('walt2').addClass('animated infinite bounce zoomIn');
};

