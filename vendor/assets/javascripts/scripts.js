;(function($) {

"use strict";

var $body = $('body');
var $head = $('head');
var $header = $('#header');
var transitionSpeed = 300;
var pageLoaded = setTimeout(addClassWhenLoaded, 1000);
var marker = 'img/marker.png';



// Mediaqueries
// ---------------------------------------------------------
var XS = window.matchMedia('(max-width:767px)');
var SM = window.matchMedia('(min-width:768px) and (max-width:991px)');
var MD = window.matchMedia('(min-width:992px) and (max-width:1199px)');
var LG = window.matchMedia('(min-width:1200px)');
var XXS = window.matchMedia('(max-width:480px)');
var SM_XS = window.matchMedia('(max-width:991px)');
var LG_MD = window.matchMedia('(min-width:992px)');



// Touch
// ---------------------------------------------------------
var dragging = false;

$body.on('touchmove', function() {
  dragging = true;
});

$body.on('touchstart', function() {
  dragging = false;
});



// Responsive Tabs
// ---------------------------------------------------------

$('.responsive-tabs').responsiveTabs();

// UOU Selects
  // ---------------------------------------------------------
  $.fn.uouCustomSelect = function () {
    var $select = $(this);

    $select.wrap('<div class="uou-custom-select"></div>');

    var $container = $select.parent('.uou-custom-select');

    $container.append('<ul class="select-clone"></ul>');

    var $list = $container.children('.select-clone'),
      placeholder = $select.data('placeholder') ? $select.data('placeholder') : $select.find('option:eq(0)').text();

    $('<input class="value-holder" type="text" disabled="disabled" placeholder="' + placeholder + '"><div class="trigger"><i class="fa fa-caret-down"></i></div>').insertBefore($list);

    var $valueHolder = $container.children('.value-holder');

    // Create clone list
    $select.find('option').each(function () {
      var $this = $(this);

      $list.append('<li data-value="' + $this.val() + '">' + $this.text() + '</li>');
    });

    // Toggle list
    $container.on('click', function () {
      $container.toggleClass('active');
      $list.slideToggle(250);
    });

    // Option Select
    $list.children('li').on('click', function () {
      var $this = $(this);

      $valueHolder.val($this.text());
      $select.find('option[value="' + $this.data('value') + '"]').prop('selected', true);
    });

    // Hide
    $container.on('clickoutside touchendoutside', function () {
      if (!dragging) {
        $container.removeClass('active');
        $list.slideUp(250);
      }
    });

    // Links
    if ($select.hasClass('links')) {
      $select.on('change', function () {
        window.location.href = select.val();
      });
    }

    $select.on('change', function () {
      cosole.log(chnaged);
      cosole.log($(this).val());
    });
  };

  $('select').each(function () {
    $(this).uouCustomSelect();
  });

  // Delete tables day
  var $DeleteTable = $('.operating-table .table-content .table-content-single .delete a');

  $DeleteTable.on('click',function(e){
    e.preventDefault()
    $(this).parent().parent().hide();
  });


  // custom radio button input

  $.fn.uouRadioInput = function(){

    var self = $(this),
    input = self.find( 'input' ),
    group = input.attr( 'name' );

    // INITIAL STATE
    if ( input.is( ':checked' ) ) {
      self.addClass( 'active' );
    }

    // CHANGE STATE
    input.change(function(){
      if ( group ) {
        $( '.radio-input input[name="' + group + '"]' ).parent().removeClass( 'active' );
      }
      if ( input.is( ':checked' ) ) {
        self.addClass( 'active' );
      }
    });

  };

  $( '.radio-input' ).each(function(){
    $(this).uouRadioInput();
  });





    (function () {
      var count = 0;

      var $LoacationHeight =  $('.single-content.location-content,.single-content.location-content label,.single-content.location-content .location-details');
      var $AddDepertment = $('.single-content.contact-content,.single-content.contact-content > label,.single-content.contact-content .contacts');

      $('.location-details a').click(function (e) {
        count += 1;
        e.preventDefault();

        if (count == 1) {
          $('.location-three').removeClass('hide').addClass('show');
          $LoacationHeight.css('height', '320px');

        }

        if (count == 2) {
          $('.location-four').removeClass('hide').addClass('show');
          $LoacationHeight.css('height', '410px');

        }
      });

      $('.add-dept a').click(function (e) {
        count += 1;
        e.preventDefault();

        if (count == 1) {
          $('#department-3').removeClass('hide').addClass('show');
          $AddDepertment.css('height', '245px');

        }

        if (count == 2) {
          $('#department-4').removeClass('hide').addClass('show');
          $AddDepertment.css('height', '290px');

        }
      });
    })();



    var $CaniddateSkillToggle = $('.candidate-skills a');

    $('.candidate-skills .toggle a').on('click', function(events){
      events.preventDefault(),
      $(this).toggleClass('active'),
      $(this).parent().next().children('.toggle-content').slideToggle(300);


    });

    $('.accordion-content .toggle a').on('click', function(events){
      events.preventDefault(),
      $(this).toggleClass('active'),
      $(this).parent().parent().siblings('.toggle-content').slideToggle(300);


    });

    $('.search-skill-select .accordion-content .toggle a').on('click', function(events){
      events.preventDefault(),
      $(this).parent().toggleClass('active'),
      $(this).parent().next('.toggle-content').slideToggle(300),
      $(this).parent().siblings('.toggle-content').slideUp(300);


    });


    // Accordion
      // ---------------------------------------------------------
      $('.accordion').each(function () {

        $(this).find('ul > li > a').on('click', function (event) {
          event.preventDefault();

          var $this = $(this),
            $li = $this.parent('li'),
            $div = $this.siblings('div'),
            $siblings = $li.siblings('li').children('div');

          if (!$li.hasClass('active')) {
            $siblings.slideUp(250, function () {
              $(this).parent('li').removeClass('active');
            });

            $div.slideDown(250, function () {
              $li.addClass('active');
            });
          } else {
            $div.slideUp(250, function () {
              $li.removeClass('active');
            });
          }
        });

      });



    $('.search-skill-select > a').on('click', function(events){
      events.preventDefault(),
      $('.search-skill-select .accordion-content').slideToggle(300);


    });




    // candidate-registration ui slider for skills.
    $( "#slider-skill-first" ).slider({
      range: "max",
          min: 0,
          max: 100,
          value: 70,
          slide: function( event, ui ) {
            $( "#amount-first" ).val( ui.value + "%" );
          }
      });

      $( "#amount-first" ).val( $( "#slider-skill-first" ).slider( "value" ) + "%" );

  $( "#slider-skill-second" ).slider({
    range: "max",
        min: 0,
        max: 100,
        value: 50,
        slide: function( event, ui ) {
          $( "#amount-second" ).val( ui.value + "%" );
        }
    });

    $( "#amount-second" ).val( $( "#slider-skill-second" ).slider( "value" ) + "%" );

    $( "#slider-skill-third" ).slider({
      range: "max",
          min: 0,
          max: 100,
          value: 80,
          slide: function( event, ui ) {
            $( "#amount-third" ).val( ui.value + "%" );
          }
      });

      $( "#amount-third" ).val( $( "#slider-skill-third" ).slider( "value" ) + "%" );


      $( "#slider-skill-job" ).slider({
        range: "max",
            min: 0,
            max: 100,
            value: 80,
            slide: function( event, ui ) {
              $( "#amount-job" ).val( ui.value + "%" );
            }
        });

        $( "#amount-job" ).val( $( "#slider-skill-job" ).slider( "value" ) + "%" );



      // jq ui datepicker

      /*$( "#datepicker-start" ).datepicker();*/
      //$( "#datepicker-end" ).datepicker();
      /*$( "#datepicker-entry" ).datepicker();*/

      $('.toggle-content-client').hide();


      $('.toggle-details a').on('click', function(e){
        e.preventDefault();

        $(this).parent().siblings('.toggle-content-client').slideToggle(350);
        $(this).parent().toggleClass('active');

      });




// Touch
var dragging = false;

$body.on('touchmove', function() {
  dragging = true;
});

$body.on('touchstart', function() {
  dragging = false;
});



function mobileHeaderSearchToggle(SM_XS) {
  if (!SM_XS.matches) {
    $headerSearchToggle.removeAttr('style');
  }
}



// Advanced Search
// ---------------------------------------------------------
var $advancedSearchBar = $('.header-search-bar');

$advancedSearchBar.each(function () {
  var $this = $(this);

  $this.find('.toggle').on('click', function (event) {
    event.preventDefault();

    if (!$this.hasClass('active')) {
      $this.addClass('active');
      $this.find('.advanced-form').slideDown();
    } else {
      $this.removeClass('active');
      $this.find('.advanced-form').slideUp();
    }
  });

  function moveAdvancedBarSelect(XS) {
    if (XS.matches) {
      $this.find('.advanced-form .container').prepend($this.find('.hsb-select'));
    } else {
      $this.find('.hsb-select').appendTo($this.find('.hsb-container'));
    }
  }

  moveAdvancedBarSelect(XS);
  XS.addListener(moveAdvancedBarSelect);





});


$(document).ready(function() {

  if ($("#owl-demo").length > 0) {
    $("#owl-demo").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay: true
    });
  }
});








// Responsive Videos
// ---------------------------------------------------------
if ($.fn.fitVids) {
  $('.fitvidsjs').fitVids();
}






// Advanced Search Range Slider
// ---------------------------------------------------------
if ($.fn.slider) {
  $('.header-search-bar .range-slider .slider, .header-search .range-slider .slider').each(function () {
    var $this = $(this),
      min = $this.data('min'),
      max = $this.data('max'),
      current = $this.data('current');

    $this.slider({
      range: 'min',
      min: min,
      max: max,
      step: 1,
      value: current,
      slide: function (event, ui) {
        $this.parent('.range-slider').find('.last-value > span').html(ui.value);
      }
    });
  });
}



// Accordion
// ---------------------------------------------------------
$('.accordion').each(function () {

  $(this).find('ul > li > a').on('click', function (event) {
    event.preventDefault();

    var $this = $(this),
      $li = $this.parent('li'),
      $div = $this.siblings('div'),
      $siblings = $li.siblings('li').children('div');

    if (!$li.hasClass('active')) {
      $siblings.slideUp(250, function () {
        $(this).parent('li').removeClass('active');
      });

      $div.slideDown(250, function () {
        $li.addClass('active');
      });
    } else {
      $div.slideUp(250, function () {
        $li.removeClass('active');
      });
    }
  });

});







// Maps
// ---------------------------------------------------------
if ($('#contact-page-map').length > 0) {
  new Maplace({
    map_div: '#contact-page-map',
    controls_type: 'list',
    map_options: {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      zoom: 14
    },
    locations: [
      {
        lat: -37.817314,
        lon: 144.95543099999998,
        title: 'Headquarters',
        html: '<strong>Headquarters</strong> <br> 121 King Street, Melbourne <br> Victoria 3000 Australia <br> Envato Pty Ltd',
        icon: marker
      },
      {
        lat: -37.83527632292268,
        lon: 145.01455307006836,
        title: 'Secondary Office',
        html: '<strong>Secondary Office</strong> <br> 47 Queen Street, Melbourne <br> Victoria 3000 Australia <br> Envato Pty Ltd',
        icon: marker
      }
    ]
  }).Load();
}

if ($('#jobs-page-map').length > 0) {
  new Maplace({
    map_div: '#jobs-page-map',
    map_options: {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      zoom: 14
    },
    locations: [
      {
        lat: -37.817314,
        lon: 144.95543099999998,
        title: 'Job Title 1',
        icon: marker
      },
      {
        lat: -37.83527632292268,
        lon: 145.01455307006836,
        title: 'Job Title 2',
        icon: marker
      },
      {
        lat: -37.77749907004604,
        lon: 144.9452018737793,
        title: 'Job Title 3',
        icon: marker
      },
      {
        lat: -37.8127675575702,
        lon: 144.87001419067383,
        title: 'Job Title 4',
        icon: marker
      },
      {
        lat: -37.87160128507344,
        lon: 144.90503311157227,
        title: 'Job Title 5',
        icon: marker
      }
    ]
  }).Load();
}

if ($('#jobs-single-page-map').length > 0) {
  new Maplace({
    map_div: '#jobs-single-page-map',
    map_options: {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      zoom: 14
    },
    locations: [
      {
        lat: -37.77749907004604,
        lon: 144.9452018737793,
        title: 'Job Title 3',
        icon: marker
      }
    ]
  }).Load();
}

if ($('#find-job-map-tab').length > 0) {
  new Maplace({
    map_div: '#find-job-map-tab',
    map_options: {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      zoom: 14
    },
    locations: [
      {
        lat: -37.817314,
        lon: 144.95543099999998,
        title: 'Job Title 1',
        icon: marker
      },
      {
        lat: -37.83527632292268,
        lon: 145.01455307006836,
        title: 'Job Title 2',
        icon: marker
      },
      {
        lat: -37.77749907004604,
        lon: 144.9452018737793,
        title: 'Job Title 3',
        icon: marker
      },
      {
        lat: -37.8127675575702,
        lon: 144.87001419067383,
        title: 'Job Title 4',
        icon: marker
      },
      {
        lat: -37.87160128507344,
        lon: 144.90503311157227,
        title: 'Job Title 5',
        icon: marker
      }
    ]
  }).Load();
}



// Candidates Item
// ---------------------------------------------------------
$('.candidates-item').each(function () {
  var $item = $(this),
    $content = $item.find('.content'),
    $toggle = $item.find('.top-btns .toggle');

  $toggle.on('click', function (event) {
    event.preventDefault();

    if ($item.hasClass('active')) {
      $content.slideUp();
      $item.removeClass('active');
      $toggle.removeClass('fa-minus').addClass('fa-plus');
    } else {
      $content.slideDown();
      $item.addClass('active');
      $toggle.removeClass('fa-plus').addClass('fa-minus');
    }
  });

  $item.find('.read-more').on('click', function (event) {
    event.preventDefault();

    $content.slideDown();
    $item.addClass('active');
    $toggle.removeClass('fa-plus').addClass('fa-minus');
  });
});




// Jobs Filters Range Slider
// ---------------------------------------------------------
if ($.fn.slider) {
  $('.jobs-filter-widget .range-slider .slider, .compare-price-filter-widget .range-slider .slider').each(function () {
    var $this = $(this),
      min = $this.data('min'),
      max = $this.data('max');

    $this.slider({
      range: true,
      min: min,
      max: max,
      step: 1,
      values: [min, max],
      slide: function (event, ui) {
        $(this).parent().find('.first-value').text(ui.values[0]);
        $(this).parent().find('.last-value').text(ui.values[1]);
      }
    });
  });
}

// Jobs Filters List
// ---------------------------------------------------------
$('.jobs-filter-widget .filter-list, .compare-price-filter-widget .filter-list').each(function () {
  var $this = $(this),
    $toggle = $this.siblings('.toggle');

  $this.find('li').each(function () {
    var $this = $(this);

    if ($this.children('ul').length > 0) {
      $this.addClass('has-submenu');
    }
  });

  $toggle.on('click', function (event) {
    event.preventDefault();

    $this.slideToggle();
    $toggle.toggleClass('active');
  });

  $this.find('.has-submenu > a').on('click', function (event) {
    event.preventDefault();

    var $thisLi = $(this).parent('li'),
      $thisUl = $thisLi.children('ul');

    if (!$thisLi.hasClass('active')) {
      $thisLi.addClass('active');
      $thisUl.slideDown();
    } else  {
      $thisLi.removeClass('active');
      $thisUl.slideUp().find('.has-submenu').removeClass('active').children('ul').slideUp();
    }
  });
});


// Jobs Views
// ---------------------------------------------------------
$('.jobs-view-toggle').each(function () {
  var $this = $(this),
    $items = $this.closest('.page-content').find('.jobs-item');

  $this.find('.btn').on('click', function (event) {
    event.preventDefault();

    var $this = $(this),
      layout = $this.data('layout');

    if (!$this.hasClass('active')) {
      if (layout == 'with-thumb') {
        $items.removeClass('compact').addClass('with-thumb');
      } else if (layout == 'compact') {
        $items.removeClass('with-thumb').addClass('compact');
      } else {
        $items.removeClass('with-thumb compact');
      }

      $this.addClass('active').parent('li').siblings('li').children('a').removeClass('active');
    }
  });
});

// Search/Filter Toggle
// ---------------------------------------------------------
$('.jobs-search-widget, .jobs-filter-widget').each(function () {
  var $this = $(this);

  $this.find('.widget-title').on('click', function (event) {
    if (XS.matches) {
      event.preventDefault();

      $this.find('.widget-content').slideToggle();
    }
  });
});

function searchFilterToggle(XS) {
  if (!XS.matches) {
    $('.jobs-search-widget .widget-content, .jobs-filter-widget .widget-content').removeAttr('style');
  }
}

searchFilterToggle(XS);
XS.addListener(searchFilterToggle);




function addClassWhenLoaded() {
  if (!$body.hasClass('loaded')) {
    $body.addClass('loaded');
  }
}



}(jQuery));




