
export default function useRouter() {


const push = (path) => {
    history.pushState(path,null,path)
    const popStateEvent = new PopStateEvent('popstate')
    window.dispatchEvent(popStateEvent) 
}



    return { push }
}

