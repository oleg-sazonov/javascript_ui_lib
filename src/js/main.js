'use strict';

import './lib/lib';

// $('button').addAttr('data-btn', 'true');

// console.log($('button').getAttrValue('data-btn'));

// $('button').removeAttr('data-btn');

// console.log($('button').getAttrValue('data-btn'));

// const btn = $('button').addClass('newbtn');

// console.log(btn);

// btn.classList.add('active');

$('button').on('click', function() {
	$('div').eq(2).toggleClass('active');
});

$('div').click(function() {
	console.log($(this).index());
});

// console.log($('button').html('Click me smoothly'));

console.log($('.findme').find('.some'));

// console.log($('.some').closest('.actives').addClass('check'));

// console.log($('.more').eq(0).siblings());