const Mock = require('mockjs')
const Random = Mock.Random

module.exports = [
  {
    //问卷信息
    url: "/api/question/:id",
    method: "get",
    response() {
      return {
        // errno: 0,
        // data: {
        //   id: Random.id(),
        //   title: Random.ctitle(),
        // },
        errno: 1002,
        msg: "用户未登录",
      };
    },
  },
  //创建问卷
  {
    url: "/api/question/",
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
];