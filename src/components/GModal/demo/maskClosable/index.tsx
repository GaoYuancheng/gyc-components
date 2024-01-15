import { Button } from 'antd';
import { ClickWrap, GModal } from 'gyc-components';
import React, { useState } from 'react';

const GModalBase: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <ClickWrap
      onClick={() => {
        setOpen(false);
      }}
    >
      <div>
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
      </div>
    </ClickWrap>
  );
};

export default GModalBase;
