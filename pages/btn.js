import Btn from "../components/button";
import {initializeStore} from "../store";

export default function SSR() {
    return <Btn />
}

export function getServerSideProps() {
    const reduxStore = initializeStore()
    return { props: { initialReduxState: reduxStore.getState() } }
}
