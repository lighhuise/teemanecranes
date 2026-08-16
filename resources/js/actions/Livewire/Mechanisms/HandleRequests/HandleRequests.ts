import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::handleUpdate
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:138
 * @route '/livewire-d4ab9da2/update'
 */
export const handleUpdate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleUpdate.url(options),
    method: 'post',
})

handleUpdate.definition = {
    methods: ["post"],
    url: '/livewire-d4ab9da2/update',
} satisfies RouteDefinition<["post"]>

/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::handleUpdate
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:138
 * @route '/livewire-d4ab9da2/update'
 */
handleUpdate.url = (options?: RouteQueryOptions) => {
    return handleUpdate.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRequests\HandleRequests::handleUpdate
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRequests/HandleRequests.php:138
 * @route '/livewire-d4ab9da2/update'
 */
handleUpdate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleUpdate.url(options),
    method: 'post',
})
const HandleRequests = { handleUpdate }

export default HandleRequests