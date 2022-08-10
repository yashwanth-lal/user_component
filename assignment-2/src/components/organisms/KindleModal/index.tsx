import { Box, Modal } from '@mui/material'
import React, { useState } from 'react'
import ButtonAtom from '../../atoms/Buttons';

interface Props {
  openKindleModal: boolean;
}

const KindleModal = ({openKindleModal}: Props) => {

    const [open, setOpen] = useState(openKindleModal);
    const [success, setSuccess] = useState<boolean>(false)

    const handleSuccess = () => {
        setSuccess(true)
    }

    const handleClose = () =>{
        setOpen(false)
    }

  return (
    <div>
      <Modal open={open}>
        {!success ? (
          <Box>
            {/* Heading */}
            {/* Text Content 1 */}
            {/* Text Content 2  */}
            {/* Input field for
            email  */}
              <ButtonAtom onClick={handleSuccess}>Add Email</ButtonAtom>
              <ButtonAtom>Need Help?</ButtonAtom>
          </Box>
        ) : (
          <Box>
            {/* Success Icon */}
            {/* Text Bold */}
            {/* Text */}
            <ButtonAtom onClick={handleClose}>Continue reading</ButtonAtom>
          </Box>
        )}
      </Modal>
    </div>
  );
}

export default KindleModal