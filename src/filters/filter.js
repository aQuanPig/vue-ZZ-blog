import dayjs from 'dayjs'
export function formatDate(value) {
  return dayjs(value).format('YYYY-MM-DD')
}
export function formatDateAll(value) {
  return dayjs(value).format('YYYY-MM-DD HH:mm')

}
