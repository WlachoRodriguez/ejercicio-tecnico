"use client";
import { useState } from 'react';
import usePageStore from '../store/Store'
import { Status } from '../types/Status'

export default function Search() {
    const { status, setStatus, loading, setLoading, airports, setFilterAirports, setPage } = usePageStore()
    const [search, setSearch] = useState("")

    const filterSearch = () => {
        debugger
        setLoading(true)
        setFilterAirports(airports.filter((airport) => airport.airport_name.includes(search)))
        setPage(1)
        setStatus(Status.LIST)
        setLoading(false)
    }

    return (
        <>
            <div className={`relative flex ${status === Status.HOME ? 'items-center justify-center' : 'items-start'} bg-cover bg-center opacity-0.1 mr-[5%] ml-[5%]`}>
                <div className={`text-center ${status === Status.HOME ? 'grid gap-15 flex flex-col' : 'flex flex-row items-end justify-between w-full'}`}>
                    <h1 className={`bg-linear-to-r from-[#006AFF] to-[#00F9FF] inline-block text-transparent bg-clip-text ${status === Status.HOME ? 'text-[60px]' : 'text-[30px]'} font-bold`}>
                        SkyConnect Explorer
                    </h1>
                    <div className={`mt-6 flex items-center justify-center gap-5 ${status === Status.HOME ? 'flex-col' : 'w-[50%]'}`}>
                        <input
                            type="text"
                            value={search}
                            onChange={
                                (e) => {
                                    setSearch(e.target.value)
                                    if (e.target.value === "") {
                                        setStatus(Status.HOME)
                                    }
                                }
                            }
                            placeholder="Buscar aeropuertos..."
                            className="px-4 py-2 rounded-full shadow-lg text-[#006FEE] focus:outline-none bg-white w-[80%]"
                        />
                        <button
                            onClick={filterSearch}
                            className={`bg-linear-to-r from-[#0060FF] to-[#00FFE7] text-white w-[240px] h-[52pxs] px-6 py-1 rounded-[10] shadow-lg border-1 border-white text-lg flex items-center gap-3 relative ${!loading ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                            disabled={loading}>
                            <img src="./search.png" alt="Buscar" />
                            Buscar
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
