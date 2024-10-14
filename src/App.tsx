import './App.css';
import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import { useColorScheme } from '@mui/joy/styles';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import StarRating from "./StarRating.tsx";
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Select
      value={mode}
      onChange={(_, newMode) => {
        setMode(newMode);
      }}
      sx={{ width: 'max-content' }}
    >
      <Option value="system">System</Option>
      <Option value="light">Light</Option>
      <Option value="dark">Dark</Option>
    </Select>
  );
}

export default function App() {
  return (
    <CssVarsProvider>
      <ModeToggle />
      <Sheet
        sx={{
          width: '460px',
          margin: 'auto',
          marginTop: '20px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="flex flex-column">
        <IconButton sx={{ alignSelf: 'flex-end',}} variant="plain">
          <CloseIcon />
        </IconButton>
          <Typography level="h1">Hey Paul!</Typography>
          <Typography
            level="body-md"
            sx={{
              pt: 3
            }}
          >
            You have recently booked <b>"Paul"</b> for <b>"B2B Sales Training"</b>. We would like to know about your
            experience with us?
          </Typography>
        </div>

        <StarRating />

        <div>
          <Textarea
            name="review"
            placeholder="Write additional comments here..."
            minRows={4}
            sx={{
              borderRadius: 'sm',
              width: '100%',
              height: '140px',
              padding: '10px',
            }}
          />

          <Button
            size="md" 
            sx={{
              mt: 3,
              bgcolor: '#2228c3',
              '&:hover': { bgcolor: '#161b9c' },
              '&:active': { bgcolor: '#0d1073' },
            }}
          >
            Submit
          </Button>
        </div>

        <Typography fontSize="sm" sx={{ alignSelf: 'center' }}>
          <Link href="#"><b>Contact us</b></Link>
        </Typography>
      </Sheet>
    </CssVarsProvider>
  );
}