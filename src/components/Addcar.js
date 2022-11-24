import { Button } from "@mui/material";
import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function Addcar({addCar}) {
  // KOMPONENTTIIN TÄYTY LUODA TILA, JOLLA SAADAAN KONTROLLOITUA
  // DIALOGI TOIMII IKKUNANA JA AUKEAA MODAALISESTI
  const [open, setOpen] = React.useState(false);
  const [car, setCar] = React.useState({
    brand: '',
    model: '',
    color: '',
    fuel: '',
    price: '',
    year: '',
  });

  const handleClickOpen = () => {
    console.log("PAINETTIIN LISAA AUTO");
    setOpen(true);
  };

  const handleClose = () => {
    console.log("HANDLE CLOSE KUTSUTTU");
    addCar(car);
    setOpen(false);
  };
  const handleCancel = () => {
    console.log("PAINETTINN CANCEL");
    setOpen(false);
  }

  const inputChanged = (event) => {
    console.log("YRITETÄÄN TALLENTAA ARVOA");
    setCar({...car, [event.target.name] : event.target.value})
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add car
      </Button>

      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>New car</DialogTitle>

        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            name="brand"
            value={car.brand}
            autoFocus
            margin="dense"
            label="Brand"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
          <TextField
            name="model"
            value={car.model}
            autoFocus
            margin="dense"
            label="Model"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
          <TextField
            name="color"
            value={car.color}
            autoFocus
            margin="dense"
            label="Color"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
          <TextField
            name="fuel"
            value={car.fuel}
            autoFocus
            margin="dense"
            label="Fuel"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
          <TextField
            name="year"
            value={car.year}
            autoFocus
            margin="dense"
            label="Year"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
          <TextField
            name="price"
            value={car.price}
            autoFocus
            margin="dense"
            label="Price"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
          <DialogActions>
            <Button onClick={handleClose}>Save</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}
