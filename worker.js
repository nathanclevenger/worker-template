export default {
  fetch: (req) => {
    const url = new URL(req.url)
    url.hostname = 'drivly.dev'
    console.log(url.toString())
    return fetch(url.toString())
  }
}
