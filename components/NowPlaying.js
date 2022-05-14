import { Flex, Text } from "@chakra-ui/react";

const NowPlaying = ({ playing, lastPlayed }) => {
  const isPlaying = playing.isPlaying;
  const currentlyPlaying = isPlaying
    ? "https://open.spotify.com/embed/track/" +
      playing.trackId +
      "?utm_source=generator"
    : "https://open.spotify.com/embed/track/" +
      lastPlayed.trackId +
      "?utm_source=generator";
  return isPlaying ? (
    <Flex flexDir={"column"}>
      <Text pb={"0.75em"} color={"gray !important"}>
        Min's currently listening to:
      </Text>
      <iframe
        id="currently-playing"
        src={currentlyPlaying}
        width="100%"
        height="380"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media;"
      ></iframe>
    </Flex>
  ) : (
    <Flex flexDir={"column"}>
      <Text pb={"0.75em"} color={"gray !important"}>
        Min isn't listening to Spotify at this moment! But this was his last
        played song, check it out :
      </Text>
      <iframe
        id="currently-playing"
        src={currentlyPlaying}
        width="100%"
        height="380"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media;"
      ></iframe>
    </Flex>
  );
};

export default NowPlaying;
