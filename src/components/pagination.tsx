"use client";

import usePageStore from '../store/Store'
import { Status } from '../types/Status'

export default function Pagination() {
    const { status, filterAirports, page, setPage } = usePageStore()
    const totalPages = Math.ceil(filterAirports.length / 6);

    return (
        <>
            {status === Status.LIST &&
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
            }
        </>
    );
}
