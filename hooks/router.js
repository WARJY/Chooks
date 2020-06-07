export function useRouter(context){

    const refresh = function(){
        context.root.$router.go(0)
    }

    const back = function(){
        context.root.$router.go(-1)
    }

    const replace = function(replace){
        context.root.$router.replace(replace)
    }

    const push = function(path, query){
        context.root.$router.push({
            path: path,
            query: query
        })
    }

    const getQuery = function(){
        return context.root.$route.query
    }

    return {
        refresh,
        back,
        replace,
        push,
        getQuery
    }
}