export default function({ $axios }) {
  $axios.setHeader('Content-Type', 'application/json')
  $axios.setToken(process.env.TOKEN, 'Bearer')

  $axios.onRequest(() => {
    /** Handle request here! */
  })

  $axios.onResponse(() => {
    /** Handle response here! */
  })

  $axios.onError(() => {
    /** Handle error here! */
  })
}
