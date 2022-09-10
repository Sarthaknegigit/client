import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Code and Community</span>
        <span className="headerTitleLg">Decypher</span>
      </div>
      <img
        src="https://images8.alphacoders.com/617/617304.jpg"
        alt="headerImg"
        className="headerImg"
      />
    </div>
  );
}
