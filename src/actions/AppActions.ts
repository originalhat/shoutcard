export function incrementCounter() {
  return {
    type: 'INCREMENT_COUNTER'
  }
}

export function decrementCounter() {
  return {
    type: 'DECREMENT_COUNTER'
  }
}

export function updateName(obj: any) {
  return {
    type: 'UPDATE_NAME',
    name: obj.name
  }
}

