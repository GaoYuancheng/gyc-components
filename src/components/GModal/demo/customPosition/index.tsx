import { Button } from 'antd';
import { GModal } from 'gyc-components';
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
        style={{ top: 100, left: 100 }}
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
