(function($,Drupal){Drupal.behaviors.nicsdruAccordions={attach:function attach(context){$(".accordion",context).once("nicsdruAccordions").each(function(index){var acc_title_visible=$(this).find(".accordion-heading").length?true:false;if(!acc_title_visible){$("h3.accordion-section-title").replaceWith(function(){return $('<h2 class="accordion-section-title" />').append($(this).contents())})}var $acc_headings=$(this).find(".accordion-section-title");var $acc_sections=$(this).find(".accordion-section");var prefix="accordion-"+index;$acc_headings.each(function(index){var $btn=$("<button></button>");$btn.attr("id",prefix+"-heading-"+index).attr("aria-controls",prefix+"-section-"+index).attr("aria-expanded","false").click(function(){var $target=$("#"+prefix+"-section-"+index);var expanded=$(this).attr("aria-expanded")==="true"||false;$(this).attr("aria-expanded",!expanded);$target.toggleClass("expanded",!$target.hasClass("expanded"))});if($(this).children("a").length){$btn.text("show/hide details");$(this).append($btn)}else{$(this).wrapInner($btn)}});$acc_sections.each(function(index){$(this).attr("id",prefix+"-section-"+index).attr("aria-labelledby",prefix+"-heading-"+index)})})}}})(jQuery,Drupal);