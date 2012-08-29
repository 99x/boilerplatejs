
define(['require'], function(require) {
	return {
		urls : {
			empimages : require.toUrl("../../../server/{empid}.png"),
			empdetails : require.toUrl("../../../server/{empid}.json.js"),
			yearlysales : require.toUrl("../../../server/yearly-sales.json.js"),
			employees : require.toUrl("../../../server/employees.json.js")
		}
	}
});
