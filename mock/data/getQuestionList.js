// 生成问卷列表

const Mock = require('mockjs')
const Random = Mock.Random

function getQuestionList(opt={}) {
  const {isStar=false,isDeleted=false} = opt
  const list = []
  for (let i = 1; i < 11; i++) {
    list.push({
      _id: Random.id(),
      title: Random.ctitle(),
      isPublished: Random.boolean(),
      isStar,
      isDeleted,
      answerCount: Random.integer(100, 10000),
      createAt: Random.datetime(),
      updateTime: Random.datetime(),
    });
  }
  return list
}

module.exports = getQuestionList