import React from 'react';
import {Modal} from 'react-bootstrap'
export default function ModalPerfil({show, handleClose}){
	return(
		<Modal show={show} onHide={handleClose} size = "lg">
        <Modal.Header closeButton>
          <Modal.Title>Perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      </Modal>
      )
}