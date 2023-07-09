import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import { IconButton } from "@mui/material";

export default function ExternalLinks(props) {
  return (
    <span>
      <IconButton
        target="_blank"
        href={props.githubLink}
        aria-label="github-icon"
        size="small"
        color="greenBright"
      >
        <GitHubIcon color="lightestSlate" fontSize="small" />
      </IconButton>

      {props.openLink && (
        <IconButton
          target="_blank"
          href={props.openLink}
          aria-label="open-icon"
          size="small"
          color="greenBright"
        >
          <OpenInBrowserIcon color="lightestSlate" fontSize="medium" />
        </IconButton>
      )}
    </span>
  );
}
