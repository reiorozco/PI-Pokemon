import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../../redux/actions";

import "./LandingPage.css";

export default function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());

    return () => {
      // cleanup;
    };
  }, [dispatch]);

  return (
    <div className="bg">
      <div className="ubuntu container-landing">
        <div>
          <h1 className="h1-landing">
            Pokemon <span className="text-wiki">WiKi</span>
          </h1>
        </div>
        <div>
          <p className="text-landing">
            &#128075; Hi! click{" "}
            <Link to="/pokemons" className="plain-link">
              here
            </Link>
            . Welcome to the <b>Pokemon World</b>.
          </p>
        </div>
      </div>
    </div>
  );
}
