import { Button } from '@/components/ui/button';
import { memo } from 'react';

const Page = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Button>Click me</Button>
      
    </div>
  );
};

export default memo(Page);