// export { CardDetail } from './CardDetail.jsx';
// export { CarroselDetails } from './CarroselDetails.jsx';
// export { ImageDetail } from './ImageDetail.jsx';
// export { default as CardDetail } from './CardDetail';
// export { default as CardDetail } from './CardDetail';
// export { default as CardDetail } from './CardDetail';
// export { default as CardDetail } from './CardDetail';

// import React, { Component } from 'react';

// export class CardDetail extends Component {
//   // constructor(props){
//   //   super(props);
//   // }
//   render() {
//     const {
//       strOption,
//       favorite,
//       blackHeartIcon,
//       whiteHeartIcon,
//       shareIcon,
//       handleFavorite,
//     } = this.props;
//     return (
//       <div className="card-details">
//         <h3 data-testid="recipe-title">{strOption}</h3>
//         <p data-testid="recipe-category">Categoria Drink or Food</p>
//         <div className="icon">
//           <button onClick={() => handleFavorite()}>
//             <img
//               data-testid="favorite-btn"
//               src={favorite ? blackHeartIcon : whiteHeartIcon}
//               alt="whiteHeart"
//             />
//           </button>
//         </div>
//         <div className="icon">
//           <button>
//             <img data-testid="share-btn" src={shareIcon} alt="share" />
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export class CarrouselDetails extends Component {
//   // constructor(props){
//   //   super(props);
//   // }
//   render() {
//     return (
//       <div className="recomendations-details">
//         <h4>Recomendadas</h4>
//         <div data-testid="0-recomendation-card">
//           Aqui estarão os 6 cards
//           {this.props.recomendations}
//         </div>
//       </div>
//     );
//   }
// }

// export class ImageDetail extends Component {
//   // constructor(props){
//   //   super(props);
//   // }
//   render() {
//     const { strOption, thumb } = this.props;
//     return (
//       <div className="image-details">
//         <img alt={strOption} src={thumb} data-testid="recipe-photo" />
//       </div>
//     );
//   }
// }

// export class IngredientDetail extends Component {
//   // constructor(props){
//   //   super(props);
//   // }
//   render() {
//     const { ingredient, measure } = this.props;
//     return (
//       <div className="ingredients-details">
//         <h4>Ingredients</h4>
//         <div data-testid="0-ingredient-name-and-measure">
//           {ingredient.map((item, i) => (
//             <p>
//               {item} : {measure[i]}
//             </p>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export class InstructionsDetail extends Component {
//   // constructor(props){
//   //   super(props);
//   // }
//   render() {
//     return (
//       <div className="instructions-details">
//         <h4>Instructions</h4>
//         <p data-testid="instructions">{this.props.instructions}</p>
//       </div>
//     );
//   }
// }

// export class VideoDetail extends Component {
//   // constructor(props){
//   //   super(props);
//   // }
//   render() {
//     return (
//       <div className="video-details">
//         <video width="320" height="240" controls>
//           <source src={this.props.youtube} type="video/mp4" data-testid="video" />
//         </video>
//       </div>
//     );
//   }
// }
