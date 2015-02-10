var breakDancer = function(top, left, timeBetweenSteps){
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,

  var img = $('<img src="walt.png" />')
  this.$node.addClass('breakDancer'); //.append(img).fadeIn();
  this.$node.addClass('leg');
  console.log(this.$node);

};

breakDancer.prototype = Object.create(Dancer.prototype);
breakDancer.prototype.constructor = breakDancer;


breakDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
