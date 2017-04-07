export default class Message {  
  
  // Call constructor
  constructor (value) {
  	// Set parameter value to own value
    this.value = value
  }

  // Create a function to show value
  showMessage () {
    console.log(`Hi! this is: ${this.value}`)
  }
}