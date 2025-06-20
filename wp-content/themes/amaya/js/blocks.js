/** *****************************************************************************************
** HERO BLOCK ****************************************************************************
*********************************************************************************************/

jQuery(window).on('load',sizeContent);
jQuery(window).on('resize',sizeContent);
jQuery(document).on('mb_blocks_preview/hero-image',sizeContent);
jQuery('.section-hero').on('mb_blocks_preview/hero-video',sizeContent);
function sizeContent() {

	'use strict';

	jQuery('.section-hero').each(function(){
		var imageheight = jQuery(this).find('.hero-background').outerHeight();
		var contentheight = jQuery(this).find('.hero-content').outerHeight();

		jQuery(this).find('.hero-background').css( "min-height" , imageheight );

		if (contentheight > imageheight ) {
		       jQuery(this).find('.hero-background').css( "height" , contentheight );
		}  else if (imageheight > contentheight  ) {
		       jQuery(this).find('.hero-background').css( "height" , '' );
		}

	
	});
}


// Tooltip
jQuery( document ).on( 'mb_blocks_preview/hero-image', function( e ) {

	var herocontent = jQuery(e.target ).find('.hero-content');
	jQuery( herocontent ).append( "<div class='block-tooltip'>Edit content in the block settings on the right side.</div>" );

	jQuery( e.target ).find('.hero-content').on( "dblclick", function( event ) {
		jQuery(this).find('.block-tooltip').fadeIn(300).delay(3000).fadeOut(300);
		
	});

} );



/** *****************************************************************************************
** GALLERY BLOCK ****************************************************************************
*********************************************************************************************/

jQuery(document).on('mb_blocks_preview/gallery', function(){

	'use strict';

	/* masonry */
	var jQuerygallerygrid = jQuery('.gallery-images-masonry');
	jQuerygallerygrid.imagesLoaded( function() {
	  	jQuerygallerygrid.masonry({
		  	percentPosition: true,
		});
	});

});




/** *****************************************************************************************
** MENU BLOCK *******************************************************************************
*********************************************************************************************/

jQuery(document).on('mb_blocks_preview/menu', function(){

	'use strict';

	var jQuerygridnested = jQuery('.menu-items.masonry-nested');
	jQuerygridnested.imagesLoaded( function() {
	  	jQuerygridnested.masonry({
		  	itemSelector: '.masonry-box-nested',
		  	percentPosition: true
		});
	});

	var jQuerymenugrid = jQuery('.menu-categories.menu-masonry');
	jQuerymenugrid.imagesLoaded( function() {
	  	jQuerymenugrid.masonry({
		  	itemSelector: '.masonry-box',
		  	percentPosition: true
		});
	});

});

/** *****************************************************************************************
** CONTENT BOXES BLOCK **********************************************************************
*********************************************************************************************/

jQuery(document).on('mb_blocks_preview/contentboxes', function(){

	'use strict';

	/* remove links from backend content boxes */
        jQuery('.editor-styles-wrapper .contentboxes-wrap a').removeAttr("href");


	/* fix margins */
	jQuery( ".subtitle-above" ).next().css( "margin-top", "12px" );


	// RTL
	if (jQuery('body').hasClass("rtl")) {
	     var rtlorigin = false;
	} else {
	     var rtlorigin = true;
	}

	var jQuerycontentboxesgrid = jQuery('.contentboxes-masonry');
	jQuerycontentboxesgrid.imagesLoaded( function() {
	  	jQuerycontentboxesgrid.masonry({
		  	percentPosition: true,
		  	isOriginLeft: rtlorigin
		});
	});


	// content box one third and two third round numbers  
	var contentboxeswidth = jQuery(".contentboxes-masonry").width(); 
	var onethirdwidth = contentboxeswidth / 3; 
	var onethirdwidthround = Math.round(onethirdwidth);
	var twothirdwidthround = onethirdwidthround * 2; 

	jQuery('.contentboxes-image-wrap.one-third-width').each(function(){
		jQuery(this).css( "width" , onethirdwidthround );
	});

	jQuery('.contentboxes-image-wrap.two-third-width').each(function(){
		jQuery(this).css( "width" , twothirdwidthround );
	});

	//content boxes height - square     
	jQuery('.contentboxes-image-wrap.square').each(function(){
		var boxheight = jQuery(this).find('.contentboxes-content').outerHeight();
		var boxwidth = jQuery(this).outerWidth() ;

		if (boxheight < boxwidth ) {
		       jQuery(this).addClass( 'use-defined-height centered-content' );
		} else if (boxheight > boxwidth) {
		       jQuery(this).removeClass( 'use-defined-height centered-content' );
		} 
	});

	//content boxes height - half       
	jQuery('.contentboxes-image-wrap.half-height').each(function(){
		var boxheight = jQuery(this).find('.contentboxes-content').height();
		var halfboxheight = boxheight * 2;
		var boxwidth = jQuery(this).width();
		
		if (halfboxheight < boxwidth ) {
		       jQuery(this).addClass( 'use-defined-height' );
		} else if (halfboxheight > boxwidth) {
		       jQuery(this).removeClass( 'use-defined-height');
		} 
	});

	//content boxes height - portrait       
	jQuery('.contentboxes-image-wrap.one-and-a-half-height').each(function(){
		var boxheight = jQuery(this).find('.contentboxes-content').height();
		var oneandahalfheight = boxheight / 1.5;
		var boxwidth = jQuery(this).width() - 24;
		
		if (oneandahalfheight < boxwidth ) {
		       jQuery(this).addClass( 'use-defined-height' );
		} else if (oneandahalfheight > boxwidth) {
		       jQuery(this).removeClass( 'use-defined-height');
		} 
	});

	//content boxes height - portrait high       
	jQuery('.contentboxes-image-wrap.double-height').each(function(){
		var boxheight = jQuery(this).find('.contentboxes-content').height();
		var doubleheight = boxheight / 2;
		var boxwidth = jQuery(this).width() - 24;
		
		if (doubleheight < boxwidth ) {
		       jQuery(this).addClass( 'use-defined-height' );
		} else if (doubleheight > boxwidth) {
		       jQuery(this).removeClass( 'use-defined-height');
		} 
	});

	/* resizing */
	jQuery(window).on('load',sizeContent);
	jQuery(window).on('resize',sizeContent);

	function sizeContent() {

		'use strict';

		// content box one third and two third round numbers  
		var contentboxeswidth = jQuery(".contentboxes-masonry").width(); 
		var onethirdwidth = contentboxeswidth / 3; 
		var onethirdwidthround = Math.round(onethirdwidth);
		var twothirdwidthround = onethirdwidthround * 2; 

		jQuery('.contentboxes-image-wrap.one-third-width').each(function(){
			jQuery(this).css( "width" , onethirdwidthround );
		});

		jQuery('.contentboxes-image-wrap.two-third-width').each(function(){
			jQuery(this).css( "width" , twothirdwidthround );
		});

		//content boxes height - square     
		jQuery('.contentboxes-image-wrap.square').each(function(){
			var boxheight = jQuery(this).find('.contentboxes-content').outerHeight();
			var boxwidth = jQuery(this).outerWidth() ;

			if (boxheight < boxwidth ) {
			       jQuery(this).addClass( 'use-defined-height centered-content' );
			} else if (boxheight > boxwidth) {
			       jQuery(this).removeClass( 'use-defined-height centered-content' );
			} 
		});

		//content boxes height - half       
		jQuery('.contentboxes-image-wrap.half-height').each(function(){
			var boxheight = jQuery(this).find('.contentboxes-content').height();
			var halfboxheight = boxheight * 2;
			var boxwidth = jQuery(this).width();
			
			if (halfboxheight < boxwidth ) {
			       jQuery(this).addClass( 'use-defined-height' );
			} else if (halfboxheight > boxwidth) {
			       jQuery(this).removeClass( 'use-defined-height');
			} 
		});

		//content boxes height - portrait       
		jQuery('.contentboxes-image-wrap.one-and-a-half-height').each(function(){
			var boxheight = jQuery(this).find('.contentboxes-content').height();
			var oneandahalfheight = boxheight / 1.5;
			var boxwidth = jQuery(this).width() - 24;
			
			if (oneandahalfheight < boxwidth ) {
			       jQuery(this).addClass( 'use-defined-height' );
			} else if (oneandahalfheight > boxwidth) {
			       jQuery(this).removeClass( 'use-defined-height');
			} 
		});

		//content boxes height - portrait high       
		jQuery('.contentboxes-image-wrap.double-height').each(function(){
			var boxheight = jQuery(this).find('.contentboxes-content').height();
			var doubleheight = boxheight / 2;
			var boxwidth = jQuery(this).width() - 24;
			
			if (doubleheight < boxwidth ) {
			       jQuery(this).addClass( 'use-defined-height' );
			} else if (doubleheight > boxwidth) {
			       jQuery(this).removeClass( 'use-defined-height');
			} 
		});
	}
});



// Dark or light skin
var skin = amaya_variables.skin;
function themeskin(){ return [skin]; }
//console.log(themeskin());


// Tooltip
jQuery( document ).on( 'mb_blocks_preview/contentboxes', function( e ) {

	var cbcontent = jQuery(e.target ).find('.contentboxes-content');
	jQuery( cbcontent ).append( "<div class='block-tooltip'>Edit content in the block settings on the right side.</div>" );

	jQuery( e.target ).find('.contentboxes-content').on( "dblclick", function( event ) {
		jQuery(this).find('.block-tooltip').fadeIn(300).delay(3000).fadeOut(300);
		
	});

} );