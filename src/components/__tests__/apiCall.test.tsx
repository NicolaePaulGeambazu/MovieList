import axios from 'axios'
import { MOVIES_LIST_URL, API_KEY } from '../../constants'

describe('Movie API', () => {
  it('fetches movies data from the API', async () => {
    // Mock axios get method and provide a mock implementation
    const axiosGetSpy = jest.spyOn(axios, 'get')
    axiosGetSpy.mockResolvedValueOnce({ data: [{ id: '1', title: 'Movie 1' }, { id: '2', title: 'Movie 2' }] })

    // Call the function that makes the API call
    const response = await axios.get(MOVIES_LIST_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Accept: 'application/json'
      }
    })

    // Check if axios.get is called with the correct URL and headers
    expect(axios.get).toHaveBeenCalledWith(MOVIES_LIST_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Accept: 'application/json'
      }
    })

    // Check if the response contains the expected movie data
    expect(response.data).toEqual([{ id: '1', title: 'Movie 1' }, { id: '2', title: 'Movie 2' }])

    // Restore the original axios.get method
    axiosGetSpy.mockRestore()
  })
})
