const Mock = require('mockjs')
const Random = Mock.Random
const getQuestionList = require('../mock/data/getQuestionList')

module.exports = [
  {
    //问卷信息
    url: "/api/question/:id",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle(),
        },
        // errno: 1002,
        // msg: "用户未登录",
      };
    },
  },
  //创建问卷
  {
    url: "/api/question",
    method: "post",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  //获取/查询 问卷列表
  {
    url: "/api/question",
    method: "get",
    response(ctx) {
      const { isStar=false,isDeleted=false } = ctx.query;
      return {
        errno: 0,
        data: {
          list: getQuestionList({ isStar ,isDeleted}), //当前页的问卷列表
          total: 100, //问卷总数
        },
      };
    },
  }
];