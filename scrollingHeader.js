$.fn.extend(
{
	ScrollingHeader:function()
	{
		return this.each(function()
		{
			var THRESHOLD = $(this).height();
			var _isOverlay = false;
			var me = this;
			
			var $filler = $('<div class="s-h-fill">&nbsp;</div>').hide();
			$(this).after($filler);
			
			var CheckScrollPosition = function()
			{
				// ie uses scrollTop
				var p = window.scrollY || document.body.parentNode.scrollTop;
				
				if (p > THRESHOLD && !_isOverlay)
				{
					EnableHeader();
				}
				else if (p < THRESHOLD)
				{
					DisableHeader();
				}
				
				prevHeight = p;
			};
			
			var EnableHeader = function()
			{
				$(me).addClass('overlay');
				$filler.css('height',THRESHOLD+'px').show();
				_isOverlay = true;		
			};
			
			var DisableHeader = function()
			{
				$(me).removeClass('overlay');
				$filler.hide().css('height','0px');
				_isOverlay = false;
			};
			
			$(document).on('scroll',CheckScrollPosition);	
			CheckScrollPosition();
		});
	}
});

$(function()
{
	$('.s-h').ScrollingHeader();
});