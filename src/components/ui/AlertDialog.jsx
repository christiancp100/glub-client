import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AlertDialog, Center } from 'native-base'
import { Button } from 'components/ui/Button'

export const useAlertModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return {
    isOpen,
    open,
    close,
  }
}

export const AlertModal = ({
  title,
  description,
  cancelText,
  confirmText,
  onCancel,
  onConfirm,
  isOpen,
  close,
}) => {
  return (
    <Center>
      <AlertDialog
        motionPreset="fade"
        onClose={close}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>{title}</AlertDialog.Header>
          <AlertDialog.Body>{description}</AlertDialog.Body>
          <AlertDialog.Footer>
            <Button
              variant="secondary"
              onPress={() => {
                onCancel()
                close()
              }}
            >
              {cancelText}
            </Button>
            <Button onPress={onConfirm} variant="primary" ml={3}>
              {confirmText}
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  )
}

AlertModal.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  isOpen: PropTypes.bool,
  close: PropTypes.func,
}

AlertModal.defaultProps = {
  onCancel: () => { },
  onConfirm: () => { },
}
