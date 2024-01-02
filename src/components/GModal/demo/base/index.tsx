import GModal from '@/components/GModal';
import { Button } from 'antd';
import React, { useState } from 'react';

const GModalBase: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        open GModal
      </Button>
      <GModal
        title="GModal"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        GModalContent
      </GModal>
    </>
  );
};

export default GModalBase;
