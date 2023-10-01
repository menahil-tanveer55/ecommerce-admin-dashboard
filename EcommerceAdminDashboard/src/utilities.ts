export const formatDate = (date: string) => {
  const utc_date = new Date(+date).toUTCString()
  const extracted_date = utc_date.substring(5, 16)
  return new Date(extracted_date).toLocaleDateString('en-US')
}
export const formatNumber = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
