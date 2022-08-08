import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/analytics'

const config = {
  apiKey:            process.env.VUE_APP_FIRECONFIG_APIKEY,
  authDomain:        process.env.VUE_APP_FIRECONFIG_AUTHDOMAIN,
  databaseURL:       process.env.VUE_APP_FIRECONFIG_DBURL,
  projectId:         process.env.VUE_APP_FIRECONFIG_PROJECTID,
  storageBucket:     process.env.VUE_APP_FIRECONFIG_STORAGE,
  messagingSenderId: process.env.VUE_APP_FIRECONFIG_MSGSENDERID,
  appId:             process.env.VUE_APP_FIRECONFIG_APPID,
  measurementId:     process.env.VUE_APP_FIRECONFIG_MEASUREMENTID
}

firebase.initializeApp(config)

export const db = firebase.firestore()
export const analytics = firebase.analytics()
