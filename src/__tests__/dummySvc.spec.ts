/* eslint-disable no-undef */
import { fetchData, API } from '../service/apiCall';
import axios from 'axios'

jest.mock('axios')

describe('fetchData', () => {
   xit('should fetch proper data', async () => {
        const data = {
            data: {
                userId: "1"
            }
        };
        (axios.get as jest.Mock).mockImplementationOnce(() => Promise.resolve(data))

        const resp = await fetchData("1")
        expect(resp.data).toHaveProperty("userId")

        expect(axios.get).toHaveBeenCalledWith(`${API}1`)
    })

    xit('should return error on error', async () => {
        const errorMsg = "Dummy error msg";
        (axios.get as jest.Mock).mockImplementationOnce(() => Promise.reject(new Error(errorMsg)))

        expect(fetchData("1")).rejects.toThrow(errorMsg)

    })
})