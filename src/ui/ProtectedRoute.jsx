import React, { useEffect } from "react";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRoute({ children }) {
  const { isLoadingUser, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoadingUser && !isAuthenticated) {
        console.log("Is loading:", isLoadingUser);
        console.log("Is Authenticated:", isAuthenticated);
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, isLoadingUser, navigate]);

  if (isLoadingUser) {
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  }

  return isAuthenticated ? children : null;
}