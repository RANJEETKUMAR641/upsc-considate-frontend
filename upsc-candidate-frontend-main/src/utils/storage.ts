import { AES, enc } from 'crypto-js'
import localforage from 'localforage'
import { isEmpty } from 'lodash'

const config = { secretKey: 'formio' }

localforage.config({
  driver: [localforage.WEBSQL, localforage.INDEXEDDB, localforage.LOCALSTORAGE], // Force WebSQL; same as using setDriver()
  name: 'myApp',
  version: 1.0,
  size: 4980736, // Size of database, in bytes. WebSQL-only for now.
  storeName: 'CB-MI', // Should be alphanumeric, with underscores.
  description: 'some description',
})

const StorageService = localStorage

/**
 * Set value in local storage
 * @method set
 */
export function setItem(key, value) {
  value = bsEncrypt(value)
  StorageService.setItem(key, value)
}

/**
 * Get value form local storage
 * @method get
 */
export function getItem(key) {
  const data = StorageService.getItem(key)
  const data1 = bsDecrypt(data)

  if (data1 && typeof data1 === 'string') {
    return JSON.parse(data1)
  }

  return data1
}

/**
 * clear local storage
 * @method flush
 */
export function removeItem(key) {
  if (key != null && key !== undefined) {
    StorageService.removeItem(key)
  } else {
    StorageService.clear()
  }
}

/*
 *
 * clear all storage data
 * */
export function clear() {
  StorageService.clear()
}

/**
 * use to encrypt data
 * @method bsEncrypt
 */
export function bsEncrypt(data) {
  const newString = JSON.stringify(data)
  return AES.encrypt(newString, config.secretKey).toString()
}

/**
 * use to decrypt data
 * @method bsDecrypt
 */
export function bsDecrypt(data) {
  if (!data) {
    return data
  }
  const newString = AES.decrypt(data, config.secretKey)
  return newString.toString(enc.Utf8)
}
