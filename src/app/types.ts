export type State = {
    accessToken: string | null;
};

export type Action =
    | {
        type: "SIGNIN_COMPLETE";
        accessToken: string;
    }