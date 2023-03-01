import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { SignIn } from "./SignIn";

export const Header = () => {
    return (
        <Box sx={{ flexGrow: 1, marginBottom: "1.5em" }}>
            <AppBar position="static">
                <Toolbar>
                    <SignIn />
                    <Typography component="div" sx={{ flexGrow: 1 }}>
                        @WCA/Auth Demo
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
