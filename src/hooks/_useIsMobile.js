import { useMedia } from "react-use";

export function _useIsMobile() {
  return useMedia("(max-width: 767px)");
}
