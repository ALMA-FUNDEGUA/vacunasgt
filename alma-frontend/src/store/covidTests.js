import { db, analytics } from '../plugins/firebase'

const _ = require('lodash')

const toUpperCase = (items) =>
  _.map(
    _.filter(items, (item) => !!item),
    (item) => ({
      text: item.toUpperCase(),
      value: item,
    })
  )

let state = () => ({
  loading: true,
  centers: [],
  selected: null,

  department: null,
  municipality: null,
  zone: null,

  testType: [],
  serviceType: null,
  simpleSchedule: null,
})

let getters = {
  loading: (state) => state.loading,

  centers: (state) => state.centers,
  selected: (state) =>
    state.centers.find((center) => state.selected === center.center),

  filtered: (state) => {
    let centers = state.centers

    const filters = [
      { // Filter by department
        condition: () => !!state.department,
        predicate: (item) => item.department === state.department,
      },

      { // Filter by municipality
        condition: () => !!state.municipality,
        predicate: (item) => item.municipality === state.municipality,
      },

      { // Filter by zone
        condition: () => !!state.zone,
        predicate: item => item.zone === state.zone,
      },

      { // Filter by testType
        condition: () => state.testType.length > 0,
        predicate: item => {
          for (const { testType } of item.tests) {
            const index = state.testType.indexOf(testType)
            if (index !== -1)
              return true
          }

          return false
        },
      },

      { // Filter by serviceType
        condition: () => !!state.serviceType,
        predicate: item => {
          for (const { serviceType } of item.tests) {
            if (serviceType === state.serviceType)
              return true
          }

          return false
        },
      },

      { // Filter by simpleSchedule
        condition: () => !!state.simpleSchedule,
        predicate: item => {
          for (const { simpleSchedule } of item.tests) {
            if (simpleSchedule === state.simpleSchedule)
              return true
          }

          return false
        },
      }
    ]

    for (const filter of filters)
      if (filter.condition())
        centers = centers.filter(filter.predicate)

    return centers
  },

  department: (state) => state.department,
  departments: (state) => {
    const ordered = _.chain(state.centers)
      .map('department')
      .uniq()
      .orderBy()
      .value()

    return toUpperCase(ordered)
  },

  municipality: state => state.municipality,
  municipalities: (_state, getters) => {
    const ordered = _.chain(getters.filtered)
      .map('municipality')
      .uniq()
      .orderBy()
      .value()

    return toUpperCase(ordered)
  },

  zone: state => state.zone,
  zones: (_state, getters) => {
    const ordered = _.chain(getters.filtered)
      .map('zone')
      .uniq()
      .orderBy()
      .value()

    return toUpperCase(ordered)
  },

  testType: state => state.testType,
  testTypes: (state) => {
    const ordered = _.chain(state.centers)
      .map('tests')
      .flatten()
      .map('testType')
      .uniq()
      .orderBy()
      .value()

    return toUpperCase(ordered)
  },

  serviceType: state => state.serviceType,
  serviceTypes: (_state, getters) => {
    const ordered = _.chain(getters.filtered)
      .map('tests')
      .flatten()
      .map('serviceType')
      .uniq()
      .orderBy()
      .value()

    return toUpperCase(ordered)
  },

  simpleSchedule: state => state.simpleSchedule,
  simpleSchedules: (_state, getters) => {
    const ordered = _.chain(getters.filtered)
      .map('simpleSchedule')
      .uniq()
      .orderBy()
      .value()

    return toUpperCase(ordered)
  }
}

let mutations = {
  SET_LOADING: (state, payload) => state.loading = payload,

  SET_CENTERS: (state, payload) => state.centers = payload,
  SET_SELECTED: (state, payload) => state.selected = payload,

  SET_DEPARTMENT: (state, payload) => {
    analytics.logEvent('set_test_department', { value: payload })
    state.department = payload
  },

  SET_MUNICIPALITY: (state, payload) => {
    analytics.logEvent('set_test_municipality', { value: payload })
    state.municipality = payload
  },

  SET_ZONE: (state, payload) => {
    analytics.logEvent('set_test_zone', { value: payload })
    state.zone = payload
  },

  SET_TEST_TYPE: (state, payload) => {
    analytics.logEvent('set_test_type', { value: payload })
    state.testType = payload
  },

  SET_SERVICE_TYPE: (state, payload) => {
    analytics.logEvent('set_test_service_type', { value: payload })
    state.serviceType = payload
  },

  SET_SIMPLE_SCHEDULE: (state, payload) => {
    analytics.logEvent('set_test_sched', { value: payload })

    state.simpleSchedule = payload
  },
}

let actions = {
  async fetchCenters({ commit }) {
    commit('SET_LOADING', true)

    const snapshot = await db.collection('centers_covid_tests').get()
    const centers = snapshot.docs.map((doc) => doc.data())

    commit('SET_CENTERS', centers.map(item => ({
      ...item,
      name: item.name,
      maps: item.mapsLink,
    })))

    commit('SET_LOADING', false)
  },
}

export default {
  namespaced: true,

  state,
  getters,
  mutations,
  actions,
}
