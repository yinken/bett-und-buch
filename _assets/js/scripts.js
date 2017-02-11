$(document).ready(init);
function init()
{
  $(window).scroll(scrollManager);
  $(window).resize(navigationResizer);
}
function scrollManager()
{
	var scroll = $(window).scrollTop();
	if (scroll >= 100){
		$('#scroll_navigation').addClass('nav-down');
    $('#scroll_navigation').removeClass('nav-up');
	}
	else{
		$('#scroll_navigation').removeClass('nav-down');
    $('#scroll_navigation').addClass('nav-up');
	}
};

function navigationResizer()
{
  var width = $('body').width();
  $('#scroll_navigation').css('width', width + 'px');

}
