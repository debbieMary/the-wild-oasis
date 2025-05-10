import { useUser } from "./useUser";  // Importación con llaves para exportación nombrada
import styled from "styled-components";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;


export default function UserAvatar() {
  const { user, isLoadingUser } = useUser();
  
  if (isLoadingUser) return <div>Loading...</div>;
  if (!user) return <div>Not authenticated</div>;

  const { fullName, avatar } = user.user_metadata || {};
  console.log("<3<3<3<3<3", user);
  
  return (
    <StyledUserAvatar>
      <Avatar 
        src={avatar || "default-user.jpg"} 
        alt={`Avatar of ${fullName || 'user'}`}
      />
      <span>{fullName || 'Guest'}</span>
    </StyledUserAvatar>
  );
}