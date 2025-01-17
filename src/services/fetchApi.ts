import axios from "axios"

export const fetchDate = async () => {
 try {
  // const response = await axios.post('https://run.mocky.io/v3/72e7e252-2f2b-462c-8e60-30a8a0cac801')
  const response = await axios.post('https://run.mocky.io/v3/0a346f61-45b6-4720-82e1-bb01ef4abed2')
  return response;

 }
 catch (error) {
  return error;

 }

}

