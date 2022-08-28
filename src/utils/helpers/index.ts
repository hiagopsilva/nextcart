import moment from "moment"

export const formatDate = (date: number) => {
  return moment(date).locale('pt-br').format('L')
} 