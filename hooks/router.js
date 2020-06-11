export function useRouter(context){

    const router = context.root.$router
    const route = context.root.$route

    const go = function(index){
        if(!index) return
        router.go(index)
    }

    const replace = function(path, query){
        return router.replace({
            path: path,
            query: query
        })
    }

    const push = function(path, query){
        return router.push({
            path: path,
            query: query
        })
    }

    const getQuery = function(){
        return route.query
    }

    return {
        router,
        route,
        go,
        replace,
        push,
        getQuery
    }
}