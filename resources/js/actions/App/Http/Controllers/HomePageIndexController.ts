import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\HomePageIndexController::__invoke
 * @see app/Http/Controllers/HomePageIndexController.php:13
 * @route '/'
 */
const HomePageIndexController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: HomePageIndexController.url(options),
    method: 'get',
})

HomePageIndexController.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomePageIndexController::__invoke
 * @see app/Http/Controllers/HomePageIndexController.php:13
 * @route '/'
 */
HomePageIndexController.url = (options?: RouteQueryOptions) => {
    return HomePageIndexController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomePageIndexController::__invoke
 * @see app/Http/Controllers/HomePageIndexController.php:13
 * @route '/'
 */
HomePageIndexController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: HomePageIndexController.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomePageIndexController::__invoke
 * @see app/Http/Controllers/HomePageIndexController.php:13
 * @route '/'
 */
HomePageIndexController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: HomePageIndexController.url(options),
    method: 'head',
})
export default HomePageIndexController