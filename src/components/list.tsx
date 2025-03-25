"use client";

import Card from './card'
import Pagination from './pagination'
import usePageStore from '../store/Store'
import { Status } from '../types/Status'

export default function List() {
    const { status, filterAirports, page } = usePageStore()

    const dataFilter = filterAirports.slice((page - 1) * 6, page * 6);

    return (
        <>
            {status === Status.LIST &&
                <>
                    <div className='mr-[5%] ml-[5%] mt-[25px] grid grid-cols-2 gap-4 flex flex-wrap'>
                        {dataFilter.map((airport, index) => (
                            <Card
                                id={airport.airport_id}
                                name={airport.airport_name}
                                location={airport.timezone}
                                code={airport.icao_code}
                                key={index} />
                        ))}
                    </div>
                    <Pagination />
                </>
            }
        </>
    );
}
