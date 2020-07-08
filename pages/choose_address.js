import React from 'react';
import {initializeStore} from "../store";
import Address from "../components/ChooseAddress/Address";

export default function SSR() {
    return <Address />
}

export function getServerSideProps() {
    const reduxStore = initializeStore()
    return { props: { initialReduxState: reduxStore.getState() } }
}
