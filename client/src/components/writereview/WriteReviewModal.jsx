import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import faker from 'faker';

export default class WriteReviewModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: faker.image.imageUrl(),
      rating: "",
      title: "",
      review: "",
      recommendation: false,
      nickname: "",
      email: "",
      age: "",
      bodyType: "",
      location: "",
      wearTo: "",
      likes: "",
      dislikes: "",
      agreementCheck: false
    };

    this.hoverRatingEventHandler = this.hoverRatingEventHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onChangeAgreement = this.onChangeAgreement.bind(this);
    this.postReview = this.postReview.bind(this);
    this.recommendChange = this.recommendChange.bind(this);
  }



  hoverRatingEventHandler(rating){

    this.setState({
      rating: rating
    },()=>console.log(this.state.rating))
  }

  onChangeHandler(e){
    e.preventDefault()

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onChangeAgreement(){
    this.setState({
      agreementCheck: !this.state.agreementCheck
    })
  }

  postReview(e, id){

    console.log('Posting...');
    e.preventDefault()
    let obj = {
      rev_Id: this.props.rev_Id,
      rating: this.state.rating,
      title: this.state.title,
      review: this.state.review,
      recommendation: this.state.recommendation,
      nickname: this.state.nickname,
      email: this.state.email,
      age: this.state.age,
      bodyType: this.state.bodyType,
      location: this.state.location,
      wearTo: this.state.wearTo,
      likes: this.state.likes,
      dislikes: this.state.dislikes
    }
    axios.post(`reviews/${this.props.rev_Id}`, obj)
    .then(() => {
      console.log('posted Review')
    })
    .then(() => {
      this.setState({
        rating: "",
        title: "",
        review: "",
        recommendation: "",
        nickname: "",
        email: "",
        age: "",
        bodyType: "",
        location: "",
        wearTo: "",
        likes: "",
        dislikes: "",
        agreementCheck: false
      })
    })
    .catch(err => {
      console.log('error posting', err)
    })
  }



  recommendChange(e){
    console.log('Clicked');
    e.preventDefault();
    this.setState({
      recommendation: !this.state.recommendation
    },()=>console.log(this.state.recommendation))
  }


  render() {
    return (
      <div
        className={
          this.props.writeReviewToggle ? 'write-review-modal display-block' : 'modal display-none'
        }
      >
        <div className="write-review-modal-container">
          <span
            className="review-modal-close"
            onClick={() => this.props.writeReviewToggleHandler()}
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </span>
          <div className="write-review-modal-content">
            <div className="write-review-image-container">
              <img className="write-review-image" src={this.state.img} />
              <div className="write-review-product-title">
                <span>Shirt</span>
              </div>
            </div>
            <div className="write-review-form-container">
              <div className="write-review-modal-title">
                <h1>
                  <span className="write-review-title">
                    My Review for {" "}
                    Shirt
                  </span>
                </h1>
              </div>
              <div className="write-review-form">

                <form >
                  <p className="write-review-required-fields-text">Required fields are marked with *</p>
                  <hr className="write-review-hr" />
                  <span className="overall-rating-title"> Overall Rating* </span>
                  <div className="overall-rating-container">
                    <span className="overall-rating-star-container">
                      <span onClick={() => this.hoverRatingEventHandler(5)} name="ratingHover" value="excellent">&#9733;</span>
                      <span onClick={() => this.hoverRatingEventHandler(4)} name="ratingHover" value="good">&#9733;</span>
                      <span onClick={() => this.hoverRatingEventHandler(3)} name="ratingHover" value="average">&#9733;</span>
                      <span onClick={() => this.hoverRatingEventHandler(2)} name="ratingHover" value="fair">&#9733;</span>
                      <span onClick={() => this.hoverRatingEventHandler(1)} name="ratingHover" value="poor">&#9733;</span>
                    </span>
                    <span className="write-review-average-title" />
                  </div>
                  <hr className="write-review-hr" />
                  <div className="write-review-form-title">
                    <span> Review Title* </span>
                    <input onChange={this.onChangeHandler} value={this.state.title} name="title" className="write-review-title-input" placeholder="Example: Great Features!" />
                  </div>
                  <hr className="write-review-hr" />
                  <div className="write-review-body-container">
                    <span> Review* </span>
                    <textarea onChange={this.onChangeHandler} value={this.state.review} name="review" className="write-review-body" placeholder="Example: I bought this a month ago and am so happy that I did..." />
                  </div>
                  <hr className="write-review-hr" />
                  <div className="write-review-recommendation-container">
                    <span className="write-review-recommendation-title"> Would you recommend this product to a friend?  </span>
                    <span className="write-reivew-recommendation-button-container">
                      <button onClick={this.recommendChange} name="recommendation" className="write-reivew-recommendation-button1" value="true">Yes</button>
                      <button onClick={this.recommendChange} name="recommendation"  className="write-reivew-recommendation-button2" value="false">No</button>
                    </span>
                  </div>
                  <hr className="write-review-hr" />
                  <div className="write-review-nickname-container">
                    <span className="write-review-nickname-title"> Nickname* </span>
                    <input onChange={this.onChangeHandler} value={this.state.nickname} name="nickname" className="write-review-nickname-input" placeholder="Example: jackie27" />
                  </div>
                  <hr className="write-review-hr" />
                  <div className="write-review-email-container">
                    <span className="write-review-email-title"> Email* </span>
                    <input onChange={this.onChangeHandler} value={this.state.email} name="email" className="write-review-email-input" placeholder="Example: youremail@example.com" />
                  </div>
                  <hr className="write-review-hr" />
                  <div className="write-review-age-container">
                    <span className="write-review-age-title"> How old are you? </span>
                    <select onChange={this.onChangeHandler} name="age" value={this.state.age} className="write-review-age-input">
                      <option >Select</option>
                      <option value="noAge" >I keep my age on the d.l.</option>
                      <option value="under18" >under 18</option>
                      <option value="between1824"  >18-24</option>
                      <option value="between2534" >25-34</option>
                      <option value="between3544" >35-44</option>
                      <option value="between4554" >45-54</option>
                      <option value="between5565" >55-65</option>
                      <option value="over65" >over 65</option>
                    </select>
                  </div>
                  <hr className="write-review-hr" />
                  <div className="write-review-body-type-container">
                    <span className="write-review-body-type-title"> What's your body type?</span>
                    <select onChange={this.onChangeHandler} name="bodyType" value={this.state.bodyType} className="write-review-body-type-input">
                      <option>Select</option>
                      <option value="athletic">Athletic</option>
                      <option value="curvy">Curvy</option>
                      <option value="lean">Lean</option>
                      <option value="muscular">Muscular</option>
                      <option value="petite">Petite</option>
                      <option value="slim">Slim</option>
                      <option value="solid">Solid</option>
                    </select>
                  </div>
                  <hr className="write-review-hr" />
                  <div className="write-review-where-from-container">
                    <span className="write-review-where-from-title"> Where are you from? </span>
                    <input onChange={this.onChangeHandler} value={this.state.location} name="location" className="write-review-where-from-input" />
                  </div>
                  <hr className="write-review-hr" />
                  <div className="write-review-wear-to-container">
                    <span className="write-review-wear-to-title">I mainly wear my Lululemon gear to..</span>
                    <select onChange={this.onChangeHandler} value={this.state.wearTo} name="wearTo" className="write-review-wear-to-input">
                      <option>Select</option>
                      <option value="practiceYoga">Practice Yoga</option>
                      <option value="dance">Dance</option>
                      <option value="cycle">Cycle</option>
                      <option value="run">Run</option>
                      <option value="wearCasually">Wear Casually</option>
                    </select>
                  </div>
                  <hr className="write-review-hr" />
                  <div className="write-review-likes-container">
                    <span className="write-review-likes-title"> In a few words, what did you like?</span>
                    <input onChange={this.onChangeHandler} value={this.state.likes} name="likes" className="write-review-likes-input" />
                  </div>
                  <hr className="write-review-hr" />
                  <div className="write-review-dislikes-container">
                    <span className="write-review-dislikes-title"> In a few words, what didn't you like?</span>
                    <input onChange={this.onChangeHandler} value={this.state.dislikes} name="dislikes"  className="write-review-dislikes-input" />
                  </div>
                  <hr className="write-review-hr" />
                  <div className="write-review-terms-agree-container">
                    <input onChange={this.onChangeAgreement} value={this.state.agreementCheck} className="write-review-terms-agree-checkbox" type="checkbox" />
                    <span>
                      I agree to the
                      <a href="#"> terms & conditions</a>
                    </span>
                  </div>
                  <div className="write-review-form-footer-container">
                    <p className="write-review-promotion-agreement-text">You may receive emails regarding this submission. Any emails will include the ability to opt-out of future communications.</p>
                    <button onClick={(e) => this.postReview(e)} className="post-review-button">POST REVIEW</button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
