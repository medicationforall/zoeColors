$(document).ready(function(){
  console.log('zoe colors ready');
  
  var colors=[
  'violet',
  'purple',
  'indigo',
  'blue',
  'green',
  'yellow',
  'orange',
  'red',
  'brown',
  'pink',
  'lime',
  'olive',
  'gray',
  'turquoise',
  'cyan',
  'lavender',
  'gold',
  'forestgreen',
  'tan',
  'maroon',
  'ivory',
  'white',
  'black'
  ];
  var index=0;
  
  $('.color').on('click',function(event){
    event.preventDefault();
    var color = colors[index];
    
    //$(this).removeClass(color);
    
    index++;
    if(index>colors.length-1){
      index=0;
    }
    
    color = colors[index];
    
    $(this).css('background-color',color);
    
    $('.title').text(color);
  });
});