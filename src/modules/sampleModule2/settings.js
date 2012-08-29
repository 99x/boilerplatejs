
define(['require'], function(require) {
	return {
		urls : {
			empimages : require.toUrl("../../../server/{empid}.png"),
			empdetails : require.toUrl("../../../server/{empid}.txt"),
			yearlysales : require.toUrl("../../../server/yearly-sales.txt"),
			employees : require.toUrl("../../../server/employees.txt")
		}
	}
});
