
import React, { useState } from 'react';
import { Button, ModalBody, ModalFooter, ModalHeader, ModalLayout, TextInput, Typography } from '@strapi/design-system';

const TodeModal = ({ handelShowModle, showModle }) => {
    const [content, setContent] = useState('');
    

    return (<ModalLayout onClose={() => handelShowModle(showModle)} labelledBy="title">
        <ModalHeader>
        </ModalHeader>
        <ModalBody>
            <TextInput placeholder="Enter new todo" label="Todo" name="todo" hint="Description line" onChange={e => setContent(e.target.value)} value={content} />
        </ModalBody>
        <ModalFooter startActions={<Button onClick={() => handelShowModle(showModle)} variant="tertiary">
            Cancel
        </Button>} endActions={<>
            <Button variant="secondary">Add new stuff</Button>
            <Button onClick={() => handelShowModle(showModle)}>Finish</Button>
        </>} />
    </ModalLayout>)
};

export default TodeModal;