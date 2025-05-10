import React, { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

/*export default function AddCabin({ isOpenModalP }) {
  const [isOpenModal, setIsOpenModal] = useState(isOpenModalP);
  return (
    <div>
      <Button
        variation="primary"
        size="medium"
        onClick={() => setIsOpenModal((show) => !show)}
      >
        Add new Cabin
      </Button>

      {isOpenModal && <Modal onClose={()=>setIsOpenModal(false)}><CreateCabinForm onCloseModal={()=>setIsOpenModal(false)}/></Modal>}
    </div>
  );
}*/

export default function AddCabin(){
return (
   <div>
   <Modal>
        <Modal.Open opens="cabin-form">
           <Button size="medium" variation="primary">Add New Cabin</Button> 
        </Modal.Open>
        <Modal.Window name="cabin-form">
           <CreateCabinForm/> 
        </Modal.Window>
    </Modal>
    </div>
);
}
