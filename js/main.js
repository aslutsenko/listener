const btn = document.querySelector("#btn")

class EventEmitter {
  listeners = []

  on (listener) {
    this.listeners.push(listener)
  }

  off (listener) {
    this.listeners = this.listeners.filter(it => it !== listener)
  }

  emit (message) {
    this.listeners.forEach(listener => listener(message))
  }
}

const eventEmitter = new EventEmitter()

const fn = (message) => {
  alert(message)
  eventEmitter.off(fn)
}

eventEmitter.on(fn)

btn.addEventListener('click', () => {
  eventEmitter.emit('Hello world!')
})
