'use strict';

import './lib/lib';

$('button').addAttr('data-btn', 'true');

// $('button').on('click', function() {
// 	$(this).removeAttr('data-btn');
// });

console.log($('button').getAttrValue('data-btn'));

$('button').removeAttr('data-btn');

console.log($('button').getAttrValue('data-btn'));