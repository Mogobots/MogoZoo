const baseUrl = 'https://actions.google.com/sounds/v1/animals/'
// animal_bark_and_growl.ogg
export const sounds = {
  dog: 'animal_bark_and_growl.ogg',

  get(animal) {
    return baseUrl + sounds[animal]
  }
}
