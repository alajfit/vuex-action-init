import Vuex from 'vuex'
import { name } from '../../../../package.json'
import vuexActionInit from '../../../../src'

export default function () {
    return new Vuex.Store({
        state: {
            name: null
        },
        actions: {
            INIT () {
                console.log('Initialising')
            }
        },
        plugins: [vuexActionInit()]
    })
}