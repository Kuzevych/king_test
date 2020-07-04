import Btn from "../components/button";
import {initializeStore} from "../store";

export default function SSG() {
    return <Btn />
}

export function getServerSideProps() {
    const reduxStore = initializeStore()
    const { dispatch } = reduxStore

    dispatch({
        type: 'TICK',
        light: false,
        lastUpdate: Date.now(),
    })

    return { props: { initialReduxState: reduxStore.getState() } }
}
