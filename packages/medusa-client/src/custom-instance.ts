import { AxiosRequestConfig } from "axios"
import Medusa from "."

export const getClient = <T>(config: AxiosRequestConfig): Promise<T> => {
  return Medusa.getInstance().handleRequest(config)
}
