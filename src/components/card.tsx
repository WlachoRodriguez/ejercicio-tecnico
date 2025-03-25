"use client";

import { Status } from '@/types/Status';
import usePageStore from '../store/Store'
import { Airport } from '@/types/Airport';

interface CardProps {
    id: string;
    name: string;
    location: string;
    code: string;
}

export default function Card({ id, name, location, code }: CardProps) {
    const { setStatus, filterAirports, setAirport } = usePageStore()

    const detail = (airportId: string) => {
        setAirport(filterAirports.find((a) => a.airport_id === airportId) ?? {} as Airport)
        setStatus(Status.DETAIL)
    }
    return (
        <div
            className={`relative w-[100%] rounded-lg overflow-hidden border border-gray-600 bg-[#3F495F] bg-opacity-60 cursor-pointer`}
            onClick={() => detail(id)}
        >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(63,73,95,0.8),rgba(14,25,52,0.8)),url('/avion.png')] bg-cover bg-center bg-opacity-60 w-[50%] ml-[50%] rounded-lg"></div>
            <div className="relative p-4 text-white">
                <div className="flex justify-between items-center">
                    <h3 className="text-xs font-bold">{name}</h3>
                    <img src="./iconAvion.svg" width={40} />
                </div>
                <p className="text-xs text-gray-300">{location}</p>
                <h2 className="mt-3 text-2xl bg-linear-to-r from-[#006AFF] to-[#00F9FF] inline-block text-transparent bg-clip-text font-bold">{code}</h2>
            </div>
        </div>
    );
}
