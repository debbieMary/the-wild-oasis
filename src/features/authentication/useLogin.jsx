import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient=  useQueryClient();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
        //
        queryClient.setQueryData(["user", user.user]);
        toast.success("User successfully logged in");
      
      navigate("/dashboard");
    },
    onError: (err) => {
      console.log("Error", err);
      toast.error("Wrong credentials");
    },
  });
  return { login, isLoading };
}
