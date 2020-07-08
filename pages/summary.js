import React from 'react';
import {initializeStore} from "../store";
import Summary from "../components/Summary/Summmary";

export default function SSR() {
    return <Summary />
}

export function getServerSideProps() {
    const reduxStore = initializeStore()
    return { props: { initialReduxState: reduxStore.getState() } }
}
