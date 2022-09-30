import React from 'react'
import {Stack,Box}from '@mui/material'
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';
import Loader from './Loader';
export default function Videos({videos,direction}) {
 if(!videos?.length) return <Loader />;
  return (
    <Stack direction={direction||"row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos && videos.map((items, idx) => (
        <Box key={idx}>
          {items.id.videoId && <VideoCard video={items} /> }
          {items.id.channelId && <ChannelCard channelDetail={items} />} 
        </Box>
      ))}
    </Stack>
  );
}
