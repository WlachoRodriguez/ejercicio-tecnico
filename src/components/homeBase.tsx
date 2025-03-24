"use client";

import Search from './search'
import Card from './card'
import usePageStore from '../store/Store'
import { Status } from '../types/Status'
import { Get } from '../services/Aviationstack'
import { useEffect } from 'react';
import { Airport } from '@/types/Airport';
import { useState } from "react";

export default function HomeBase() {
    const { status, setAirports, filterAirports, page, setPage } = usePageStore()
    const totalPages = Math.ceil(filterAirports.length / 6);

    const data = filterAirports.slice((page - 1) * 6, page * 6);

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
            <Search />
            {status === Status.LIST &&
                <>
                    <div className='mr-[5%] ml-[5%] mt-[25px] grid grid-cols-2 gap-4 flex flex-wrap'>
                        {data.map((airport, index) => (
                            <Card
                                name={airport.airport_name}
                                location={airport.timezone}
                                code={airport.icao_code}
                                key={index} />
                        ))}
                    </div>
                    <div className="mr-[5%] ml-[5%] flex justify-center gap-2">
                        <button
                            onClick={() => setPage(page - 1)}
                            disabled={page === 1}
                            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 cursor-pointer"
                        >
                            Anterior
                        </button>

                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setPage(index + 1)}
                                className={`px-3 py-2 rounded ${page === index + 1 ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"} cursor-pointer`}
                            >
                                {index + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => setPage(page + 1)}
                            disabled={page === totalPages}
                            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 cursor-pointer"
                        >
                            Siguiente
                        </button>
                    </div>
                </>
            }
        </>
    );
}
