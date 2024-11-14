import GatsbyIconImage from "./FullLogoFadhli.png";

function Profile() {
    return (
      <img
        src={GatsbyIconImage}
        alt="Fadhli Nur Himawan"
      />
    );
  }
  
  export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }
  