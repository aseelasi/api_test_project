import axios from 'axios'
import config from '../config'
import { stringifyError } from './util'

const apiUrl = `${config.apiUrl}`
const Api = () => {

  const handleError = (error) => {
    let errorObject = JSON.parse(stringifyError(error), null, '\t').response
    return errorObject 
  }

  const post = async (url, data) => {
    try {
      const result = await axios.post(apiUrl+url, data)
      return result.data
    }catch (error) {
      handleError(error)
    }
  }
  const get = async (url, query) => {
    try{
      const result = await axios.get(apiUrl+url, {params: query})
      // console.log(result.data)    
      return result.data
    }catch (error){
      handleError(error)
    }
  }

  return {
    get,
    post,
  }
}

export default Api