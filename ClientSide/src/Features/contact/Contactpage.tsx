import { useAppDispatch } from "../../App/store/store"
import { Button, ButtonGroup, Typography } from "@mui/material"
import { useAppSelector } from "../../App/store/store";
import { decreament, increament } from "./counterReducer";

export default function ContactPage() {
  const {data} = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch();
  return (
    <>
      <Typography  variant="h2">
        Contact Page 
      </Typography>
      <Typography  variant="body1">
        The data is: {data}
      </Typography>
      <ButtonGroup>
        <Button onClick={() => dispatch( decreament (1))} color="error">Decrement</Button>
        <Button onClick={() => dispatch( increament (1))} color="success">Increment</Button>
        <Button onClick={() => dispatch( increament (5))} color="secondary">Increment by 5</Button>
      </ButtonGroup>
    </>
  )
}
