export interface ShowUsersData {
  _id: string,
  first_name: string,
  last_name: string,
  email: string,
  friend_id: string,
  status: string,
}
export interface FilteredData {
  sort: string,
  filters: string,
  page: number,
  page_size: number
}
export interface FetchDataProps {
  data: Array<{ [key: string | number]: number }>
}