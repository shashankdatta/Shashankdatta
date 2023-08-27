import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import { IconButton } from "@mui/material";

export default function ExternalLinks(props) {
  return (
    <span>
      {props.githubLink && (
        <IconButton
          target="_blank"
          href={props.githubLink}
          aria-label="github-icon"
          size="small"
          color="primary"
        >
          <GitHubIcon color="title" fontSize="small" />
        </IconButton>
      )}

      {props.openLink && (
        <IconButton
          target="_blank"
          href={props.openLink}
          aria-label="open-icon"
          size="small"
          color="primary"
        >
          <OpenInBrowserIcon color="title" fontSize="medium" />
        </IconButton>
      )}
    </span>
  );
}
