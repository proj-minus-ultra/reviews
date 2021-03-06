import React, { Component } from 'react';
import axios from 'axios';
import MainSearchBar from './searchbar/MainSearchBar.jsx';
import MainSearchButton from './searchbutton/MainSearchButton.jsx';
import SearchModal from '../components/searchmodal/SearchModal.jsx';
import WriteReview from './writereview/WriteReview.jsx';
import FilterOption from './filteroption/FilterOption.jsx'
import ReviewHistogram from './reviewhistogram/ReviewHistogram.jsx';
import ReviewDisplay from './reviewdisplay/ReviewDisplay.jsx'
import WriteReviewModal from './writereview/WriteReviewModal.jsx'


 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewData: [],
      filteredReviewData: [],
      modalToggle: false,
      reviewSearch: '',
      singleReview: [],
      singleReviewToggle: false,
      filteredRatingData: [],
      reviewDisplayToggle: false,
      reviewLimit: 8,
      writeReviewToggle: false,
      randomId: 1,
      rev_Id: Math.floor(Math.random() * 9999999)
    };
    this.getReviews = this.getReviews.bind(this);
    this.modalHandler = this.modalHandler.bind(this);
    this.searchQueryChanger = this.searchQueryChanger.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
    this.singleReviewClickHandler = this.singleReviewClickHandler.bind(this);
    this.ratingFilterHandler = this.ratingFilterHandler.bind(this)
    this.reviewDisplayToggleHandlerTrue = this.reviewDisplayToggleHandlerTrue.bind(this)
    this.reviewDisplayToggleHandlerFalse = this.reviewDisplayToggleHandlerFalse.bind(this)
    this.onLoadMore = this.onLoadMore.bind(this)
    this.writeReviewToggleHandler = this.writeReviewToggleHandler.bind(this)
    this.onModalSearchClick = this.onModalSearchClick.bind(this)
  }

  componentDidMount() {
   this.getReviews();

  }

  getReviews(){
    //generates a random number between the first product review id (0) and the last 9999999
    //which makes sense since there are 10 million total products
    let rev_Id = Math.floor(Math.random() * 9999999);

    axios.get(`reviews/${this.state.rev_Id}`)
    .then((data) => {

      this.setState({
        reviewData: data.data
      },()=>{console.log('Got Reviews!:',this.state.reviewData);})
    })
    .catch((err)=>{
      console.error('Error Getting Reviews:',err);
    });
  }

  modalHandler() {
    this.setState({
      modalToggle: !this.state.modalToggle
    });
  }

  searchQueryChanger(e) {
    let { name, value } = e.target;
    this.setState(
      {
        [name]: value
      }
    );
  }

  onSearchClick() {
    this.getFilteredData(this.state.randomId);
    this.modalHandler();
  }

  onModalSearchClick(){
    this.getFilteredData(this.state.randomId);
  }

  singleReviewClickHandler(data) {
    this.setState({
      singleReview: data
    });
  }

  ratingFilterHandler(num) {
    let reviewFilteredData = []
    let { reviewData } = this.state
    for(let i = 0; i < reviewData.length; i++){
      for(let j = 0; j < reviewData[i].length; j++){
        if(reviewData[i][j].rating === num){
          reviewFilteredData.push(reviewData[i][j])
        }
      }
    }
    this.setState({
      filteredRatingData: reviewFilteredData
    })
  }

  reviewDisplayToggleHandlerTrue(){
    this.setState({
      reviewDisplayToggle: true
    })
  }
  reviewDisplayToggleHandlerFalse(){
    this.setState({
      reviewDisplayToggle: false
    })
  }

  onLoadMore(){
    this.setState({
      reviewLimit: this.state.reviewLimit + 8
    })
  }

  writeReviewToggleHandler(){
    this.setState({
      writeReviewToggle: !this.state.writeReviewToggle
    });
}


  render() {
    return (
      <div className="review-main-container">
        <hr className="search-line"></hr>
        <div className="main-search-bar-container">
          <MainSearchBar searchQueryChanger={this.searchQueryChanger} />
          <span>
            <MainSearchButton onSearchClick={this.onSearchClick} />
          </span>
        </div>
        <div className="main-search-modal-container">
          <SearchModal
            show={this.state.modalToggle}
            handleClose={this.modalHandler}
            filteredReviewData={this.state.filteredReviewData}
            searchQueryChanger={this.searchQueryChanger}
            getFilteredData={this.onModalSearchClick}
            singleReview={this.state.reviewData[0]}
            singleReviewClickHandler={this.singleReviewClickHandler}
          />
        </div>
        <hr className="search-line"></hr>
        <div className="main-write-review-container">
          <WriteReview writeReviewToggle={this.state.writeReviewToggle} writeReviewToggleHandler={this.writeReviewToggleHandler}/>
        </div>
        <div className="reviews-histogram-container">
          <ReviewHistogram ratingsData={this.state.reviewData} ratingFilterHandler={this.ratingFilterHandler} reviewDisplayToggleHandlerTrue={this.reviewDisplayToggleHandlerTrue}/>
        </div>
        <div className="main-filter-review-container">
          <FilterOption reviewData={this.state.reviewData} reviewLimit={this.state.reviewLimit}/>
        </div>
        <div className="review-display-container">
          <ReviewDisplay filteredRatingData={this.state.filteredRatingData} reviewData={this.state.reviewData} reviewDisplayToggle={this.state.reviewDisplayToggle} reviewDisplayToggleHandlerFalse={this.reviewDisplayToggleHandlerFalse} reviewLimit={this.state.reviewLimit} />
        </div>
        <div className="main-write-review-modal-container">
          <WriteReviewModal rev_Id={this.state.rev_Id}writeReviewToggleHandler={this.writeReviewToggleHandler} writeReviewToggle={this.state.writeReviewToggle} reviewData={this.state.reviewData}/>
        </div>
        <div className="review-display-load-more-container">
          <button className="review-load-more-button" onClick={this.onLoadMore}><span className="review-load-more-text">Load More</span></button>
        </div>
      </div>
    );
  }
}

export default App;