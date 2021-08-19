import bom from '../../assets/video.mp4';

export function Uepa() {
  return (
    <>
      <video autoPlay muted controls src={bom} id="video" />
    </>
  );
}
