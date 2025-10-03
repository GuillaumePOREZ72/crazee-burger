import { Link, useParams } from "react-router";

export default function OrderPage() {
  // state
  const { username } = useParams();

  // comportements

  // affichage
  return (
    <div>
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}
