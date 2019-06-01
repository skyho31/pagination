const express = require('express')
const app = express()
const path = require('path')
const MockData = require('./Data')
const mockDB = new MockData()

/**
 * [workaround]
 * 기본 파일을 참조하는 폴더 위치를 지정
 * 여기서 __dirname이란, 실제 그 파일이 존재하는 경로를 의미합니다.
 * 여기서는 /Users/kakao/Desktop/workspace/study/pagination/server/ 를 의미합니다.
 */
app.use(express.static(path.resolve(__dirname, '../client')))
app.get('/', (req, res) => {
  res.render('index.html')
})

app.get('/data', (req, res) => {
  const { page = 1, pageSize = 10 } = req.query
  const data = mockDB.getData(page, pageSize)
  res.send(JSON.stringify(data))
})

// server power on
app.listen(9000, () => {
  console.log('server on port 9000')
})
