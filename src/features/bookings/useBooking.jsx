import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBooking } from "../../services/apiBookings";

export function useBooking() {
    const {bookingId} = useParams();
    const {
      isLoading,
      data: booking,
    } = useQuery({
      queryKey: ["booking", bookingId], // Agrega bookingId como dependencia
      queryFn: () => getBooking(bookingId), // Envuelve en función
      retry: false
    });
    
    return {isLoading, booking}
  }