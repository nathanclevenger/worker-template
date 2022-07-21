export default {
  fetch: (req) => {
    const url = new URL(req.url)
    url.hostname = 'esb.denoflare.dev'
    console.log(url.toString())
    return fetch(url.toString())
  }
}
