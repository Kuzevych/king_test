import React from 'react';
import StepOne from "../components/StepOne";
import {initializeStore} from "../store";

export default function SSR() {
    return <StepOne />
}

export function getServerSideProps() {
    const reduxStore = initializeStore()
    return { props: { initialReduxState: reduxStore.getState() } }
}
