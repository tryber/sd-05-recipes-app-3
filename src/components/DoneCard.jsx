import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import '../css/favorite.css';
import ShareButton from '../components/details/ShareButton.jsx';

const Hs = (d, n) => <h4 data-testid={d}>{n}</h4>;

function DoneCard(props) {
  const { id, index, type, area, category, name, image, alcoholic, date, tags, url } = props;
  // const literal = `/${type}s/${id}`;
  return (
    <div id={name} className="">
      <Link to={`${type}s/${id}`}>
        <div className="">
          <img data-testid={`${index}-horizontal-image`} src={image} alt={name} />
        </div>
      </Link>
      <div className="">
        <div className="">
          {type === 'comida' ? (
            <div>
              <p data-testid={`${index}-horizontal-top-text`}>{`${area} - ${category}`}</p>
              {tags && (
                <div>
                  <p data-testid={`${index}-${tags[0]}-horizontal-tag`}>{tags[0]}</p>
                  <p data-testid={`${index}-${tags[1]}-horizontal-tag`}>{tags[1]}</p>
                </div>
              )}
            </div>
          ) : (
            <p data-testid={`${index}-horizontal-top-text`}>{alcoholic}</p>
            )}
          <Link to={`/${type}s/${id}`}>
            {/* <H h={'h3'} d={`${index}-horizontal-name`} n={name} /> */}
            <h3 data-testid={`${index}-horizontal-name`}>{name}</h3>
          </Link>
          {/* <Hs d={`${index}-horizontal-done-date`} n={date} /> */}
          <h4 data-testid={`${index}-horizontal-done-date`}>{date}</h4>
        </div>
        <div className="">
          <ShareButton literals={`${index}-horizontal-share-btn`} alt={name} url={url} id={id} />
          {/* <p data-testid={`${index}-${tags}-horizontal-tag`}>{tags}</p> */}
        </div>
      </div>
    </div>
  );
}

export default DoneCard;

DoneCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  alcoholic: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  date: PropTypes.oneOfType(Date).isRequired,
  tags: PropTypes.arrayOf(String).isRequired,
  url: PropTypes.objectOf(String).isRequired,
};

