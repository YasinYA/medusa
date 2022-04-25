import Axios, { AxiosRequestConfig } from "axios"
import * as qs from "qs"

export const AXIOS_INSTANCE = Axios.create({
  baseURL: "http://localhost:9000/admin",
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "comma" }),
}) // use your own URL here or environment variable

const TOKEN = "a07179bc-7c10-4997-a5da-3f56ae9bef48"

export const customInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
  config = {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${TOKEN}`,
    },
  }
  const promise = AXIOS_INSTANCE({ ...config }).then(({ data }) => data)

  return promise
}
