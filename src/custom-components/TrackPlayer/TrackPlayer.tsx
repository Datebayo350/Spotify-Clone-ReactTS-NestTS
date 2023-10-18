import { useSelector, useDispatch } from 'react-redux';
import {
  selectTrackLiked,
  selectTrackOnPause,
  toggleTrackOnPause,
  toggleTrackLiked,
  selectTrackPlayerContainerDisplayed,
} from '../../__slices/ui';
import useWindowSizes from '../../hooks/useWindowSize';
import { usePalette } from 'react-palette';
import { Button } from 'primereact/button';
import './trackPlayer.css';

const TrackPlayer = () => {
  const trackPlayerContainerDisplayed = useSelector(selectTrackPlayerContainerDisplayed);
  const trackOnPause = useSelector(selectTrackOnPause);
  const trackLiked = useSelector(selectTrackLiked);
  const dispatch = useDispatch();
  const { windowWidth } = useWindowSizes();
  const imageUrl = 'https://i.scdn.co/image/ab67616d00001e02af634982d9b15de3c77f7dd9';
  const { data: trackDominantColors } = usePalette(imageUrl);

  return (
    <>
      {/* Music player layout */}
      {trackPlayerContainerDisplayed && (
        <div
          style={{ backgroundColor: `${trackDominantColors.vibrant}` }}
          className="track-player-container border-round-lg w-full px-2 flex justify-content-evenly
          lg:border-noround">
          <div className="track-infos-container p-1 flex align-items-center bg-red-100">
            <img
              className="w-3rem h-3rem mx-1 border-round-lg"
              // src="https://i.scdn.co/image/ab67616d00001e02ac29a65e7ffcfa6f9cb0d342"
              // src="https://i.scdn.co/image/ab67616d00004851bfc21a1a5b924ecfb2f0c3c8"
              // src="https://i.scdn.co/image/ab67616d00004851a883e26f90ab617c91b90e56"
              src="https://i.scdn.co/image/ab67616d00001e02af634982d9b15de3c77f7dd9"
              alt="pochette de l'album"
            />
            <div className="track-infos ml-1 max-w-full bg-yellow-800 overflow-x-hidden">
              <div className="track-infosBIS max-w-full flex bg-teal-100 overflow-x-hidden ">
                <div
                  className="trackTitle-container spotify-trackTitle__slidein max-h-full flex w-max bg-blue-200
                lg:inline">
                  <p
                    className="track-title m-0 white-space-nowrap text-sm text-white bg-green-100
                    lg:w-full lg:text-base">
                    {/* The Music */}
                    Can You Hear The Music
                  </p>

                  <span
                    className="tracks-infos-separator pi pi-circle-fill align-self-center mt-1 mx-1 text-white 
                lg:hidden"
                  />
                  <p
                    className="track-artists text-xs m-0  white-space-nowrap bg-indigo-200 text-gray-200
                  lg:text-sm">
                    {/* Ludwig  */}
                    Ludwig Göransson
                  </p>
                </div>

                {/** Favorite button managment */}
                {windowWidth >= 992 && (
                  <Button
                    onClick={() => dispatch(toggleTrackLiked())}
                    className="button-trackLiked m-auto w-min h-min p-2 bg-blue-500
                    hover:text-0 "
                    rounded
                    text
                    icon={!trackLiked ? 'pi pi-heart' : 'pi pi-heart-fill'}
                    severity={!trackLiked ? 'secondary' : 'success'}
                    aria-label="Favorite"
                  />
                )}
              </div>

              <div
                className="listening-device-source-container w-full border border-round-sm
              lg:absolute lg:left-0 ">
                <p
                  className="listening-device-source m-0 w-max
                lg:mr-8">
                  <span
                    className="text-xs p-0 mr-1 pi pi-info-circle
                lg:text-base"
                  />
                  {windowWidth > 992 ? '  Écoute en cours sur ELIOS' : '  Elios'}
                </p>
              </div>
            </div>
          </div>

          <div className="buttons-player-container p-1 flex align-items-center bg-blue-500">
            <button
              className="button-player outline-none border-none border-round-2xl h-2rem w-2rem p-0"
              onClick={() => dispatch(toggleTrackOnPause())}>
              <i className={`pi ${trackOnPause ? 'pi-play' : 'pi-pause'} `}></i>
            </button>
            {/** Forward and Backward buttons managment*/}
            {windowWidth >= 992 && (
              <>
                <button
                  className="button-previous-track outline-none border-none border-round-2xl h-2rem w-2rem p-0 bg-transparent flex-order-0   "
                  onClick={() => dispatch(toggleTrackOnPause())}>
                  <i className={`pi pi-step-backward-alt mx-auto mt-1`}></i>
                </button>

                <button
                  className="button-next-track outline-none border-none border-round-2xl h-2rem w-2rem p-0 bg-transparent flex-order-2   "
                  onClick={() => dispatch(toggleTrackOnPause())}>
                  <i className={`pi pi-step-forward-alt mx-auto mt-1`}></i>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TrackPlayer;
