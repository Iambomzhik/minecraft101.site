jQuery(document).ready(function($){var ajaxurl=newswrap_pagination.ajax_url;function newswrap_is_on_screen(elem){if($(elem)[0]){var tmtwindow=jQuery(window);var viewport_top=tmtwindow.scrollTop();var viewport_height=tmtwindow.height();var viewport_bottom=viewport_top+viewport_height;var tmtelem=jQuery(elem);var top=tmtelem.offset().top;var height=tmtelem.height();var bottom=top+height;return(top>=viewport_top&&top<viewport_bottom)||(bottom>viewport_top&&bottom<=viewport_bottom)||(height>viewport_height&&top<=viewport_top&&bottom>=viewport_bottom)}}
var n=window.TWP_JS||{};var paged=parseInt(newswrap_pagination.paged)+1;var maxpage=newswrap_pagination.maxpage;var nextLink=newswrap_pagination.nextLink;var loadmore=newswrap_pagination.loadmore;var loading=newswrap_pagination.loading;var nomore=newswrap_pagination.nomore;var pagination_layout=newswrap_pagination.pagination_layout;$('.twp-loading-button').click(function(){if((!$('.twp-no-posts').hasClass('twp-no-posts'))){$('.twp-loading-button').text(loading);$('.twp-loging-status').addClass('twp-ajax-loading');$('.twp-loaded-content').load(nextLink+' .theme-article-area',function(){if(paged<10){var newlink=nextLink.substring(0,nextLink.length-2)}else{var newlink=nextLink.substring(0,nextLink.length-3)}
paged++;nextLink=newlink+paged+'/';if(paged>maxpage){$('.twp-loading-button').addClass('twp-no-posts');$('.twp-loading-button').text(nomore)}else{$('.twp-loading-button').text(loadmore)}
$('.twp-loaded-content .theme-article-area').each(function(){$(this).addClass(paged+'-twp-article-ajax')});var lodedContent=$('.twp-loaded-content').html();$('.twp-loaded-content').html('');$('.twp-loging-status').removeClass('twp-ajax-loading');$('.theme-article-area').each(function(){if(!$(this).hasClass('theme-article-loaded')){$(this).addClass(paged+'-twp-article-ajax');$(this).addClass('theme-article-loaded')}});$('.theme-article-area').each(function(){$(this).removeClass(paged+'-twp-article-ajax')})})}});if(pagination_layout=='auto-load'){$(window).scroll(function(){if(!$('.newswrap-auto-pagination').hasClass('twp-ajax-loading')&&!$('.newswrap-auto-pagination').hasClass('twp-no-posts')&&maxpage>1&&newswrap_is_on_screen('.newswrap-auto-pagination')){$('.newswrap-auto-pagination').addClass('twp-ajax-loading');$('.newswrap-auto-pagination').text(loading);$('.twp-loaded-content').load(nextLink+' .theme-article-area',function(){if(paged<10){var newlink=nextLink.substring(0,nextLink.length-2)}else{var newlink=nextLink.substring(0,nextLink.length-3)}
paged++;nextLink=newlink+paged+'/';if(paged>maxpage){$('.newswrap-auto-pagination').addClass('twp-no-posts');$('.newswrap-auto-pagination').text(nomore)}else{$('.newswrap-auto-pagination').removeClass('twp-ajax-loading');$('.newswrap-auto-pagination').text(loadmore)}
$('.twp-loaded-content .theme-article-area').each(function(){$(this).addClass(paged+'-twp-article-ajax')});var lodedContent=$('.twp-loaded-content').html();$('.twp-loaded-content').html('');$('.newswrap-auto-pagination').removeClass('twp-ajax-loading');$('.theme-article-area').each(function(){$(this).removeClass(paged+'-twp-article-ajax')})})}})}
$(window).scroll(function(){if(!$('.twp-single-infinity').hasClass('twp-single-loading')&&$('.twp-single-infinity').attr('loop-count')<=3&&newswrap_is_on_screen('.twp-single-infinity')){$('.twp-single-infinity').addClass('twp-single-loading');var loopcount=$('.twp-single-infinity').attr('loop-count');var postid=$('.twp-single-infinity').attr('next-post');var data={'action':'newswrap_single_infinity','_wpnonce':newswrap_pagination.ajax_nonce,'postid':postid,};$.post(ajaxurl,data,function(response){if(response){var content=response.data.content.join('');var content=$(content);$('.twp-single-infinity').before(content);var newpostid=response.data.postid['0'];$('.twp-single-infinity').attr('next-post',newpostid);$(".after-load-ajax ul.wp-block-gallery.columns-1, .after-load-ajax .wp-block-gallery.columns-1 .blocks-gallery-grid, .after-load-ajax .gallery-columns-1").each(function(){$(this).slick({slidesToShow:1,slidesToScroll:1,fade:!0,autoplay:!1,autoplaySpeed:8000,infinite:!0,nextArrow:'<button type="button" class="slide-btn slide-btn-bg slide-next-icon">'+newswrap_custom.next_svg+'</button>',prevArrow:'<button type="button" class="slide-btn slide-btn-bg slide-prev-icon">'+newswrap_custom.prev_svg+'</button>',dots:!1,})});$('.after-load-ajax .entry-content .gallery, .after-load-ajax .widget .gallery, .after-load-ajax .wp-block-gallery, .after-load-ajax .zoom-gallery').each(function(){$(this).magnificPopup({delegate:'a',type:'image',closeOnContentClick:!1,closeBtnInside:!1,mainClass:'mfp-with-zoom mfp-img-mobile',image:{verticalFit:!0,titleSrc:function(item){return item.el.attr('title')}},gallery:{enabled:!0},zoom:{enabled:!0,duration:300,opener:function(element){return element.find('img')}}})});$('article').each(function(){if($('body').hasClass('booster-extension')&&$(this).hasClass('after-load-ajax')){var cid=$(this).attr('id');$(this).addClass(cid);likedislike(cid);booster_extension_post_reaction(cid)}
$(this).removeClass('after-load-ajax')})}
$('.twp-single-infinity').removeClass('twp-single-loading');loopcount++;$('.twp-single-infinity').attr('loop-count',loopcount)})}})})