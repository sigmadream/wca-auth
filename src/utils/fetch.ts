import { WCA_ORIGIN } from "./auth";

const wcaApiFetch = (
    path: string,
    wcaAccessToken: string,
    fetchOptions = {}
) => {
    const baseApiUrl = `${WCA_ORIGIN}/api/v0`;

    return fetch(
        `${baseApiUrl}${path}`,
        Object.assign({}, fetchOptions, {
            headers: new Headers({
                Authorization: `Bearer ${wcaAccessToken}`,
                "Content-Type": "application/json",
            }),
        })
    )
        .then((response) => {
            if (!response.ok) throw new Error(response.statusText);
            return response;
        })
        .then((response) => response.json());
};

export const fetchMe = (
    wcaAccessToken: string
): Promise<string> => {
    return wcaApiFetch(`/me`, wcaAccessToken);
};

