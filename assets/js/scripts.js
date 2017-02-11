$(document).ready(init);
function init()
{
  $(window).scroll(scrollManager);
  $(window).resize(navigationResizer);
}
function scrollManager()
{
	var scroll = $(window).scrollTop();
	if (scroll >= 200){
		$('#scroll_navigation').addClass('nav-down');
    $('#scroll_navigation').removeClass('nav-up');
    $('#logo').css({
      'opacity': 0,
    })
    $('#fixed-logo').css({
      'opacity': 1,
    });

	}
	else{
		$('#scroll_navigation').removeClass('nav-down');
    $('#scroll_navigation').addClass('nav-up');
    $('#logo').css({
      'opacity': 1,
    })
    $('#fixed-logo').css({
      'opacity': 0,
    });
	}
};

function navigationResizer()
{
  var width = $('body').width();
  $('#scroll_navigation').css('width', width + 'px');

}
