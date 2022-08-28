import moment from "moment"
import 'moment/locale/pt-br'

moment.locale('br')

export const formatDate = (date: number) => {
  return moment.unix(date).locale('pt-br').format('L')
} 