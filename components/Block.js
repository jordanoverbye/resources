/** @jsx jsx */
import { jsx } from "theme-ui";

const Block = props => (
  <article>
    <a
      href={`/block/${props.slug}`}
      sx={{
        display: "block",
        padding: 2,
        bg: "white"
      }}
    >
      <div
        sx={{
          position: "relative",
          pb: "62.5%",
          bg: "black",
          overflow: "hidden"
        }}
      >
        <img
          sx={{
            maxWidth: "100%",
            height: "auto",
            position: "absolute",
            top: 0,
            right: 0
          }}
          src={`/static/screenshots/${props.imageFilePath}`}
          alt={`Screenshot of ${props.name} website`}
        />
      </div>
    </a>
    <div sx={{ pt: 3 }}>
      <span sx={{ display: "block", fontSize: 12, mb: 2 }}>9 hours ago</span>
      <a
        href={`/block/${props.slug}`}
        sx={{
          fontSize: 3,
          lineHeight: 1,
          color: "inherit",
          textDecoration: "none"
        }}
      >
        {props.name}
      </a>
    </div>
  </article>
);

export default Block;
