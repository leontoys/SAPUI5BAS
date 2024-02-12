/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapuidemofiori2/project-master-detail/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
