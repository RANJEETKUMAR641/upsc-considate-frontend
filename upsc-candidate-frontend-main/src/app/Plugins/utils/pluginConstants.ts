export const PATTERN = {
  EMAIL:
    /^(([^<>()[\]\\+_^%$#!`~&*.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  MOBILE: /^[5-9]\d{0,9}$/i,
  TEL: '0000-0000000',
  TEXT: /^[A-Za-z0-9]/i,
  ALL_TEXT: /^[A-Z0-9_@.#&?+:\s-{}()]/i,
  NUMERIC: /^\d+$/i,
  ALPHANUMERIC: /^[A-Za-z0-9\s]/i,
  ALPHABET: /^[A-Za-z\s]+$/,
  REGISTRATION: /^[1-9]\d{0,14}$/i,
}
