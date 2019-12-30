const Home=()=>import('@/pages/Home')
const Tabbar=()=>import('@/components/Tabbar')
const Notify=()=>import('@/pages/Notify')
const NotifyDetail=()=>import('@/pages/NotifyDetail')
const Baoxiu=()=>import('@/pages/Maintain')
const BaoxiuDetail=()=>import('@/pages/MaintainDetail')

export default [{
    path:'/',
    redirect:'/home'

},{
    path:'/home',
    name:'home',
    components:{
        default:Home,
        tabbar:Tabbar
    },
    meta:{
        title:'首页'
    }

},{
    path:'/notify',
    name:'notify',
    components:{
        default:Notify
    },
    meta:{
        title:'社区公告'
    }
},{
    path:'/notifydetail',
    name:'notifydetail',
    components:{
        default:NotifyDetail
    },
    meta:{
        title:'公告详情'
    }
},{
    path:'/maintain',
    name:'maintain',
    components:{
        default:Baoxiu
    },
    meta:{
        title:'物业报修'
    }
},{
    path:'/maintaindetail',
    name:'maintaindetail',
    components:{
        default:BaoxiuDetail
    },
    meta:{
        title:'报修详情'
    }
}]