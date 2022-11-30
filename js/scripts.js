function videoScale() {
  $('.js-video').each(function () {
    var t = $(this);
    (v = t.find('video')), (a = v.attr('width')), (b = v.attr('height')), (c = a / b), (d = t.width()), (e = t.height());
    d / e > c
      ? v.css({
          left: '0',
          top: 0.5 * -((d / a) * b - e) + 'px',
          transform: 'scale(' + d / a + ')',
          '-webkit-transform': 'scale(' + d / a + ')',
        })
      : v.css({
          left: 0.5 * -((e / b) * a - d) + 'px',
          top: '0',
          transform: 'scale(' + e / b + ')',
          '-webkit-transform': 'scale(' + e / b + ')',
        });
    v.get(0).play();
    t.addClass('is-visible');
  });
}

$(function () {
  svg4everybody();

  $('select').selectric({
    nativeOnMobile: true,
  });

  var $prevIcon = '<button class="slick-arrow slick-prev">' + '<svg>' + '<use xlink:href="./img/sprite.svg#arrow-left"></use>' + '</svg>' + '</button>',
    $nextIcon = '<button class="slick-arrow slick-next">' + '<svg>' + '<use xlink:href="./img/sprite.svg#arrow-right"></use>' + '</svg>' + '</button>';

  $('.js-hero').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: $prevIcon,
    nextArrow: $nextIcon,
    cssEase: 'ease',
    speed: 1000,
    // responsive: [{
    //     breakpoint: 871,
    //     settings: {
    //         arrows: false
    //     }
    // }]
  });

  $('.js-gifts-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    prevArrow: $prevIcon,
    nextArrow: $nextIcon,
    cssEase: 'ease',
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  });

  $('.js-card-gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: $prevIcon,
    nextArrow: $nextIcon,
    cssEase: 'ease',
    speed: 750,
  });

  $('.js-about-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: $prevIcon,
    nextArrow: $nextIcon,
    cssEase: 'ease',
    speed: 750,
  });

  var $mapFloors = $('.js-map [data-id]'),
    $mapFloorsNav = $('.js-map-nav [data-id]');

  $mapFloorsNav.on('click', function () {
    var $t = $(this);

    if (!$t.hasClass('is-active')) {
      $mapFloorsNav.removeClass('is-active');
      $t.addClass('is-active');
      $mapFloors
        .removeClass('is-active')
        .filter('[data-id="' + +$t.attr('data-id') + '"]')
        .addClass('is-active');
    }
  });

  var $langChange = $('.js-lang'),
    $langChangeBtn = $('.js-lang-btn'),
    $langChangeDrop = $('.js-lang-drop');

  $langChangeBtn.on('click', function () {
    $langChange.toggleClass('is-opened');
  });
  $langChangeDrop.find('a').on('click', function () {
    $langChange.removeClass('is-opened');
  });
  $(document).on('click', function (e) {
    if (!$langChange.is(e.target) && $langChange.has(e.target).length === 0) {
      $langChange.removeClass('is-opened');
    }
  });

  function jsScrollAppearance() {
    var $items = $('.js-scroll-appearance');

    if ($items.length > 0) {
      $items.each(function () {
        var $t = $(this);

        if (!$t.hasClass('is-complete') && $(document).scrollTop() > $t.offset().top - $(window).height()) {
          $t.addClass('is-complete');
          if ($t.is('[data-print]')) {
            var delay = 50;
            $t.find('.js-print-item').each(function (index) {
              var $t = $(this);
              setTimeout(function () {
                $t.addClass('is-visible');
              }, index * delay);
            });
          }
        }
      });
    }
  }

  var H1_TYPING_DELAY = 50;
  function h1TypingEffect() {
    $('h1').each(function () {
      var $t = $(this);

      if (!$t.hasClass('is-visible') && $(document).scrollTop() > $t.offset().top - $(window).height()) {
        var words = $t.text().split(' ');

        $t.text('');

        words.forEach(function (word, index) {
          var node = '',
            letters = word.split('');

          letters.forEach(function (letter) {
            node += '<span class="h1-letter">' + letter + '</span>';
          });
          node += '<span class="h1-letter"></span>';

          $t.append('<div class="h1-word">' + node + '</div>');
        });

        $t.find('.h1-letter').each(function (index) {
          var $el = $(this);
          setTimeout(function () {
            $el.addClass('is-visible');
          }, index * H1_TYPING_DELAY);
        });

        $t.addClass('is-visible');
      }
    });
  }

  var $request = $('.request');
  function $requestHeight() {
    if ($request.length > 0) {
      var maxHeight = 0;

      if (!isMobile) {
        $('.js-request-content').each(function () {
          if ($(this).height() > maxHeight) {
            maxHeight = $(this).outerHeight();
          }
        });
      }

      $request.height(isMobile ? 'auto' : maxHeight);
    }
  }

  var $requestItem = $('.js-request-item');
  $requestItem.on('click', function (event) {
    var $t = $(this),
      $target = $(event.target);

    if (!$t.hasClass('is-active') && !$target.closest('.js-request-close').length) {
      $requestItem.removeClass('is-active');
      $t.addClass('is-active');
      $t.siblings('.js-request-item').addClass('is-closed');
      $t.removeClass('is-closed');
    }
  });
  $('.js-request-close').on('click', function () {
    $requestItem.removeClass('is-active');
    $requestItem.removeClass('is-closed');
  });

  function calcHeaderNav() {
    var $headerNav = $('.js-header-panel, .header-nav'),
      maxWidth = 0;

    if (!isMobile) {
      $headerNav.each(function () {
        var $t = $(this);
        $t.outerWidth('auto');
        if ($(this).width() > maxWidth) {
          maxWidth = $(this).width();
        }
      });
    }

    $headerNav.outerWidth(isMobile ? 'auto' : maxWidth);
  }

  var isMobile = false,
    justSwitched = false;

  function detectDevice() {
    var temp = isMobile;
    isMobile = !!Modernizr.mq('(max-width: 991px)');
    justSwitched = temp !== isMobile;
  }

  function startApp() {
    h1TypingEffect();
    calcHeaderNav();
    detectDevice();
    jsScrollAppearance();
    $requestHeight();
    if (justSwitched) {
      var $cardGallery = $('.js-card-gallery');
      if ($cardGallery.length > 0) {
        if (isMobile) {
          $cardGallery.detach().insertAfter('.js-card-title');
        } else {
          $cardGallery.detach().prependTo('.js-card-content');
        }
      }
    }
  }

  if ($('.js-video').length > 0) {
    videoScale();
  }

  startApp();

  var lastWidth = $(window).width();
  $(window).on(
    'resize',
    _.debounce(function () {
      if ($(window).width() !== lastWidth) {
        startApp();
        lastWidth = $(window).width();
      }
      if ($('.js-video').length > 0) {
        videoScale();
      }
    }, 100)
  );

  $('.js-go-top').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      600
    );
  });

  var $indexHeader = $('.js-header-index');
  $(window).on(
    'scroll',
    _.debounce(function () {
      var $goTop = $('.js-go-top');
      $(document).scrollTop() > $(window).height() / 2 ? $goTop.addClass('is-visible') : $goTop.removeClass('is-visible');

      if ($indexHeader.length > 0) {
        $(document).scrollTop() + $indexHeader.height() > $('.js-welcome').height() ? $indexHeader.addClass('is-mobile') : $indexHeader.removeClass('is-mobile');
      }

      var $header = $('.header'),
        $wrapper = $('.wrapper');

      if ($(document).scrollTop() > 45) {
        $header.addClass('is-fixed');
        $wrapper.addClass('is-header-fixed');
      } else {
        $header.removeClass('is-fixed');
        $wrapper.removeClass('is-header-fixed');
      }

      jsScrollAppearance();
      h1TypingEffect();
    }, 100)
  );

  $(window).on('scroll', function () {
    var $header = $('.header'),
      $wrapper = $('.wrapper');

    if ($(document).scrollTop() > 45) {
      $header.addClass('is-fixed');
      $wrapper.addClass('is-header-fixed');
    } else {
      $header.removeClass('is-fixed');
      $wrapper.removeClass('is-header-fixed');
    }
  });

  if ($indexHeader.length === 0) {
    $('.js-header').addClass('is-mobile');
  }

  $('.js-cookie-close').on('click', function () {
    $('.js-cookie').addClass('is-hidden');
    $.cookie('cookies_accepted', '1', { expires: 7 });
  });

  $('.js-mobile-menu').on('click', function () {
    var $t = $(this),
      $body = $('body'),
      $menu = $('.js-menu'),
      $header = $('.header');

    if (!$t.hasClass('is-active')) {
      $t.addClass('is-active');
      $body.addClass('is-locked');
      $menu.addClass('is-opened');

      if ($header.hasClass('js-header-index')) {
        $header.addClass('is-mobile');
      }
    } else {
      $t.removeClass('is-active');
      $body.removeClass('is-locked');
      $menu.removeClass('is-opened');

      if ($header.hasClass('js-header-index') && $(document).scrollTop() + $header.height() < $('.js-welcome').height()) {
        $header.removeClass('is-mobile');
      }
    }
  });

  $('.js-open-search').on('click', function () {
    var $modal = $('.js-search-modal');

    if ($(this).hasClass('is-bottom')) {
      $modal.addClass('is-bottom');
    } else {
      $modal.removeClass('is-bottom');
    }
    $modal.addClass('is-opened');
    $('.fade-bg').addClass('is-opened');
  });

  $('.fade-bg').on('click', function () {
    $('.js-search-modal').removeClass('is-opened');
    $('.fade-bg').removeClass('is-opened');
  });

  function showCookieAlert() {
    if (!$.cookie('cookies_accepted')) {
      $('.js-cookie').show();
    }
  }

  if ($('.js-header-main').length > 0) {
    function indexAnimation() {
      $('.js-loader').addClass('is-hidden');

      var $logo = $('.header-logo__icon');
      $('.js-loader-icon').animate(
        {
          left: $logo.offset().left,
          top: $logo.offset().top - $(document).scrollTop(),
        },
        600
      );
    }

    var start = new Date().getTime(),
      timer = 2100;

    $(window).on('load', function () {
      $('.wrapper').removeClass('is-hidden');

      var now = new Date().getTime(),
        timeout = now - start < timer ? timer - (now - start) : 0;

      setTimeout(function () {
        indexAnimation();
      }, timeout);

      setTimeout(function () {
        $('body').removeClass('is-full-locked');
      }, timeout + 600);

      setTimeout(function () {
        showCookieAlert();
      }, timeout + 1600);
    });
  } else {
    $(window).on('load', function () {
      setTimeout(function () {
        showCookieAlert();
      }, 1000);
    });
    $(document).ready(function () {
      $('.js-header').addClass('is-visible');
    });
  }

  var $sortAbc = $('.js-sort-abc');
  $sortAbc.on('click', function () {
    var $t = $(this);

    if (!$t.hasClass('is-active')) {
      $sortAbc.removeClass('is-active');
      $t.addClass('is-active');
    }
  });

  var $filterCategory = $('.js-filter-category');
  $filterCategory.on('click', function () {
    var $t = $(this);

    if (!$t.hasClass('is-active')) {
      $filterCategory.removeClass('is-active');
      $t.addClass('is-active');
    }
  });

  var $sortView = $('.js-sort-view');
  $sortView.on('click', function () {
    var $t = $(this);

    if (!$t.hasClass('is-active')) {
      $sortView.removeClass('is-active');
      $t.addClass('is-active');

      $listCatalog = $('.js-list-catalog');
      $t.attr('data') === '1' ? $listCatalog.addClass('is-table') : $listCatalog.removeClass('is-table');
    }
  });

  var $rulesNav = $('.js-rules-nav'),
    $rulesContent = $('.js-rules-content'),
    $rulesSelect = $('.js-rules-select');

  function setRulesTab(id, updateSelect) {
    $rulesContent
      .removeClass('is-active')
      .filter('[data="' + id + '"]')
      .addClass('is-active');
    $rulesNav
      .removeClass('is-active')
      .filter('[data="' + id + '"]')
      .addClass('is-active');
    if (updateSelect) {
      $rulesSelect.val(id).change().selectric('refresh');
    }
  }
  $rulesNav.on('click', function () {
    var $t = $(this);

    if (!$t.hasClass('is-active')) {
      setRulesTab($t.attr('data'), true);
    }
  });
  $rulesSelect.on('change', function () {
    setRulesTab($(this).val(), false);
  });

  $('.js-vacancy-item').on('click', function () {
    $(this).toggleClass('is-active');
  });

  $field = $('.js-input');
  $field.on('focus', function () {
    var $t = $(this),
      $label = $t.siblings('label');

    if (!$label.hasClass('is-active')) {
      $label.addClass('is-active');
    }
  });
  $field.on('blur', function () {
    var $t = $(this),
      $label = $t.siblings('label');

    if ($t.val() === '') {
      $label.removeClass('is-active');
    }
  });
  $('.js-field-file').on('click', function () {
    $(this).siblings('input[type="file"]').trigger('click');
  });
  $('.js-field-file-container input[type="file"]').on('change', function () {
    var $t = $(this),
      $label = $t.siblings('label'),
      $remove = $t.siblings('.js-field-file-remove');

    if ($t.val() === '') {
      $label.text($label.attr('data-title'));
      $remove.hide();
    } else {
      var files = $t[0].files,
        fileNames = [];
      for (var i = 0; i < files.length; i++) {
        fileNames.push(files[i].name);
      }
      $label.text(fileNames.join(', '));
      $remove.text(fileNames.length > 1 ? $remove.attr('data-multiply') : $remove.attr('data-single')).show();
    }
    $requestHeight();
  });
  $('.js-field-file-remove').on('click', function () {
    $(this).siblings('input[type="file"]').val('').trigger('change');
  });

  $('.js-textarea')
    .each(function () {
      this.setAttribute('style', 'height:' + this.scrollHeight + 'px; overflow-y: hidden');
    })
    .on('input', function () {
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
      $requestHeight();
    });

  $('.js-mask-phone').mask('+7 (999) 999-99-99');
});
