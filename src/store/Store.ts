import { create } from "zustand";
import { Status } from "@/types/Status"
import { Airport } from "@/types/Airport";

interface PageState {
    status: Status;
    setStatus: (newStatus: Status) => void;
    loading: boolean;
    setLoading: (newLoading: boolean) => void;
    airports: Airport[];
    setAirports: (newAirports: Airport[]) => void;
    filterAirports: Airport[];
    setFilterAirports: (newFilterAirports: Airport[]) => void;
    page: number;
    setPage: (newPage: number) => void;
}

const usePageStore = create<PageState>((set) => ({
    status: Status.HOME,
    setStatus: (newStatus) => set({ status: newStatus }),
    loading: false,
    setLoading: (newLoading) => set({ loading: newLoading }),
    airports: [],
    setAirports: (newAirports) => set({ airports: newAirports }),
    filterAirports: [],
    setFilterAirports: (newFilterAirports) => set({ filterAirports: newFilterAirports }),
    page: 1,
    setPage: (newPage) => set({ page: newPage })
}))

export default usePageStore;
