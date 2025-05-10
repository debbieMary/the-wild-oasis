import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";
export function useEditCabin(){
    const queryClient = useQueryClient();

    const { mutate: editCabin, isPending: isEditting } = useMutation({
        mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
        onSuccess: () => {
          toast.success("Cabin Successfully Editted");
          queryClient.invalidateQueries({
            queryKey: ["cabins"],
          });
        },
        onError: (err) => {
          toast.error(err.message);
        },
      });
      return {isEditting, editCabin};
}