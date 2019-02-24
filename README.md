# Vuex Action Init (Starting Your State)
[![Build Status](https://travis-ci.org/alajfit/vuex-action-init.svg?branch=master)](https://travis-ci.org/alajfit/vuex-action-init)
[![codecov](https://codecov.io/gh/alajfit/vuex-action-init/branch/master/graph/badge.svg)](https://codecov.io/gh/alajfit/vuex-action-init)
[![npm](https://img.shields.io/npm/v/vuex-action-init.svg) ![npm](https://img.shields.io/npm/dm/vuex-action-init.svg)](https://www.npmjs.com/package/vuex-action-init)

> Initiate Vuex State and Module State

## Motivation

I found to initiate state for a Vuex store and Vuex store module is quite awkard and a solution was needed. The library is designed to initiate the store and modules store in Vuex.

* add a check for an INIT action
* When INIT found run before anything else
* When INIT found in SSR have it load before anything else

## Install

```bash
npm install vuex-action-init --save
```

## Usage

### Use in a Vue App
> INIT method is called during load
```js
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuexActionInit from 'vuex-action-init'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions: {
    INIT () {
      console.log('Initalizing')
    }
  },
  plugins: [vuexActionInit()]
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
```