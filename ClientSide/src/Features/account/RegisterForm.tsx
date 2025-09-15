import { useForm } from "react-hook-form";
import { useRegisterMutation } from "./accountApi";
import { registerSchema } from "../../lib/schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  LockOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Container,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import type { RegisterSchema } from "../../lib/schemas/registerSchema";
import { useState } from "react";

export default function RegisterForm() {
  const [registerUser, { isLoading }] = useRegisterMutation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<RegisterSchema>({
    mode: "onTouched",
    resolver: zodResolver(registerSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: RegisterSchema) => {
    try {
      await registerUser(data).unwrap();
      // Maybe redirect to login or auto-login here
    } catch (error: any) {
      // Handle API errors gracefully
      const messages: string[] =
        error?.data?.errors || error?.data || [error?.message];

      messages.forEach((msg) => {
        if (msg.toLowerCase().includes("password")) {
          setError("password", { message: msg });
        } else if (msg.toLowerCase().includes("email")) {
          setError("email", { message: msg });
        }
      });
    }
  };

  return (
    <Container component={Paper} maxWidth="sm" sx={{ borderRadius: 3 }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop="8"
      >
        <LockOutlined sx={{ mt: 3, color: "secondary.main", fontSize: 40 }} />
        <Typography variant="h5">Register</Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          width="100%"
          display="flex"
          flexDirection="column"
          gap={3}
          marginY={3}
        >
          {/* Email */}
          <TextField
            fullWidth
            label="Email"
            autoFocus
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          {/* Password */}
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Submit */}
          <Button
            disabled={isLoading || !isValid}
            variant="contained"
            type="submit"
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Register"
            )}
          </Button>

          {/* Link to login */}
          <Typography sx={{ textAlign: "center" }}>
            Already have an account?
            <Typography
              sx={{ ml: 2 }}
              component={Link}
              to="/login"
              color="primary"
            >
              Sign in here
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
