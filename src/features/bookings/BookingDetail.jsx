import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import Empty from "../../ui/Empty";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import { useNavigate } from "react-router-dom";
import { HiArrowDownOnSquare, HiArrowUpOnSquare } from "react-icons/hi2";
import  useCheckOut from "../check-in-out/useCheckOut";
import Modal from "../../ui/Modal";
import { useDeleteBooking } from "./useDeleteBooking";
import ConfirmDelete from "../../ui/ConfirmDelete";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isLoading } = useBooking();

  const navigate = useNavigate();

  const { isDeleting, deleteBooking } = useDeleteBooking();
  

  const moveBack = useMoveBack();
  const {checkout, isCheckingOut} =  useCheckOut();

  if (isLoading) return <Spinner />;

  if (!booking) return <Empty resourceName="booking"/>;

  const { status, id: bookingId } = booking;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button
            icon={<HiArrowDownOnSquare />}
            onClick={() => navigate(`/checkin/${bookingId}`)}
          >
            Check In
          </Button>
        )}

       {status === "cheked-in" &&  <Button
          disabled={isCheckingOut}
          icon={<HiArrowUpOnSquare />}
          onClick={() => checkout({ bookingId })}
        >
          Check Out
        </Button>}

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>

        <Modal>
          <Modal.Open opens="delete">
            <Button variation="danger">Delete Booking</Button>
          </Modal.Open>
  <Modal.Window name="delete">
          <ConfirmDelete
            name="booking"
            disabled={isDeleting}
            onConfirm={() => deleteBooking(bookingId, {onSettled: ()=>navigate(-1)})}
          />
        </Modal.Window>
      </Modal>

      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
