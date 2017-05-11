class Animal {
  constructor (name, birthDate = new Date()) {
    this.name = name
    this.birthDate = new Date(birthDate)
  }

  getBirthDate () {
    return this.birthDate
  }

  getAge () {
    let currentYear = new Date().getFullYear()
    let birthDateYear = this.birthDate.getFullYear()
    let result = currentYear - birthDateYear
    return result
  }

  toString () {
    return 'I am a ' + this.name + ', ' + 'I was born on ' + this.birthDate + '.'
  }
}
class Mammals extends Animal {
  constructor (name, birthDate, sciencename = 'Unknown', gender = 'Unknown') {
    super(name, birthDate)
    this.sciencename = sciencename
    this.gender = gender
  }
  static getScienceName () {
    return this.sciencename
  }
  isReproductive () {
    if (this.gender === 'female') {
      return true
    } else {
      return false
    }
  }
  createBaby (name) {
    return new Mammals(name)
  }
  runningSpeed (distance, time) {
    return distance * time
  }
  toString () {
    return super.toString() + ' I am a Mammal!'
  }
}
class Reptiles extends Animal {
  constructor (name, birthDate, sciencename = 'Unknown', gender = 'Unknown') {
    super(name, birthDate)
    this.sciencename = sciencename
    this.gender = gender
  }
  static getScienceName () {
    return this.sciencename
  }
  isReproductive () {
    if (this.gender === 'female') {
      return true
    } else {
      return false
    }
  }
  layEggs (nameArr) {
    let eggs = []
    nameArr.forEach(function (name) {
      eggs.push(new Reptiles(name))
    })
    return eggs
  }
  swimSpeed (distance, time) {
    return distance * time
  }
  toString () {
    return super.toString() + ' I am a Reptile!'
  }
}
