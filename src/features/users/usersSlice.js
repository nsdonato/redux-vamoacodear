import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'MatuxWaves' },
  { id: '1', name: 'Claudio Maria Dominguez' },
  { id: '2', name: 'Pablo_Ramos' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer