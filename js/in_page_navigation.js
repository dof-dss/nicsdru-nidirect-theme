(function($){"use strict";$("#main-article h2").each(function(index){$(this).attr("id","ipn-"+index);$(".toc ul").append('<li class="nav-item"><a href="#ipn-'+index+'">'+$(this).text()+"</a></li>")})})(jQuery);