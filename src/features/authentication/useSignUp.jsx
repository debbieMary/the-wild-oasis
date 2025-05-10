import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp(){
    const {mutate:signUp, isPending:isLoading} = useMutation({
        mutationFn: signUpApi,
        onSuccess:(user)=>{
            console.log(user);
            toast.success("User successfully created, please veryfy the email address");
        },

    })
    return {signUp, isLoading};
}