import React, { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AuthContext } from '../context/AuthContext';
import { AuthContext } from '../../types/types';


interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const authContext = useContext(AuthContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username || !password) {
      alert('Please enter both a username and a password.');
      return;
    }
    try {
      // Assuming the 'login' function exists in your AuthContext
      await AuthContextType.login(username, password);
    } catch (error) {
      alert('Failed to log in. Please check your credentials and try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Paper elevation={3} className="p-10">
        <Typography variant="h5" className="mb-6 text-center">
          Sign In
        </Typography>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextField
  label="Username"
  variant="outlined"
  fullWidth
  value={username}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
  className="bg-white"
/>

<TextField
  label="Password"
  type="password"
  variant="outlined"
  fullWidth
  value={password}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
  className="bg-white"
/>

          <Box className="flex justify-center mt-4">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="px-6 py-2"
            >
              Log In
            </Button>
          </Box>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
