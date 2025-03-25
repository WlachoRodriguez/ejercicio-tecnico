'use client';

import usePageStore from '../store/Store'
import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FaArrowLeft } from "react-icons/fa";
import { Status } from '@/types/Status';

const tabs = ["General", "Ubicación", "Zona Horaria", "Estadísticas"];

export default function AirportInfo() {
    const { airport, setStatus } = usePageStore()
    const [activeTab, setActiveTab] = useState('General');
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
            const localTime = new Date(utcTime + parseFloat(airport.gmt) * 3600000);

            const date = new Intl.DateTimeFormat("es-ES", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            }).format(localTime)

            const time = new Intl.DateTimeFormat("es-ES", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            }).format(localTime)

            setTime(date + " " + time);
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);

        return () => clearInterval(interval);
    }, [1000]);

    const back = () => {
        setStatus(Status.LIST)
    }
    return (
        <div className="min-h-screen flex flex-col items-center p-10">
            <h1 className="text-4xl bg-linear-to-r from-[#006AFF] to-[#00F9FF] flex text-transparent bg-clip-text font-bold gap-10">
                <FaArrowLeft style={{ color: "white" }} onClick={back} className='cursor-pointer' />
                {airport.airport_name}
            </h1>

            <div className="flex mt-6 mb-10 border-b border-gray-600 w-full px-2 py-1 bg-gray-700 rounded-[7px]">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 text-white w-[25%] rounded-[10px] cursor-pointer ${activeTab === tab ? 'bg-blue-600' : 'bg-gray-700'}`}>
                        {tab}
                    </button>
                ))}
            </div>

            {activeTab === "General" && (
                <div
                    className={`relative w-[100%] rounded-lg overflow-hidden border border-gray-600 bg-[#3F495F] bg-opacity-60`}
                >
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(63,73,95,0.8),rgba(14,25,52,0.8)),url('/avion.png')] bg-cover bg-center bg-opacity-60 w-[50%] ml-[50%] rounded-lg"></div>
                    <div className="relative p-4 text-white">
                        <h2 className="text-lg bg-linear-to-r from-[#006AFF] to-[#00F9FF] text-transparent bg-clip-text font-semibold flex items-center gap-2 mb-[10px]">
                            <span className="text-xl"><img src="./infoIcon.svg" width={25} /></span> Información General
                        </h2>
                        <p><strong>Código IATA:</strong> {airport.iata_code}</p>
                        <p><strong>Código ICAO:</strong> {airport.icao_code}</p>
                        <p><strong>País:</strong> {airport.country_name}</p>
                        <p><strong>Ciudad IATA:</strong> {airport.country_iso2}</p>
                        <p><strong>Teléfono:</strong> {airport.phone_number !== "" ? airport.airport_name : 'No disponible'}</p>
                    </div>
                </div>
            )}
            {activeTab === "Ubicación" && (
                <>
                    <div
                        className={`relative w-[100%] rounded-lg overflow-hidden border border-gray-600 bg-[#3F495F] bg-opacity-60 mb-[10px]`}
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(63,73,95,0.8),rgba(14,25,52,0.8)),url('/avion.png')] bg-cover bg-center bg-opacity-60 w-[50%] ml-[50%] rounded-lg"></div>
                        <div className="relative p-4 text-white">
                            <h2 className="text-lg bg-linear-to-r from-[#006AFF] to-[#00F9FF] text-transparent bg-clip-text font-semibold flex items-center gap-2 mb-[10px]">
                                <span className="text-xl"><img src="./mapIcon.svg" width={25} /></span> Ubicación
                            </h2>
                            <p><strong>Latitud:</strong> {airport.latitude}</p>
                            <p><strong>Longitud:</strong> {airport.longitude}</p>
                            <p><strong>ID Geoname:</strong> {airport.geoname_id}</p>
                        </div>
                    </div>
                    <GoogleMap mapContainerStyle={{
                        width: "100%",
                        height: "250px",
                    }} center={{
                        lat: parseFloat(airport.latitude),
                        lng: parseFloat(airport.longitude),
                    }} zoom={10}>
                        <Marker position={{
                            lat: parseFloat(airport.latitude),
                            lng: parseFloat(airport.longitude),
                        }} />
                    </GoogleMap>
                </>
            )}
            {activeTab === "Zona Horaria" && <>
                <div
                    className={`relative w-[100%] rounded-lg overflow-hidden border border-gray-600 bg-[#3F495F] bg-opacity-60 mb-[10px]`}
                >
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(63,73,95,0.8),rgba(14,25,52,0.8)),url('/avion.png')] bg-cover bg-center bg-opacity-60 w-[50%] ml-[50%] rounded-lg"></div>
                    <div className="relative p-4 text-white">
                        <h2 className="text-lg bg-linear-to-r from-[#006AFF] to-[#00F9FF] text-transparent bg-clip-text font-semibold flex items-center gap-2 mb-[10px]">
                            <span className="text-xl"><img src="./globalIcon.svg" width={25} /></span> Zona Horaria
                        </h2>
                        <p><strong>Zona Horaria:</strong> {airport.timezone}</p>
                        <p><strong>GMT:</strong> {airport.gmt}</p>
                    </div>
                </div>
                <div
                    className={`relative w-[100%] rounded-lg overflow-hidden border border-gray-600 bg-[#3F495F] bg-opacity-60 mb-[10px]`}
                >
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(63,73,95,0.8),rgba(14,25,52,0.8)),url('/avion.png')] bg-cover bg-center bg-opacity-60 w-[50%] ml-[50%] rounded-lg"></div>
                    <div className="relative p-4 text-white">
                        <h2 className="text-lg bg-linear-to-r from-[#006AFF] to-[#00F9FF] text-transparent bg-clip-text font-semibold flex items-center gap-2 mb-[10px]">
                            <span className="text-xl"><img src="./timeIcon.svg" width={25} /></span> Hora Local
                        </h2>
                        <p>{time}</p>
                    </div>
                </div>
            </>}
            {activeTab === "Estadísticas" && <></>}
        </div>
    );
}
