import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useCreateCabin(){
    const queryClient = useQueryClient();

    const { mutate: createCabin, isPending: isCreating } = useMutation({
        mutationFn: createEditCabin,
        onSuccess: () => {
          toast.success("New Cabin created Succesfully");
          queryClient.invalidateQueries({
            queryKey: ["cabins"],
          });
          //reset();-> este es del react form, por ende no podemos usarlo aqui
        },
        onError: (err) => {
          toast.error(err.message);
        },
      });

      return {isCreating, createCabin};
}
