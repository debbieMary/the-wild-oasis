

import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getStaysAfterDate } from '../../services/apiBookings';

export default function useRecentStays() {
    // Corrección: Desestructurar el array que devuelve useSearchParams
    const [searchParams] = useSearchParams();
    const numDays = !searchParams.get('last') ? 7 : Number(searchParams.get('last'));
    const queryDate = subDays(new Date(), numDays).toISOString();
    
    const {isLoading, data: stays, error} = useQuery({
        queryFn: () => getStaysAfterDate(queryDate),
        queryKey: ["stays", `last-${numDays}`]
    });
    
    const confirmedStays = stays?.filter(stay=> stay.status === "checked-in" || stay.status === "checked-out" )
    return {isLoading, stays, error, confirmedStays , numDays};
}
