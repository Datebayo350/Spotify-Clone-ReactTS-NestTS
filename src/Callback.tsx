function Callback() {
    console.log('callBack appellée');
    const updateTokenSpotify  = () => {
        console.log("Token update initié depuis la CallBack");
        const userToken = window.location.hash.substring(1).split("&")[0].split("=")[1];
        console.log('userToken :>> ', userToken);
        window.opener.spotifyCallback(userToken);
        return 'update user token from callBack';
    };

    return (
        <div>
            {updateTokenSpotify()}
        </div>
    );
}

export default Callback