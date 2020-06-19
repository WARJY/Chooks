import { useDebounceFun } from './hooks/debounceFun.js'
import { useThrottleFun } from './hooks/throttleFun.js'
import { useForm } from './hooks/form.js'
import { usePagination } from './hooks/pagination.js'
import { useList } from './hooks/list.js'
import { useRouter } from './hooks/router.js'
import { useSelect } from './hooks/select.js'
import { useStore } from './hooks/store.js'
import { useLoadingFun } from './hooks/loadingFun.js'
import { useStatic } from './hooks/static.js'

export {
    useDebounceFun,
    useThrottleFun,
    useLoadingFun,
    useForm,
    useList,
    usePagination,
    useRouter,
    useSelect,
    useStore,
    useStatic
}