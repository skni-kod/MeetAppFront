import Axios from 'axios'

const axios = Axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? process.env.VUE_APP_BACK_URL_PROD
      : process.env.VUE_APP_BACK_URL_DEV,
})

export default axios
