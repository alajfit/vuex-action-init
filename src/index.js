async function dispatchINIT (store, context) {
    try {
        await store.dispatch('INIT', context)
    } catch (err) {
        throw new Error('error occurred when calling INIT: ', err.message)
    }
}

/**
 * @name Init
 * @description Initalise State and all Dynmaic Module State
 */
export default function vuexActionInit (context = {}) {
    return store => {
        if (store._actions && store._actions.INIT) {
            dispatchINIT(store, context)
        }
    }
}
