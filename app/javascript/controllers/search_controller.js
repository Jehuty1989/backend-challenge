import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["lat", "long", "para"]

  latlong(event) {
    event.preventDefault()
    const latitude = this.latTarget.value || null
    const longitude = this.longTarget.value || null

    if (latitude === null || latitude === null) {
      this.paraTarget.innerHTML = "<h2>Please enter valid coordinates</h2>"
      return
    }

    const museumObj = {}
    const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/museum.json?limit=10&type=poi&proximity=${longitude},${latitude}&access_token=pk.eyJ1IjoiamVodXR5MTk4OSIsImEiOiJja3o4Z3Z1cDEwdmR5Mm5uOTh6em43bDE4In0.rA_tXFai72Z4Xq4ndP-QFA`


    fetch(mapboxUrl)
      .then(responce => responce.json())
      .then((data) => {
        data.features.forEach((feature) => {
          if (museumObj[feature.context[0].text] === undefined) {
            museumObj[feature.context[0].text] = new Array(feature.text)
          } else {
            museumObj[feature.context[0].text].push(feature.text)
          }
        })

        fetch(`/?json=${JSON.stringify(museumObj)}`, {
          headers: {
            'Accept': 'text/plain',
          },
          method: "get"
        })
          .then(responce => responce.text())
          .then((data) => {
            this.paraTarget.innerHTML = `<h2>Your JSON</h2><p>${JSON.stringify(museumObj)}</p>`
          })
        })
  }
}
