

const publishData = [
  {
    key: '1',
    industry: '软件',
    brief: '网站web埋点sdk的开发',
    reqDoc: '',
    delivDate: '2020/03/21',
    repu: '200',
    skill: "javascript, html5",
    pay: '1000',
    pubDate: '2020/01/01',
    yesNo: '是',
    status: '已完成',
    info: 'Tom'
  },{
    key: '2',
    industry: '市场',
    brief: '用户行为数据分析',
    reqDoc: '',
    delivDate: '2020/10/11',
    repu: '300',
    skill: "python, R, sql, 三年以上数据分析经验",
    pay: '2000',
    pubDate: '2020/01/01',
    yesNo: '是',
    status: '已完成',
    info: 'Jack'
  },{
    key: '3',
    industry: '设计',
    brief: 'logo设计',
    reqDoc: '',
    delivDate: '2020/03/21',
    repu: '100',
    skill: "ps，五年以上设计经验，个人设计集",
    pay: '2000',
    pubDate: '2020/01/01',
    yesNo: '是',
    status: '进行中',
    info: 'Tim'
  },{
    key: '4',
    industry: '软件',
    brief: '自媒体公众号开发',
    reqDoc: '',
    skill: "java, html5, 五年以上开发经验",
    pay: '3000',
    delivDate: '2020/05/01',
    repu: '500',
    pubDate: '2020/01/01',
    yesNo: '是',
    status: '进行中',
    info: 'Kevin'
  },{
    key: '5',
    industry: '软件',
    brief: '企业服务器搭建',
    reqDoc: '',
    skill: "java,sql",
    pay: '4000',
    delivDate: '2020/06/11',
    repu: '200',
    pubDate: '2020/01/01',
    yesNo: '否',
    status: '',
    info: ''
  },{
    key: '6',
    industry: '营销',
    brief: '企业服务器搭建',
    reqDoc: '',
    pay: '3000',
    skill: "高级运维工程师",
    delivDate: '2020/05/01',
    repu: '700',
    pubDate: '2020/01/01',
    yesNo: '否',
    status: '',
    info: ''
  },{
    key: '7',
    industry: '软件',
    brief: '企业数据库设计与搭建',
    reqDoc: '',
    pay: '2000',
    skill: "python, sql",
    delivDate: '2020/07/02',
    repu: '600',
    pubDate: '2020/01/01',
    yesNo: '否',
    status: '',
    info: ''
  },{
    key: '8',
    industry: '区块链',
    brief: '区块链测试链搭建',
    reqDoc: '',
    skill: "PoW，PoS，DPoS，PBFT，Paxos，Raft",
    pay: '4000',
    delivDate: '2020/04/11',
    repu: '500',
    pubDate: '2020/01/01',
    yesNo: '否',
    status: '',
    info: ''
  },{
    key: '9',
    industry: '软件',
    brief: '企业数据库设计与搭建',
    reqDoc: '',
    skill: "python, sql",
    pay: '2000',
    delivDate: '2020/03/11',
    repu: '300',
    pubDate: '2020/01/01',
    yesNo: '否',
    status: '',
    info: ''
  }
];

const publishTask = [{
    title: '行业',
    dataIndex: 'industry'
  },{
    title: '任务简介',
    dataIndex: 'brief'
  }, {
    title: '需求文档',
    dataIndex: 'reqDoc'}, 
  {
    title: '交付日期',
    dataIndex: 'delivDate'
  }, {
    title: '接单方最低声望值',
    dataIndex: 'repu'
  },{
    title: '技能要求',
    dataIndex: 'skill'
  },{
    title: '薪酬',
    dataIndex: 'pay'
}];

const pubIndustryMenu = ['软件','市场','设计','营销','区块链'];
const pubPayMenu = ['3000以下','3000-5000','5000-10000','10000-200000','200000以上'];
const pubGetMenu = ['是','否'];


const bioData =[
  {
    title: '姓名',
    value: 'leo'
  },{
    title: '行业',
    value: '软件'
  },{
    title: '性别',
    value: '男'
  },{
    title: '教育背景',
    value: '研究生'
  },{
    title: '技能',
    value: 'javascript, python, sql'
  },{
    title: '注册时间',
    value: '2020/01/01'
  },{
    title: '声望',
    value: '840'
  },{
    title: '已发布任务数',
    value: '20'
  },{
    title: '已领取任务数',
    value: '40'
  },{
    title: '积分',
    value: '4000'
  },{
    title: '累计薪酬',
    value: '20000'
  }
]
exports = {publishData, publishTask, pubIndustryMenu, pubPayMenu, pubGetMenu, bioData};