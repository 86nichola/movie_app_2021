import React from "react";
import PropTypes from "prop-types";
import { waitForElementToBeRemoved } from "@testing-library/dom";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h3>I like {name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UkJvjlnjvsOlz2lNe-Cu-wHaHa%26pid%3DApi&f=1",
    rating: 4,
  },
  {
    id: 2,
    name: "ramen",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Eww8U428ye8TLI8H5cEB4AHaEg%26pid%3DApi&f=1",
    rating: 4.3,
  },
  {
    id: 3,
    name: "samgiopsal",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vhL7flr5LCRcKWCNr95t3wHaD4%26pid%3DApi&f=1",
    rating: 5,
  },
  {
    id: 4,
    name: "chukumi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.RsdzeDpYEGDjXBWEaE75RgHaFP%26pid%3DApi&f=1",
    rating: 3.7,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => {
        return (
          <Food
            key={dish.id}
            name={dish.name}
            picture={dish.image}
            rating={dish.rating}
          />
        );
      })}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
