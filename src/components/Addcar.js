import { Button } from "@mui/material";
import React from "react";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

export default function Addcar() {
    // KOMPONENTTIIN TÄYTY LUODA TILA, JOLLA SAADAAN KONTROLLOITUA
    // DIALOGI TOIMII IKKUNANA JA AUKEAA MODAALISESTI
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        console.log("PAINETTIIN LISAA AUTO");
        setOpen(true);
    }

    const handleClose = () => {
        console.log("HANDLE CLOSE KUTSUTTU");
        setOpen(false);
    }

    return(
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>Add car</Button>

            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>New car</DialogTitle>
            </Dialog>

        </div>

    );

}