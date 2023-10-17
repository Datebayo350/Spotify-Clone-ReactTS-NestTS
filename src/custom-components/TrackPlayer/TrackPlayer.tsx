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
import './trackPlayer.css';
import { Button } from 'primereact/button';

const TrackPlayer = () => {
  const trackPlayerContainerDisplayed = useSelector(selectTrackPlayerContainerDisplayed);
  const trackOnPause = useSelector(selectTrackOnPause);
  const trackLiked = useSelector(selectTrackLiked);
  const dispatch = useDispatch();
  const { windowWidth } = useWindowSizes();
  const imageUrl = 'https://i.scdn.co/image/ab67616d00004851a883e26f90ab617c91b90e56';
  const { data: trackDominantColors } = usePalette(imageUrl);

  console.log('trackPlayerContainerDisplayed :>> ', trackPlayerContainerDisplayed);
  return (
    <>
      {/* Music player layout */}
      {trackPlayerContainerDisplayed && (
        <div
          style={{ backgroundColor: `${trackDominantColors.vibrant}` }}
          className="track-player-container border-round-lg w-full p-1 flex justify-content-evenly
          lg:border-noround">
          <div className="track-infos-container p-1 flex align-items-center">
            <img
              className="w-3rem h-3rem mx-1 border-round-lg"
              // src="https://i.scdn.co/image/ab67616d00001e02ac29a65e7ffcfa6f9cb0d342"
              // src="https://i.scdn.co/image/ab67616d00004851bfc21a1a5b924ecfb2f0c3c8"
              src="https://i.scdn.co/image/ab67616d00004851a883e26f90ab617c91b90e56"
              alt="pochette de l'album"
            />
            <div className="track-infos ml-1 w-full bg-yellow-500">
              <div className="track-infosBIS max-w-max flex align-items-center bg-pink-300 ">
                <div className="trackTitleContainer bg-blue-200">
                  <p className="track-title m-0 w-full">Time</p>

                  <span
                    className="tracks-infos-separator align-self-center mt-1 mx-1 pi pi-circle-fill
                lg:hidden"
                  />
                  <p className="track-artists text-sm m-0 w-full">Hans Zimmer</p>
                </div>
                
                {/** Favorite button managment */}
                {windowWidth >= 994 && (
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
