import React from 'react';
import DateAndTime from "../components/DateAndTime/DateAndTime";
import {initializeStore} from "../store";

export default function SSR() {
    return <DateAndTime />
}

export function getServerSideProps() {
    const reduxStore = initializeStore()
    return { props: { initialReduxState: reduxStore.getState() } }
}
