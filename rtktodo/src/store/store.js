import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './@root'
import logger from 'redux-logger'

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV === 'development', // true, false
	middleware: defaultMiddleware => {
		if (process.env.NODE_ENV === 'development') {
			return [...defaultMiddleware(), logger]
      /* 위와 같이 기존의 미들웨어를 가지고 오지 않으면 logger만 사용으로 덮어버림 */
		}
		return defaultMiddleware()
	},
})
