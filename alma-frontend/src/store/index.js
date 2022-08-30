import Vue from 'vue'
import Vuex from 'vuex'

import { db } from '../plugins/firebase'

import gtag from 'ga-gtag';

import covidTests from './covidTests'

var _ = require('lodash')

Vue.use(Vuex)

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

  centros: null,
  selectedDepartamento: null,
  selectedMunicipio: null,
  selectedVacuna: null,
  selectedGrupo: null,
  selectedDosis: null,
  selectedRequisito: null,
  selectedAfluencia: null,
  selectedIngreso: null,
  selectedDias: null,

  selected: null,
  centers: [],

  department: null,
  municipality: null,
  vaccine: null,
  group: null,
  dose: null,
  requirement: null,
  influx: null,
  entrance: null,
  days: null,

  // COVID Test Centers
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
  testCenters: [],
})

let getters = {
  loading: (state) => state.loading,

  CENTROSPRUEBAS: (state) => {
    return state.centrosPruebas
  },

  FILTERED_COVIDTESTCENTERS: (state) => {
    try {
      let filteredDepartamento = state.centros.filter(
        (item) =>
          item.departamento === state.selectedDepartamento ||
          state.selectedDepartamento == null
      )
      return filteredDepartamento
    } catch {
      return []
    }
  },
  CENTROS: (state) => {
    return state.centros
  },

  FILTERED_CENTROS: (state) => {
    try {
      let filteredDepartamento = state.centros.filter(
        (item) =>
          item.departamento === state.selectedDepartamento ||
          state.selectedDepartamento == null
      )
      let filteredMunicipio = filteredDepartamento.filter(
        (item) =>
          item.municipio === state.selectedMunicipio ||
          state.selectedMunicipio == null
      )
      let filteredVacuna = filteredMunicipio.filter(
        (item) =>
          item.vacuna === state.selectedVacuna || state.selectedVacuna == null
      )
      let filteredGrupo = filteredVacuna.filter(
        (item) =>
          item.grupo === state.selectedGrupo || state.selectedGrupo == null
      )
      let filteredDosis = filteredGrupo.filter(
        (item) =>
          item.dosis === state.selectedDosis || state.selectedDosis == null
      )
      let filteredRequisito = filteredDosis.filter(
        (item) =>
          item.requisito === state.selectedRequisito ||
          state.selectedRequisito == null
      )
      let filteredAfluencia = filteredRequisito.filter(
        (item) =>
          item.afluencia === state.selectedAfluencia ||
          state.selectedAfluencia == null
      )
      let filteredIngreso = filteredAfluencia.filter(
        (item) =>
          item.ingreso === state.selectedIngreso ||
          state.selectedIngreso == null
      )
      // let filteredDias = filteredIngreso.filter(item => item.ingreso === state.selectedDias || state.selectedDias == null )
      return filteredIngreso
    } catch {
      return []
    }
  },

  DEPARTAMENTOS_AVAILABLE: (state) => {
    const ordered = _.orderBy(_.uniq(_.map(state.centros, 'departamento')))

    return _.map(ordered, (item) => ({
      text: item.toUpperCase(),
      value: item,
    }))
  },
  // Problem might be here
  MUNICIPIOS_AVAILABLE: (_state, getters) => {
    const ordered = _.orderBy(
      _.uniq(_.map(getters.FILTERED_CENTROS, 'municipio'))
    )

    return _.map(ordered, (item) => ({
      text: item.toUpperCase(),
      value: item,
    }))
  },

  VACUNAS_AVAILABLE: (_state, getters) => {
    const ordered = _.orderBy(_.uniq(_.map(getters.FILTERED_CENTROS, 'vacuna')))

    return _.map(ordered, (item) => ({
      text: item.toUpperCase(),
      value: item,
    }))
  },

  DOSIS_AVAILABLE: (_state, getters) => {
    const ordered = _.orderBy(_.uniq(_.map(getters.FILTERED_CENTROS, 'dosis')))

    return _.map(ordered, (item) => ({
      text: item.toUpperCase(),
      value: item,
    }))
  },

  GRUPOS_AVAILABLE: (_state, getters) => {
    const ordered = _.orderBy(_.uniq(_.map(getters.FILTERED_CENTROS, 'grupo')))

    return _.map(ordered, (item) => ({
      text: item.toUpperCase(),
      value: item,
    }))
  },

  REQUISITOS_AVAILABLE: (_state, getters) => {
    const ordered = _.orderBy(
      _.uniq(_.map(getters.FILTERED_CENTROS, 'requisito'))
    )

    return _.map(ordered, (item) => ({
      text: item.toUpperCase(),
      value: item,
    }))
  },

  AFLUENCIA_AVAILABLE: (_state, getters) => {
    const ordered = _.orderBy(
      _.uniq(_.map(getters.FILTERED_CENTROS, 'afluencia'))
    )

    return _.map(ordered, (item) => ({
      text: item.toUpperCase(),
      value: item,
    }))
  },

  INGRESO_AVAILABLE: (_state, getters) => {
    const ordered = _.orderBy(
      _.uniq(_.map(getters.FILTERED_CENTROS, 'ingreso'))
    )

    return _.map(ordered, (item) => ({
      text: item.toUpperCase(),
      value: item,
    }))
  },

  selectedDepartamento: (state) => {
    return state.selectedDepartamento
  },
  selectedMunicipio: (state) => {
    return state.selectedMunicipio
  },
  selectedVacuna: (state) => {
    return state.selectedVacuna
  },
  selectedGrupo: (state) => {
    return state.selectedGrupo
  },
  selectedDosis: (state) => {
    return state.selectedDosis
  },
  selectedRequisito: (state) => {
    return state.selectedRequisito
  },
  selectedAfluencia: (state) => {
    return state.selectedAfluencia
  },
  selectedIngreso: (state) => {
    return state.selectedIngreso
  },
  selectedDias: (state) => {
    return state.selectedDias
  },

  centers: (state) => state.centers,
  selected: (state) =>
    state.centers.find((center) => state.selected === center.name),

  filtered: (state) => {
    let centers = state.centers

    const filters = [
      {
        // Filter by department
        condition: () => !!state.department,
        predicate: (item) => item.department === state.department,
      },

      {
        // Filter by municipality
        condition: () => !!state.municipality,
        predicate: (item) => item.municipality === state.municipality,
      },

      {
        // Filter by vaccine
        condition: () => !!state.vaccine,
        predicate: (item) => state.vaccine in item.vaccines,
      },

      {
        // Filter by dose
        condition: () => !!state.dose,
        predicate: (item) => {
          for (const [vaccine, doses] of Object.entries(item.vaccines)) {
            if (!!state.vaccine && vaccine !== state.vaccine) continue
            const includes = Object.keys(doses).includes(state.dose)
            if (includes) return true
          }

          return false
        },
      },

      {
        // Filter by group
        condition: () => !!state.group,
        predicate: (item) => {
          for (const [vaccine, doses] of Object.entries(item.vaccines)) {
            if (!!state.vaccine && vaccine !== state.vaccine) continue

            for (const [dose, requirements] of Object.entries(doses)) {
              if (!!state.dose && dose !== state.dose) continue

              for (const requirement of requirements) {
                if (requirement.group === state.group) return true
              }
            }
          }

          return false
        },
      },

      {
        // Filter by requirement
        condition: () => !!state.requirement,
        predicate: (item) => {
          for (const [vaccine, doses] of Object.entries(item.vaccines)) {
            if (!!state.vaccine && vaccine !== state.vaccine) continue

            for (const [dose, requirements] of Object.entries(doses)) {
              if (!!state.dose && dose !== state.dose) continue

              for (const { requirement } of requirements) {
                if (requirement === state.requirement) return true
              }
            }
          }

          return false
        },
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

  vaccine: (state) => state.vaccine,
  vaccines: (_state, getters) => {
    const ordered = _.orderBy(
      _.uniq(_.flatten(_.map(_.map(getters.filtered, 'vaccines'), Object.keys)))
    )

    return toUpperCase(ordered)
  },

  dose: (state) => state.dose,
  doses: (state, getters) => {
    const OrderCondition = {
      PRIMERA: 0,
      SEGUNDA: 1,
      TERCERA: 3,
      CUARTA: 4,
      REFUERZO: 5,
      'CERRADO HOY': 4,
    }

    let ordered = []
    for (const center of getters.filtered) {
      for (const [vaccine, doses] of Object.entries(center.vaccines)) {
        if (!!state.vaccine && vaccine !== state.vaccine) continue
        ordered.push(...Object.keys(doses))
      }
    }

    return toUpperCase(_.orderBy(_.uniq(ordered)))
      .sort((a, b) => OrderCondition[a.text] - OrderCondition[b.text])
      .filter((item) => item.text !== 'CERRADO HOY')
  },

  group: (state) => state.group,
  groups: (state, getters) => {
    let ordered = []
    for (const center of getters.filtered) {
      for (const [vaccine, doses] of Object.entries(center.vaccines)) {
        if (!!state.vaccine && vaccine !== state.vaccine) continue

        for (const [dose, requirements] of Object.entries(doses)) {
          if (!!state.dose && dose !== state.dose) continue
          ordered.push(...requirements)
        }
      }
    }

    ordered = _.orderBy(_.uniq(_.map(ordered, 'group')))

    return toUpperCase(ordered)
  },

  requirement: (state) => state.requirement,
  requirements: (state, getters) => {
    let ordered = []
    for (const center of getters.filtered) {
      for (const [vaccine, doses] of Object.entries(center.vaccines)) {
        if (!!state.vaccine && vaccine !== state.vaccine) continue

        for (const [dose, requirements] of Object.entries(doses)) {
          if (!!state.dose && dose !== state.dose) continue
          ordered.push(...requirements)
        }
      }
    }

    ordered = _.orderBy(_.uniq(_.map(ordered, 'requirement')))

    return toUpperCase(ordered)
  },

  influx: (state) => state.influx,
  influxes: (_state, getters) => {
    const ordered = _.orderBy(_.uniq(_.map(getters.filtered, 'influx')))

    return toUpperCase(ordered)
  },

  entrance: (state) => state.entrance,
  entrances: (_state, getters) => {
    const ordered = _.orderBy(_.uniq(_.map(getters.filtered, 'entrance')))

    return toUpperCase(ordered)
  },
}

let mutations = {
  SET_LOADING: (state, payload) => (state.loading = payload),

  set_centros: (state, payload) => {
    state.centros = payload
  },
  set_selectedDepartamento: (state, payload) => {
    state.selectedDepartamento = payload
  },
  set_selectedMunicipio: (state, payload) => {
    state.selectedMunicipio = payload
  },
  set_selectedVacuna: (state, payload) => {
    state.selectedVacuna = payload
  },
  set_selectedGrupo: (state, payload) => {
    state.selectedGrupo = payload
  },
  set_selectedDosis: (state, payload) => {
    state.selectedDosis = payload
  },
  set_selectedRequisito: (state, payload) => {
    state.selectedRequisito = payload
  },
  set_selectedAfluencia: (state, payload) => {
    state.selectedAfluencia = payload
  },
  set_selectedIngreso: (state, payload) => {
    state.selectedIngreso = payload
  },
  set_selectedDias: (state, payload) => {
    state.selectedDias = payload
  },

  SET_CENTERS: (state, payload) => (state.centers = payload),
  SET_SELECTED: (state, payload) => (state.selected = payload),

  SET_DEPARTMENT: (state, payload) =>{
    state.department = payload

    gtag('event', 'action', {
      'action_type': 'select_department',
      'event_value': payload || '<< empty_value >>',
    })
  },

  SET_MUNICIPALITY: (state, payload) => {
    state.municipality = payload

    gtag('event', 'action', {
      'action_type': 'select_municipality',
      'event_value': payload || '<< empty_value >>',
    })
  },

  SET_VACCINE: (state, payload) => {
    state.vaccine = payload

    gtag('event', 'action', {
      'action_type': 'select_vaccine',
      'event_value': payload || '<< empty_value >>',
    })
  },

  SET_DOSE: (state, payload) => {
    state.dose = payload

    gtag('event', 'action', {
      'action_type': 'select_medicine_dose',
      'event_value': payload || '<< empty_value >>',
    })
  },

  SET_GROUP: (state, payload) => {
    state.group = payload

    gtag('event', 'action', {
      'action_type': 'select_medicine_dose',
      'event_value': payload || '<< empty_value >>',
    })
  },

  SET_REQUIREMENT: (state, payload) => {
    state.requirement = payload

    gtag('event', 'action', {
      'action_type': 'select_medicine_requirement',
      'event_value': payload || '<< empty_value >>',
    })
  },

  SET_INFLUX: (state, payload) => {
    state.influx = payload

    gtag('event', 'action', {
      'action_type': 'select_influx',
      'event_value': payload || '<< empty_value >>',
    })
  },

  SET_ENTRANCE: (state, payload) => {
    state.entrance = payload

    gtag('event', 'action', {
      'action_type': 'select_entrance',
      'event_value': payload || '<< empty_value >>',
    })
  },
}

let actions = {
  async fetchCenters({ commit }) {
    commit('SET_LOADING', true)

    const centers = await db.collection('centros_vacunacion').get()

    function formatVaccines(vaccines = {}) {
      const data = {}

      for (const [vaccine, vData] of Object.entries(vaccines)) {
        data[vaccine] = {}

        for (const [dose, dData] of Object.entries(vData)) {
          data[vaccine][dose] = []

          for (const requirement of dData) {
            data[vaccine][dose].push({
              group: requirement['GRUPO'],
              requirement: requirement['REQUISITO'],
              available: requirement['DISPONIBILIDAD'] === 'SI' ? true : false,
            })
          }
        }
      }

      return data
    }

    function formatDays(days) {
      return {
        sunday: days['DOMINGO'],
        monday: days['LUNES'],
        tuesday: days['MARTES'],
        wednesday: days['MIERCOLES'],
        thursday: days['JUEVES'],
        friday: days['VIERNES'],
        saturday: days['SABADO'],
      }
    }

    function format(document) {
      const data = document.data()
      return {
        influx: data['AFLUENCIA'],
        name: data['CENTRO'],
        department: data['DEPARTAMENTOS'],
        municipality: data['MUNICIPIO'],
        days: formatDays(data['DIAS']),
        address: data['DIRECCIÓN'],
        available: data['DISPONIBILIDAD CENTRO'],
        maps: data['Google Maps'],
        entrance: data['INGRESO'],
        observations: data['OBSERVACIONES'],
        vaccines: formatVaccines(data['VACUNAS']),
        schedule: {
          week: data['HORARIO ENTRE SEMANA'],
          weekend: data['HORARIO FIN DE SEMANA'],
        },
      }
    }

    const formatted = centers.docs.map(format)

    commit('SET_CENTERS', formatted)
    commit('SET_LOADING', false)
  },
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,

  modules: {
    covidTestStore: covidTests,
  },
})
