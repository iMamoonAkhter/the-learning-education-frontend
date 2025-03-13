import { configureStore } from '@reduxjs/toolkit'
import teacherReducer  from './teacher/teacherSlice'
import tutoringReducer from './tutoring/tutoringSlice'
export default configureStore({
  reducer: {
    teacher: teacherReducer,
    tutoring: tutoringReducer
  },
})