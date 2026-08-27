import { n as applyUrlDefaults, r as queryParams } from "./app-layout-BYw3PRMv.js";
//#region resources/js/routes/team/index.ts
/**
* @see \App\Http\Controllers\EmployeeController::index
* @see app/Http/Controllers/EmployeeController.php:12
* @route '/team'
*/
var index = (options) => ({
	url: index.url(options),
	method: "get"
});
index.definition = {
	methods: ["get", "head"],
	url: "/our-team"
};
/**
* @see \App\Http\Controllers\EmployeeController::index
* @see app/Http/Controllers/EmployeeController.php:12
* @route '/team'
*/
index.url = (options) => {
	return index.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\EmployeeController::index
* @see app/Http/Controllers/EmployeeController.php:12
* @route '/team'
*/
index.get = (options) => ({
	url: index.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\EmployeeController::index
* @see app/Http/Controllers/EmployeeController.php:12
* @route '/team'
*/
index.head = (options) => ({
	url: index.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\EmployeeController::show
* @see app/Http/Controllers/EmployeeController.php:35
* @route '/team/{team}'
*/
var show = (args, options) => ({
	url: show.url(args, options),
	method: "get"
});
show.definition = {
	methods: ["get", "head"],
	url: "/our-team/{team}"
};
/**
* @see \App\Http\Controllers\EmployeeController::show
* @see app/Http/Controllers/EmployeeController.php:35
* @route '/team/{team}'
*/
show.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { team: args };
	if (Array.isArray(args)) args = { team: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { team: args.team };
	return show.definition.url.replace("{team}", parsedArgs.team.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\EmployeeController::show
* @see app/Http/Controllers/EmployeeController.php:35
* @route '/team/{team}'
*/
show.get = (args, options) => ({
	url: show.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\EmployeeController::show
* @see app/Http/Controllers/EmployeeController.php:35
* @route '/team/{team}'
*/
show.head = (args, options) => ({
	url: show.url(args, options),
	method: "head"
});
var team = {
	index: Object.assign(index, index),
	show: Object.assign(show, show)
};
//#endregion
export { team as t };

//# sourceMappingURL=team-Dwr2ZsG3.js.map