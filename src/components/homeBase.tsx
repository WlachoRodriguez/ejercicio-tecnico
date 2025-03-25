"use client";

import Search from './search'
import List from './list'
import Detail from './detail'
import usePageStore from '../store/Store'
import { Status } from '../types/Status'
import { useEffect } from 'react';
import { Airport } from '@/types/Airport';
import { Get } from '@/services/Aviationstack';

export default function HomeBase() {
    const { status, setAirports } = usePageStore()

    useEffect(() => {
        const fetchAirports = async () => {
            try {
                const data: Airport[] = await Get();
                setAirports(data);
            } catch (error) {
                console.error("No hay Aeropuertos:", error);
            }
        };

        fetchAirports();
    }, []);

    return (
        <>
            {status !== Status.DETAIL && <Search />}
            {status === Status.LIST && <List />}
            {status === Status.DETAIL && <Detail />}
        </>
    );
}
