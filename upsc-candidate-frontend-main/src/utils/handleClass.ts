export const hideByDiv = (id: string) => {
  document.getElementById(id)?.classList.add('d-none')
}

export const showByDiv = (id: string) => {
  document.getElementById(id)?.classList.remove('d-none')
}

export const hideByClassName = (id: string) => {
  document.getElementsByClassName(id)?.[0]?.classList.add('d-none')
}

export const showByClassName = (id: string) => {
  document.getElementsByClassName(id)?.[0]?.classList.remove('d-none')
}
