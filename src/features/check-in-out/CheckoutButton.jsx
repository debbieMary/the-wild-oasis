import Button from "../../ui/Button";
import useCheckOut from "./useCheckOut"

function CheckoutButton({ bookingId }) {

  console.log("bookingiod en el cheout button", bookingId);
  const { checkout, isCheckingOut } = useCheckOut();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
