import { Container, Skeleton } from '@mui/material';

const CardListSkeleton = () => {
  return (
    <Container maxWidth="lg" sx={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Skeleton
        sx={{ bgcolor: 'grey.800', mx: '10px' }}
        variant="rectangular"
        width={200}
        height={300}
      />
      <Skeleton
        sx={{ bgcolor: 'grey.800', mx: '10px' }}
        variant="rectangular"
        width={200}
        height={300}
      />
      <Skeleton
        sx={{ bgcolor: 'grey.800', mx: '10px' }}
        variant="rectangular"
        width={200}
        height={300}
      />
      <Skeleton
        sx={{ bgcolor: 'grey.800', mx: '10px' }}
        variant="rectangular"
        width={200}
        height={300}
      />
      <Skeleton
        sx={{ bgcolor: 'grey.800', mx: '10px' }}
        variant="rectangular"
        width={200}
        height={300}
      />
    </Container>
  );
};

export default CardListSkeleton;
