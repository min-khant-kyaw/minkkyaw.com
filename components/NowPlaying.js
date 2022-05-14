import { Flex } from "@chakra-ui/react";

const NowPlaying = ({ data }) => {
  const isPlaying = data.isPlaying;
  const currentlyPlaying = isPlaying ? "https://open.spotify.com/embed/track/" + data.trackId + "?utm_source=generator" : ""
  return isPlaying ? (
    <Flex borderRadius={"12px"}>
      <iframe
        id="currently-playing"
        src={currentlyPlaying}
        width="100%"
        height="380"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </Flex>
  ) : (
    <Flex>Min isn't listening to Spotify at this moment!</Flex>
  );
};

export default NowPlaying;
