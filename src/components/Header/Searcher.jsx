import { styled, alpha } from '@mui/material/styles';
import { Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  display: 'none',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha('#b3b3b3', 0.1),
  '&:hover': {
    backgroundColor: alpha('#b3b3b3', 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  color: '#fff',
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: '#fff',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
})); ;

const Searcher = () => {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
        />
      </Search>
    </Box>
  );
};

export default Searcher;
