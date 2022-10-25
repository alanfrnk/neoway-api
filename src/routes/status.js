const express = require('express')
const router = express.Router()

/** Service */
// const PatientService = require('../../services/patient/patientService.js')

// // @route  GET api/patient/
// // @desc   Return patients
// // @access Authenticated
// router.get('/', PatientService.getAll)

// // @route  POST api/patient/
// // @desc   Create new patient
// // @access Authenticated
// router.post('/', PatientService.create)

// // @route  GET api/patient/
// // @desc   Return patient by id
// // @param  patientId
// // @access Authenticated
// router.get('/:patientId', PatientService.get)

// // @route  GET api/patient/cid
// // @desc   Return patient cid
// // @param  value
// // @access Authenticated
// router.get('/cid/:value', PatientService.selectDisease)

// // @route  PUT api/patient/
// // @desc   Update patient
// // @param  patientId
// // @access Authenticated
// router.put('/:patientId', PatientService.update)

// // @route  PUT api/patient/activeInactive
// // @desc   Activate or inactivate patient
// // @param  patientId
// // @access Authenticated
// router.put('/activeInactive/:patientId', PatientService.activeInactive)

// // @route  GET api/patient/
// // @desc   Return patients by caregiver
// // @param  caregiverId
// // @access Authenticated
// router.get('/byCaregiver/:caregiverId', PatientService.getByCaregiver)

// // @route  PUT api/patient/changeImage
// // @desc   Change image url
// // @param  professionalId
// // @body  urlImg
// // @access Authenticated
// router.put('/changeImage/:patientId', PatientService.changeImage)

// // @route  PUT api/patient/search
// // @desc   get patient by search
// // @param  search
// // @access Authenticated
// router.get('/search/:search', PatientService.searchPatient)


module.exports = router
