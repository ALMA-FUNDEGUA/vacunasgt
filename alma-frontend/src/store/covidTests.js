// import axios from 'axios'

import { db } from '../plugins/firebase'

var _ = require('lodash')

// Vue.use(Vuex)

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

  centrosPruebas: null,
  address: null,
  available: null,
  center: null,
  departmentTest: null,
  descriptionTest: null,
  mapsLink: null,
  municipalityTest: null,
  phoneNumber: null,

  selectedAddress: null,
  selectedDisponibilidad: null,
  selectedCentro: null,
  selectedDepartamentoPrueba: null,
  selectedDescripcion: null,
  selectedMunicipioPrueba: null,

  selectedTestCenters: null,
  centers: [],
})

let getters = {
  loading: (state) => state.loading,

  selectedAddress: (state) => {
    return state.selectedAddress
  },
  selectedAvailable: (state) => {
    return state.selectedAvailable
  },
  selectedCenter: (state) => {
    return state.selectedCenter
  },
  selectedDepartment: (state) => {
    return state.selectedDepartment
  },
  selectedDescription: (state) => {
    return state.selectedDescription
  },
  selectedMapsLink: (state) => {
    return state.selectedMapsLink
  },
  selectedMunicipality: (state) => {
    return state.selectedMunicipality
  },
  selectedPhoneNumber: (state) => {
    return state.selectedPhoneNumber
  },

  centers: (state) => state.centers,
  selected: (state) =>
    state.centers.find((center) => state.selected === center.name),

  filtered: (state) => {
    let centers = state.centers

    const filters = [
      {
        // Filter by address
        condition: () => !!state.address,
        predicate: (item) => item.address === state.address,
      },
      {
        // Filter by available
        condition: () => !!state.available,
        predicate: (item) => item.available === state.available,
      },
      {
        // Filter by center
        condition: () => !!state.center,
        predicate: (item) => item.center === state.center,
      },
      {
        // Filter by department
        condition: () => !!state.department,
        predicate: (item) => item.department === state.department,
      },
      {
        // Filter by description
        condition: () => !!state.description,
        predicate: (item) => item.description === state.description,
      },
      {
        // Filter by mapsLink
        condition: () => !!state.mapsLink,
        predicate: (item) => item.mapsLink === state.mapsLink,
      },

      {
        // Filter by municipality
        condition: () => !!state.municipality,
        predicate: (item) => item.municipality === state.municipality,
      },
      {
        // Filter by phoneNumber
        condition: () => !!state.phoneNumber,
        predicate: (item) => item.phoneNumber === state.phoneNumber,
      },
    ]

    for (const filter of filters)
      if (filter.condition()) centers = centers.filter(filter.predicate)

    return centers
  },

  department: (state) => state.department,
  departments: (state) => {
    const ordered = _.orderBy(_.uniq(_.map(state.centers, 'department')))

    return toUpperCase(ordered)
  },

  municipality: (state) => state.municipality,
  municipalities: (_state, getters) => {
    const ordered = _.orderBy(_.uniq(_.map(getters.filtered, 'municipality')))

    return toUpperCase(ordered)
  },
}

let mutations = {
  SET_LOADING: (state, payload) => (state.loading = payload),

  set_centros_covid: (state, payload) => {
    state.centros = payload
  },
  set_address: (state, payload) => {
    state.selectedAddress = payload
  },
  set_selectedAvailable: (state, payload) => {
    state.selectedAvailable = payload
  },
  set_selectedCenter: (state, payload) => {
    state.selectedCenter = payload
  },
  set_selectedDepartment: (state, payload) => {
    state.selectedDepartment = payload
  },
  set_selectedDescription: (state, payload) => {
    state.selectedDescription = payload
  },
  set_selectedMapsLink: (state, payload) => {
    state.selectedMapsLink = payload
  },
  set_selectedMunicipality: (state, payload) => {
    state.selectedMunicipality = payload
  },
  set_selectedPhoneNumber: (state, payload) => {
    state.selectedPhoneNumber = payload
  },

  SET_CENTERS: (state, payload) => (state.centers = payload),
  SET_SELECTED: (state, payload) => (state.selected = payload),

  SET_ADDRESS: (state, payload) => (state.centers = payload),
  SET_AVAILABLE: (state, payload) => (state.centers = payload),
  SET_CENTER: (state, payload) => (state.centers = payload),
  SET_DEPARTMENT: (state, payload) => (state.centers = payload),
  SET_DESCRIPTION: (state, payload) => (state.centers = payload),
  SET_MAPSLINK: (state, payload) => (state.centers = payload),
  SET_MUNICIPALITY: (state, payload) => (state.centers = payload),
  SET_PHONENUMBER: (state, payload) => (state.centers = payload),
}

let actions = {
  async fetchCenters({ commit }) {
    commit('SET_LOADING', true)

    const testcenters = await db.collection('centers_covid_tests').get()

    commit(
      'SET_CENTERS',
      testcenters.docs.map((doc) => doc.data())
    )
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

// export default {
//   namespaced: true,

//   state: () => ({
//     loading: true,
//     centers: []
//   }),

//   getters: {
//     loading: state => state.loading,
//     centers: state => state.centers,
//   }
// }
