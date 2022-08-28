import moment from "moment"
import 'moment/locale/pt-br'

moment.locale('br')

export const formatDate = (date: number) => {
  return moment.unix(date).locale('pt-br').format('L')
} 

export const transformDateToUnix = (date: number) => {
  const dateUnix = moment(date).valueOf().toString().substring(0,10)

  return Number(dateUnix);
}