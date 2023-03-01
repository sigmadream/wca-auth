import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SignIn } from "./SignIn";
import { isSignedInSelector } from "../app/selectors";
import { useSelector } from "../app/hooks";
import { wcaAccessToken } from "../utils/auth";

export const Main = () => {
    const isSignedIn = useSelector(isSignedInSelector);
    const accessToken = wcaAccessToken();

    if (!isSignedIn) {
        return <Typography sx={{ mt: 2, mb: 1 }}>Plz. Sign in</Typography>
    }

    return (
        <Box sx={{ width: "100%", marginBottom: "1em" }}>
            <Typography sx={{ mt: 2, mb: 1 }}>accessToken is {accessToken}</Typography>
        </Box>
    );
}