export const WCA_ORIGIN = "https://www.worldcubeassociation.org";

export const WCA_OAUTH_CLIENT_ID =
    "WCA_CLIENT_ID";

export const signIn = () => {
    const params = new URLSearchParams({
        client_id: WCA_OAUTH_CLIENT_ID,
        response_type: "token",
        redirect_uri: window.location.origin,
        scope: "email manage_competitions",
    });
    window.location.href = `${WCA_ORIGIN}/oauth/authorize?${params.toString()}`;
};

const localStorageKey = (key: string) =>
    `ScheduleGenerator.${WCA_OAUTH_CLIENT_ID}.${key}`;

export const wcaAccessToken = () =>
    localStorage.getItem(localStorageKey("accessToken"));

export const deleteAccessToken = () =>
    localStorage.removeItem(localStorageKey("accessToken"));

export const hasAccessToken = () => !!wcaAccessToken();

/**
 * OAuth 액세스 토큰이 있는지 URL 해시를 확인합니다.
 * 1) 해시에 액세스 토큰이 있으면 로컬 스토리지에 저장합니다.
 * 2) 응용 프로그램 초기화 시 호출되어야 합니다.
 */
export const initializeAuth = () => {
    const hash = window.location.hash.replace(/^#/, "");
    const hashParams = new URLSearchParams(hash);
    if (hashParams.has("access_token")) {
        localStorage.setItem(
            localStorageKey("accessToken"),
            hashParams.get("access_token") || ""
        );
    }
    if (hashParams.has("expires_in")) {
        // @ts-expect-error
        const expiresInSeconds = hashParams.get("expires_in") - 15 * 60;
        const expirationTime = new Date(
            new Date().getTime() + expiresInSeconds * 1000
        );
        localStorage.setItem(
            localStorageKey("expirationTime"),
            expirationTime.toISOString()
        );
    }
    /* 토큰이 만려되면 강제로 로그아웃 */
    const expirationTime = localStorage.getItem(
        localStorageKey("expirationTime")
    );
    if (expirationTime && new Date() >= new Date(expirationTime)) {
        deleteAccessToken();
    }
    /* 토큰이 있으면 URL 해쉬를 삭제 */
    if (hashParams.has("access_token")) {
        window.location.hash = "";
    }
};
