'use strict';

import $ from '../core';

$.prototype.tab = function() {
	for (let i = 0; i < this.length; i++) {
		$(this[i]).click(() => {

			$(this[i]).fadeIn(500);

			$(this[i])
				.addClass('tab-item_active')
				.siblings()
				.removeClass('tab-item_active')
				.closest('.tab')
				.find('.tab-content')
				.removeClass('tab-content_active')
				.eq($(this[i]).index())
				.addClass('tab-content_active')
				.fadeIn(500);
		});
	}
}

$('[data-tabpanel] .tab-item').tab();