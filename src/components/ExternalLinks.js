import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

export default function ExternalLinks(props) {
  return (
    <span className="external-links">
      <a className="github-icon" href={props.githubLink}>
        <GitHubIcon
          style={{
            fontSize: 20,
            color: "var(--lightest-slate)"
          }}
        />
      </a>
      {props.openLink && (
        <a className="open-icon" href={props.openLink}>
          <OpenInBrowserIcon
            style={{
              fontSize: 25,
              color: "var(--lightest-slate)"
            }}
          />
        </a>
      )}
    </span>
  );
}
