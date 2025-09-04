import {
  Alert,
  AlertTitle,
  Button,
  ButtonGroup,
  Container,
  List,
  ListItem,
  Typography
} from "@mui/material";
import {
  useLazyGet400ErrorQuery,
  useLazyGet401ErrorQuery,
  useLazyGet404ErrorQuery,
  useLazyGet500ErrorQuery,
  useLazyGetValidationErrorQuery,
} from "./errorApi";
import { useState } from "react";

export default function AboutPage() {
  const [validationErrors, setValidationError] = useState<string[]>([]);

  console.log("check", validationErrors);

  const [trigger400Error] = useLazyGet400ErrorQuery();
  const [trigger401Error] = useLazyGet401ErrorQuery();
  const [trigger404Error] = useLazyGet404ErrorQuery();
  const [trigger500Error] = useLazyGet500ErrorQuery();
  const [triggerValidationError] = useLazyGetValidationErrorQuery();

    const getValidationError = async () => {
    try {
      await triggerValidationError().unwrap();
    } catch (error: any) {
      if (error?.data?.errors) {
        const errorArray = Object.values(error.data.errors).flat();
        setValidationError(errorArray as string[]);
        // setToastOpen(true);
      } else if (error?.data?.title) {
        setValidationError([error.data.title]);
        // setToastOpen(true);
      } else if (error?.message) {
        setValidationError([error.message]);
        // setToastOpen(true);
      }
    }
  };

  return (
    <Container maxWidth="lg">
      <Typography gutterBottom variant="h3">
        Error for testing
      </Typography>
      <ButtonGroup fullWidth>
        <Button
          variant="contained"
          onClick={() => trigger400Error().catch((err) => console.log(err))}
        >
          Test 400 Error
        </Button>
        <Button
          variant="contained"
          onClick={() => trigger401Error().catch((err) => console.log(err))}
        >
          Test 401 Error
        </Button>
        <Button
          variant="contained"
          onClick={() => trigger404Error().catch((err) => console.log(err))}
        >
          Test 404 Error
        </Button>
        <Button
          variant="contained"
          onClick={() => trigger500Error().catch((err) => console.log(err))}
        >
          Test 500 Error
        </Button>
        <Button variant="contained" onClick={getValidationError}>
          Test Validation Error
        </Button>
      </ButtonGroup>
      {validationErrors.length > 0 && (
        <Alert severity="error">
          <AlertTitle>Validation errors</AlertTitle>
          <List>
              {validationErrors.map((err, i) => (
                <ListItem key={i}>{err}</ListItem>
              ))}
            </List>
        </Alert>
      )}
    </Container>
  );
}
